declare const useInterval: (
  fn: () => void,
  delay: number,
  options?:
    | {
        immediate: boolean;
      }
    | undefined,
) => {
  run: boolean;
  cancel: () => void;
  start: () => void;
};
export default useInterval;
