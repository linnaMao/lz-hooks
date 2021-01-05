import * as React from 'react';
import { Button } from 'antd';
import { usePersistFn } from 'lz-hooks';

function Demo() {
  const [count, setCount] = React.useState<number>(0);
  const [persistCount, setPersistCount] = React.useState(0);
  const [noPersistCount, setNoPersistCount] = React.useState(0);

  const handleAdd = () => {
    setCount(c => c + 1);
  };

  const handlePersistFn = usePersistFn(() => {
    setPersistCount(count);
  });

  const handleWithoutFn = React.useCallback(() => {
    setNoPersistCount(count);
  }, []);

  return (
    <>
      <p>
        <Button type="default" onClick={handleAdd}>
          add
        </Button>
      </p>
      <div>
        <p>count: {persistCount}</p>
        <Button
          type="default"
          onClick={handlePersistFn}
          style={{ marginBottom: 16 }}
        >
          persistFn
        </Button>
      </div>
      <div>
        <p>count: {noPersistCount}</p>
        <Button type="default" onClick={handleWithoutFn}>
          withoutPersistFn
        </Button>
      </div>
    </>
  );
}

export default Demo;
