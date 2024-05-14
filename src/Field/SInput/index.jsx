import { useControllableValue } from 'ahooks';
import { Input } from 'antd';
import React, { forwardRef, useMemo } from 'react';
import OverflowShowbox from '../../OverflowShowbox';

const SInput = forwardRef(
  (
    { show = false, renderForShow, overflowShowTip = true, form, ...props },
    ref,
  ) => {
    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val = value;

      if (typeof renderForShow === 'function') {
        val = renderForShow({ value, form, defaultShow: val });
      }

      if (overflowShowTip) {
        val = (
          <div style={{ height: '40px' }}>
            <OverflowShowbox>{val}</OverflowShowbox>
          </div>
        );
      }

      return [flag, val];
    }, [show, value, form, renderForShow, overflowShowTip]);

    return showFlag ? (
      <div ref={ref}>{showValue}</div>
    ) : (
      <Input {...props} ref={ref} />
    );
  },
);

export default SInput;
