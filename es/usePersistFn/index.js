import * as React from 'react'; // 持久化函数：引用不变，但是可以获取到最新值

function usePersistFn(fn) {
  var ref = React.useRef(fn);
  ref.current = fn;
  return React.useCallback(function() {
    var _ref$current;

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (_ref$current = ref.current) === null || _ref$current === void 0
      ? void 0
      : _ref$current.call.apply(_ref$current, [ref].concat(args));
  }, []); // const persistFn = React.useRef<T>()
  // if (!persistFn.current) {
  //   persistFn.current = function(...args) {
  //     ref.current!.apply(this, args)
  //   } as T
  // }
  // return persistFn.current!
}

export default usePersistFn;
