import React from "react";

import SectionBanner from "@com/About/SectionBanner";
import OurRewards from "@com/About/OurRewards";
import OurAdvantages from "@com/About/OurAdvantages";
import TechAchievements from "@/components/About/TechAchievements";
import Investors from "@/components/About/Investors";
// import SectionNews from "@/components/Home/SectionNews";
const About = ({ children }) => {
  return (
    <div className="pageHome">
      {/* <Particles/>   */}
      <SectionBanner />
      <OurRewards />
      <OurAdvantages />
      <TechAchievements />
      <Investors />
    </div>
  );
};
export default About;
