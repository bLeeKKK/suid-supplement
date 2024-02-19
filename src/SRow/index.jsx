import { Col, Row } from 'antd';
import React, { createContext } from 'react';

export const SRowContext = createContext();
export const useRow = () => React.useContext(SRowContext);

const SRow = ({ basicSpan, children, passageValue = {}, ...props }) => {
  return (
    <SRowContext.Provider value={{ basicSpan, ...passageValue }}>
      <Row {...(props || {})}>{children}</Row>
    </SRowContext.Provider>
  );
};

const SCol = ({ span, hide, style, children, ...props }) => {
  const { basicSpan } = useRow() || {};

  // 实际存放到Col的属性
  const itemStyle = hide ? { display: 'none' } : style;
  const itemSpan = span === undefined ? basicSpan : span;

  return (
    <Col {...props} style={itemStyle} span={itemSpan}>
      {typeof children === 'function'
        ? children({ basicSpan, itemSpan })
        : children}
    </Col>
  );
};

SRow.SCol = SCol;

export default SRow;
