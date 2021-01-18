import * as React from 'react';

export type TContentHookFunction<V> = () => V;

export type TWithProvider = <P>(Wrapped: React.ComponentType<P>) => React.FC<P>;

export type TResult<V> = [TContentHookFunction<V>, TWithProvider];
