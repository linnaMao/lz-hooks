export declare type TCb<T> = (state: T) => void;
export declare type TState<T> = T;
export declare type TSetCbState<T> = (state: T, cb: TCb<T>) => void;
export declare type TUseCbState<T> = [
  /** 获取的值 */
  TState<T>,
  /** 设置state，第二个参数可以进行回调，获取最新的state */
  TSetCbState<T>,
];
