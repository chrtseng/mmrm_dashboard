"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _PageHeader = _interopRequireDefault(require("../../components/utils/PageHeader"));
var _SectionHeader = _interopRequireDefault(require("../../components/utils/SectionHeader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var MemberAnalysis = function MemberAnalysis() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_antd.Space, {
    direction: "vertical",
    size: 20
  }, /*#__PURE__*/_react.default.createElement(_PageHeader.default, null, "\u6703\u54E1\u5206\u6790"), /*#__PURE__*/_react.default.createElement(_SectionHeader.default, null, "\u9867\u5BA2\u5206\u7FA4\u5716\u8868")));
};
var _default = MemberAnalysis;
exports.default = _default;