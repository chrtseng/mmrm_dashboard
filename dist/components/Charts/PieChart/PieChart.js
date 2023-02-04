"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _chart = require("chart.js");
var _reactChartjs = require("react-chartjs-2");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_chart.Chart.register(_chart.ArcElement, _chart.Tooltip, _chart.Legend);
var data = {
  labels: ['女性', '男性'],
  datasets: [{
    label: '# of Votes',
    data: [65, 35],
    backgroundColor: ['#a6cee3', '#4C93C3'],
    borderWidth: 1
  }]
};
var options = {
  aspectRatio: 2.2,
  plugins: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 16,
        boxHeight: 16
      }
    }
  }
};
var PieChart = function PieChart() {
  return /*#__PURE__*/_react.default.createElement(_reactChartjs.Pie, {
    data: data,
    options: options
  });
};
var _default = PieChart;
exports.default = _default;