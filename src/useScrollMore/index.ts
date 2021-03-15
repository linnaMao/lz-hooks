import * as React from 'react';

const useScrollMore = (
  ele: HTMLElement,
  sExtraB: number,
  cb: () => void,
  deps: any[],
) => {
  return React.useEffect(() => {
    const handleScroll = () => {
      const pBottom = ele.getBoundingClientRect().bottom;
      const sBottom = ele.firstElementChild?.getBoundingClientRect().bottom;
      if (pBottom === sBottom! + sExtraB) {
        cb();
      }
    };

    ele?.addEventListener('scroll', handleScroll);

    return () => {
      ele?.removeEventListener('scroll', handleScroll);
    };
  }, [...deps]);
};

export default useScrollMore;
