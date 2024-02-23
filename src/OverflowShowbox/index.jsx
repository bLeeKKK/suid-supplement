import { Tooltip } from 'antd';
import React from 'react';
import styles from './styles.module.css';

const OverflowShowbox = ({ children }) => {
  return (
    <div className="h-full w-full flex items-center">
      <div className={styles['over-wrap']}>
        <span className={styles['over-txt']}>{children}</span>
        <Tooltip className={styles['over-title']} title={children}>
          {children}
        </Tooltip>
      </div>
    </div>
  );
};

export default OverflowShowbox;
