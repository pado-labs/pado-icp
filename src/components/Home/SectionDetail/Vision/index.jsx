import React, { memo } from "react";
import "./index.scss";
import PTag from "@com/PTag";
import iconDetail1 from "@img/home/iconDetail1.svg";
import iconDetail2 from "@img/home/iconDetail2.svg";
import iconDetail3 from "@img/home/iconDetail3.svg";
import iconDetail4 from "@img/home/iconDetail4.svg";
import VersionIllustration from "./Illustration";
const detail1DescList = [
  { icon: iconDetail1, text: "With cryptographic technology" },
  { icon: iconDetail2, text: "Protect data privacy" },
  { icon: iconDetail4, text: "Expand smart contracts" },
  { icon: iconDetail3, text: "Monetize from data liquidity" },
];
const DetailItem = memo(({}) => {
  return (
    <div className="detail1">
      <div className="contentWid contentWidth">
        <div className="textCon">
          <PTag text="Our Vision" />
          <h3>Bring All Internet Data into smart contracts </h3>
          <ul className="detailCon">
            {detail1DescList.map((i, k) => {
              return (
                <li key={k}>
                  <img src={i.icon} alt="" />
                  <span>{i.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <VersionIllustration />
      </div>
    </div>
  );
});

export default DetailItem;
