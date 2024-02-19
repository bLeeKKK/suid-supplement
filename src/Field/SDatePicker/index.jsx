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

const SRangePicker = forwardRef(
  (
    {
      show = false,
      format,
      renderForShow,
      overflowShowTip = true,
      form,
      style,
      separator,
      showTime,
      ...props
    },
    ref,
  ) => {
    const inputrRef = useRef();
    useImperativeHandle(ref, () => ({ inputrRef }));

    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      const [startDate, endDate] = value || [];
      const defaultFormat = showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
      let val =
        startDate && endDate
          ? `${startDate.format(format || defaultFormat) || ''}${
              separator || ' ~ '
            }${endDate.format(format || defaultFormat) || ''}`
          : value;

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
    }, [show, value, form, renderForShow, overflowShowTip, format, showTime]);

    return showFlag ? (
      showValue
    ) : (
      <RangePicker
        {...props}
        separator={separator}
        style={{ width: '100%', ...(style || {}) }}
        format={format}
        showTime={showTime}
        ref={inputrRef}
      />
    );
  },
);

SDatePicker.SRangePicker = SRangePicker;

export default SDatePicker;
