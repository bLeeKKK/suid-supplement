import { Modal } from 'antd';
import React, { useState } from 'react';

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

export default SModal;
