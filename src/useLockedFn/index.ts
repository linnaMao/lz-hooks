import * as React from 'react';
import { usePersistFn } from '..';

export type TFn = (...args: any[]) => Promise<void>;

const useLockedFn = (fn: TFn) => {
  const ref = React.useRef<boolean>(false);

  return usePersistFn(async (...args: any[]) => {
    if (ref.current) return 0;
    ref.current = true;
    try {
      const ret = await fn(...args);
      ref.current = false;
      return ret;
    } catch (error) {
      ref.current = false;
      throw error;
    }
  });
};

export default useLockedFn;
