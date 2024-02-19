import { useControllableValue } from 'ahooks';
import { Checkbox } from 'antd';
import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import OverflowShowbox from '../../OverflowShowbox';

const SCheckbox = forwardRef(
  (
    { show = false, renderForShow, overflowShowTip = true, form, ...props },
    ref,
  ) => {
    const inputrRef = useRef();
    useImperativeHandle(ref, () => ({ inputrRef }));

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
      showValue
    ) : (
      <Checkbox {...props} checked={value} ref={inputrRef} />
    );
  },
);

export default SCheckbox;
