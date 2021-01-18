import * as React from 'react';
import { Button } from 'antd';
import constate from 'constate';
import useCount from './useCount';

const [CounterProvider, useCounterContext] = constate(useCount);

const CounterDisplay: React.FC = () => {
  const { count, setIncrement, setDecrement } = useCounterContext();
  return (
    <>
      <p>{count}</p>
      <Button onClick={setIncrement}>increment</Button>
      <Button onClick={setDecrement} style={{ margin: '0 16px' }}>
        decrement
      </Button>
    </>
  );
};

const Index: React.FC = () => {
  return (
    <>
      <CounterProvider>
        <CounterDisplay />
      </CounterProvider>
    </>
  );
};

export default Index;
