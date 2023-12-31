import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { PADOEXTENSIONDOWNLOADURL } from "@/config/constants";
import "./index.scss";
import PButton from "@/components/PButton";
import iconArrowRightWhite from "@/assets/img/home/iconArrowRightWhite.svg";
import useBreakPoint from '@/hooks/useBreakPoint'
// import Dots from './dots'
const SectionBanner = memo(({ }) => {
  const navigate = useNavigate()
  const breakPoint = useBreakPoint();
  const onClickStart = () => {
    window.open(PADOEXTENSIONDOWNLOADURL);
  };
  const onClickContact = () => {
    navigate("/contactUs");
  };
  return (
    <section className="sectionBanner">
      {/* <div className="bg"></div> */}
      {/* <div className="dots"></div> */}
      {/* <Dots/> */}
      <div className="sectionContent contentWidth">
        <h1 className="bannerTitle">
          <span>PADO, </span>the Leading zkAttestation Protocol
        </h1>
        {breakPoint === "s" ? (
          <PButton
            text="Contact Us"
            onClick={onClickContact}
            suffix={iconArrowRightWhite}
          />
        ) : (
          <PButton
            text="Get Started"
            onClick={onClickStart}
            suffix={iconArrowRightWhite}
          />
        )}
      </div>
    </section>
  );
});

export default SectionBanner;
