import { Button, Switch } from 'antd';
import axios from 'axios';
import React from 'react';
import {
  ActionBtn,
  ColFormCheckbox,
  ColFormCheckboxGroup,
  ColFormDatePicker,
  ColFormInput,
  ColFormInputNumber,
  ColFormMonthPicker,
  ColFormRadioGroup,
  ColFormRangePicker,
  ColFormSearch,
  ColFormSelect,
  ColFormSwitch,
  ColFormTextArea,
  ColFormTimePicker,
  ColFormWeekPicker,
  SCheckbox,
  SForm,
  SRadio,
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

// const getUserData = async ({ current, pageSize, filters }, count) => {
//   const { data } = await request(
//     '/api-gateway/ocmc-order/orderUser/findByPage',
//     {
//       method: 'POST',
//       data: {
//         pageInfo: { page: current, rows: pageSize },
//         quickSearchProperties: ['firstName'],
//         quickSearchValue: filters,
//         sortOrders: [],
//       },
//       params: { count },
//     },
//   );
//
//   return { list: data?.rows, total: data?.records };
// };

export default () => {
  const [addInput, setAddInput] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [checked, setChecked] = React.useState(false);
  const formRef = React.useRef();

  return (
    <>
      <Switch
        checked={checked}
        onChange={() => setChecked((check) => !check)}
      />
      <Button onClick={() => console.log(formRef)}>获取Ref</Button>
      <Button onClick={() => setAddInput((f) => !f)}>追加输入框</Button>
      <hr />
      <SForm
        justShow={checked}
        basicSpan={12}
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
        // initialValues={{
        //   description: 'zzz',
        //   userName1: 'xxx',
        //   checkbox: true,
        //   user: {
        //     userName: '张三',
        //     phone: '123',
        //   },
        // }}
      >
        {addInput && <ColFormInput label="追加Input" name="addInput" />}
        <ColFormTextArea
          label="描述"
          span={24}
          flexSpan
          name="description"
          initialValue="这是描述"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
        />
        <ColFormInput
          label="用户名1"
          name="userName1"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
          initialValue="李四"
        />

        {/* <Tooltip title="搜索项、搜索项、搜索项"> */}
        <ColFormSearch
          placeholder="搜索项、搜索项、搜索项"
          label="搜索"
          flexSpan
          span={24}
          name="searchVal"
          type="search"
          onSearch={console.log}
          shortcutKey
          filedOptions={{
            // 开启后将不再表单中出现，也不会做rules校验
            hidden: true,
          }}
        />
        {/* </Tooltip> */}
        <ColFormInput
          tip="这里是【用户名】的说明提示"
          filedTip="这里是【用户名】的说明提示 XXXXX X XXXXXXX"
          label="用户名"
          name="user.userName"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
          initialValue="李四"
        />
        <ColFormInput
          tip="这里是【用户名】的说明提示"
          filedTip={{
            title: '这里是【用户名】的说明提示2 ',
            placement: 'bottom',
          }}
          label="用户名"
          name="userName"
          initialValue="李四"
        />
        <ColFormInput
          label="电话"
          name="user.phone"
          initialValue="123"
          // show={(form) => form?.getFieldValue('userName') === '张三'}
          rules={[
            {
              required: true,
              message: '请输入电话',
            },
          ]}
        />
        <ColFormInput
          label="电话隐藏"
          name="phoneHide"
          hide
          // rules={[
          //   {
          //     required: true,
          //     message: '请输入电话隐藏',
          //   },
          // ]}
        />
        <ColFormInput
          label="地址选择"
          flexSpan
          name="address1"
          initialValue={['110000', '110101']}
        />
        <ColFormInput label="地址" name="address" />
        <ColFormInputNumber
          rules={[
            {
              required: true,
              message: '请输入金额',
            },
          ]}
          label="金额"
          name="money"
          type="number"
          initialValue={100}
        />
        <ColFormSelect
          label="用户类型1"
          name="typeCode1"
          store={() => getDirctData('ocmcUserType')}
          initialValue="personal_zh-CN"
          rules={[
            {
              required: true,
              message: '请输入用户类型',
            },
          ]}
          onChange={(...p) => {
            console.log(...p);
          }}
        />
        <ColFormSelect
          label="用户类型2"
          name="typeCode2"
          // mode="multiple"
          store={({ filters }) => getDirctData('ocmcUserType', count, filters)}
          storeOption={{
            refreshDeps: [count],
          }}
          initialValue={['personal_zh-CN']}
          noWrap
          searchForStore
        >
          {(arr, Option) =>
            [...arr, { label: '追加的数据', value: 'xxx' }].map((item) => (
              <Option key={item.value}>{item.label}</Option>
            ))
          }
        </ColFormSelect>
        <ColFormSelect
          span={16}
          flexSpan
          mode="multiple"
          label="用户"
          name="typeCode3"
          reader={{
            value: 'id',
            label: 'firstName',
          }}
          // 自定义获取数据
          searchForStore
          // store={(...params) => getUserData(...params, count)}
          paginated
          storeOption={{
            defaultPageSize: 5,
            refreshDeps: [count],
          }}
          renderCondition={(form) => form?.getFieldValue('userName') === '李四'}
        />
        <ColFormTimePicker label="时间选择" name="time" />
        <ColFormDatePicker label="日期选择" name="date" />
        <ColFormRangePicker label="时间段选择" name="dateRange" />
        <ColFormMonthPicker label="月份选择" name="dateMounth" />
        <ColFormWeekPicker label="周选择" name="dateWeek" />
        <ColFormCheckbox label="复选框" name="checkbox" />
        <ColFormCheckboxGroup
          filedTip="这里是【用户名】的说明提示 XXXXX X XXXXXXX"
          label="复选框(子项)"
          name="checkboxGroup"
        >
          <SCheckbox value="xxx">xxx</SCheckbox>
          <SCheckbox value="yyy">yyy</SCheckbox>
          <SCheckbox value="zzz">zzz</SCheckbox>
          <SCheckbox value="aaa">aaa</SCheckbox>
        </ColFormCheckboxGroup>
        <ColFormCheckboxGroup
          label="复选框(配置)"
          name="checkboxGroup2"
          options={['Apple', 'Pear', 'Orange']}
        />
        <ColFormCheckboxGroup
          label="复选框(配置)"
          name="checkboxGroup3"
          options={[
            { label: 'Apple', value: 'apple' },
            { label: 'Pear', value: 'pear' },
            { label: 'Banana', value: 'banana' },
            { label: 'Orange', value: 'orange' },
          ]}
        />
        <ColFormTimePicker label="时间选择" name="time" />
        <ColFormCheckboxGroup
          label="复选框(配置-请求)"
          name="checkboxGroup4"
          store={() => getDirctData('ocmcUserType')}
        />
        <ColFormCheckboxGroup
          label="复选框(子项-请求)"
          name="checkboxGroup5"
          store={() => getDirctData('ocmcUserType')}
        >
          {(arrOptions) => {
            return (
              <>
                {arrOptions.map((item) => (
                  <SCheckbox key={item.value} value={item.value}>
                    {item.label}
                  </SCheckbox>
                ))}
                <SCheckbox value="xxx">xxx</SCheckbox>
                <SCheckbox value="yyy">yyy</SCheckbox>
              </>
            );
          }}
        </ColFormCheckboxGroup>
        <ColFormRadioGroup
          label="复选框(配置-请求)"
          name="radioGroup4"
          store={() => getDirctData('ocmcUserType')}
        >
          {(arrOptions) => {
            return (
              <>
                {arrOptions.map((item) => (
                  <SRadio key={item.value} value={item.value}>
                    {item.label}
                  </SRadio>
                ))}
                <SRadio value="xxx">xxx</SRadio>
                <SRadio value="yyy">yyy</SRadio>
              </>
            );
          }}
        </ColFormRadioGroup>
        <ColFormSwitch label="复选框(配置-请求)" name="switch4" />
        {/* <ColFormTags label="标签" name="tags" /> */}

        <SRow.SCol style={{ marginBottom: '8px' }} span={24}>
          <SForm.Consumer>
            {({ form, loading }) => (
              <Button onClick={() => form.finish()} loading={loading}>
                内部自定义按钮(能获取状态)
              </Button>
            )}
          </SForm.Consumer>
        </SRow.SCol>
      </SForm>

      <ActionBtn onClick={() => formRef?.current?.finish?.()}>
        自定义提交2
      </ActionBtn>
    </>
  );
};
