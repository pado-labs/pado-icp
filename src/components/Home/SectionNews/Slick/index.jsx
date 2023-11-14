import React,{useMemo} from "react";
import Slider from "react-slick";
import useBreakPoint from "@/hooks/useBreakPoint";
import useWinWidth from "@/hooks/useWinWidth";
import "./index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const descList = [
  {
    id: "0",
    link: "https://medium.com/@padolabs/zkdata-attestation-proves-everything-with-cryptography-d435e68f66dd",
    date: "6 Mar 2023",
    type: "# Blog",
    title: "zkData Attestation, Proves Everything with Cryptography",
    desc: "Recently, the Ethereum developer conference ETHDenver was in full swing, and a somewhat unfamiliar term “Attestation” was mentioned by many developers.",
  },
  {
    id: "1",
    link: "https://twitter.com/BNBCHAIN/status/1669014722132180993",
    date: "15 Jun 2023",
    type: "# News",
    title: "Selected to participate in BNB chain Zero2Hero Incubator",
    desc: "This five-week program provides resources, mentorship, and networking opportunities to take these exciting projects to the next level.",
  },
  {
    id: "2",
    link: "https://medium.com/@padolabs/how-to-build-a-web3-credit-ecosystem-with-off-chain-data-validity-cf8c67e5aa05",
    date: "5 Jul 2023",
    type: "# Blog",
    title: "How to Build a Web3 Credit Ecosystem with Off-chain ...",
    desc: "With the continual advancement of public blockchains, Web3 applications have progressed to a new stage. These include games, quest systems, content",
  },
  {
    id: "3",
    link: "https://twitter.com/padolabs/status/1681489770030198784",
    date: "19 Jul 2023",
    type: "# News",
    title: "New Partnership with ZAN",
    desc: "PADO is now collaborating with ZAN to provide a lightweight eKYC service based on the Proof of Verification (POV) solution.",
  },
  {
    id: "4",
    link: "https://twitter.com/Cointelegraph/status/1681637494356422659",
    date: "19 Jul 2023",
    type: "# News",
    title: (
      <>
        Won the 2<sup>nd</sup> prize at zkDay Paris
      </>
    ),
    desc: "PADO Labs gave a pitch talk to explain (VOLE-based) IZK protocols and connections with snarks.",
  },
  {
    id: "5",
    link: "https://twitter.com/BNBCHAIN/status/1682015301259390977",
    date: "19 Jul 2023",
    type: "# News",
    title: (
      <>
        Won the 3<sup>rd</sup> prize in the BNB Chain Zero2Hero Pitch Day
      </>
    ),
    desc: "PADO Labs won the 3rd prize in the BNB Chain Zero2Hero incubator!",
  },
  {
    id: "6",
    link: "https://medium.com/@padolabs/pado-team-excitedly-announces-upcoming-beta-product-launch-and-reveals-3million-seed-funding-f86627c21dbf",
    date: "18 Aug 2023",
    type: "# News",
    title: "PADO Labs Launches Beta Product",
    desc: "PADO Team Excitedly Announces Upcoming Beta Product Launch and Reveals $3Million Seed Funding",
  },
];
const baseSettings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3.2,
  speed: 500,
  autoplay: true,
  pauseOnHover: true,
};
export default function CenterMode() {
  const breakPoint = useBreakPoint()
  const size = useWinWidth();
  
  const slidesToShow = useMemo(() => {
    const { width } = size;
    if (width < 576) {
      return 0.85
    }
    if (width >= 993 && width < 1280) {
      return 2.3
    }
    return 3.2;
  }, [size]);
  return (
    <div className={breakPoint === "s" ? "pSlick" : "pSlick pc"}>
      <Slider {...baseSettings} slidesToShow={slidesToShow}>
        {descList.map((i) => {
          return (
            <div className="mySlickItem" key={i.title}>
              <a href={i.link} target="_blank" rel="noreferrer">
                <div className="descT">
                  <div className="dateWrapper">
                    <span>{i.date}</span>
                    <i className="separator"></i>
                    <span>{i.type}</span>
                  </div>
                  <h6 className="title">{i.title}</h6>
                  <p className="desc">{i.desc}</p>
                </div>
                <div className="descC">Read More</div>
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
