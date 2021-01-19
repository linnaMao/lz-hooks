import * as React from 'react';
import { usePersistFn } from '..';
import { TCb, TUseCbState } from './type';

function useCbState<T>(value: T): TUseCbState<T> {
  const [state, setState] = React.useState<T>(value);
  const ref = React.useRef<TCb<T> | undefined>();

  const setCbState = usePersistFn((value, cb) => {
    ref.current = cb;
    setState(value);
  });

  React.useEffect(() => {
    if (ref.current) {
      ref.current?.(state);
    }
  }, [state]);

  return [state, setCbState];
}

export default useCbState;
