import react, { memo, useEffect, useRef, useMemo, useState } from "react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/pagination";
import useBreakPoint from "@/hooks/useBreakPoint";
import { PADODOCURLHOWTOWORK } from "@/config/constants";

import PTag from "@com/PTag";
import PButton from "@com/PButton";

const MissionItem = memo(({ item }) => {
  const onClickMore = () => {
    window.open(PADODOCURLHOWTOWORK);
  };

  return (
    <div className="textCon detail2TextCon">
      <main>
        <PTag text="Our Mission" />
        <h3 className="detailTextTitle">
          <p>
            <span>Let's </span>
            <span className="strongTit">{item.type}</span>
          </p>
          <p>with PADO</p>
        </h3>
      </main>
      <div className="detailCon">
        <h6>{item.title}</h6>
        <p>{item.desc}</p>
        <PButton text="Learn More" onClick={onClickMore} />
      </div>
    </div>
  );
});

export default MissionItem;
