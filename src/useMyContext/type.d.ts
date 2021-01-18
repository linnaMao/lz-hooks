import * as React from 'react';
export declare type TContentHookFunction<V> = () => V;
export declare type TWithProvider = <P>(
  Wrapped: React.ComponentType<P>,
) => React.FC<P>;
export declare type TResult<V> = [TContentHookFunction<V>, TWithProvider];
