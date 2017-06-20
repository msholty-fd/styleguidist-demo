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

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _button = require('styles/components/button');

var _button2 = _interopRequireDefault(_button);

var _ripple = require('styles/components/ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _colors = require('material-ui/styles/colors');

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
    button: Object.assign({}, _button2.default, props.buttonStyle),
    ripple: Object.assign({}, _ripple2.default, props.rippleStyle),
    backgroundColor: props.backgroundColor || _colors.grey500,
    labelColor: props.labelColor || _colors.white
  };
};

var RaisedButton = function (_React$Component) {
  _inherits(RaisedButton, _React$Component);

  function RaisedButton() {
    _classCallCheck(this, RaisedButton);

    return _possibleConstructorReturn(this, (RaisedButton.__proto__ || Object.getPrototypeOf(RaisedButton)).apply(this, arguments));
  }

  _createClass(RaisedButton, [{
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
        _RaisedButton2.default,
        _extends({}, others, {
          buttonStyle: styles.button,
          rippleStyle: styles.ripple,
          backgroundColor: styles.backgroundColor,
          labelColor: styles.labelColor
        }),
        children
      );
    }
  }]);

  return RaisedButton;
}(_react2.default.Component);

RaisedButton.childContextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
;

RaisedButton.propTypes = _RaisedButton2.default.propTypes;

exports.default = RaisedButton;