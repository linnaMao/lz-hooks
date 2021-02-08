import * as React from 'react';
import useStorage from '..';

const useSessionStorage = (name: string) => {
  return useStorage(name, 'sessionStorage');
};

export default useSessionStorage;
