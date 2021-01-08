export declare type TFn = (...args: any[]) => Promise<any>;
declare const useLockedFn: (fn: TFn) => (...args: any[]) => Promise<any>;
export default useLockedFn;
