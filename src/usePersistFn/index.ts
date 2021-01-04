import * as React from 'react';

// 持久化函数：引用不变，但是可以获取到最新值

export type Fn = (...args: any[]) => any;

function usePersistFn<T extends Fn>(fn: T) {
  const ref = React.useRef<T | undefined>(fn);
  ref.current = fn;

  return React.useCallback((...args: any[]) => ref.current?.(...args), []) as T;

  // const persistFn = React.useRef<T>()

  // if (!persistFn.current) {
  //   persistFn.current = function(...args) {
  //     ref.current!.apply(this, args)
  //   } as T
  // }

  // return persistFn.current!
}

export default usePersistFn;
