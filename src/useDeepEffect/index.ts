import * as React from 'react';
import { isEqual } from 'lodash';

const useDeepEffect = <T>(fn: React.EffectCallback, deps: T) => {
  const renderRef = React.useRef<number>(0);
  const depsRef = React.useRef<T>(deps);
  console.log('depRef :>> ', depsRef.current, deps);
  if (!isEqual(deps, depsRef.current)) {
    renderRef.current++;
  }

  depsRef.current = deps;
  return React.useEffect(fn, [renderRef.current]);
};

export default useDeepEffect;
