'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Colors = require('styles/Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  modalHeader: {
    margin: 0,
    padding: '24px 24px 20px',
    fontSize: 22,
    fontWeight: 400,
    borderBottom: '1px solid ' + _Colors2.default.borderColor
  },
  modalBody: {
    padding: '24px'
  },
  modalFooter: {
    padding: '10px 20px',
    borderTop: '1px solid ' + _Colors2.default.borderColor
  }
};