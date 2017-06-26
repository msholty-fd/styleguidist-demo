'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Colors = require('../styles/Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  base: {
    color: 'white',
    border: '1px solid ' + _Colors2.default.basicButtonBorder,
    outline: 'none',
    padding: '0 10px',
    height: 33,
    textAlign: 'center',
    lineHeight: '32px',
    fontSize: 13,
    display: 'inline-block',
    background: '' + _Colors2.default.basicButton
  },
  icon: {
    color: '' + _Colors2.default.basicButtonText,
    lineHeight: 2.1,
    fontSize: 16
  }
};