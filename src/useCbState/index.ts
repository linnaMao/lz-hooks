import * as React from 'react';
import { usePersistFn } from '..';

export type TCb = (state: any) => any;

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
