'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _indexNative = require('react-swipeable-views/lib/index.native.animated');

var _indexNative2 = _interopRequireDefault(_indexNative);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var paginationSize = 0;

var SwipeableWithPagination = function (_Component) {
  _inherits(SwipeableWithPagination, _Component);

  function SwipeableWithPagination(props) {
    _classCallCheck(this, SwipeableWithPagination);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SwipeableWithPagination).call(this, props));

    _this.state = {
      length: 0,
      index: 0
    };
    _this.onChangeIndex = _this.onChangeIndex.bind(_this);
    return _this;
  }

  _createClass(SwipeableWithPagination, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ length: this.props.children.length });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        null,
        _react2.default.createElement(
          _indexNative2.default,
          { onChangeIndex: this.onChangeIndex },
          this.props.children
        ),
        _react2.default.createElement(_Pagination2.default, {
          length: this.props.children.length,
          index: this.state.index,
          paginationStyle: this.props.pagination || [styles.pagination],
          dots: this.props.dots || styles.dots,
          getPaginationDimensions: this.props.getPaginationDimensions })
      );
    }
  }, {
    key: 'onChangeIndex',
    value: function onChangeIndex(index) {
      this.setState({ index: index });
    }
  }]);

  return SwipeableWithPagination;
}(_react.Component);

exports.default = SwipeableWithPagination;


var styles = _reactNative.StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5
  }
});