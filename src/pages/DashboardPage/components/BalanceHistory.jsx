import { Component } from "react";
import Chart from "react-apexcharts";
import COLOR from "@/constants/colors";

export class BalanceHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Balance",
          data: [100, 280, 470, 780, 220, 580, 240], 
        },
      ],
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
          categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
        },
        grid: {
          strokeDashArray: 4,
        },
      },
    };
  }

  render() {
    return (
      <Chart
        type="area"
        series={this.state.series}
        options={this.state.options}
        width="100%"
        height="322"
      />
    );
  }
}

export default BalanceHistory;
