'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Pagination).call(this, props));

    _this.onLayout = _this.onLayout.bind(_this);
    return _this;
  }

  _createClass(Pagination, [{
    key: 'render',
    value: function render() {
      var result = [];
      for (var i = 0; i < this.props.length; i = i + 1) {
        if (this.props.index == i) {
          result.push(_react2.default.createElement(_reactNative.Image, { source: require('./active.png'), style: this.props.dots, key: i }));
        } else {
          result.push(_react2.default.createElement(_reactNative.Image, { source: require('./inactive.png'), style: this.props.dots, key: i }));
        }
      }
      return _react2.default.createElement(
        _reactNative.View,
        { style: this.props.paginationStyle, onLayout: this.onLayout },
        result
      );
    }
  }, {
    key: 'onLayout',
    value: function onLayout(event) {
      if (this.props.getPaginationDimensions) {
        this.props.getPaginationDimensions(event.nativeEvent.layout);
      }
    }
  }]);

  return Pagination;
}(_react.Component);

exports.default = Pagination;