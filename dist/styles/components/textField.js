'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Colors = require('../Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  underlineFocus: {
    boxSizing: 'border-box',
    height: '40px',
    top: 0,
    border: '2px solid ' + _Colors2.default.linkColor,
    zIndex: '4',
    borderRadius: '3px'
  },
  underline: {
    border: 'none'
  },
  base: {
    boxSizing: 'border-box',
    height: '40px'
  }
};