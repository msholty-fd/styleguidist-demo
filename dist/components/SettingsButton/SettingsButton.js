'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _settings = require('material-ui/svg-icons/action/settings');

var _settings2 = _interopRequireDefault(_settings);

var _arrowDropDown = require('material-ui/svg-icons/navigation/arrow-drop-down');

var _arrowDropDown2 = _interopRequireDefault(_arrowDropDown);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _Theme = require('../../styles/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

var _styles = require('../../styles');

var _Colors = require('../../styles/Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
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

var SettingsButton = function (_React$Component) {
  _inherits(SettingsButton, _React$Component);

  function SettingsButton() {
    _classCallCheck(this, SettingsButton);

    return _possibleConstructorReturn(this, (SettingsButton.__proto__ || Object.getPrototypeOf(SettingsButton)).apply(this, arguments));
  }

  _createClass(SettingsButton, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { muiTheme: (0, _getMuiTheme2.default)(_Theme2.default) };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _IconButton2.default,
        {
          iconStyle: styles.icon,
          style: styles.button,
          disableTouchRipple: true
        },
        _react2.default.createElement(_settings2.default, null),
        _react2.default.createElement(_arrowDropDown2.default, null)
      );
    }
  }]);

  return SettingsButton;
}(_react2.default.Component);

SettingsButton.childContextTypes = {
  muiTheme: _propTypes2.default.object.isRequired
};
exports.default = SettingsButton;