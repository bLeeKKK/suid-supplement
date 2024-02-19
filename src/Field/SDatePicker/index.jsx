import { useControllableValue } from 'ahooks';
import { DatePicker } from 'antd';
import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import OverflowShowbox from '../../OverflowShowbox';

const { RangePicker, MonthPicker } = DatePicker;

const SDatePicker = forwardRef(
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
    const inputrRef = useRef();
    useImperativeHandle(ref, () => ({ inputrRef }));

    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val = value?.format(format || 'YYYY-MM-DD');

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
      showValue
    ) : (
      <DatePicker
        {...props}
        style={{ width: '100%', ...(style || {}) }}
        format={format}
        ref={inputrRef}
      />
    );
  },
);

export default SDatePicker;
