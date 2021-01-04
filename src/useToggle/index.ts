import * as React from 'react';

type TState = boolean | string | number | undefined;

interface IActions<T = TState> {
  toggle: (v?: T) => void;
  setLeft: () => void;
  setRight: () => void;
}

function useToggle<T = TState, U = TState>(
  deafultValue: T,
  reverseValue: U,
): [T | U, IActions<T | U>];
// function useToggle<T = boolean>(): [boolean, IActions<T>]
// function useToggle<T = TState>(defaultValue: T): [T, IActions<T>]

function useToggle<T extends TState = TState, U extends TState = TState>(
  defaultValue: T = false as T,
  reverseValue: U,
) {
  const [state, setState] = React.useState<T | U>(defaultValue);

  const actions = React.useMemo(() => {
    const reverseValueOrigin = (!reverseValue
      ? !defaultValue
      : reverseValue) as T | U;

    // 切换 | 强制设置某一值
    const toggle = (value?: T | U) => {
      if (value) {
        setState(value);
        return;
      }
      setState(c => (c === defaultValue ? reverseValueOrigin : defaultValue));
    };

    // 默认值
    const setLeft = () => setState(defaultValue);
    // 取反值
    const setRight = () => setState(reverseValueOrigin);

    return {
      toggle,
      setLeft,
      setRight,
    };
  }, [defaultValue, reverseValue]);

  return [state, actions];
}

export default useToggle;
