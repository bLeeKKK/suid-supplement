import { Button } from 'antd';
import React, { useRef } from 'react';
import { SAffix } from 'suid-supplement';

export default () => {
  const warp = useRef();

  return (
    <>
      <div
        style={{ width: '100px', height: '1000px', background: 'blue' }}
      ></div>

      <div ref={warp}>
        <div
          style={{ width: '100px', height: '600px', background: 'red' }}
        ></div>
        <SAffix scope={warp} offsetBottom={32}>
          <Button>图钉内容有scope</Button>
        </SAffix>
        <SAffix offsetBottom={0}>
          <Button>图钉内容无scope</Button>
        </SAffix>
      </div>
    </>
  );
};
