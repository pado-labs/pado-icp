import React, { useState, useCallback } from "react";
import advantage1 from "@img/about/advantage1.png";
import advantage2 from "@img/about/advantage2.svg";
import advantage3 from "@img/about/advantage3.svg";
import iconArrowRight from "@img/home/iconArrowRight.svg";
import PTag from "@com/PTag";
import "./index.scss";
const rewardList = [
  {
    id: "0",
    img: advantage1,
    title: "Academia",
    desc1:
      "Published 40+ papers in top-tier cryptographic conferences (CRYPTO, EUROCRYPT, etc.)",
    desc2: "Invented the state-of-the-art interactive ZK protocols",
  },
  {
    id: "1",
    img: advantage2,
    title: "Team members",
    desc1: "Experienced cryptography engineers and R&D abilities ",
    desc2: "Proficient product abilities and strong marketing capabilities",
  },
  {
    id: "2",
    img: advantage3,
    title: "Experts",
    desc1: "World’s leading cryptography scientists",
    desc2:
      "Cross domain experience in cryptography research and commercialization",
  },
];
const OurRewards = () => {
  const [activeReward, setActiveReward] = useState();
  const onClickReward = (i) => {
    if (activeReward === i.id) {
      setActiveReward(undefined);
    } else {
      setActiveReward(i.id);
    }
  };

  return (
    <section className="ourAdvantages contentWidth">
      <h2>Our Strengths</h2>
      <ul className="advantages">
        {rewardList.map((i) => {
          return (
            <li
              className="advantage"
              key={i.id}
              onClick={() => {
                onClickReward(i);
              }}
            >
              <img className="headerIcon" src={i.img} alt="" />
              <div className="descWrapper">
                <h5>{i.title}</h5>
                <p className="desc1">{i.desc1}</p>
                <p className="desc2">{i.desc2}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default OurRewards;
