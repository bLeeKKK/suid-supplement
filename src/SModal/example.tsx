import { Button } from 'antd';
import React, { useRef } from 'react';
import {
  BtnsBox,
  ColFormInput,
  ColFormInputNumber,
  SFormBox,
  SModal,
  SRow,
} from 'suid-supplement';

export default () => {
  const formRef = useRef<any>();
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(true)}>Open Modal</Button>
      <SFormBox
        ref={formRef}
        onFinish={() => {
          const p = new Promise((r) => {
            setTimeout(r, 2000);
          });
          return p;
        }}
      >
        <SFormBox.Consumer>
          {({ loading }: any) => (
            <SModal
              visible={visible}
              title="表单"
              onCancel={() => setVisible(false)}
              footer={
                <BtnsBox
                  limt="3"
                  btnArr={[
                    {
                      title: '重置',
                      // tip: '点击后重置表单',
                      disabled: loading,
                      onClick: () => {
                        return formRef.current?.resetFields();
                      },
                    },
                    {
                      title: '保存',
                      // tip: '点击后保存数据',
                      type: 'primary',
                      // icon: 'file-search',
                      onClick: () => {
                        return formRef.current?.finish();
                      },
                    },
                  ]}
                />
              }
            >
              <SRow basicSpan={12}>
                <ColFormInput
                  label="用户名"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: '请输入用户名',
                    },
                  ]}
                  initialValue="李四"
                />
                <ColFormInputNumber label="年龄" name="age" />
              </SRow>
            </SModal>
          )}
        </SFormBox.Consumer>
      </SFormBox>
    </div>
  );
};
