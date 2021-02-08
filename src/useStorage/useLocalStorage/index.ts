import * as React from 'react';
import useStorage from '..';

const useLocalStorage = (name: string) => {
  return useStorage(name, 'localStorage');
};

export default useLocalStorage;
