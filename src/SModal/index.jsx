import { Modal } from 'antd';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom';

const SModal = ({ children, okButtonProps, onOk, ...props }) => {
  const [loadingProxy, setLoadingProxy] = useState(false);

  const onOkProxy = (...params) => {
    const p = onOk(...params);
    if (p && p.then) {
      setLoadingProxy(true);
      p.finally(() => {
        setLoadingProxy(false);
      });
    }
  };

  const okButtonPropsProxy = {
    loading: loadingProxy,
    ...(okButtonProps || {}),
  };

  return (
    <Modal onOk={onOkProxy} okButtonProps={okButtonPropsProxy} {...props}>
      {children}
    </Modal>
  );
};

const createWrapperApp = (Component, { autoClear = true } = {}) => {
  const App = forwardRef(({ _clear: clear, ...props }, ref) => {
    const timer = useRef();
    const [visible, setVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      visible,
      setVisible,
    }));

    useEffect(() => {
      if (!autoClear) return;
      // 关闭窗口后，自动清理
      if (timer.current) clearTimeout(timer.current);
      if (!visible && clear) {
        timer.current = setTimeout(clear, 1000);
      }
    }, [visible, clear]);

    return <Component {...props} visible={visible} setVisible={setVisible} />;
  });

  return App;
};

export const createModalMount = (Component) => {
  const App = createWrapperApp(Component);

  const mount = async ({ ...props }) => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const clear = () => {
      ReactDOM.unmountComponentAtNode(container);
      document.body.removeChild(container);
    };

    const p = new Promise((resolve, reject) => {
      try {
        ReactDOM.render(
          <App {...props} _clear={clear} ref={(r) => resolve(r)} />,
          container,
        );
      } catch (err) {
        reject(err);
      }
    });

    return p;
  };

  const show = async (props = {}) => {
    const modelRef = await mount(props);
    modelRef.setVisible(true);
    return modelRef;
  };

  return { show };
};

export const useModalMount = (Component, { renderSave = true } = {}) => {
  const modelRef = useRef();
  const App = useMemo(
    () => createWrapperApp(Component, { autoClear: !renderSave }),
    [Component, renderSave],
  );

  const mount = useCallback(async (props = {}) => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const clear = () => {
      ReactDOM.unmountComponentAtNode(container);
      document.body.removeChild(container);
      modelRef.current = undefined;
    };

    const p = new Promise((resolve) => {
      ReactDOM.render(
        <App {...props} _clear={clear} ref={(r) => resolve(r)} />,
        container,
      );
    });

    return p;
  }, []);

  const show = useCallback(
    async (props = {}) => {
      if (renderSave) {
        if (!modelRef.current) {
          modelRef.current = await mount(props);
        }
      } else {
        modelRef.current = await mount(props);
      }

      modelRef.current.setVisible(true);

      return modelRef.current;
    },
    [mount, renderSave],
  );

  return [show, modelRef];
};

export const useModalMountGetComponent = (Component) => {
  const modelRef = useRef();
  const App = useMemo(
    () => createWrapperApp(Component, { autoClear: false }),
    [Component],
  );

  const MountPortal = useCallback(({ ...props }) => {
    return <App {...props} ref={modelRef} />;
  });

  const showPortal = useCallback(() => {
    if (modelRef.current && modelRef.current.setVisible)
      modelRef.current.setVisible(true);
  }, []);

  return [showPortal, modelRef, MountPortal];
};

export default SModal;
