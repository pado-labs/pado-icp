import React, { memo, useState } from "react";
import useBreakPoint from "@/hooks/useBreakPoint";
import "./index.scss";
import bannerBtnImgL from "@img/about/bannerBtnImgL.png";
import bannerBtnImgS from '@img/about/bannerBtnImgS.png';
  
import iconVideoPlay from "@img/about/iconVideoPlay.svg";
import VideoDialog from "../VideoDialog";

const SectionBanner = memo(({ }) => {
  const breakPoint = useBreakPoint()
  const [videoVisible, setVideoVisible] = useState(false);
  const onClickBannerBtn = () => {
    if (breakPoint !== 's') {
      
    }
    setVideoVisible(true);
  };

  return (
    <section className="sectionBanner aboutSectionBanner">
      <div className="sectionContent contentWidth">
        <h1 className="bannerTitle">
          PADO, Bringing All Internet Data Into Smart Contracts
        </h1>
        <button
          className={breakPoint === "s" ? "bannerBtn mobile" : "bannerBtn"}
          onClick={onClickBannerBtn}
        >
          <img
            className="iconBannerBtnImg"
            src={breakPoint === "s" ? bannerBtnImgS : bannerBtnImgL}
            alt=""
          />
          <span className="btnText">Intro Video</span>
          <img className="iconVideoPlay" src={iconVideoPlay} alt="" />
        </button>
      </div>
      {videoVisible && (
        <VideoDialog
          onClose={() => {
            setVideoVisible(false);
          }}
        />
      )}
    </section>
  );
});

export default SectionBanner;
