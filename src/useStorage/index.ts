import * as React from 'react';

type TWay = 'session' | 'local';

const useStorage = (name: string, way: string) => {
  const newWay = way === 'session' ? 'sessionStorage' : 'localStorage';
  // 定义state，获取初始值
  const [state, setState] = React.useState(() => {
    return JSON.parse(window[newWay].getItem(name || '{}') as string);
  });

  // 改变数据
  const newSetState = (state: any) => {
    window[newWay].setItem(name, JSON.stringify(state));
    setState(state);
  };

  // 删除数据
  const removeState = () => {
    window[newWay].removeItem(name);
  };

  return [state, newSetState, removeState];
};

export default useStorage;
