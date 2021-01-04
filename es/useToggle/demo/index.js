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
import { Button } from 'antd';
import useToggle from 'lz-hooks';

var Demo = function Demo() {
  var _useToggle = useToggle('Hello', 'World'),
    _useToggle2 = _slicedToArray(_useToggle, 2),
    state = _useToggle2[0],
    _useToggle2$ = _useToggle2[1],
    toggle = _useToggle2$.toggle,
    setLeft = _useToggle2$.setLeft,
    setRight = _useToggle2$.setRight;

  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement('div', null, 'name: ', state),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          display: 'flex',
          marginLeft: 10,
        },
      },
      /*#__PURE__*/ React.createElement(
        Button,
        {
          onClick: function onClick() {
            return toggle();
          },
        },
        'Toggle',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          onClick: function onClick() {
            return toggle('Hello');
          },
        },
        'Toggle Hello',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          onClick: function onClick() {
            return toggle('World');
          },
        },
        'Toggle World',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          onClick: function onClick() {
            return setLeft();
          },
        },
        'set Hello',
      ),
      /*#__PURE__*/ React.createElement(
        Button,
        {
          onClick: function onClick() {
            return setRight();
          },
        },
        'set World',
      ),
    ),
  );
};

export default Demo;
