import * as React from 'react';
import { Button, Card } from 'antd';
import { useInterval } from 'lz-hooks';

const Demo: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);
  const { run, start, cancel } = useInterval(() => setCount(c => c + 1), 1000, {
    immediate: true,
  });
  return (
    <>
      <Card style={{ width: 500 }}>
        <p>当前计数值：{count}</p>
        <p>
          <Button onClick={start}>开始</Button>
          <Button onClick={cancel} style={{ margin: '0 16px' }} danger>
            停止
          </Button>
          <Button onClick={() => setCount(0)} type="primary">
            重置
          </Button>
        </p>
      </Card>
    </>
  );
};

export default Demo;
