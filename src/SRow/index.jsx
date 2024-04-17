import { Col, Row } from 'antd';
import React, { createContext } from 'react';

export const SRowContext = createContext();
export const useRow = () => React.useContext(SRowContext);

const SRow = ({ basicSpan = 8, children, ...props }) => {
  return (
    <SRowContext.Provider value={{ basicSpan }}>
      <Row {...(props || {})}>{children}</Row>
    </SRowContext.Provider>
  );
};

const SCol = ({ span, children, ...props }) => {
  const { basicSpan } = useRow() || {};

  // 实际存放到Col的属性
  // const itemStyle = hide ? { display: 'none' } : style;
  const itemSpan = span === undefined ? basicSpan : span;

  return (
    <Col {...props} span={itemSpan}>
      {typeof children === 'function'
        ? children({ basicSpan, itemSpan })
        : children}
    </Col>
  );
};

// 创建Col包裹的项目
export const withFormColItem = (Component) => {
  const App = ({
    // hide,
    flexSpan,

    // Col属性
    offset,
    order,
    pull,
    push,
    span,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,

    ...props
  }) => {
    return (
      <SCol
        offset={offset}
        order={order}
        pull={pull}
        push={push}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        xxl={xxl}
        // hide={hide}
        span={span}
      >
        {({ basicSpan, itemSpan }) => {
          return (
            <Component
              // 自动计算占用比例，默认项目比例和当前项目比例。
              autoScale={flexSpan ? basicSpan / itemSpan : flexSpan}
              {...props}
            />
          );
        }}
      </SCol>
    );
  };

  return App;
};

SRow.SCol = SCol;

export default SRow;
