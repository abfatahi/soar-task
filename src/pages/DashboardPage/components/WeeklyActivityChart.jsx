import React, { Component } from "react";
import Chart from "react-apexcharts";

const COLOR_BLACK = "#232323";
const COLOR_BLUE = "#396AFF";

class WeeklyActivityChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "70%",
            borderRadius: 5,
          },
        },
        stroke: {
          width: [0, 0],
        },
        xaxis: {
          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        stroke: {
          show: true,
          width: 5,
          colors: ["transparent"],
        },
        fill: {
          colors: [COLOR_BLACK, COLOR_BLUE],
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
        },
      },
    };
  }

  render() {
    const { weeklyActivities } = this.props;

    const series = [
      {
        name: "Withdraw",
        type: "column",
        data: weeklyActivities?.withdraw ?? [],
      },
      {
        name: "Deposit",
        type: "column",
        data: weeklyActivities?.deposit ?? [],
      },
    ];

    return (
      <Chart
        options={this.state.options}
        series={series}
        type="line"
        width="500"
      />
    );
  }
}

export default WeeklyActivityChart;
