import { Component } from "react";
import Chart from "react-apexcharts";
import COLOR from "@/constants/colors";
import { transformBalanceHistoryData } from "@/services/helpers/transformers";

export class BalanceHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "balance-history-chart",
          type: "area",
          toolbar: { show: false },
          zoom: { enabled: false },
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        dataLabels: {
          enabled: false,
        },
        colors: [COLOR.BLUE],
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.1,
            opacityTo: 0.9,
            stops: [0, 100],
          },
        },
        xaxis: {
          labels: {
            formatter: (value) => {
              // Show only the month for the first day of each month
              const date = new Date(value);
              if (date.getDate() === 1) {
                return date.toLocaleString("default", { month: "short" }); // e.g., "Jul", "Aug"
              }
              return ""; // Hide labels for other days
            },
          },
        },
        grid: {
          strokeDashArray: 4,
        },
      },
    };
  }

  render() {
    const { balanceHistory } = this.props;
    const { categories, data } = transformBalanceHistoryData(balanceHistory);

    const series = [
      {
        name: "Balance",
        data: data,
      },
    ];

    return (
      <Chart
        type="area"
        series={series}
        options={{
          ...this.state.options,
          xaxis: { ...this.state.options.xaxis, categories },
        }}
        width="100%"
        height="322"
      />
    );
  }
}

export default BalanceHistory;
