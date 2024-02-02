import React, { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SectionBanner from "@com/Home/SectionBanner";
import SectionDetail from "@com/Home/SectionDetail";
import SectionAllYouNeed from "@/components/Home/SectionAllYouNeed";
import SectionBuildACredit from "@/components/Home/SectionBuildACredit";
import SectionNews from "@/components/Home/SectionNews";
import TechAchievements from "@/components/About/TechAchievements";
// import Particles from "@/components/Home/Particles";
const Home = ({ children }) => {
  // const location = useLocation();
  // console.log(location);
  // const hash = useMemo(() => {
  //   return location.hash.split("#")[1];
  // }, [location]);
  // useEffect(() => {
  //   if (hash === "allYouNeed") {
  //     document.getElementById(hash).scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // }, [hash]);
  // useEffect(() => {
  //   const signature =
  //     "0x6f4a66f6be06e918cf1a45a4d3a6485949a8b7cd67bd5bdfe338f54a94212e575dae4e24acfc335c0d8c2f2f120c58b032337c51f0c0a98d08943c0d79d7fccb1c";

  //   var s = signature.substring(2);
  //   var result = [];
  //   for (var i = 0; i < s.length; i += 2) {
  //     result.push(parseInt(s.substring(i, i + 2), 16));
  //   }
  //   result = Uint8Array.from(result);
  //   console.log("Uint8Array =>", result);
  //   const hexStr1 = result.toString(16);
  //   const hexStr2 = new Uint8Array(result).toString(16);
  //   const hexStr3 = Buffer.from(result).toString("hex");
  //   console.log("hexStr1:", hexStr1, "hexSter2:", hexStr2, "hexStr3:", hexStr3);
  //   // ethers.utils.AbiCoder.decode([ "Text", "Text","Nat64","Bool" ,"Text", "Blob","Nat64","Text"], hexStr3)
  // }, []);

  return (
    <div className="pageHome">
      {/* <Particles/>   */}
      <SectionBanner />
      {/* <SectionDetail /> */}
      {/* <SectionAllYouNeed /> */}
      {/* <TechAchievements /> */}
      {/* <SectionBuildACredit /> */}
      {/* <SectionNews /> */}
    </div>
  );
};
export default Home;
