'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styles = require('styles');

var _Colors = require('styles/Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  button: {
    width: 50,
    height: 27,
    marginTop: 7,
    padding: 7,
    background: _Colors2.default.basicButton,
    borderRadius: 3
  },
  icon: {
    width: 14,
    height: 14,
    color: _styles.Theme.palette.alternateTextColor
  }
};