import * as React from 'react';

type TWay = 'sessionStorage' | 'localStorage';

const useStorage = (name: string, way: TWay) => {
  // 定义state，获取初始值
  const [state, setState] = React.useState(() => {
    return JSON.parse(window[way].getItem(name || '{}') as string);
  });

  // 改变数据
  const newSetState = (state: any) => {
    window[way].setItem(name, JSON.stringify(state));
    setState(state);
  };

  // 删除数据
  const removeState = () => {
    window[way].removeItem(name);
  };

  return [state, newSetState, removeState];
};

export default useStorage;
