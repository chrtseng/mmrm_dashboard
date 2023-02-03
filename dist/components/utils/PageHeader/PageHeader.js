"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var LineBlock = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-left: 15px;\n  width: 100%;\n  height: 1.5px;\n  background-color: rgba(21, 73, 134, 0.1);\n"])));
var Heading = _styledComponents.default.h1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  color: #788195;\n  font-weight: 500;\n  line-height: 40px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding-left: 15px;\n  white-space: nowrap;\n\n  &:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    height: 100%;\n    width: 5px;\n    background-color: #e4e6e9;\n  }\n"])));
var PageHeader = function PageHeader(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(Heading, null, children, /*#__PURE__*/_react.default.createElement(LineBlock, null));
};
PageHeader.propTypes = {
  children: _propTypes.default.node
};
PageHeader.defaultProps = {
  children: null
};
var _default = PageHeader;
exports.default = _default;