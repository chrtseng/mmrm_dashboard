"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
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
var SuffixText = _styledComponents.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 21px;\n  color: #888888;\n"])));
var SectionHeader = function SectionHeader(_ref2) {
  var children = _ref2.children,
    fontSize = _ref2.fontSize,
    lineHeight = _ref2.lineHeight,
    suffix = _ref2.suffix;
  return /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: "middle"
  }, /*#__PURE__*/_react.default.createElement(Heading, {
    fontSize: fontSize,
    lineHeight: lineHeight
  }, ' ', children, ' '), suffix && /*#__PURE__*/_react.default.createElement(SuffixText, null, suffix));
};
SectionHeader.propTypes = {
  children: _propTypes.default.node,
  fontSize: _propTypes.default.number,
  lineHeight: _propTypes.default.number,
  suffix: _propTypes.default.string
};
SectionHeader.defaultProps = {
  children: null,
  fontSize: null,
  lineHeight: null,
  suffix: null
};
var _default = SectionHeader;
exports.default = _default;