import * as React from 'react';
import usePersistFn from '../../usePersistFn';

const useCount = () => {
  const [count, setCount] = React.useState(0);
  const setIncrement = usePersistFn(() => {
    setCount(c => c + 1);
  });
  const setDecrement = usePersistFn(() => {
    setCount(c => c - 1);
  });
  return { count, setIncrement, setDecrement };
};

export default useCount;
