import * as React from 'react';
import { Button } from 'antd';
import useToggle from 'lz-hooks';

const Demo = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle('Hello', 'World');
  return (
    <>
      <div>name: {state}</div>
      <div style={{ display: 'flex', marginLeft: 10 }}>
        <Button onClick={() => toggle()}>Toggle</Button>
        <Button onClick={() => toggle('Hello')}>Toggle Hello</Button>
        <Button onClick={() => toggle('World')}>Toggle World</Button>
        <Button onClick={() => setLeft()}>set Hello</Button>
        <Button onClick={() => setRight()}>set World</Button>
      </div>
    </>
  );
};

export default Demo;
