'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _colors = require('material-ui/styles/colors');

var _Colors = require('./Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var theme = (0, _getMuiTheme2.default)({
  fontFamily: '"Lato", Helvetica, Arial, sans-serif',
  button: {
    textTransform: 'none'
  },
  palette: {
    accent1Color: _Colors.brandColor,
    primary3Color: _colors.grey500,
    textColor: _Colors2.default.textColor,
    headerColor: _Colors2.default.headerColor
  },
  chip: {
    fontSize: 11
  }
});

exports.default = theme;