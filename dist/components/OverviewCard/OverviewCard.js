"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _antd = require("antd");
var _overviewCardModule = _interopRequireDefault(require("./overviewCard.module.css"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// import PropTypes from 'prop-types';

var OverviewCard = function OverviewCard() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _overviewCardModule.default.overview_card_wrap
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _overviewCardModule.default.overview_card_title
  }, "\u4EA4\u6613\u91D1\u984D"), /*#__PURE__*/_react.default.createElement("div", {
    className: _overviewCardModule.default.overview_card_statistics
  }, "112,893"), /*#__PURE__*/_react.default.createElement("div", {
    className: _overviewCardModule.default.overview_card_keyValueWrap
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _overviewCardModule.default.overview_card_keyValue
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u589E\u9577\u7387"), /*#__PURE__*/_react.default.createElement(_antd.Typography.Text, {
    type: "success"
  }, "70.5%")), /*#__PURE__*/_react.default.createElement("div", {
    className: _overviewCardModule.default.overview_card_keyValue
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u589E\u9577\u7387"), /*#__PURE__*/_react.default.createElement(_antd.Typography.Text, {
    type: "danger"
  }, "70.5%"))));
};

// OverviewCard.propTypes = {

// };

// OverviewCard.defaultProps = {

// }
var _default = OverviewCard;
exports.default = _default;