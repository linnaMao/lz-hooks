export declare type TCb<T> = (state: T) => void;
export declare type TUseCbState<T> = {
  /** 获取的值 */
  state: T;
  /** 设置state，第二个参数可以进行回调，获取最新的state */
  setCbState: (state: T, cb: TCb<T>) => void;
};
declare const useCbState: <T>(value: T) => TUseCbState<T>;
export default useCbState;
