import { Button, Switch } from 'antd';
import axios from 'axios';
import React from 'react';
import {
  ActionBtn,
  FormInput,
  FormTextArea,
  SFormBox,
  SRow,
} from 'suid-supplement';

const getDirctData = async (code, count, filters) => {
  const { data } = await axios.get(`/api/dict`, {
    params: {
      dictCode: code,
      count,
      filters,
    },
  });

  return data.data.map((item) => ({
    value: item.dataValue,
    label: item.dataName,
  }));
};

export default () => {
  const [checked, setChecked] = React.useState(false);
  const formRef = React.useRef();

  return (
    <>
      <Switch
        checked={checked}
        onChange={() => setChecked((check) => !check)}
      />
      <Button onClick={() => console.log(formRef)}>获取Ref</Button>
      <hr />
      <div className="flex justify-center">
        <SFormBox
          style={{
            width: '500px',
          }}
          justShow={checked}
          formButtons={!checked}
          onFinish={(values) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                console.log(values);
                resolve();
              }, 2000);
            });
          }}
          ref={formRef}
        >
          <FormTextArea
            label="描述"
            span={24}
            flexSpan
            name="des"
            initialValue="这是描述"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          />
          <FormInput
            label="用户"
            name="user-formbox"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
            initialValue="李四"
          />

          <FormInput
            label="年龄"
            name="ages"
            rules={[
              {
                required: true,
                message: '请输入年龄',
              },
            ]}
            initialValue={18}
          />

          <SRow type="flex" justify="center">
            <SRow.SCol className="mb-2 flex justify-center" span={8}>
              <SFormBox.Consumer>
                {({ form, loading }) => (
                  <Button
                    type="primary"
                    onClick={() => form.finish()}
                    loading={loading}
                  >
                    内部按钮
                  </Button>
                )}
              </SFormBox.Consumer>
            </SRow.SCol>
          </SRow>
        </SFormBox>
      </div>

      <ActionBtn onClick={() => formRef?.current?.finish?.()}>
        自定义提交2
      </ActionBtn>
    </>
  );
};
