import * as React from 'react';
import { Button } from 'antd';
import { useToggle } from 'lz-hooks';

const Demo = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle('hello', 'world');
  return (
    <>
      <p>name: {state}</p>
      <p style={{ display: 'flex' }}>
        <Button onClick={() => toggle()}>Toggle</Button>
        <Button onClick={() => toggle('hello')} style={{ margin: '0 16px' }}>
          Toggle hello
        </Button>
        <Button onClick={() => toggle('world')}>Toggle world</Button>
        <Button onClick={() => setLeft()} style={{ margin: '0 16px' }}>
          set hello
        </Button>
        <Button onClick={() => setRight()}>set world</Button>
      </p>
    </>
  );
};

export default Demo;
