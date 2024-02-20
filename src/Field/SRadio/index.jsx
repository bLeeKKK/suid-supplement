import { useControllableValue, useRequest } from 'ahooks';
import { Icon, Radio, Spin, Tooltip } from 'antd';
import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import OverflowShowbox from '../../OverflowShowbox';

const RadioGroup = Radio.Group;

const SRadio = forwardRef(
  (
    { show = false, renderForShow, overflowShowTip = true, form, ...props },
    ref,
  ) => {
    const inputrRef = useRef();
    useImperativeHandle(ref, () => ({ inputrRef }));

    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val = <Radio {...props} checked={value} disabled ref={inputrRef} />;

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
      <Radio {...props} checked={value} ref={inputrRef} />
    );
  },
);

// radiobox组的项目，优先级 children > options > store
const SRadioGroup = forwardRef(
  (
    {
      show = false,
      renderForShow,
      overflowShowTip = true,
      form,
      options,
      store,
      storeOption = {},
      children,
      reader,
      ...props
    },
    ref,
  ) => {
    const {
      data = [],
      error,
      loading,
      refresh,
    } = useRequest(store, {
      // 必须 store 存在时才会自动请求
      ready: !!store,
      ...storeOption,
    });
    const inputrRef = useRef();
    const errorMessage = error && error.message;
    const arrOptions = useMemo(() => {
      const newData = Array.isArray(data) ? data : [];
      const arr = typeof options === 'function' ? options(newData) : options;
      const newArr = arr || newData;

      if (reader) {
        return newArr.map((res, i) => {
          return {
            ...res,
            value: res[reader.value] || i,
            label: res[reader.label],
          };
        });
      } else {
        return newArr;
      }
    }, [options, data, reader]);
    useImperativeHandle(ref, () => ({ inputrRef }));

    const optionChildren =
      typeof children === 'function' ? children(arrOptions, Radio) : children;

    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val = (
        <RadioGroup
          {...props}
          options={optionChildren ? undefined : arrOptions}
          checked={value}
          disabled
          ref={inputrRef}
        >
          {optionChildren}
        </RadioGroup>
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

      return [flag, val];
    }, [show, value, form, renderForShow, overflowShowTip]);

    return showFlag ? (
      showValue
    ) : (
      <Spin spinning={loading}>
        <RadioGroup
          {...props}
          options={optionChildren ? undefined : arrOptions}
          checked={value}
          ref={inputrRef}
        >
          {optionChildren}
        </RadioGroup>
        {errorMessage && (
          <Tooltip
            title={
              <>
                Error: {errorMessage}
                <span style={{ marginLeft: 4, fontSize: 12 }}>
                  {loading ? (
                    <Icon
                      type="loading"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    />
                  ) : (
                    <Icon
                      onClick={(e) => {
                        e.stopPropagation();
                        refresh();
                        return false;
                      }}
                      type="reload"
                    />
                  )}
                </span>
              </>
            }
          >
            <Icon type="warning" />
          </Tooltip>
        )}
      </Spin>
    );
  },
);

SRadio.SRadioGroup = SRadioGroup;

export default SRadio;
