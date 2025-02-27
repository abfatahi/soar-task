import React, { Component } from "react";
import Chart from "react-apexcharts";
import COLOR from "@/constants/colors";

class WeeklyActivityChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "weekly-activity-chart",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "30%",
            borderRadius: 5,
          },
        },
        xaxis: {
          categories: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        },
        stroke: {
          show: false,
        },
        fill: {
          colors: [COLOR.BLACK, COLOR.BLUE],
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
