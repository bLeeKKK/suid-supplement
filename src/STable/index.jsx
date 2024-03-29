import { useAntdTable, useLocalStorageState } from 'ahooks';
import { Checkbox, Icon, Popover, Table } from 'antd';
import classnames from 'classnames';
import React, { useMemo } from 'react';
import { Resizable } from 'react-resizable';
import './styles.less';

const blankColumn = {
  title: '',
  key: '_blank_workspace',
  dataIndex: '_blank_workspace',
  disableCustomize: true,
};

const ResizeableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

  if (width === undefined || width === null) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

// const STbody = ({ children, ...props }) => {
//   const tbodyRef = useRef();
//   const tbodySb = useRef();
//   useLayoutEffect(() => {
//     tbodySb.current = new Ps(tbodyRef.current);
//   }, []);
//   console.log(tbodySb, tbodyRef);
//
//   return (
//     <tbody {...props} ref={tbodyRef} className="s-s-table-body ant-table-tbody">
//       {children}
//     </tbody>
//   );
// };

const STable = (props) => {
  const {
    columns: initialColumns,
    className,
    rowKey = 'id',
    request,
    params,
    ...rest
  } = props;
  const { tableProps } = useAntdTable(request, {
    defaultPageSize: 10,
    ...params,
  });

  const [tableColumnsConfig, setTableColumnsConfig] = useLocalStorageState(
    'tableColumns',
    {
      defaultValue: '{}',
    },
  );

  const columns = useMemo(() => {
    const newColumns = initialColumns.map((item) => {
      const key = item.dataIndex || item.title;
      let columnConfig = {};
      try {
        columnConfig = JSON.parse(tableColumnsConfig);
      } catch (error) {
        console.log(error);
      }
      const width = columnConfig[key]?.width || item.width || 100;
      const hidden = columnConfig[key]?.hidden || false;

      return {
        ellipsis: true,
        ...item,
        width,
        hidden,
        onHeaderCell: () => {
          return {
            width,
            onResize: handleResize(key),
          };
        },
      };
    });

    newColumns.push(blankColumn);

    return newColumns;
  }, [tableColumnsConfig]);

  const handleResize =
    (key) =>
    (_, { size }) => {
      setTableColumnsConfig((oldKvStr) => {
        let oldKv = {};
        try {
          oldKv = JSON.parse(oldKvStr);
        } catch (error) {
          console.log(error);
        }
        const oldVal = oldKvStr[key] || {};

        const newKvStr = JSON.stringify({
          ...oldKv,
          [key]: {
            ...oldVal,
            width: size.width,
          },
        });
        return newKvStr;
      });
    };

  const handleColumnVisibilityChange = (key, checked) => {
    setTableColumnsConfig((oldKvStr) => {
      let oldKv = {};
      try {
        oldKv = JSON.parse(oldKvStr);
      } catch (error) {
        console.log(error);
      }
      const oldVal = oldKvStr[key] || {};

      const newKvStr = JSON.stringify({
        ...oldKv,
        [key]: {
          ...oldVal,
          hidden: !checked,
        },
      });
      return newKvStr;
    });
  };

  return (
    <>
      <Popover
        content={
          <div>
            {columns.map((column) => {
              const key = column.dataIndex || column.title;
              return (
                <Checkbox
                  disabled={column.optional === false}
                  checked={!column.hidden}
                  key={key}
                  onChange={(e) =>
                    handleColumnVisibilityChange(key, e.target.checked)
                  }
                >
                  {column.title}
                </Checkbox>
              );
            })}
          </div>
        }
        trigger="click"
      >
        <Icon type="setting" />
      </Popover>
      {/* <PerfectScrollbar className="h-[300px]"> */}
      <Table
        className={classnames('s-s-table', 'h-full', className)}
        size="small"
        scroll={{ x: '100%' }}
        columns={columns.filter((column) => !column.hidden)}
        rowKey={rowKey}
        components={{
          header: { cell: ResizeableTitle },
          // body: {
          //   wrapper: STbody,
          // },
        }}
        bordered
        {...tableProps}
        {...rest}
      />
      {/* </PerfectScrollbar> */}
    </>
  );
};

export default STable;
