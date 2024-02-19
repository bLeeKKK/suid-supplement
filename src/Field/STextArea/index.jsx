import { useControllableValue } from 'ahooks';
import { Input } from 'antd';
import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import OverflowShowbox from '../../OverflowShowbox';

const { TextArea } = Input;

const SInput = forwardRef(
  (
    {
      show = false,
      renderForShow,
      overflowShowTip,
      showOrigin = true,
      form,
      ...props
    },
    ref,
  ) => {
    const inputrRef = useRef();
    useImperativeHandle(ref, () => ({ inputrRef }));

    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val = value;

      if (showOrigin && !overflowShowTip && !renderForShow) {
        // pre 处理展示数据
        val = (
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              wordBreak: 'break-all',
              lineHeight: 'normal',
              marginTop: '20px',
              marginBottom: '0',
              '--half-font': '-0.5em',
              transform: 'translateY(var(--half-font))',
            }}
          >
            {value}
          </pre>
        );
      } else {
        val = (
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              wordBreak: 'break-all',
            }}
          >
            {value}
          </pre>
        );

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
      }

      return [flag, val];
    }, [show, value, form, renderForShow, overflowShowTip]);

    return showFlag ? showValue : <TextArea {...props} ref={inputrRef} />;
  },
);

export default SInput;
