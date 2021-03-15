import * as React from 'react';
import useScrollMore from '..';

const Demo = () => {
  const ref = React.useRef(null);

  useScrollMore(
    ref?.current,
    0,
    () => {
      console.log('刷新 :>> ', '刷新');
    },
    [],
  );

  return (
    <div style={{ height: 200, overflow: 'auto' }} ref={ref}>
      <div style={{ height: 600 }}>123</div>
    </div>
  );
};

export default Demo;
