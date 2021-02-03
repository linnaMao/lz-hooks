import * as React from 'react';

/** 强制渲染更新 */
const useUpdate = () => {
  const [, setState] = React.useState({});

  return React.useCallback(() => {
    setState({});
  }, []);
};

export default useUpdate;
