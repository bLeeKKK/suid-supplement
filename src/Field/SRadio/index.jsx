import { useControllableValue, useRequest } from 'ahooks';
import { Icon, Radio, Spin, Tooltip } from 'antd';
import classnames from 'classnames';
import React, { createContext, forwardRef, useMemo } from 'react';
import './style.less';

const RadioContext = createContext();
const useRadioContext = () => React.useContext(RadioContext);
const RadioGroup = Radio.Group;

const SRadio = forwardRef(
  ({ show = false, renderForShow, form, ...props }, ref) => {
    const {
      show: showGroup,
      // inGroup
    } = useRadioContext() || {};
    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = showGroup ?? !!show;
      let val = (
        <Radio
          {...props}
          checked={value}
          onChange={() => {}}
          ref={ref}
          disabled
        />
      );

      if (typeof renderForShow === 'function') {
        val = renderForShow({ value, form, defaultShow: val });
      }

      return [flag, val];
    }, [
      show,
      showGroup,
      value,
      form,
      renderForShow,
      // overflowShowTip
    ]);

    return showFlag ? (
      showValue
    ) : (
      <Radio {...props} checked={value} ref={ref} />
    );
  },
);

// radiobox组的项目，优先级 children > options > store
const SRadioGroup = forwardRef(
  (
    {
      show = false,
      renderForShow,
      // overflowShowTip = true,
      form,
      options,
      store,
      storeOption = {},
      children,
      reader,
      className,
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
      typeof children === 'function' ? children(arrOptions, Radio) : children;

    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val = (
        <RadioGroup
          {...props}
          className={classnames('s-radio-group', className)}
          options={optionChildren ? undefined : arrOptions}
          checked={value}
          onChange={() => {}}
          ref={ref}
          disabled
        >
          {optionChildren}
        </RadioGroup>
      );

      if (typeof renderForShow === 'function') {
        val = renderForShow({ value, form, defaultShow: val });
      }

      // if (overflowShowTip) {
      //   val = (
      //     <div style={{ height: '40px' }}>
      //       <OverflowShowbox>{val}</OverflowShowbox>
      //     </div>
      //   );
      // }

      return [flag, val];
    }, [
      show,
      value,
      form,
      renderForShow,
      // overflowShowTip
    ]);

    return showFlag ? (
      showValue
    ) : (
      <Spin spinning={loading}>
        <RadioGroup
          {...props}
          className={classnames('s-radio-group', className)}
          options={optionChildren ? undefined : arrOptions}
          checked={value}
          ref={ref}
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
