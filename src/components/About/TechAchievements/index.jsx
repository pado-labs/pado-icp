import React, { useState } from "react";
import PButton from "@com/PButton";
import "./index.scss";
import techAchi from "@img/about/techAchi.svg";
import iconArrowRight from "@img/home/iconArrowRight.svg";
const dataList = [
  {
    id: "0",
    keyword: "approximately equal to",
    num: "30 MB",
    desc: "communication size",
  },
  {
    id: "1",
    keyword: "less than",
    num: "120 MB",
    desc: "memory consumption",
  },
  {
    id: "2",
    keyword: "less than",
    num: "1S",
    desc: "computation time",
  },
];
const TechAchievements = () => {
 
  const onClickMore = () => {
    window.open("https://eprint.iacr.org/2023/964.pdf");
  };
  return (
    <section className="sectionTechAchievements" id="allYouNeed">
      <div className="contentWidth">
        <div className="left">
          <h2>Techniques Achievements</h2>
          <img src={techAchi} alt="" />
        </div>
        <div className="right">
          <p>
            Raise a strong Interactive Zero-knowledge Proofs (IZK) protocol for
            internet data attestation. The protocol offers substantial
            improvements, with significantly smaller communication size (14x)
            and faster computation time (~10x) compared to current ones and can
            execute ZKP in browsers/mobiles.
          </p>
          <ul className="datas">
            {dataList.map((i) => {
              return (
                <li className="data" key={i.id}>
                  <div className="keyword">{i.keyword}</div>
                  <div className="num">{i.num}</div>
                  <div className="desc">{i.desc}</div>
                </li>
              );
            })}
          </ul>
          <PButton
            text="Learn More"
            onClick={onClickMore}
            suffix={iconArrowRight}
          />
        </div>
      </div>
    </section>
  );
};

export default TechAchievements;
