import * as React from 'react';
import { Button } from 'antd';
import { useStorage } from 'lz-hooks';

const Demo: React.FC = () => {
  const [info, setInfo, removeInfo] = useStorage('info', 'session');

  const onSave = () => {
    const info = {
      name: 'mlz',
      age: 18,
    };

    setInfo(info);
  };

  const onRemove = () => {
    removeInfo();
  };

  return (
    <>
      <Button onClick={onSave}>点击存储数据</Button>
      <Button onClick={onRemove} style={{ margin: '0 16px' }}>
        点击删除数据
      </Button>
    </>
  );
};

export default Demo;
