import * as React from 'react';
import { Button } from 'antd';
import useToggle from '../index';

const Demo = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle('Hello', 'World');
  return (
    <>
      <p>name: {state}</p>
      <p style={{ display: 'flex' }}>
        <Button onClick={() => toggle()}>Toggle</Button>
        <Button onClick={() => toggle('Hello')} style={{ margin: '0 16px' }}>
          Toggle Hello
        </Button>
        <Button onClick={() => toggle('World')}>Toggle World</Button>
        <Button onClick={() => setLeft()} style={{ margin: '0 16px' }}>
          set Hello
        </Button>
        <Button onClick={() => setRight()}>set World</Button>
      </p>
    </>
  );
};

export default Demo;
