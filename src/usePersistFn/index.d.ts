export declare type Fn = (...args: any[]) => any;
declare function usePersistFn<T extends Fn>(fn: T): T;
export default usePersistFn;
