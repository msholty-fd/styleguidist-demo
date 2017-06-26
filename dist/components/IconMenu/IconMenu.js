'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconMenu = require('material-ui/IconMenu');

var _IconMenu2 = _interopRequireDefault(_IconMenu);

var _list = require('../../styles/components/list');

var _list2 = _interopRequireDefault(_list);

var _menu = require('../../styles/components/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = _extends({}, _IconMenu2.default.propTypes);

var getStyles = function getStyles(props) {
  return {
    menu: Object.assign({}, _menu2.default, props.menuStyle),
    list: Object.assign({}, _list2.default, props.listStyle)
  };
};

var SharpspringIconMenu = function SharpspringIconMenu(props) {
  var styles = getStyles(props);

  return _react2.default.createElement(
    _IconMenu2.default,
    _extends({}, props, {
      menuStyle: styles.menu,
      listStyle: styles.list
    }),
    props.children
  );
};

SharpspringIconMenu.propTypes = propTypes;

exports.default = SharpspringIconMenu;