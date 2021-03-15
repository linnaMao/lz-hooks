import * as React from 'react';

// 定义对象，防止重建缓存作用
const proxyMap = new Map();

const observe = <T extends object>(initialObj: T, cb: () => void): T => {
  const existingProxy = proxyMap.get(initialObj);

  if (existingProxy) {
    return existingProxy;
  }

  const proxy = new Proxy<T>(initialObj, {
    get: (target, propKey, receiver) => {
      const ret = Reflect.get(target, propKey, receiver);
      // 对象里面还嵌套对象
      return ret && typeof ret === 'object' ? observe(ret, cb) : ret;
    },
    set: (target, propKey, receiver) => {
      // 强制渲染，能够强制进行设置
      cb();
      return Reflect.set(target, propKey, receiver);
    },
  });

  proxyMap.set(initialObj, proxy);

  return proxy;
};

// 传入初始值，利用proxy设置操作代理对象，最终返回这个代理对象。
const useReactive = <T extends object>(initialObj: T) => {
  // 强制渲染
  const [, setState] = React.useState({});
  const stateRef = React.useRef<T>(initialObj);
  const state = React.useMemo(() => {
    return observe(stateRef.current, () => {
      setState({});
    });
  }, []);
  return state;
};

export default useReactive;
