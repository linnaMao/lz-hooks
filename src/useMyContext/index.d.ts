import { TResult } from './type';
declare function createContext<V>(useValue: () => V): TResult<V>;
export default createContext;
