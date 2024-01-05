import React from 'react';
import { Upload } from 'suid-supplement';

export default () => (
  <Upload
    listType="text"
    uploadHandlerRender={() => (
      <div
        style={{
          background: 'red',
          color: '#fff',
          padding: '16px',
          cursor: 'pointer',
        }}
      >
        自定义上传触发
      </div>
    )}
  />
);
