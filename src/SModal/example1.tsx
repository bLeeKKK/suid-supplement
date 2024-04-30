import { Button } from 'antd';
import React from 'react';
import {
  ColFormInput,
  ColFormSelect,
  SFormBox,
  SModal,
  SRow,
  createModalMount,
  useModalMount,
} from 'suid-supplement';
// import ReactDOM from 'react-dom';

const FormModal = ({ visible, setVisible, afterClose, ...props }: any) => {
  console.log(visible);
  return (
    <SFormBox
      onFinish={() => {
        const p = new Promise((r) => {
          setTimeout(r, 2000);
        });
        return p;
      }}
    >
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
        <SRow basicSpan={12}>
          <ColFormInput
            label="名"
            name="firstName"
            rules={[
              {
                required: true,
                message: '请输入名',
              },
            ]}
          />
          <ColFormInput
            label="姓"
            name="lastName"
            rules={[
              {
                required: true,
                message: '请输入姓',
              },
            ]}
          />
          <div className="title-box">基本信息</div>
          <ColFormInput
            label="电话1"
            name="phone"
            rules={[
              {
                required: true,
                message: '请输入电话',
              },
            ]}
          />
          <ColFormInput label="电话2" name="phoneBak" />
          <ColFormSelect label="用户类型" name="typeCode" allowClear />
          {/* <ColFormEditFile /> */}
          <ColFormInput span={0} name="typeName" />
          <ColFormInput label="用户邮箱" name="mail" />
          <ColFormInput label="办公电话" name="companyPhone" />
          <ColFormInput label="公司名称" name="companyName" />
          <ColFormInput label="公司邮箱" name="companyMail" />
          <ColFormInput label="公司地址" name="companyAddress" />
          <div className="title-box">地址</div>
          <ColFormInput label="详细地址" name="address" />
          {/* <ColFormAddress */}
          {/*   label="地址级别" */}
          {/*   name="addressLevel" */}
          {/*   onChange={(_, values, f) => { */}
          {/*     f.setFieldsValue({ */}
          {/*       addressLevelName: values.map((item) => item.name), */}
          {/*     }); */}
          {/*   }} */}
          {/* /> */}
          <ColFormInput label="地址级别名称" name="addressLevelName" />
          {/* <ColFormEditFile */}
          {/*   flexSpan */}
          {/*   span={24} */}
          {/*   label="antd文件上传" */}
          {/*   name="upload" */}
          {/* /> */}
          {/* <ColFormAntdUpload */}
          {/*   flexSpan */}
          {/*   span={24} */}
          {/*   label="文件上传" */}
          {/*   name="upload" */}
          {/* /> */}
        </SRow>
      </SModal>
    </SFormBox>
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
  const [show2, ref2, MyModal] = useModalMount(FormModal, {
    // 开启manualOperation后renderSave将失效，因为你可以自己处理模态框放到哪里了。
    manualOperation: true,
  });

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

      <Button
        onClick={async () => {
          const aaa = await show();
          console.log(aaa);
        }}
        className="mr-2"
      >
        命令弹框(传入Modal组件)
      </Button>
    </div>
  );
};
