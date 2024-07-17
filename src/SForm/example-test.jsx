import { useUpdate } from 'ahooks';
import { Button, Switch } from 'antd';
import React from 'react';
import {
  ActionBtn,
  FormBoxDependency,
  FormInput,
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
  const update = useUpdate();
  const formRef = React.useRef();

  return (
    <>
      <FormInput name="xxx" label="xxx" />
      <Button onClick={update}>重新渲染父组件</Button>
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
          <FormBoxDependency nameList={['age3']}>
            {({ age3 }) => {
              return age3 ? (
                <FormTextArea
                  label="描述"
                  name="des"
                  initialValue="这是描述"
                  errInline
                  rules={[
                    {
                      required: true,
                      message: '请输入用户名',
                    },
                  ]}
                />
              ) : null;
            }}
          </FormBoxDependency>

          <FormBoxDependency nameList={['userFormbox']}>
            {({ userFormbox }) => {
              return userFormbox ? (
                <>
                  <FormInput initialValue={1} label="年龄3" name="age3" />
                </>
              ) : null;
            }}
          </FormBoxDependency>

          <FormInput
            label="用户"
            name="userFormbox"
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

          {/* <FormRangePicker */}
          {/*   label="日期" */}
          {/*   name="range" */}
          {/*   convertInitValue={(_) => { */}
          {/*     return [moment('2000-1-1'), moment('2000-1-2')]; */}
          {/*   }} */}
          {/*   transform={(value) => { */}
          {/*     return { */}
          {/*       startTime: value?.[0]?.format('YYYY-MM-DD HH:mm:ss'), */}
          {/*       endTime: value?.[1]?.format('YYYY-MM-DD HH:mm:ss'), */}
          {/*     }; */}
          {/*   }} */}
          {/* /> */}

          <SRow type="flex" justify="center">
            <SRow.SCol className="mb-2 flex justify-center" span={8}>
              <SFormBox.Consumer>
                {({ form, loading }) => [
                  <Button
                    key="reset"
                    className="mr-2"
                    onClick={() => {
                      form.resetFields();
                    }}
                    loading={loading}
                  >
                    重置
                  </Button>,
                  <Button
                    key="submit"
                    type="primary"
                    onClick={() => {
                      form.finish();
                    }}
                    loading={loading}
                  >
                    内部按钮
                  </Button>,
                ]}
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
