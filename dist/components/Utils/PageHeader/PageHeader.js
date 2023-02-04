"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _pageHeaderModule = _interopRequireDefault(require("./pageHeader.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PageHeader = function PageHeader(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("h2", {
    className: _pageHeaderModule.default.page_title
  }, children, /*#__PURE__*/_react.default.createElement("div", {
    className: _pageHeaderModule.default.lineblock
  }));
};
PageHeader.propTypes = {
  children: _propTypes.default.node
};
PageHeader.defaultProps = {
  children: null
};
var _default = PageHeader;
exports.default = _default;