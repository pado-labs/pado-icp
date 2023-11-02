import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

import missionVerify from "@img/home/missionVerify.png";
import missionProve from "@img/home/missionProve.svg";
import missionTrust from "@img/home/missionTrust.svg";
import missionVerifyS from "@img/home/missionVerifyS.png";
import missionProveS from "@img/home/missionProveS.svg";
import missionTrustS from "@img/home/missionTrustS.svg";
export const swiperConfig = {
  noSwiping: true,
  noSwipingSelector:`.swiper-slide`,
  // autoplay: {
  //   delay: 4500,
  //   disableOnInteraction: false,
  // },
  direction: "vertical",
  className: "mySwiper ",
  speed: 350,
  spaceBetween: 50,
  loop: true,
  modules: [Autoplay, EffectFade],
  // effect:"fade"
  // onSlideChange={() => console.log("slide change")}
  // onSwiper={(swiper) => console.log(swiper)}
};

export const slideList = [
  {
    img: missionVerify,
    imgS: missionVerifyS,
    type: "verify",
    title: "Data Authenticity",
    desc: "PADO retrieves data via standard TLS protocol with the coprocessing of MPC. The MPC-TLS solution ensures authenticity and security during data retrieval processes.",
  },
  {
    img: missionProve,
    imgS: missionProveS,
    type: "Prove",
    title: "Data Attestation",
    desc: "Use the VOLE-based interactive zero knowledge proofs (IZK) to create data attestations from Internet. The IZK protocol is lightweight enough to be executed within browsers or mobiles.",
  },
  {
    img: missionTrust,
    imgS: missionTrustS,
    type: "Compute",
    title: "Data Computation",
    desc: "PADO enables verifiable computation paradigm on massive data. By coupling with general computation techniques like zkVM, the correctness and public verifiability is guaranteed.",
  },
];
