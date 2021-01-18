export declare type TCb = (state: any) => any;
export interface IUseCbState {
  /** 获取的值 */
  state: any;
  /** 设置state，第二个参数可以进行回调，获取最新的state */
  setCbState: (state: any) => void;
}
declare const useCbState: (value: any) => any[];
export default useCbState;
