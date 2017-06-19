'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Colors = require('styles/Colors');

var _Colors2 = _interopRequireDefault(_Colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  DateRange: {
    background: '#ffffff'
  },
  Calendar: {
    background: 'transparent',
    color: '#95a5a6'
  },
  MonthAndYear: {
    color: '#3c3f40',
    fontSize: 18,
    padding: '10px 0px 20px',
    lineHeight: '28px',
    height: 'auto'
  },
  MonthButton: {
    background: 'rgba(0,0,0,0)',
    height: 28,
    width: 38,
    padding: '5px 10px',
    margin: '0 5px',
    border: '1px solid ' + _Colors2.default.chartControlBorder,
    borderRadius: 2
  },
  MonthArrowPrev: {
    width: 9,
    height: 9,
    marginLeft: 0,
    borderWidth: '1px 0 0 1px',
    borderColor: '' + _Colors2.default.chartControlBorder,
    transform: 'rotate(-45deg)',
    position: 'relative',
    left: 5
  },
  MonthArrowNext: {
    width: 9,
    height: 9,
    marginLeft: 0,
    borderWidth: '1px 1px 0 0',
    borderColor: '#94a5a3',
    transform: 'rotate(45deg)',
    position: 'relative',
    left: 1
  },
  Weekday: {
    color: '#757575'
  },
  Day: {
    borderWidth: 0,
    borderStyle: 'double',
    borderColor: '' + _Colors2.default.borderColor,
    transition: 'transform .1s ease, box-shadow .1s ease, background .1s ease',
    color: '#565a5c'
  },
  DaySelected: {
    backgroundColor: '' + _Colors.brandSecondary,
    borderColor: '' + _Colors.brandSecondary,
    opacity: 1
  },
  DayActive: {
    background: '#358c9e',
    boxShadow: 'none'
  },
  DayPassive: {
    width: 0,
    height: 0,
    opacity: 0,
    background: 'rgba(0,0,0,0)',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'rgba(0,0,0,0)',
    borderColor: 'rgba(0,0,0,0)'
  },
  DayInRange: {
    background: '' + _Colors.brandSecondary,
    borderColor: '#358c9e',
    opacity: 0.75,
    color: '#fff',
    boxShadow: 'none'
  },
  DayHover: {
    background: '#eee',
    color: '#565a5c'
  },
  PredefinedRanges: {
    width: 120
  },
  PredefinedRangesItem: {
    margin: '2px 0 2px 2px',
    padding: '9px 14px',
    backgroundColor: '#ecf0f1'
  },
  PredefinedRangesItemActive: {
    color: 'white',
    backgroundColor: '' + _Colors.brandSecondary
  }
};