import * as React from 'react';
import usePersistFn from '../usePersistFn';

const useValue = (initialValue: any) => {
  const [value, setValue] = React.useState(initialValue);
  const setPartValue = usePersistFn(_value => {
    setValue(Object.assign({}, value, _value));
  });

  const setAllValue = usePersistFn((_value?) => {
    setValue(_value || initialValue);
  });

  return [value, setAllValue, setPartValue];
};

export default useValue;
