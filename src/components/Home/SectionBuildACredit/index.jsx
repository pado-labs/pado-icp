import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import useBreakPoint from "@/hooks/useBreakPoint";
import "./index.scss";
import PTag from "@com/PTag";
import buildACredit from "@img/home/buildACredit.svg";
import DetailItemIllustration from "@com/Home/SectionDetail/DetailItemIllustration";
import PButton from "@/components/PButton";

const DetailItem = memo(({ }) => {
  const breakPoint = useBreakPoint();
  const navigate = useNavigate()
  const onClickStart = () => {
    navigate('/contactUs')
  }
  return (
    <div className="detail1 detail3 sectionBuildACredit">
      <div className="contentWid contentWidth">
        <div className="textCon">
          <PTag text="Our Mission" />
          <h3>Build ecosystem together</h3>
          <div className="detailCon">
            Use our APIs, SDK, and data source templates to develop your own
            solution stacks. Connect more internet data to fulfill Web3
            applications and ecosystems.
          </div>
          <PButton text="Start Now" onClick={onClickStart} />
        </div>
        {breakPoint === "s" ? (
          <></>
        ) : (
          <DetailItemIllustration img={buildACredit} />
        )}
      </div>
    </div>
  );
});

export default DetailItem;
