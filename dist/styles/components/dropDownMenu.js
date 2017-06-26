'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Colors = require('../Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  root: {
    borderRadius: 3,
    background: '' + _Colors2.default.basicButton,
    lineHeight: 40,
    height: 40
  },
  underline: {
    border: 0
  },
  icon: {
    padding: '8px 0 0 20px',
    width: 40,
    height: 40,
    top: 0
  },
  label: {
    lineHeight: '40px',
    color: '' + _Colors2.default.white,
    paddingRight: 40,
    maxWidth: 150
  }
};