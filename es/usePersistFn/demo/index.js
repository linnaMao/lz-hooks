function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

import * as React from 'react';
import usePersistFn from 'lz-hooks';

function Demo() {
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    count = _React$useState2[0],
    setCount = _React$useState2[1];

  var _React$useState3 = React.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    persistCount = _React$useState4[0],
    setPersistCount = _React$useState4[1];

  var _React$useState5 = React.useState(0),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    noPersistCount = _React$useState6[0],
    setNoPersistCount = _React$useState6[1];

  var handleAdd = function handleAdd() {
    setCount(function(c) {
      return c + 1;
    });
  };

  var handlePersistFn = usePersistFn(function() {
    setPersistCount(count);
  });
  var handleWithoutFn = React.useCallback(function() {
    setNoPersistCount(count);
  }, []);
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      'button',
      {
        onClick: handleAdd,
      },
      'add',
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        onClick: handlePersistFn,
      },
      'persistFn: ',
      persistCount,
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        onClick: handleWithoutFn,
      },
      'withoutPersistFn: ',
      noPersistCount,
    ),
  );
}

export default Demo;
