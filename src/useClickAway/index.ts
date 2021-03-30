import { useEffect } from 'react';

const useClickAway = (cb: () => void, ref: any) => {
  return useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current?.contains(e.target)) return;
      cb();
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [cb, ref]);
};

export default useClickAway;
