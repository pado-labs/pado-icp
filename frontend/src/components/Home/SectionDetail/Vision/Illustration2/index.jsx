import React, { memo } from "react";
import useBreakPoint from "@/hooks/useBreakPoint";
import "./index.scss";
import detailVisionBg from "@img/home/detailVisionBg.svg";
import detailVisionBgS from "@img/home/detailVisionBgS.svg";

const DetailItemIllustration = memo(() => {
  const breakPoint = useBreakPoint();

  return (
    <div className="versionIllustrationWrapper">
     
        <img
          className="bg"
          src={breakPoint === "s" ? detailVisionBgS : detailVisionBg}
          alt=""
        />
        <div className="visionIllustrationCore"></div>
     
    </div>
  );
});

export default DetailItemIllustration;
