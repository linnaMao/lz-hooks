import * as React from 'react';
import { Button } from 'antd';
import { useStorage } from 'lz-hooks';

const Demo: React.FC = () => {
  const [info, setInfo, removeInfo] = useStorage('info', 'session');
  const [localInfo, setLocalInfo, removeLocalInfo] = useStorage(
    'info',
    'local',
  );
  const data = {
    name: 'mlz',
    age: 18,
  };

  return (
    <>
      <>
        <Button onClick={() => setInfo(data)}>session存储数据</Button>
        <Button onClick={() => removeInfo()} style={{ margin: '0 16px' }}>
          session删除数据
        </Button>
      </>
      <>
        <Button onClick={() => setLocalInfo(data)}>local存储数据</Button>
        <Button onClick={() => removeLocalInfo()} style={{ margin: '0 16px' }}>
          local删除数据
        </Button>
      </>
    </>
  );
};

export default Demo;
