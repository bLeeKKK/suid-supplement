import { Tooltip } from 'antd';
import moment from 'moment';
import React, { useMemo } from 'react';
import styles from './styles.module.less';

const OverflowShowbox = ({ children }) => {
  const showStr = useMemo(() => {
    if (moment?.isMoment(children)) {
      return children.format('YYYY-MM-DD HH:mm:ss');
    }
    return children;
  }, [children]);

  return (
    <div className="h-full w-full flex items-center">
      <div className={styles['over-wrap']}>
        <span className={styles['over-txt']}>{showStr}</span>
        <Tooltip className={styles['over-title']} title={showStr}>
          {showStr}
        </Tooltip>
      </div>
    </div>
  );
};

export default OverflowShowbox;
