export type TCb<T> = (state: T) => void;

export type TState<T> = T;

export type TSetCbState<T> = (state: T, cb: TCb<T>) => void;

export type TUseCbState<T> = [
  /** 获取的值 */
  TState<T>,
  /** 设置state，第二个参数可以进行回调，获取最新的state */
  TSetCbState<T>,
];
