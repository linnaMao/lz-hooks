import * as React from 'react';

const useScrollMore = (
  ref: React.MutableRefObject<HTMLDivElement>,
  cb: () => void,
  deps: any[],
) => {
  return React.useEffect(() => {
    const current = ref.current;
    const handleScroll = () => {
      const pBottom = current.getBoundingClientRect().bottom;
      const sBottom = current.firstElementChild?.getBoundingClientRect().bottom;
      const sMargin = parseInt(
        window.getComputedStyle(current.firstElementChild as Element)
          .marginBottom,
      );
      if (pBottom === sBottom! + sMargin) {
        cb();
      }
    };

    current?.addEventListener('scroll', handleScroll);

    return () => {
      current?.removeEventListener('scroll', handleScroll);
    };
  }, [...deps]);
};

export default useScrollMore;
