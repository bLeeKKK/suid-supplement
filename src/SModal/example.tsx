import { Button } from 'antd';
import React from 'react';
import { SModal } from 'suid-supplement';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(true)}>Open Modal</Button>
      <SModal
        visible={visible}
        title="Basic Modal"
        onOk={() => {
          const p = new Promise((resolve) => {
            setTimeout(resolve, 2000);
          });

          return p;
        }}
        onCancel={() => setVisible(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </SModal>
    </div>
  );
};
