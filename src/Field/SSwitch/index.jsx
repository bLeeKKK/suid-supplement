import { useControllableValue } from 'ahooks';
import { Switch } from 'antd';
import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';

const SSwitch = forwardRef(
  ({ show = false, renderForShow, form, ...props }, ref) => {
    const inputrRef = useRef();
    useImperativeHandle(ref, () => ({ inputrRef }));

    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val = (
        <Switch
          {...props}
          checked={value}
          onChange={() => {}}
          ref={inputrRef}
        />
      );

      if (typeof renderForShow === 'function') {
        val = renderForShow({ value, form, defaultShow: val });
      }

      return [flag, val];
    }, [show, value, form, renderForShow]);

    return showFlag ? (
      showValue
    ) : (
      <Switch {...props} checked={value} ref={inputrRef} />
    );
  },
);

export default SSwitch;
