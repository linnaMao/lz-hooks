import * as React from 'react';

// 只在依赖更新的时候执行，第一次不更新
const useEffectUpdate: typeof React.useEffect = (effects, deps) => {
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effects();
    }
  }, deps);
};

export default useEffectUpdate;
