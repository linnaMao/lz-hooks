import * as React from 'react';
import usePersistFn from '../usePersistFn';

const useInterval = (
  fn: () => void,
  delay: number,
  options?: { immediate: boolean },
): {
  run: boolean;
  cancel: () => void;
  start: () => void;
} => {
  // 设置
  const [run, setRun] = React.useState<boolean>(!!options?.immediate);
  const id = React.useRef<any>(0);
  const persistFn = usePersistFn(fn);

  const start = usePersistFn(() => {
    if (id.current === 0) {
      setRun(true);
      id.current = setInterval(persistFn, delay);
    }
  });

  const cancel = usePersistFn(() => {
    setRun(false);
    clearInterval(id.current);
    id.current = 0;
  });

  React.useEffect(() => {
    if (options?.immediate) {
      start();
    }
    return () => {
      cancel();
    };
  }, [options?.immediate, start, cancel]);

  return { run, start, cancel };
};

export default useInterval;
