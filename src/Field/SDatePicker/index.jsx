import { useControllableValue } from 'ahooks';
import { DatePicker } from 'antd';
import React, { forwardRef, useMemo } from 'react';
import OverflowShowbox from '../../OverflowShowbox';

const { RangePicker, MonthPicker, WeekPicker } = DatePicker;

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
        ref={ref}
      />
    );
  },
);

const SMonthPicker = forwardRef(
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
      let val = value?.format(format || 'YYYY-MM');

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
      <MonthPicker
        {...props}
        style={{ width: '100%', ...(style || {}) }}
        format={format}
        ref={ref}
      />
    );
  },
);

const SWeekPicker = forwardRef(
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
      let val = value?.format(format || 'YYYY-wo');

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
      <WeekPicker
        {...props}
        style={{ width: '100%', ...(style || {}) }}
        format={format}
        ref={ref}
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
        ref={ref}
      />
    );
  },
);

SDatePicker.SRangePicker = SRangePicker;
SDatePicker.SMonthPicker = SMonthPicker;
SDatePicker.SWeekPicker = SWeekPicker;

export default SDatePicker;
