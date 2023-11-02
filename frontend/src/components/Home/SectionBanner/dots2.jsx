import React, { memo, useEffect, useRef, useMemo, useState } from "react";
import "./dots.scss";

import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { GraphChart } from "echarts/charts";
import {
  // GridSimpleComponent,
  GridComponent,
  // PolarComponent,
  // RadarComponent,
  // GeoComponent,
  // SingleAxisComponent,
  // ParallelComponent,
  // CalendarComponent,
  // GraphicComponent,
  // ToolboxComponent,
  TooltipComponent,
  // AxisPointerComponent,
  // BrushComponent,
  TitleComponent,
  // TimelineComponent,
  // MarkPointComponent,
  // MarkLineComponent,
  // MarkAreaComponent,
  // LegendComponent,
  // LegendScrollComponent,
  // LegendPlainComponent,
  // DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  // AriaComponent,
  // TransformComponent,
  DatasetComponent,
} from "echarts/components";
// Import renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
  CanvasRenderer,
  // SVGRenderer,
} from "echarts/renderers";

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // BarChart,
  GraphChart,
  CanvasRenderer,
]);

const Dots = memo(() => {
  const mainEl = useRef(null);
  const [dData, setDData] = useState([
    {
      // fixed: true,
      x: 0,
      y: 0,
    },
    {
      // fixed: true,
      x: 1439 / 4,
      y: 936 / 4,
    },
    {
      // fixed: true,
      x: 1439 / 8,
      y: 936 / 8,
    },
    {
      // fixed: true,
      x: 1439 / 16,
      y: 936 / 6,
    },
  ]);
  const option = useMemo(() => {
    return {
      series: [
        {
          type: "graph",
          left: '0px',
          top: '2px',
          width: '1440px',
          height: '936px',
          layout: "none",
          symbol: "rect",
          symbolSize: 4,
          cursor: "pointer",
          itemStyle: {
            // color: "rgba(255, 255, 255, 0.53)",
            color: "red",
          },
          animation: true,
          animationDuration: 2000,
          animationEasing: 'cubicOut',
          data: dData,
          roam: "move",
          force: {
            // initLayout: 'circular'
            // gravity: 0
            repulsion: 100,
            edgeLength: 5,
          },
        },
      ],
    };
  }, [dData]);

  const edges = [];
  // useEffect(() => {
  //   let timer = setInterval(function () {
  //     // roam: true,
  //     setDData((a) => [
  //       ...a,
  //       {
  //         id: dData.length + "",
  //       },
  //     ]);
  //     var source = Math.round((dData.length - 1) * Math.random());
  //     var target = Math.round((dData.length - 1) * Math.random());
  //     if (source !== target) {
  //       edges.push({
  //         source: source,
  //         target: target,
  //       });
  //     }
  //     // console.log('nodes: ' + data.length);
  //     // console.log('links: ' + data.length);
  //   }, 200);
  //   return () => {
  //     clearInterval(timer);
  //   }
  // },[])
  useEffect(() => {
    console.log("mainEl", mainEl.current);
    console.dir(mainEl.current);
    const w = window.document.documentElement.getBoundingClientRect().width;
    console.log("www", w);
    const arr = new Array(14).fill(1).reduce((prevLine, currLine, lineIndex) => {
      const prevLineLen = prevLine.length;
      const newLine = new Array(22)
        .fill(1)
        .reduce((prevArr, currArr, itemIndex) => {
          const prevArrLen = prevArr.length;
          prevArr.push({
            x: itemIndex * (4 + 64),
            y: lineIndex * (4 + 64),
          });
          return prevArr;
        }, []);
      prevLine.push(...newLine);
      return prevLine;
    }, []);
    setDData(arr)
  }, [mainEl]);
  useEffect(() => {
    const timer = setInterval(() => {
      
    })
  },[])
  

  return (
    <div id="main" ref={mainEl}>
      <ReactEChartsCore
        echarts={echarts}
        notMerge={true}
        lazyUpdate={true}
        theme={"theme_name"}
        option={option}
        className="pBar"
      />
    </div>
  );
}, []);
export default Dots;
