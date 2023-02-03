"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _PageHeader = _interopRequireDefault(require("../../components/utils/PageHeader"));
var _SectionHeader = _interopRequireDefault(require("../../components/utils/SectionHeader"));
var _OverViewCard = _interopRequireDefault(require("../../components/OverViewCard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var MemberAnalysis = function MemberAnalysis() {
  return /*#__PURE__*/_react.default.createElement(_antd.Layout.Content, null, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    style: {
      width: '100%'
    },
    direction: "vertical",
    size: 20
  }, /*#__PURE__*/_react.default.createElement(_PageHeader.default, null, "\u6703\u54E1\u5206\u6790"), /*#__PURE__*/_react.default.createElement(_SectionHeader.default, {
    fontSize: 20,
    suffix: "\u6700\u5F8C\u66F4\u65B0\u6642\u9593\uFF1A 2023/02/03 23:59:59"
  }, "\u6578\u64DA\u7E3D\u89BD"), /*#__PURE__*/_react.default.createElement(_antd.Row, {
    gutter: [20, 20]
  }, /*#__PURE__*/_react.default.createElement(_antd.Col, {
    xs: 24,
    sm: 12,
    lg: 6
  }, /*#__PURE__*/_react.default.createElement(_OverViewCard.default, null)), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    xs: 24,
    sm: 12,
    lg: 6
  }, /*#__PURE__*/_react.default.createElement(_OverViewCard.default, null)), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    xs: 24,
    sm: 12,
    lg: 6
  }, /*#__PURE__*/_react.default.createElement(_OverViewCard.default, null)), /*#__PURE__*/_react.default.createElement(_antd.Col, {
    xs: 24,
    sm: 12,
    lg: 6
  }, /*#__PURE__*/_react.default.createElement(_OverViewCard.default, null)))));
};
var _default = MemberAnalysis;
exports.default = _default;