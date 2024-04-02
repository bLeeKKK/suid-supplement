import { useControllableValue, useRequest } from 'ahooks';
import { Checkbox, Icon, Spin, Tooltip } from 'antd';
import React, { forwardRef, useMemo } from 'react';
import OverflowShowbox from '../../OverflowShowbox';

const CheckboxGroup = Checkbox.Group;

const SCheckbox = forwardRef(
  (
    { show = false, renderForShow, overflowShowTip = true, form, ...props },
    ref,
  ) => {
    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val = (
        <Checkbox {...props} checked={value} onChange={() => {}} ref={ref} />
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
      <Checkbox {...props} checked={value} ref={ref} />
    );
  },
);

// checkbox组的项目，优先级 children > options > store
const SCheckboxGroup = forwardRef(
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

    const optionChildren =
      typeof children === 'function'
        ? children(arrOptions, Checkbox)
        : children;

    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val = (
        <CheckboxGroup
          {...props}
          options={optionChildren ? undefined : arrOptions}
          checked={value}
          onChange={() => {}}
          ref={ref}
        >
          {optionChildren}
        </CheckboxGroup>
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
        <CheckboxGroup
          {...props}
          options={optionChildren ? undefined : arrOptions}
          checked={value}
          ref={ref}
        >
          {optionChildren}
        </CheckboxGroup>
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

SCheckbox.SCheckboxGroup = SCheckboxGroup;

export default SCheckbox;
