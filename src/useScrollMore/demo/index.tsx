import * as React from 'react';
import { message } from 'antd';
import useScrollMore from '..';

const Demo = () => {
  const ref = React.useRef<HTMLDivElement>(null);

  useScrollMore(
    ref,
    () => {
      // 调接口
      message.info('刷新');
    },
    [],
  );

  return (
    <div style={{ height: 200, overflow: 'auto' }} ref={ref}>
      <div style={{ height: 600, marginBottom: 60 }}>123</div>
    </div>
  );
};

export default Demo;
