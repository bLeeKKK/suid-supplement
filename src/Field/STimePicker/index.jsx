import { useControllableValue } from 'ahooks';
import { TimePicker } from 'antd';
import React, { forwardRef, useMemo } from 'react';
import OverflowShowbox from '../../OverflowShowbox';

const STimePicker = forwardRef(
  (
    {
      show = false,
      format,
      renderForShow,
      overflowShowTip = true,
      form,
      style,
      ...props
    },
    ref,
  ) => {
    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val = value?.format(format || 'HH:mm:ss');

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
    }, [show, value, form, renderForShow, overflowShowTip, format]);

    return showFlag ? (
      <div ref={ref}>{showValue}</div>
    ) : (
      <TimePicker
        {...props}
        style={{ width: '100%', ...(style || {}) }}
        format={format}
        ref={ref}
      />
    );
  },
);

export default STimePicker;
