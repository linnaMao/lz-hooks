import * as React from 'react';
import { Button, message } from 'antd';
import { useCbState } from 'lz-hooks';

const Demo: React.FC = () => {
  const [count, setCount] = useCbState(0);

  const handleBtnClick = () => {
    setCount(count + 1, value => {
      message.info(`回调取得最新值： ${value}`);
    });
    message.info(`set之后，不在回调里获取老的值： ${count}`);
  };

  return (
    <>
      <p>当前值： {count}</p>
      <p>
        <Button onClick={handleBtnClick}>点击按钮</Button>
      </p>
    </>
  );
};

export default Demo;
