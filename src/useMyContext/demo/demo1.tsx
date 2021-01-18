import * as React from 'react';
import { Button } from 'antd';
import useCount from './useCount';
import createContext from '..';

const [useContext, withProvider] = createContext(useCount);

const Index: React.FC = () => {
  const counter = useContext();
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

export default withProvider(Index);
