import { Component } from "react";
import Chart from "react-apexcharts";
import COLOR from "@/constants/colors";

class ExpensesStatisticsChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "expenses-statistic-chart",
          toolbar: {
            show: false,
          },
        },
        legend: {
          show: false,
        },
        stroke: {
          width: 5,
          colors: ["#fff"],
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
            spokes: {
              strokeWidth: 0,
            },
          },
        },
        yaxis: { show: false },
        fill: {
          opacity: 1,
          colors: [COLOR.INDIGO, COLOR.ORANGE, COLOR.BLACK, COLOR.BLUE],
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            const label = opts.w.config.labels[opts.seriesIndex];
            return `${label} ${Math.round(val)}%`;
          },
        },
      },
    };
  }

  render() {
    const { expensesStatistics } = this.props;

    const categories = expensesStatistics?.categories || [];
    const series = expensesStatistics?.percentages || [];
    return (
      <Chart
        options={{ ...this.state.options, labels: categories }}
        series={series}
        type="polarArea"
        width="100%"
        height="322"
      />
    );
  }
}

export default ExpensesStatisticsChart;
