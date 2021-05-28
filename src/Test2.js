import React, { createRef, Component } from "react";
import "chartjs-chart-box-and-violin-plot";
import Chart from "chart.js";
import * as d3 from "d3";

function test2(genename, api_value, i) {
  const calcul2 = genename.map((gene, index) => {
    const values = api_value[index];

    return values[i][0];
  });

  return calcul2;
}

function parse_labels(api_link) {
  const label = api_link.genename;
  return label;
}

function parse_data(api_link, color1) {
  var api_horname = api_link.horname;
  var api_value = api_link.value;
  var genename = api_link.genename;
  var col = color1;

  const calcul = api_horname.map((hor, index) => ({
    label: hor,
    backgroundColor: col[index],
    borderColor: "black",
    borderWidth: 1,
    outlierColor: "#999999",
    padding: 10,
    itemRadius: 0,
    data: test2(genename, api_value, index)
  }));

  // define label tree
  //검색 유전자들

  return calcul;
}

export default class BoxPlot extends Component {
  //  const { autoData } = this.state;
  // const fordAutos = autoData.filter( (auto) => auto.title.includes("Ford"));

  constructor(props) {
    super(props);

    this.state = {
      props
      //states
    };
  }
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    const api_link = this.props;
    const color = ["red", "blue", "green", "gray", "yellow", "steelblue"];
    console.log(11);

    new Chart(myChartRef, {
      type: "boxplot",
      data: {
        // define label tree
        //검색 유전자들
        labels: parse_labels(api_link),
        datasets: parse_data(api_link, color)
      },
      options: {
        legend: {
          position: "top"
        },
        onClick: function (point, event) {
          if (event.length <= 0) return;

          console.log(event);
        }
      }
    });
  }
  render() {
    return (
      <>
        <canvas id="myChart" ref={this.chartRef} />
      </>
    );
  }
}
