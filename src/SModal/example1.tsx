import { Button } from 'antd';
import React, { useState } from 'react';
import {
  ColFormInput,
  SForm,
  SModal,
  createModalMount,
  useModalMount,
  useModalMountGetComponent,
} from 'suid-supplement';
// import ReactDOM from 'react-dom';

const FormModal = ({
  visible,
  data,
  setData,
  setVisible,
  afterClose,
  ...props
}: any) => {
  return (
    <SModal
      visible={visible}
      onCancel={() => setVisible(false)}
      // 关闭后的回调，请调用销毁没用的弹窗
      afterClose={afterClose}
      title="表单"
      onOk={() => {
        const p = new Promise((r) => {
          setTimeout(r, 2000);
        });
        return p;
      }}
      {...props}
    >
      <Button onClick={() => setData && setData({ name: 888 })}>
        切换状态
      </Button>
      {JSON.stringify(data ? data : {})}
      <SForm initialValues={data}>
        <ColFormInput name="name" />
      </SForm>
    </SModal>
  );
};

const { show } = createModalMount(FormModal);

export default () => {
  const [show1, ref] = useModalMount(FormModal, {
    renderSave: true,
  });
  const [data, setData] = useState({
    name: 999,
  });

  // 废弃，尽量不要使用。可以直接定义组件使用
  const [app, { show: show2 }] = useModalMountGetComponent(FormModal, {
    data,
    setData,
  });

  return (
    <div>
      <Button onClick={() => console.log(ref)} className="mr-2">
        查看控制台
      </Button>

      <Button onClick={() => show1({ setData, data })} className="mr-2">
        命令弹框(hook)
      </Button>

      <Button onClick={show} className="mr-2">
        命令弹框(传入Modal组件)
      </Button>

      {app}
      <Button onClick={show2} className="mr-2">
        命令弹框hook-手动挂载-享受React上下文 (注：不推荐使用)
      </Button>
    </div>
  );
};
