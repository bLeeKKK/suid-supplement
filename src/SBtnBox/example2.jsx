import React from 'react';
import { BtnsBox } from 'suid-supplement';

export default () => {
  return (
    <BtnsBox
      limt="3"
      btnArr={[
        {
          title: '查看',
          tip: '查看xxxxxxxxx',
          type: 'primary',
          icon: 'file-search',
          onClick: () => {
            const p = new Promise((resolve) => {
              setTimeout(resolve, 2000);
            });
            return p;
          },
        },
        {
          title: '编辑',
          icon: 'edit',
          disabled: true,
          onClick: console.log,
        },
        {
          title: '删除',
          icon: 'delete',
          onClick: console.log,
        },
        {
          title: '打印',
          icon: 'printer',
          onClick: console.log,
          tip: 'xxxx xxxx xxxx xxxx z',
          disabled: true,
          onClick: (e) => {
            console.log('printer');
            const p = new Promise((resolve) => {
              console.log(e);
              setTimeout(resolve, 2000);
            });
            return p;
          },
        },
      ]}
    />
  );
};
