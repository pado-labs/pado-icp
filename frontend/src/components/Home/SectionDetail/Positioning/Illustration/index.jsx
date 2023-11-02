import React, { memo } from "react";
import "./index.scss";
import positionBall from "@/assets/img/home/positionBall.svg";
import iconPolygon from "@/assets/img/home/iconPolygon.svg";
import iconZan from "@/assets/img/home/iconZan.svg";
import iconEas from "@/assets/img/home/iconEas.svg";
import iconBnb from "@/assets/img/home/iconBnb.svg";
import padoCard from "@/assets/img/home/padoCard.svg";
import iconLinea from "@/assets/img/home/iconLinea.svg";
import iconICP from "@/assets/img/home/iconICP.svg";
const DetailItemIllustration = memo(({ img }) => {
  return (
    <div className="illustrationWrapperPosition">
      <div className="am">
        <div className="layer1">
          <div className="border border1">
            <div className="border border2">
              <div className="border border3">
                <div className="border border4">
                  <div className="border border5">
                    <div className="border border6">
                      <div className="border border7">
                        <img
                          className="positionBall"
                          src={positionBall}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="layer2">
          <div className="circle circle6">
            <img className="ball card" src={padoCard} alt="" />
          </div>
          <div className="circle circle4">
            <img className="ball iconEas" src={iconEas} alt="" />
          </div>
          <div className="circle circle3">
            <img className="ball iconICP" src={iconICP} alt="" />
          </div>
          <div className="circle circle2">
            <div className="ball lBall"></div>
            <img className="ball iconZan" src={iconZan} alt="" />
          </div>
          <div className="circle circle1">
            <img className="ball iconPolygon" src={iconPolygon} alt="" />
          </div>
        </div>
        <div className="layer3">
          <div className="circle circle6">
            {/* <img className="card" src={padoCard} alt="" /> */}
            <img className="ball iconLinea" src={iconLinea} alt="" />
          </div>
          <div className="circle circle5">
            <div className="ball mBall"></div>
            <div className="ball smallBall sBall"></div>
          </div>
          <div className="circle circle4">
            <img className="ball iconBnb" src={iconBnb} alt="" />
          </div>

          <div className="circle circle2">
            <div className="ball lBall"></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DetailItemIllustration;
