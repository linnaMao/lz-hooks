import { useRef, useState } from 'react';
import { Button } from 'antd';
import useClickAway from '..';

export default () => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);

  useClickAway(() => {
    setCount(c => c + 1);
  }, ref);

  return (
    <div style={{ textAlign: 'center', width: 300 }}>
      <Button ref={ref}>除了点我以外</Button>
      <p>count: {count}</p>
    </div>
  );
};
