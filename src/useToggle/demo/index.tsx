import * as React from 'react';
import { Button } from 'antd';
import { useToggle } from 'lz-hooks';

const Demo = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle('Pyc', 'Mlz');
  return (
    <>
      <p>name: {state}</p>
      <p style={{ display: 'flex' }}>
        <Button onClick={() => toggle()}>Toggle</Button>
        <Button onClick={() => toggle('Pyc')} style={{ margin: '0 16px' }}>
          Toggle Pyc
        </Button>
        <Button onClick={() => toggle('Mlz')}>Toggle Mlz</Button>
        <Button onClick={() => setLeft()} style={{ margin: '0 16px' }}>
          set Pyc
        </Button>
        <Button onClick={() => setRight()}>set Mlz</Button>
      </p>
    </>
  );
};

export default Demo;
