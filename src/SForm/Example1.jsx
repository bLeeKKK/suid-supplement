import { Button, Switch } from 'antd';
import React from 'react';
import {
  ColFormDatePicker,
  ColFormInput,
  ColFormMonthPicker,
  ColFormRangePicker,
  ColFormSearch,
  ColFormSelect,
  ColFormTextArea,
  ColFormTimePicker,
  ColFormWeekPicker,
  SForm,
} from 'suid-supplement';

const request = async () => {};
const getDirctData = async (code, count, filters) => {
  const { data } = await request(
    `/api-gateway/dms/dataDict/getCanUseDataDictValues`,
    {
      params: {
        dictCode: code,
        count,
        filters,
      },
    },
  );

  return data;
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
        //   userName: '张三',
        //   phone: '12345678901',
        //   phoneHide: '12345678901',
        //   address: '北京市',
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
          initialValue="李1"
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
          label="用户类型"
          name="typeCode1"
          store={() => getDirctData('ocmcUserType')}
          reader={{
            label: 'dataName',
            value: 'dataValue',
          }}
        />

        <ColFormSelect
          label="用户类型"
          name="typeCode2"
          // mode="multiple"
          store={({ filters }) => getDirctData('ocmcUserType', count, filters)}
          reader={{
            label: 'dataName',
            value: 'dataValue',
          }}
          initialValue={['personal_zh-CN']}
          noWrap
          storeOption={{
            refreshDeps: [count],
          }}
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
      </SForm>
      <Button onClick={() => formRef?.current?.finish?.()}>自定义提交</Button>
    </>
  );
};
