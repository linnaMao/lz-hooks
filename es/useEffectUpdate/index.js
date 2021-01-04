import * as React from 'react'; // 只在依赖更新的时候执行

var useEffectUpdate = function useEffectUpdate(effects, deps) {
  var isMounted = React.useRef(false);
  React.useEffect(function() {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effects();
    }
  }, deps);
};

export default useEffectUpdate;
