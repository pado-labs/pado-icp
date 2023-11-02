import React, { useState, useCallback } from "react";
import advantage1 from "@img/about/advantage1.svg";
import advantage2 from "@img/about/advantage2.svg";
import advantage3 from "@img/about/advantage3.svg";
import iconArrowRight from "@img/home/iconArrowRight.svg";
import PTag from "@com/PTag";
import "./index.scss";
// import investorAmberS from "@img/about/investorAmberS.svg";
import investorAmberS from "@img/about/investorAmber.png";
import investorAmberL from "@img/about/investorAmberL.svg";
// import investorHashglobalS from "@img/about/investorHashglobalS.svg";
import investorHashglobalS from "@img/about/investorHashglobal.png";

import investorHashglobalL from "@img/about/investorHashglobalL.svg";
import investorLenoveL from "@img/about/investorLenoveL.svg";
import investorLenoveS from "@img/about/investorLenove.png";
import investorSNZL from "@img/about/investorSNZL.svg";
import investorSNZS from "@img/about/investorSNZ.png";
import partnerCelerL from "@img/about/partnerCelerL.svg";
// import partnerCelerS from "@img/about/partnerCelerS.svg";
import partnerCelerS from "@img/about/partnerCeler.png";


import partnerBuilderDaoL from "@img/about/partnerBuilderDaoL.svg";
// import partnerBuilderDaoS from "@img/about/partnerBuilderDaoS.svg";
import partnerBuilderDaoS from "@img/about/partnerBuilderDao.png";
import partnerDengLianL from "@img/about/partnerDengLianL.svg";
// import partnerDengLianS from "@img/about/partnerDengLianS.svg";
import partnerDengLianS from "@img/about/partnerDengLian.png";
import partnerEasL from "@img/about/partnerEasL.svg";
// import partnerEasS from "@img/about/partnerEasS.svg";
import partnerEasS from "@img/about/partnerEas.png";
import partnerHyperOracleL from "@img/about/partnerHyperOracleL.svg";
// import partnerHyperOracleS from "@img/about/partnerHyperOracleS.svg";
import partnerHyperOracleS from "@img/about/partnerHyperOracle.png";
import partnerLineaL from "@img/about/partnerLineaL.svg";
// import partnerLineaS from "@img/about/partnerLineaS.svg";
import partnerLineaS from "@img/about/partnerLinea.png";
import partnerScrollL from "@img/about/partnerScrollL.svg";
// import partnerScrollS from "@img/about/partnerScrollS.svg";
import partnerScrollS from "@img/about/partnerScroll.png";
import partnerZanL from "@img/about/partnerZanL.svg";
// import partnerZanS from "@img/about/partnerZanS.svg";
import partnerZanS from "@img/about/partnerZan.png";
import partnerPolygonIdL from "@img/about/partnerPolygonIdL.svg";
// import partnerPolygonIdS from "@img/about/partnerPolygonIdS.svg";
import partnerPolygonIdS from "@img/about/partnerPolygonId.png";
import useBreakPoint from "@/hooks/useBreakPoint";
import Slick from "./Slick";
const investorList = [
  {
    id: "0",
    imgS: investorAmberS,
    imgL: investorAmberL,
  },
  // {
  //   id: "1",
  //   imgS: partnerCelerS,
  //   imgL: partnerCelerL,
  // },
  {
    id: "2",
    imgS: investorHashglobalS,
    imgL: investorHashglobalL,
  },
  {
    id: "3",
    imgS: investorLenoveS,
    imgL: investorLenoveL,
  },
  {
    id: "4",
    imgS: investorSNZS,
    imgL: investorSNZL,
  },
];
const partnerList = [
  {
    id: "0",
    imgL: partnerBuilderDaoL,
    imgS: partnerBuilderDaoS,
  },
  {
    id: "1",
    imgL: partnerCelerL,
    imgS: partnerCelerS,
  },
  {
    id: "2",
    imgL: partnerDengLianL,
    imgS: partnerDengLianS,
  },
  {
    id: "3",
    imgL: partnerEasL,
    imgS: partnerEasS,
  },
  {
    id: "4",
    imgL: partnerHyperOracleL,
    imgS: partnerHyperOracleS,
  },
  {
    id: "5",
    imgL: partnerLineaL,
    imgS: partnerLineaS,
  },
  {
    id: "6",
    imgL: partnerPolygonIdL,
    imgS: partnerPolygonIdS,
  },
  {
    id: "7",
    imgL: partnerScrollL,
    imgS: partnerScrollS,
  },
  {
    id: "8",
    imgL: partnerZanL,
    imgS: partnerZanS,
  },
];
const Investors = () => {
  const breakPoint = useBreakPoint();
  const [activeReward, setActiveReward] = useState();
  const onClickReward = (i) => {
    if (activeReward === i.id) {
      setActiveReward(undefined);
    } else {
      setActiveReward(i.id);
    }
  };

  return (
    <section className="investorsAPartners">
      <div className="contentWidth">
        <div className="title">
          <h2>Investors</h2>
          <h3>Sort in alphabetical order.</h3>
        </div>

        <ul className="investors">
          {investorList.map((i) => {
            return (
              <li
                className="investor"
                key={i.id}
                onClick={() => {
                  onClickReward(i);
                }}
              >
                <img
                  className="investorIcon"
                  src={breakPoint === "s" ? i.imgS : i.imgL}
                  alt=""
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="contentWidth">
        <div className="title">
          <h2>Partners</h2>
          <h3>Sort in alphabetical order.</h3>
        </div>
        {breakPoint === "s" ? (
          <ul className="partners">
            {partnerList.map((i) => {
              return (
                <li
                  className="partner"
                  key={i.id}
                  onClick={() => {
                    onClickReward(i);
                  }}
                >
                  <img
                    className="investorIcon"
                    src={breakPoint === "s" ? i.imgS : i.imgL}
                    alt=""
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <Slick descList={partnerList}></Slick>
        )}
      </div>
    </section>
  );
};
export default Investors;
