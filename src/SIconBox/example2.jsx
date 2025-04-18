import React from 'react';
import { IconsBox } from 'suid-supplement';

export default () => {
  return (
    <IconsBox
      limt="3"
      iconArr={[
        {
          title: '查看',
          type: 'file-search',
          onClick: () => {
            const p = new Promise((resolve) => {
              setTimeout(resolve, 2000);
            });
            return p;
          },
        },
        {
          title: '编辑',
          type: 'edit',
          onClick: console.log,
          disabled: true,
        },
        {
          title: '删除',
          type: 'delete',
          onClick: console.log,
        },
        {
          title: '打印',
          tip: '打印提示',
          type: 'printer',
          onClick: console.log,
          disabled: true,
        },
        // {
        //   title: '打印2222222',
        //   type: 'printer',
        //   onClick: () => {
        //     console.log(8888);
        //     const p = new Promise((resolve) => {
        //       setTimeout(resolve, 10000);
        //     });
        //     return p;
        //   },
        // },
      ]}
    />
  );
};
