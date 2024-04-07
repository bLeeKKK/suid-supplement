import { useControllableValue, useRequest } from 'ahooks';
import { Checkbox, Icon, Spin, Tooltip } from 'antd';
import classnames from 'classnames';
import React, { createContext, forwardRef, useMemo } from 'react';
import './style.less';

const CheckboxContext = createContext();
const useCheckboxContext = () => React.useContext(CheckboxContext);
const CheckboxGroup = Checkbox.Group;

const SCheckbox = forwardRef(
  ({ show = false, renderForShow, className, form, ...props }, ref) => {
    const { show: showGroup, inGroup } = useCheckboxContext() || {};
    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = showGroup ?? !!show;
      let val = (
        <Checkbox
          {...props}
          className={classnames(
            { 'ant-checkbox-group-item': !!inGroup },
            className,
          )}
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
      <Checkbox
        {...props}
        className={classnames(
          { 'ant-checkbox-group-item': !!inGroup },
          className,
        )}
        checked={value}
        ref={ref}
      />
    );
  },
);

// checkbox组的项目，优先级 children > options > store
const SCheckboxGroup = forwardRef(
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
      typeof children === 'function' ? children(arrOptions) : children;

    const [value] = useControllableValue(props);
    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val = (
        <CheckboxGroup
          {...props}
          className={classnames('s-checkbox-group', className)}
          options={optionChildren ? undefined : arrOptions}
          checked={value}
          onChange={() => {}}
          ref={ref}
          disabled
        >
          {optionChildren}
        </CheckboxGroup>
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

    return (
      <CheckboxContext.Provider value={{ show, inGroup: true }}>
        {showFlag ? (
          showValue
        ) : (
          <Spin spinning={loading}>
            <CheckboxGroup
              {...props}
              className={classnames('s-checkbox-group', className)}
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
        )}
      </CheckboxContext.Provider>
    );
  },
);

SCheckbox.SCheckboxGroup = SCheckboxGroup;

export default SCheckbox;
