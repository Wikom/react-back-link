"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _reactRouterRedux = require("react-router-redux");

var _reactSymbol = _interopRequireDefault(require("react-symbol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Created by rouven on 12.04.17.
 */
var BackLink = function BackLink(_ref) {
  var children = _ref.children,
      className = _ref.className,
      goBack = _ref.goBack;
  return _react["default"].createElement("button", {
    className: className,
    onClick: goBack
  }, children);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    goBack: function goBack(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      return dispatch((0, _reactRouterRedux.goBack)());
    }
  };
};

var BackLinkContainer = (0, _reactRedux.connect)(null, mapDispatchToProps)(BackLink);
BackLinkContainer.defaultProps = {
  children: _react["default"].createElement("span", null, _react["default"].createElement(_reactSymbol["default"], {
    symbol: "arrow-circle-left"
  }), " zur\xFCck"),
  className: 'btn btn-primary'
};
BackLinkContainer.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string
};
var _default = BackLinkContainer;
exports["default"] = _default;