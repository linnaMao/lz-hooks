export declare type TFn = (...args: any[]) => Promise<void>;
declare const useLockedFn: (fn: TFn) => (...args: any[]) => Promise<void | 0>;
export default useLockedFn;
