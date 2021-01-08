import * as React from 'react';
import { Input, Card } from 'antd';
import { useReactive } from 'lz-hooks';

const Demo2: React.FC = () => {
  const state = useReactive({
    value: '',
    data: {
      value: '',
    },
  });
  return (
    <>
      <Card style={{ width: 400 }}>
        <p>state.value值：{state.value}</p>
        <Input
          value={state.value}
          onChange={e => (state.value = e.target.value)}
        />
      </Card>
      <Card style={{ width: 400, marginTop: 16 }}>
        <p>state.data.value值：{state.data.value}</p>
        <Input
          value={state.data.value}
          onChange={e => (state.data.value = e.target.value)}
          width="100px"
        />
      </Card>
    </>
  );
};

export default Demo2;
