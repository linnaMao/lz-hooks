import * as React from 'react';
import { Button } from 'antd';
import useDeepEffect from '..';

const Index: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const [deepCount, setDeepCount] = React.useState(0);
  const [state, setState] = React.useState({});

  // const newName = React.useMemo(() => {
  //   return state
  // }, [state])

  React.useEffect(() => {
    console.log('2 :>> ', 2);
    setCount(c => c + 1);
  }, [state]);

  useDeepEffect(() => {
    // console.log('1 :>> ', 1);
    setDeepCount(c => c + 1);
    return () => null;
  }, [state]);
  return (
    <>
      <p>useEffect: {count}</p>
      <p>useDeepEffect: {deepCount}</p>
    </>
  );
};

export default Index;
