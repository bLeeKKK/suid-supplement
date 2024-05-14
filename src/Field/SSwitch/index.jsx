import { useControllableValue } from 'ahooks';
import { Switch } from 'antd';
import React, { forwardRef, useMemo } from 'react';

const SSwitch = forwardRef(
  ({ show = false, renderForShow, form, ...props }, ref) => {
    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val = (
        <Switch
          {...props}
          checked={value}
          disabled
          onChange={() => {}}
          ref={ref}
        />
      );

      if (typeof renderForShow === 'function') {
        val = renderForShow({ value, form, defaultShow: val });
      }

      return [flag, val];
    }, [show, value, form, renderForShow]);

    return showFlag ? (
      <div ref={ref}>{showValue}</div>
    ) : (
      <Switch {...props} checked={value} ref={ref} />
    );
  },
);

export default SSwitch;
