import { Button, Checkbox, Switch } from 'antd';
import axios from 'axios';
import React from 'react';
import {
  ColFormCheckbox,
  ColFormCheckboxGroup,
  ColFormDatePicker,
  ColFormInput,
  ColFormMonthPicker,
  ColFormRadioGroup,
  ColFormRangePicker,
  ColFormSearch,
  ColFormSelect,
  ColFormSwitch,
  ColFormTags,
  ColFormTextArea,
  ColFormTimePicker,
  ColFormWeekPicker,
  SForm,
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

const getUserData = async ({ current, pageSize, filters }, count) => {
  const { data } = await request(
    '/api-gateway/ocmc-order/orderUser/findByPage',
    {
      method: 'POST',
      data: {
        pageInfo: { page: current, rows: pageSize },
        quickSearchProperties: ['firstName'],
        quickSearchValue: filters,
        sortOrders: [],
      },
      params: { count },
    },
  );

  return { list: data?.rows, total: data?.records };
};

export default () => {
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
      <hr />
      <SForm
        justShow={checked}
        basicSpan={12}
        formButtons
        onFinish={console.log}
        ref={formRef}
        // initialValues={{
        //   checkbox: true,
        // }}
        // form={form}
      >
        <ColFormTextArea
          label="描述"
          span={24}
          flexSpan
          name="description"
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

        <ColFormSearch
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

        <ColFormInput
          label="用户名"
          name="userName"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
          initialValue="李四"
        />
        <ColFormInput
          label="电话"
          name="phone"
          show={(form) => form?.getFieldValue('userName') === '张三'}
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
          rules={[
            {
              required: true,
              message: '请输入电话隐藏',
            },
          ]}
        />

        <ColFormInput
          label="地址选择"
          flexSpan
          name="address1"
          initialValue={['110000', '110101']}
        />

        <ColFormInput label="地址" name="address" />

        <ColFormInput label="金额" name="money" type="number" />

        <ColFormSelect
          label="用户类型1"
          name="typeCode1"
          store={() => getDirctData('ocmcUserType')}
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
          // show
          // hideMb8px
        >
          {(arr, Option) =>
            [...arr, { label: '追加的数据', value: 'xxx' }].map((item) => (
              <Option key={item.value}>{item.label}</Option>
            ))
          }
        </ColFormSelect>

        <ColFormSelect
          span="16"
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
          store={(...params) => getUserData(...params, count)}
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
        <ColFormCheckboxGroup label="复选框(子项)" name="checkboxGroup">
          <Checkbox value="xxx">xxx</Checkbox>
          <Checkbox value="yyy">yyy</Checkbox>
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
            { label: 'Orange', value: 'orange' },
          ]}
        />
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
          {(arrOptions, Checkbox) => {
            return (
              <>
                {arrOptions.map((item) => (
                  <Checkbox key={item.value} value={item.value}>
                    {item.label}
                  </Checkbox>
                ))}
                <Checkbox value="xxx">xxx</Checkbox>
                <Checkbox value="yyy">yyy</Checkbox>
              </>
            );
          }}
        </ColFormCheckboxGroup>
        <ColFormRadioGroup
          label="复选框(配置-请求)"
          name="radioGroup4"
          store={() => getDirctData('ocmcUserType')}
        />
        <ColFormSwitch label="复选框(配置-请求)" name="switch4" />
        <ColFormTags label="标签" name="tags" />
      </SForm>
      <Button onClick={() => formRef?.current?.finish?.()}>自定义提交</Button>
    </>
  );
};
