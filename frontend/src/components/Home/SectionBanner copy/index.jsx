import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { PADOEXTENSIONDOWNLOADURL } from "@/config/constants";
import "./index.scss";
import PButton from "@/components/PButton";
import iconArrowRightWhite from "@/assets/img/home/iconArrowRightWhite.svg";

const SectionBanner = memo(({}) => {
  const onClickContact = () => {
    window.open(PADOEXTENSIONDOWNLOADURL);
  };
  return (
    <section className="sectionBanner">
      <div className="sectionContent contentWidth">
        <h1 className="bannerTitle">
          PADO, Building the Future of Decentralized Credit Protocol
        </h1>
        <PButton
          text="Get Started"
          onClick={onClickContact}
          suffix={iconArrowRightWhite}
        />
      </div>
    </section>
  );
});

export default SectionBanner;
