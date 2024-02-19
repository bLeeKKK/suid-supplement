import { useControllableValue } from 'ahooks';
import { InputNumber } from 'antd';
import React, { forwardRef, useMemo } from 'react';
import OverflowShowbox from '../../OverflowShowbox';

const SInputNumber = forwardRef(
  (
    {
      show = false,
      renderForShow,
      overflowShowTip = true,
      form,
      style,
      ...props
    },
    ref,
  ) => {
    const formatter = useMemo(
      () => props.formatter || ((value) => value),
      [props.formatter],
    );
    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val =
        value === undefined || value === null ? value : formatter(value);

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
    }, [show, value, form, renderForShow, formatter, overflowShowTip]);

    return showFlag ? (
      showValue
    ) : (
      <InputNumber
        style={{ width: '100%', ...(props.style || {}) }}
        {...props}
        ref={ref}
      />
    );
  },
);

export default SInputNumber;
