import react, { memo, useEffect, useRef, useMemo, useState } from "react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/pagination";
import useBreakPoint from "@/hooks/useBreakPoint";
import { slideList } from "./swiperConfig";
// import { PADODOCURLHOWTOWORK } from "@/config/constants";

import "./index.scss";
// import PTag from "@com/PTag";
import missionVerify from "@img/home/missionVerify.png";
import missionProve from "@img/home/missionProve.svg";
import missionTrust from "@img/home/missionTrust.svg";

import MissionItem from "./MissionItem";
import DetailItemIllustration from "../DetailItemIllustration";

const Mission = memo(({}) => {
  const [activeType, setActiveType] = useState("verify");
  const breakPoint = useBreakPoint();
  const verifyEl = useRef(null);
  const proveEl = useRef(null);
  const trustEl = useRef(null);
  const rightWrapperEl = useRef(null);

  // function isInViewPort(el, direction) {
  //   //方法1
  //   const viewPortHeight =
  //     window.innerHeight ||
  //     document.documentElement.clientHeight ||
  //     document.body.clientHeight;
  //   let offsetVPTop = el.getBoundingClientRect().top;
  //   const elHeight = el.getBoundingClientRect().height;
  //   // const scollTop = document.documentElement.scrollTop;
  //   // return offsetTop - scollTop <= viewPortHeight;
  //   let elPaddingTop = 160;
  //   let elPaddingBottom = 0;
  //   let rightWrapperElHeight = 0;
  //   if (breakPoint === "s") {
  //     rightWrapperElHeight = rightWrapperEl.current.getBoundingClientRect();
  //     // offsetVPTop += rightWrapperElRect.height;

  //     var width = document.documentElement.getBoundingClientRect().width;
  //     var rem = width / 10;
  //     elPaddingTop = 1.0256 * rem;
  //     elPaddingBottom = 2.0513 * rem;
  //   }
  //   if (direction === "down") {
  //     if (breakPoint === "s") {
  //       return (
  //         offsetVPTop > 0 - (elPaddingTop + rightWrapperElHeight) &&
  //         offsetVPTop < viewPortHeight - (elPaddingTop + rightWrapperElHeight)
  //       );
  //     } else {
  //       return (
  //         offsetVPTop > 0 - elPaddingTop &&
  //         offsetVPTop < viewPortHeight - elPaddingTop
  //       );
  //     }
  //   } else if (direction === "up") {
  //     if (breakPoint === "s") {
  //       return (
  //         offsetVPTop >
  //           0 - (rightWrapperElHeight - (elHeight - elPaddingBottom)) &&
  //         offsetVPTop < viewPortHeight - elPaddingTop
  //       );
  //     } else {
  //       return (
  //         offsetVPTop > 0 - (elHeight + elPaddingTop) &&
  //         offsetVPTop < viewPortHeight - elPaddingTop
  //       );
  //     }
  //   }
  // }
  useEffect(() => {
    var beforeTop = 0;

    function isInViewPort(el, direction) {
      const viewPortHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      let offsetVPTop = el.getBoundingClientRect().top;
      const elHeight = el.getBoundingClientRect().height;

      let elPaddingTop = 160;
      let elPaddingBottom = 169;
      let rightWrapperElHeight = 0;
      if (breakPoint === "s") {
        rightWrapperElHeight =
          rightWrapperEl.current.getBoundingClientRect().height;
        const rightWrapperElRect =
          rightWrapperEl.current.getBoundingClientRect();
        // offsetVPTop += rightWrapperElRect.height;
        console.log("rightWrapperElRect", rightWrapperElRect);

        var width = document.documentElement.getBoundingClientRect().width;
        var rem = width / 10;
        elPaddingTop = 1.0256 * rem;
        elPaddingBottom = 2.0513 * rem;
        // console.log("rem=", rem, elPaddingTop, elPaddingBottom);
        // if (direction === "down") {
        //   rightWrapperEl.current.style.paddingTop = 0;
        // } else {
        //   rightWrapperEl.current.style.paddingTop = 0;
        // }
      }
      let minTop = 0;
      let maxTop = 0;
      if (breakPoint === "s") {
        // minTop = rightWrapperElHeight - (elHeight - elPaddingBottom);
        // maxTop = viewPortHeight - elPaddingTop;
        minTop = rightWrapperElHeight - elPaddingTop;
        maxTop = viewPortHeight - (elHeight - elPaddingBottom);
        // console.log("isInViewPort", offsetVPTop, minTop, maxTop);
        return offsetVPTop > minTop && offsetVPTop < maxTop;
      } else {
        minTop = 0 - (elHeight - elPaddingBottom);
        maxTop = viewPortHeight - elPaddingTop;
        // console.log("isInViewPort", offsetVPTop, minTop, maxTop);
      }
      return offsetVPTop > minTop && offsetVPTop < maxTop;
    }
    let timer = null;
    let fn = (event) => {
      var afterTop = document.documentElement
        ? document.documentElement.scrollTop
        : document.body.scrollTop;

      // const verifyElRect = verifyEl.current.getBoundingClientRect();
      // const proveElRect = proveEl.current.getBoundingClientRect();
      // const trustElRect = trustEl.current.getBoundingClientRect();
      // const verifyElTop = verifyElRect.top;
      // const proveElTop = proveElRect.top;
      // const trustElTop = trustElRect.top;

      // console.log(verifyElRect.height, verifyElTop, proveElTop, trustElTop);
      if (afterTop - beforeTop > 0) {
        console.log("mouse down");
        if (isInViewPort(trustEl.current, "down")) {
          setActiveType("trust");
        } else if (isInViewPort(proveEl.current, "down")) {
          setActiveType("prove");
        } else if (isInViewPort(verifyEl.current, "down")) {
          setActiveType("verify");
        }
      } else {
        console.log("mouse up");
        if (isInViewPort(verifyEl.current, "up")) {
          setActiveType("verify");
        } else if (isInViewPort(proveEl.current, "up")) {
          setActiveType("prove");
        } else if (isInViewPort(trustEl.current, "up")) {
          setActiveType("trust");
        }
      }
      beforeTop = afterTop;
    };
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(fn, 10);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [breakPoint]);
  return (
    <div className="detail2">
      <div className="contentWidth">
        <div className="leftWrapper">
          <div ref={verifyEl} className="imgWrapper">
            <DetailItemIllustration img={missionVerify} />
          </div>
          <div ref={proveEl} className="imgWrapper">
            <DetailItemIllustration img={missionProve} />
          </div>
          <div ref={trustEl} className="imgWrapper">
            <DetailItemIllustration img={missionTrust} />
          </div>
        </div>
        <div className="rightWrpper" ref={rightWrapperEl}>
          {activeType === "verify" && <MissionItem item={slideList[0]} />}
          {activeType === "prove" && <MissionItem item={slideList[1]} />}
          {activeType === "trust" && <MissionItem item={slideList[2]} />}
        </div>
      </div>
    </div>
  );
});

export default Mission;
