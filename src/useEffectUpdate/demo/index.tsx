import * as React from 'react';
import { Button } from 'antd';
import useUpdateEffect from '../index';

const Demo: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const [updateEffectCount, setUpdateEffectCount] = React.useState(0);
  const [effectCount, setEffectCount] = React.useState(0);

  const handleAdd = () => {
    setCount(c => c + 1);
  };

  React.useEffect(() => {
    setEffectCount(c => c + 1);
  }, [count]);

  useUpdateEffect(() => {
    setUpdateEffectCount(c => c + 1);
  }, [count]);

  return (
    <>
      <p>
        <Button onClick={handleAdd}>add</Button>
      </p>
      <p>useUpdateEffect: {updateEffectCount}</p>
      <p>useEffect: {effectCount}</p>
    </>
  );
};

export default Demo;
