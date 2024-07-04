import { useInViewport } from 'ahooks';
import { Affix } from 'antd';
import React, { useState } from 'react';

const SAffix = ({ children, scope, ...props }) => {
  const [affix, setAffix] = useState(false);
  const [inViewport] = useInViewport(scope);
  const child =
    typeof children === 'function' ? children({ affix, inViewport }) : children;
  if (scope?.current && !inViewport && affix) {
    return child;
  }

  return (
    <Affix {...props} onChange={setAffix}>
      {child}
    </Affix>
  );
};

export default SAffix;
