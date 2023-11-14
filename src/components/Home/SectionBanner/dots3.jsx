import React, { memo, useEffect, useRef, useMemo, useState } from "react";
import "./dots.scss";

import ReactEChartsCore from "echarts-for-react/lib/core";
import * as echarts from "echarts/core";
import { GraphicComponent } from "echarts/components";
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
  // TitleComponent,
  // TooltipComponent,
  // GridComponent,
  // BarChart,
  // GraphChart,
  CanvasRenderer,
  GraphicComponent,
]);

const Dots = memo(() => {
  const mainEl = useRef(null);
  const [ani, setAni] = useState({});
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
      graphic: {
        elements: [
          {
            type: "group",
            left: "center",
            top: "center",
            children: new Array(7).fill(0).map((val, i) => ({
              type: "rect",
              x: i * 20,
              shape: {
                x: 0,
                y: -40,
                width: 10,
                height: 80,
              },
              style: {
                fill: "#5470c6",
              },
              keyframeAnimation: {
                duration: 1000,
                delay: i * 200,
                loop: true,
                keyframes: [
                  {
                    percent: 0.5,
                    scaleY: 0.3,
                    easing: "cubicIn",
                  },
                  {
                    percent: 1,
                    scaleY: 1,
                    easing: "cubicOut",
                  },
                ],
              },
              onmouseover: function () {
                console.log("22222onmove");
                // showTooltip(dataIndex);
                setAni({
                  duration: 1000,
                  delay: i * 200,
                  loop: true,
                  keyframes: [
                    {
                      percent: 0.5,
                      scaleY: 0.3,
                      easing: "cubicIn",
                    },
                    {
                      percent: 1,
                      scaleY: 1,
                      easing: "cubicOut",
                    },
                  ],
                });
              },
              onmouseout: function () {
                // hideTooltip(dataIndex);
                setAni({});
              },
            })),
          },
        ],
      },
    };
  }, [ani]);

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
    const arr = new Array(14)
      .fill(1)
      .reduce((prevLine, currLine, lineIndex) => {
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
    setDData(arr);
  }, [mainEl]);
  useEffect(() => {
    const timer = setInterval(() => {});
  }, []);

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
