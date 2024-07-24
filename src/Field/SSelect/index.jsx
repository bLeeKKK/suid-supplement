import { useAntdTable, useControllableValue } from 'ahooks';
import { Icon, Input, Pagination, Select, Spin, Tooltip } from 'antd';
import classnames from 'classnames';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import OverflowShowbox from '../../OverflowShowbox';
import classStyle from './style.module.less';

const { Option } = Select;
const { Search } = Input;

/**
 * @description 自定义下拉框
 * @param {Array} options 传入的数据
 * @param {Object} store 请求的数据
 * @param {Object} storeOption 请求的数据
 * @param {Boolean} searchForStore 是否开启搜索
 * @param {Object} reader 数据读取器
 * @param {Boolean} show 是否展示模式
 * @param {Function} renderForShow 展示模式下的渲染函数
 * @param {Object} form 表单
 * @param {Function} children 自定义渲染函数
 *
 * */
export const SSelect = forwardRef(
  (
    {
      show,
      renderForShow,
      form,
      overflowShowTip = true,
      options,
      store,
      storeOption = {},
      searchForStore,
      reader = {
        label: 'label',
        value: 'value',
      },
      children,
      mode,
      noWrap = false,
      className,
      paginated,
      style,
      ...props
    },
    ref,
  ) => {
    const multiple = mode === 'multiple';
    const {
      data = [],
      error,
      loading,
      refresh,
      pagination,
      tableProps,
    } = useAntdTable(store, {
      ready: !!store,
      ...storeOption,
    });

    // const [searchVal, setSearchVal] = useState('');

    const errorMessage = error && error.message;
    const arrOptions = useMemo(() => {
      const newData = Array.isArray(data) ? data : data?.list || [];
      const arr = typeof options === 'function' ? options(newData) : options;

      return (arr || newData).map((res) => {
        return {
          ...res,
          value: res[reader.value],
          label: res[reader.label],
        };
      });
    }, [options, data, reader]);

    const [open, setOpen] = useState(false);
    const selectRef = useRef();
    const pageRef = useRef();
    const searchRef = useRef();
    const menuRef = useRef();
    const [value] = useControllableValue(props);

    const hide = useCallback(
      (e) => {
        const tDom = selectRef.current;
        const pDom = pageRef.current;
        const sDom = searchRef.current;
        const mDom = menuRef.current;

        if (
          tDom?.contains(e.target) ||
          pDom?.contains(e.target) ||
          sDom?.contains(e.target) ||
          (multiple && mDom?.contains(e.target))
        ) {
          // 暂无需求
        } else {
          setTimeout(() => {
            setOpen(false);
          }, 100);
        }
      },
      [multiple],
    );

    useEffect(() => {
      document.addEventListener('mousedown', hide, true);
      return () => document.removeEventListener('mousedown', hide, true);
    }, [hide]);

    const option = (item) => {
      return (
        <Option
          data={item}
          key={`${item.value}`}
          value={item.value}
          label={item.label}
        >
          {item.label}
        </Option>
      );
    };
    const originOptionsRender =
      arrOptions && arrOptions.length > 0 && arrOptions.map(option);

    const searchMode =
      paginated || searchForStore
        ? {
            open,
            onDropdownVisibleChange: (val) => val && setOpen(val),
          }
        : {};

    const optionChildren =
      typeof children === 'function'
        ? children(arrOptions, Option, originOptionsRender)
        : originOptionsRender;

    const [showFlag, showValue] = useMemo(() => {
      const flag = !!show;
      let val = value;
      // 展示模式
      // 注：这里因为Options的key值是value值，所以判定展示值用key来获取children
      // 注：建议只有不存在分页的情况使用，不然展示可能出错
      if (Array.isArray(optionChildren) && !paginated) {
        if (multiple) {
          val = Array.isArray(value)
            ? value
                .map(
                  (v) =>
                    optionChildren.find((item) => v === item.key)?.props
                      ?.children || v,
                )
                .join('、')
            : value;
        } else {
          val =
            optionChildren.find((item) => {
              const diffVal = Array.isArray(value) ? value[0] : value;
              return item?.props?.value === diffVal;
            })?.props?.children || value;
        }
      }

      if (typeof renderForShow === 'function') {
        val = renderForShow({
          value,
          form,
          optionChildren,
          arrOptions,
          defaultShow: val,
        });
      }

      if (overflowShowTip) {
        val = (
          <div style={{ height: '40px' }}>
            <OverflowShowbox>{val}</OverflowShowbox>
          </div>
        );
      }

      return [flag, val, optionChildren];
    }, [
      show,
      value,
      form,
      renderForShow,
      optionChildren,
      arrOptions,
      multiple,
      paginated,
      overflowShowTip,
    ]);

    if (showFlag) return <div ref={ref}>{showValue}</div>;

    return (
      <div
        className={classnames(
          'w-full h-full inline-block',
          className,
          noWrap && classStyle['select-overflow-hide'],
        )}
        style={style}
        ref={selectRef}
      >
        <Select
          {...searchMode}
          loading={loading}
          // 搜索
          showSearch
          optionFilterProp="label"
          {...props}
          style={{ width: '100%' }}
          ref={ref}
          mode={mode}
          suffixIcon={
            errorMessage && (
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
                <Icon type="exclamation" />
              </Tooltip>
            )
          }
          dropdownRender={(menu) => (
            <Spin spinning={!!loading}>
              {searchForStore && store && (
                <div
                  style={{
                    padding: '8px 8px 0 8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid rgb(222, 222, 222)',
                  }}
                  ref={searchRef}
                >
                  <Search
                    onSearch={(val) => {
                      // setSearchVal(val)
                      tableProps.onChange(pagination, val);
                    }}
                  />
                </div>
              )}
              <div ref={menuRef}>{menu}</div>
              {paginated && (
                <div
                  style={{
                    height: '42px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTop: '1px solid rgb(222, 222, 222)',
                  }}
                  ref={pageRef}
                >
                  <Pagination
                    simple
                    disabled={loading}
                    {...(pagination || {})}
                  />
                </div>
              )}
            </Spin>
          )}
        >
          {optionChildren}
        </Select>
      </div>
    );
  },
);

export default SSelect;
