import React, { useState, useCallback } from "react";
import iconBNBChain from "@img/about/iconBNBChain.svg";
import iconZKDayParis from "@img/about/iconZKDayParis.svg";
import iconETHFoundation from "@img/about/iconETHFoundation.svg";
import iconArrowRight from "@img/home/iconArrowRight.svg";
import PTag from "@com/PTag";
import "./index.scss";
const rewardList = [
  {
    id: "0",
    img: iconETHFoundation,
    link: "https://github.com/privacy-scaling-explorations/",
    keyword: "Ethereum Foundation PSE",
    title: "Granted Funding to Develop the First Open-source Rust IZK Library",
    desc: "The Ethereum Foundation (EF) is a non-profit organization that supports the Ethereum ecosystem. The EF Privacy & Scaling Explorations focuses on bridging the gap between advanced research in Zero-Knowledge Proofs (ZKP) and application development on Ethereum. PADO has been granted funding to develop the first open-source Rust IZK library for Ethereum community.",
  },
  {
    id: "1",
    img: iconZKDayParis,
    link: "https://zk.day/",
    keyword: "zkDay Paris",
    title: "Won 2nd Prize at zkDay Paris",
    desc: "zkDay Paris, presented by Manta Network and Cointelegraph, features a lineup of 25+ speakers, 12 workshops, and a special zkPitch Day highlighting early-stage ZK projects. PADO has been selected to give a pitch talk about our project, explaining the (VOLE-based) IZK protocols and their connections with SNARKs.",
  },
  {
    id: "2",
    img: iconBNBChain,
    link: "https://www.bnbchain.org/en/zero2hero-builder-series",
    keyword: "BNB Chain",
    title: "Won 3rd Prize in the Zero2Hero Incubator",
    desc: "Zero2Hero is a new virtual builder announced by BNB Chain including a bootcamp, hackathon, and a final incubator period. PADO has been selected as one of 14 teams from 200+ applicants to participate in the final incubator.",
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
  const liClassNameFn = useCallback(
    (i) => {
      let activeCL = "reward";
      if (activeReward === i.id) {
        activeCL += " active";
      }
      return activeCL;
    },
    [activeReward]
  );
  return (
    <section className="ourRewards contentWidth">
      <h2>Our Rewards</h2>
      <ul className={activeReward ? "rewards active" : "rewards"}>
        {rewardList.map((i) => {
          return (
            <li
              className={liClassNameFn(i)}
              key={i.id}
              onClick={() => {
                onClickReward(i);
              }}
            >
              <img className="aboutIcon" src={i.img} alt="" />
              <div className="descInfo">
                <PTag text={i.keyword} />
                <h5>{i.title}</h5>
                <div className="desc">
                  <p>{i.desc}</p>
                  <a
                    className="more"
                    href={i.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Learn More</span>
                    <div className="iconArrowRightWrapper"></div>
                    {/* <img
                      className="iconArrowRight"
                      src={iconArrowRight}
                      alt=""
                    /> */}
                  </a>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default OurRewards;
