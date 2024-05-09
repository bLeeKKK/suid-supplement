import { Button, Input } from 'antd';
import React from 'react';
import {
  SModal,
  createModalMount,
  useModalMount,
  useModalMountGetComponent,
} from 'suid-supplement';
// import ReactDOM from 'react-dom';

const FormModal = ({ visible, setVisible, afterClose, ...props }: any) => {
  console.log(visible);
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
      <Input />
    </SModal>
  );
};

// const Content = () => {
//   return <div>这是一个命令弹框2</div>;
// };

const { show } = createModalMount(FormModal);
// const { show: show1 } = createModalMount({
//   title: '命令弹框',
//   // 如果传入的不是组件，可以考虑使用Modal.confirm
//   Content: Content,
//   onOk: () => {
//     const p = new Promise((r) => {
//       setTimeout(r, 2000);
//     });
//     return p;
//   },
//   extendProps: console.log,
// });

export default () => {
  const [show1, ref] = useModalMount(FormModal, { renderSave: true });
  const [show2, ref2, MyModal] = useModalMountGetComponent(FormModal);

  return (
    <div>
      <Button onClick={() => console.log(ref, ref2)} className="mr-2">
        查看控制台
      </Button>

      <MyModal />
      <Button onClick={show2} className="mr-2">
        命令弹框(hook-手动挂载-享受React上下文)
      </Button>

      <Button onClick={show1} className="mr-2">
        命令弹框(hook)
      </Button>

      <Button onClick={show} className="mr-2">
        命令弹框(传入Modal组件)
      </Button>
    </div>
  );
};
