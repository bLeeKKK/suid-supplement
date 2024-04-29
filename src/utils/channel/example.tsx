import { Button } from 'antd';
import React from 'react';
import { useChannel } from 'suid-supplement';

export default () => {
  const { send } = useChannel('xxxx', (p: any) => console.log(p, '触发位置1'));
  return (
    <Button
      onClick={() =>
        send({
          type: 'sendNumber',
          number: 111,
        })
      }
    >
      发送1
    </Button>
  );
};
