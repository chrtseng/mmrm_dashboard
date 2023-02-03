"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Heading = _styledComponents.default.div(function (_ref) {
  var fontSize = _ref.fontSize,
    lineHeight = _ref.lineHeight;
  return {
    fontSize: "".concat(fontSize || 20, "px"),
    fontWeight: 500,
    lineHeight: "".concat(lineHeight || 23, "px"),
    color: '#292929'
  };
});
var SectionHeader = function SectionHeader(_ref2) {
  var children = _ref2.children,
    fontSize = _ref2.fontSize,
    lineHeight = _ref2.lineHeight;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(Heading, {
    fontSize: fontSize,
    lineHeight: lineHeight
  }, ' ', children, ' '), /*#__PURE__*/_react.default.createElement("span", null, "\u6700\u5F8C\u66F4\u65B0\u6642\u9593\uFF1A 2023/02/03 23:59:59"));
};
SectionHeader.propTypes = {
  children: _propTypes.default.node,
  fontSize: _propTypes.default.number,
  lineHeight: _propTypes.default.number
};
SectionHeader.defaultProps = {
  children: null,
  fontSize: 16,
  lineHeight: 20
};
var _default = SectionHeader;
exports.default = _default;