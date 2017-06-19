'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DropDownMenu = require('material-ui/DropDownMenu');

var _DropDownMenu2 = _interopRequireDefault(_DropDownMenu);

var _list = require('styles/components/list');

var _list2 = _interopRequireDefault(_list);

var _dropDownMenu = require('styles/components/dropDownMenu');

var _dropDownMenu2 = _interopRequireDefault(_dropDownMenu);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _Theme = require('styles/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getStyles = function getStyles(props) {
  return {
    list: Object.assign({}, _list2.default, props.listStyle),
    root: Object.assign({}, _dropDownMenu2.default.root, props.style),
    underline: Object.assign({}, _dropDownMenu2.default.underline, props.underlineStyle),
    label: Object.assign({}, _dropDownMenu2.default.label, props.labelStyle),
    icon: Object.assign({}, _dropDownMenu2.default.icon, props.iconStyle)
  };
};

/**
 * http://www.material-ui.com/#/components/dropdown-menu
 */

var DropDownMenu = function (_React$Component) {
  _inherits(DropDownMenu, _React$Component);

  function DropDownMenu() {
    _classCallCheck(this, DropDownMenu);

    return _possibleConstructorReturn(this, (DropDownMenu.__proto__ || Object.getPrototypeOf(DropDownMenu)).apply(this, arguments));
  }

  _createClass(DropDownMenu, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { muiTheme: (0, _getMuiTheme2.default)(_Theme2.default) };
    }
  }, {
    key: 'render',
    value: function render() {
      var styles = getStyles(this.props);

      var _props = this.props,
          children = _props.children,
          others = _objectWithoutProperties(_props, ['children']);

      return _react2.default.createElement(
        _DropDownMenu2.default,
        _extends({}, others, {
          style: styles.root,
          listStyle: styles.list,
          underlineStyle: styles.underline,
          labelStyle: styles.label,
          iconStyle: styles.icon
        }),
        children
      );
    }
  }]);

  return DropDownMenu;
}(_react2.default.Component);

DropDownMenu.childContextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};


DropDownMenu.propTypes = _DropDownMenu2.default.propTypes;

exports.default = DropDownMenu;