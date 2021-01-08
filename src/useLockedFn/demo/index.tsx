import * as React from 'react';
import { message, Button } from 'antd';
import { useLockedFn } from 'lz-hooks';

const getData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(0);
    }, 2000);
  });
};

const Demo: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const onSubmit = useLockedFn(async () => {
    message.info('submit...');
    await getData();
    message.success('submit success');
    setCount(c => c + 1);
  });

  return (
    <>
      <p>submit count: {count}</p>
      <p>
        <Button onClick={onSubmit}>提交</Button>
      </p>
    </>
  );
};

export default Demo;
