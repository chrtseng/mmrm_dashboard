"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _antd = require("antd");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledCard = (0, _styledComponents.default)(_antd.Card)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  box-shadow: unset !important;\n  display: flex;\n  flex-direction: column;\n\n  .ant-card-body {\n    border-radius: 8px;\n    padding: 32px 36px;\n  }\n"])));
var OverviewCard = function OverviewCard() {
  return /*#__PURE__*/_react.default.createElement(StyledCard, {
    bordered: false
  }, /*#__PURE__*/_react.default.createElement("div", null, "title , need custom theme"), /*#__PURE__*/_react.default.createElement("div", null, "key - value area"));
};
var _default = OverviewCard;
exports.default = _default;