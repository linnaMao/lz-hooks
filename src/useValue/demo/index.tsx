import * as React from 'react';
import { Button } from 'antd';
import useValue from '..';

const Index: React.FC = () => {
  const [value, setValue, setPartValue] = useValue({ name: 'mlz', age: 18 });
  return (
    <>
      <p>{value.name}</p>
      <p>{value.age}</p>
      <Button
        onClick={() => {
          setPartValue({ name: 'pyc' });
        }}
      >
        update
      </Button>
      <Button onClick={() => setValue()}>change</Button>
    </>
  );
};

export default Index;
