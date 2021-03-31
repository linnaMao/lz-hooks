import { useEffect, useRef } from 'react';

const useClickAway = (onClickAway: () => void, refs: any) => {
  return useEffect(() => {
    const handleClick = (e: any) => {
      const targetArr = Array.isArray(refs) ? refs : [refs];
      const clickAway = targetArr.find(i => i.current.contains(e.target));
      if (!clickAway) {
        onClickAway();
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [onClickAway, refs]);
};

export default useClickAway;
