import { useControllableValue } from 'ahooks';
import { Input } from 'antd';
import React, { forwardRef, useMemo } from 'react';

const { TextArea } = Input;

const STextArea = forwardRef(
  ({ show = false, renderForShow, form, ...props }, ref) => {
    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;

      let val = (
        <div className="whitespace-pre-wrap leading-normal mt-5 relative -top-[0.75em]">
          {value}
        </div>
      );

      if (typeof renderForShow === 'function') {
        val = renderForShow({ value, form, defaultShow: val });
      }

      return [flag, val];
    }, [show, value, form, renderForShow]);

    return showFlag ? (
      <div ref={ref}>{showValue}</div>
    ) : (
      <TextArea {...props} ref={ref} />
    );
  },
);

export default STextArea;
