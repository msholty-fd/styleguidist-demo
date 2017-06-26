'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Colors = require('../Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  border: '2px solid ' + _Colors2.default.inputBorderColor,
  height: '40px',
  boxSizing: 'border-box',
  paddingLeft: 5,
  paddingRight: 0,
  fontSize: 14,
  lineHeight: 0
};