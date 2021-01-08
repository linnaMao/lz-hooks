import * as React from 'react';

const proxyMap = new Map();

const observe = <T extends object>(initialObj: T, cb: () => void): T => {
  const existingProxy = proxyMap.get(initialObj);
  // 防止重新构建缓存
  if (existingProxy) {
    return existingProxy;
  }

  const proxy = new Proxy<T>(initialObj, {
    get: (target, propKey, receiver) => {
      const ret = Reflect.get(target, propKey, receiver);
      return typeof ret === 'object' ? observe(ret, cb) : ret;
    },
    set: (target, propKey, receiver) => {
      cb();
      return Reflect.set(target, propKey, receiver);
    },
  });

  proxyMap.set(initialObj, proxy);
  return proxy;
};

const useReactive = <T extends object>(initialObj: T) => {
  const [, setFlag] = React.useState({});
  const stateRef = React.useRef<T>(initialObj);

  // const state = React.useMemo(() => {
  //   return observe(stateRef.current, () => {
  //     setFlag({})
  //   })
  // }, [])

  return observe(stateRef.current, () => {
    setFlag({});
  });
};

export default useReactive;
