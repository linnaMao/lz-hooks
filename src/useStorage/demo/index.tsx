import * as React from 'react';
import { Button } from 'antd';
import { useStorage } from 'lz-hooks';

const Demo: React.FC = () => {
  const [info, setInfo, removeInfo] = useStorage('info', 'localStorage');
  const data = {
    name: 'mlz',
    age: 18,
  };

  return (
    <>
      <>
        <Button onClick={() => setInfo(data)}>存储数据</Button>
        <Button onClick={() => removeInfo()} style={{ margin: '0 16px' }}>
          删除数据
        </Button>
      </>
    </>
  );
};

export default Demo;
