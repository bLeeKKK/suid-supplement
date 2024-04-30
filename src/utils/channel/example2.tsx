import { Button } from 'antd';
import React from 'react';
import { useChannel } from 'suid-supplement';

export default () => {
  const { send } = useChannel('xxxx', (p: any) => console.log(p, '触发位置2'));
  return (
    <Button
      onClick={() =>
        send({
          type: 'sendNumber',
          number: 222,
        })
      }
    >
      发送2
    </Button>
  );
};
