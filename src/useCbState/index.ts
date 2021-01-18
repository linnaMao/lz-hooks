import * as React from 'react';
import { usePersistFn } from '..';

export type TCb = (state: any) => any;

export interface IUseCbState {
  /** 获取的值 */
  state: any;
  /** 设置state，第二个参数可以进行回调，获取最新的state */
  setCbState: (state: any) => void;
}

const useCbState = (value: any) => {
  const [state, setState] = React.useState(value);
  const ref = React.useRef<TCb | undefined>();

  const setCbState = usePersistFn((value: any, cb: any) => {
    ref.current = cb;
    setState(value);
  });

  React.useEffect(() => {
    if (ref.current) {
      ref.current?.(state);
    }
  }, [state]);

  return [state, setCbState];
};

export default useCbState;
