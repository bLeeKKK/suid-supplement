import { Tooltip } from 'antd';
import React from 'react';
import './styles.css';

const OverflowShowbox = ({ children }) => {
  return (
    <div className="overflow-show-box">
      <div className="over-wrap">
        <span className="over-txt">{children}</span>
        <Tooltip className="over-title" title={children}>
          {children}
        </Tooltip>
      </div>
    </div>
  );
};

export default OverflowShowbox;
