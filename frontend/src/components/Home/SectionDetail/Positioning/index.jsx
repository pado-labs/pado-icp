import React, { memo } from "react";
import useBreakPoint from "@/hooks/useBreakPoint";
import "./index.scss";
import PTag from "@com/PTag";
import detailPositionS from "@img/home/detailPositionS.svg";
import DetailItemIllustration from "../DetailItemIllustration";
import PositionIllustration from "./Illustration";

const DetailItem = memo(({}) => {
  const breakPoint = useBreakPoint();
  return (
    <div className="detail1 detail3">
      <div className="contentWid contentWidth">
        <div className="textCon">
          <PTag text="Our Goal" />
          <h3>Connecting Web3 Ecosystems</h3>
          {breakPoint === "s" ? (
            <div className="detailCon">
              Integrate different on-chain frameworks and smart contracts to
              establish a composable data profile.
              Support various blockchains (L1/L2) and dApps.
            </div>
          ) : (
            <div className="detailCon">
              Integrate different on-chain frameworks and smart contracts to
              establish a composable data profile.
              <div>Support various blockchains (L1/L2) and dApps.</div>
            </div>
          )}
        </div>
        {breakPoint === "s" ? (
          <DetailItemIllustration img={detailPositionS} />
        ) : (
          <PositionIllustration />
        )}
      </div>
    </div>
  );
});

export default DetailItem;
