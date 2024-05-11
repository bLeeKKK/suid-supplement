import { Button, Switch } from 'antd';
import moment from 'moment';
import React from 'react';
import {
  ActionBtn,
  FormInput,
  FormRangePicker,
  FormTextArea,
  SFormBox,
  SRow,
} from 'suid-supplement';

// const getDirctData = async (code, count, filters) => {
//   const { data } = await axios.get(`/api/dict`, {
//     params: {
//       dictCode: code,
//       count,
//       filters,
//     },
//   });
//
//   return data.data.map((item) => ({
//     value: item.dataValue,
//     label: item.dataName,
//   }));
// };

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
            name="age"
            rules={[
              {
                required: true,
                message: '请输入年龄',
              },
            ]}
            initialValue={18}
            transform={(value) => {
              return `${value}岁`;
            }}
          />

          <FormRangePicker
            label="日期"
            name="range"
            convertInitValue={(_) => {
              return [moment('2000-1-1'), moment('2000-1-2')];
            }}
            transform={(value) => {
              return {
                startTime: value?.[0]?.format('YYYY-MM-DD HH:mm:ss'),
                endTime: value?.[1]?.format('YYYY-MM-DD HH:mm:ss'),
              };
            }}
          />

          <SRow type="flex" justify="center">
            <SRow.SCol className="mb-2 flex justify-center" span={8}>
              <SFormBox.Consumer>
                {({ form, loading }) => (
                  <Button
                    type="primary"
                    onClick={() => {
                      form.finish();
                    }}
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
