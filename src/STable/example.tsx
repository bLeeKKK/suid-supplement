import axios from 'axios';
import React from 'react';
import { STable } from 'suid-supplement';

const getList = async (...p: any) => {
  const { data } = await axios.post(`/api/list`, {
    params: p,
  });

  return data.data;
};

export default () => {
  return (
    <STable
      request={getList}
      // useFixedHeader
      columns={[
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: 50,
          optional: false,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: 50,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
          width: 100,
        },
        // {
        //   title: 'email',
        //   dataIndex: 'email',
        //   width: 100,
        // },
        // {
        //   title: 'date',
        //   dataIndex: 'date',
        // },
        // {
        //   title: 'logo',
        //   dataIndex: 'logo',
        // },
        // {
        //   title: 'color',
        //   dataIndex: 'color',
        // },
      ]}
    />
  );
};
