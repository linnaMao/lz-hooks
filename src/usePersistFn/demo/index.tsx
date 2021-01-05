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
      <p>
        <p>
          <p>count: {persistCount}</p>
          <Button type="default" onClick={handlePersistFn}>
            persistFn
          </Button>
        </p>
        <p>
          <p>count: {noPersistCount}</p>
          <Button type="default" onClick={handleWithoutFn}>
            withoutPersistFn
          </Button>
        </p>
      </p>
    </>
  );
}

export default Demo;
