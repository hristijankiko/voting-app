import React from 'react';
import Chart from 'chart.js';

class DoughnutChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.renderDoughnut(this.props);
    }

    componentDidUpdate() {
        this.renderDoughnut(this.props);
    }

    renderDoughnut() {
        // Check if data is recieved from the async call
        if(this.props.choices.length <= 0) {
            return;
        }

        let ctx = document.getElementById(this.props._id);
        let labels = [];
        let data = []
        for(var i = 0; i < this.props.choices.length; i++) {
            labels.push(this.props.choices[i].name);
            data.push(this.props.choices[i].votes);
        }

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
            datasets: [
                {
                    data: data,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
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

    render() {
        return (
            <canvas id={this.props._id} width={this.props.width} height={this.props.height}></canvas>
        );
    }
}

export default DoughnutChart;