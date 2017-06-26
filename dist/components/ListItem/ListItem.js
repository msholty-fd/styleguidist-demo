'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('material-ui/List');

var _Colors = require('../../styles/Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _react.PropTypes.node,
  props: _react.PropTypes.array
};

var styles = {
  color: '' + _Colors2.default.linkColor,
  borderBottom: '1px solid ' + _Colors2.default.borderColor
};

var SHSPListItem = function SHSPListItem(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    _List.ListItem,
    _extends({}, props, {
      disableTouchRipple: true,
      style: styles
    }),
    children
  );
};

SHSPListItem.propTypes = propTypes;

exports.default = SHSPListItem;