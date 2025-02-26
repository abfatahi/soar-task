import React, { Component } from "react";
import Chart from "react-apexcharts";

const COLOR_BLACK = "#000000";
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
            borderRadius: 10,
          },
        },
        stroke: {
          width: [0, 0],
        },
        xaxis: {
          categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        },
        stroke: {
          show: true,
          width: 10,
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
        width="100%"
        height="322"
      />
    );
  }
}

export default WeeklyActivityChart;
