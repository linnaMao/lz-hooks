import * as React from 'react';
import { Button } from 'antd';
import { createContainer } from 'unstated-next';
import useCount from './useCount';

const { useContainer, Provider } = createContainer(useCount);

const CounterDisplay: React.FC = () => {
  const counter = useContainer();
  return (
    <>
      <p>{counter.count}</p>
      <Button onClick={counter.setIncrement}>increment</Button>
      <Button onClick={counter.setDecrement} style={{ margin: '0 16px' }}>
        decrement
      </Button>
    </>
  );
};

const Index: React.FC = () => {
  return (
    <>
      <Provider>
        <CounterDisplay />
      </Provider>
    </>
  );
};

export default Index;
