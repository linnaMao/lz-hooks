import * as React from 'react';
import { Spin, Button, Input, message } from 'antd';
import useRequest from '..';

const getList = () => {
  return new Promise(res => {
    setTimeout(() => {
      res('第一个请求');
    }, 1000);
  });
};
const getData = (name: string) => {
  return new Promise(res => {
    setTimeout(() => {
      res(name);
    }, 2000);
  });
};

const getYear = () => {
  return new Promise(res => {
    setTimeout(() => {
      res('第三个请求');
    }, 3000);
  });
};

const getAll = (name: string) => {
  return Promise.all([getList(), getData(name), getYear()]);
};
const Demo: React.FC = () => {
  const { loading, data, start } = useRequest(getData, {
    manual: false,
    onSuccess: res => {
      if (res) {
        setValue(''), message.success(`The username was changed to "${res}" !`);
      }
    },
  });
  const [value, setValue] = React.useState(data as string | '');

  const handleClick = () => {
    // start(value)
  };

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Spin spinning={loading}>
      <Input value={value} onChange={handleChange} />
      <Button onClick={handleClick}>click</Button>
    </Spin>
  );
};

export default Demo;
