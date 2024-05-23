import { useControllableValue } from 'ahooks';
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

export const useControlVisible = (props = {}) => {
  const [visible, setVisible] = useControllableValue(props, {
    defaultValue: false,
    defaultValuePropName: 'defaultVisible',
    valuePropName: 'visible',
    trigger: 'setVisible',
  });

  return [visible, setVisible];
};

const withModalApp = (Component, { autoClear = true } = {}) => {
  const App = forwardRef(({ _clear: clear, ...props }, ref) => {
    const timer = useRef();
    const [visible, setVisible] = useControlVisible(props);

    useImperativeHandle(ref, () => ({
      clear,
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

    return (
      <Component
        {...props}
        visible={visible}
        setVisible={setVisible}
        clear={clear}
      />
    );
  });

  return App;
};

export const createModalMount = (Component) => {
  const App = withModalApp(Component);

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
    const model = await mount(props);
    model.setVisible(true);
    return model;
  };

  return { show };
};

export const useModalMount = (Component, { renderSave = true } = {}) => {
  const modelRef = useRef();
  const App = useMemo(
    () => withModalApp(Component, { autoClear: !renderSave }),
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

export const withModalControls = (Component) => {
  return ({ triggerRender, ...props }) => {
    const [visible, setVisible] = useControlVisible(props);

    return (
      <>
        {typeof triggerRender === 'function' &&
          triggerRender({ visible, setVisible }, props)}
        <Component {...props} visible={visible} setVisible={setVisible} />
      </>
    );
  };
};

/**
 * @description 废弃，可以直接使用组件放到页面中
 */
export const useModalMountGetComponent = (Component, props = {}) => {
  const [visible, setVisible] = useControlVisible(props);
  const modalCounter = (
    <Component visible={visible} setVisible={setVisible} {...props} />
  );

  return {
    modalCounter,
    show: () => setVisible(true),
    close: () => setVisible(false),
    visible,
    setVisible,
  };
};

export default SModal;
