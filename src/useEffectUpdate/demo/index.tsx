import * as React from 'react';
import useUpdateEffect from 'lz-hooks';

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
      <button onClick={handleAdd}>add</button>
      <div>useUpdateEffect: {updateEffectCount}</div>
      <div>useEffect: {effectCount}</div>
    </>
  );
};

export default Demo;
