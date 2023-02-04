"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _sectionHeaderModule = _interopRequireDefault(require("./sectionHeader.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SectionHeader = function SectionHeader(_ref) {
  var children = _ref.children,
    suffix = _ref.suffix;
  return /*#__PURE__*/_react.default.createElement(_antd.Space, {
    size: "middle"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _sectionHeaderModule.default.section_title
  }, children), suffix && /*#__PURE__*/_react.default.createElement("span", {
    className: _sectionHeaderModule.default.suffix
  }, suffix));
};
SectionHeader.propTypes = {
  children: _propTypes.default.node,
  suffix: _propTypes.default.string
};
SectionHeader.defaultProps = {
  children: null,
  suffix: null
};
var _default = SectionHeader;
exports.default = _default;