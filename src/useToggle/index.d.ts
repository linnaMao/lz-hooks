declare type TState = boolean | string | number | undefined;
interface IActions<T = TState> {
  toggle: (v?: T) => void;
  setLeft: () => void;
  setRight: () => void;
}
declare function useToggle<T = TState, U = TState>(
  deafultValue: T,
  reverseValue: U,
): [T | U, IActions<T | U>];
export default useToggle;
