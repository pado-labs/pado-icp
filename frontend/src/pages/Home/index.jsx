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
  const location = useLocation();
  console.log(location);
  const hash = useMemo(() => {
    return location.hash.split('#')[1];
  }, [location]);
  useEffect(() => {
    if (hash === "allYouNeed") {
      document.getElementById(hash).scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [hash]);

  return (
    <div className="pageHome">
      {/* <Particles/>   */}
      <SectionBanner />
      <SectionDetail />
      {/* <SectionAllYouNeed /> */}
      <TechAchievements />
      <SectionBuildACredit />
      {/* <SectionNews /> */}
    </div>
  );
};
export default Home;
