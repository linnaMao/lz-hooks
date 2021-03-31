import { useRef, useState } from 'react';
import { Button } from 'antd';
import useClickAway from '..';

export default () => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);
  const ref1 = useRef<HTMLButtonElement>(null);

  useClickAway(() => {
    setCount(c => c + 1);
  }, [ref, ref1]);

  return (
    <div style={{ textAlign: 'center', width: 300 }}>
      <Button ref={ref}>除了点我以外</Button>
      <Button ref={ref1}>除了点我以外</Button>
      <p>count: {count}</p>
    </div>
  );
};
