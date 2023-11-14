import React, {memo, useEffect} from "react";
import * as echarts from "echarts/core";
import { GraphChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import './dots.scss'
echarts.use([GraphChart, CanvasRenderer]);


const Dots = memo(() => {
  var chartDom = document.getElementById("main");
  var myChart = echarts.init(chartDom);
  var option;

  const data = [
    {
      fixed: true,
      x: myChart.getWidth() / 2,
      y: myChart.getHeight() / 2,
      symbolSize: 20,
      id: "-1",
    },
  ];
  const edges = [];
  option = {
    series: [
      {
        type: "graph",
        layout: "force",
        animation: false,
        data: data,
        force: {
          // initLayout: 'circular'
          // gravity: 0
          repulsion: 100,
          edgeLength: 5,
        },
      },
    ],
  };
  setInterval(function () {
    data.push({
      id: data.length + "",
    });
    var source = Math.round((data.length - 1) * Math.random());
    var target = Math.round((data.length - 1) * Math.random());
    if (source !== target) {
      edges.push({
        source: source,
        target: target,
      });
    }
    myChart.setOption({
      series: [
        {
          roam: true,
          data: data,
        },
      ],
    });
    // console.log('nodes: ' + data.length);
    // console.log('links: ' + data.length);
  }, 200);

  option && myChart.setOption(option);
  return <div id="main">

  </div>
}, [])
export default Dots;