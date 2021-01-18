import * as React from 'react';
import { TContentHookFunction, TWithProvider, TResult } from './type';

// 传入函数，返回一个获取值得useContext和高阶函数（相当于Provider）

const DEFAULT_CONTEXT_VALUE = '_dcv_' as any;

function createUseContext<T>(
  context: React.Context<T>,
): TContentHookFunction<T> {
  return () => {
    const value = React.useContext<T>(context);
    return value;
  };
}

function createContext<V>(useValue: () => V): TResult<V> {
  const Context = React.createContext<V>(DEFAULT_CONTEXT_VALUE as V);

  const withProvider: TWithProvider = Wrapped => props => {
    const value = useValue();
    return (
      <Context.Provider value={value}>
        <Wrapped {...props} />
      </Context.Provider>
    );
  };

  return [createUseContext<V>(Context), withProvider];
}

export default createContext;
