'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _chart = require('chart.js');

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DoughnutChart = function (_React$Component) {
    _inherits(DoughnutChart, _React$Component);

    function DoughnutChart(props) {
        _classCallCheck(this, DoughnutChart);

        var _this = _possibleConstructorReturn(this, (DoughnutChart.__proto__ || Object.getPrototypeOf(DoughnutChart)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(DoughnutChart, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.renderDoughnut(this.props);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.renderDoughnut(this.props);
        }
    }, {
        key: 'renderDoughnut',
        value: function renderDoughnut() {
            // Check if data is recieved from the async call
            if (this.props.choices.length <= 0) {
                return;
            }

            var ctx = document.getElementById(this.props._id);
            var labels = [];
            var data = [];
            for (var i = 0; i < this.props.choices.length; i++) {
                labels.push(this.props.choices[i].name);
                data.push(this.props.choices[i].votes);
            }

            var myChart = new _chart2.default(ctx, {
                type: 'doughnut',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    responsive: false
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('canvas', { className: 'doughnutChart', id: this.props._id, width: this.props.width, height: this.props.height });
        }
    }]);

    return DoughnutChart;
}(_react2.default.Component);

exports.default = DoughnutChart;