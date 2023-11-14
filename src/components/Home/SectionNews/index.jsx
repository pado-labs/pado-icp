import React, { memo } from "react";
import "./index.scss";
import PTag from "@/components/PTag";

import Slick from "./Slick";

const SectionNews = memo(({}) => {
  return (
    <section className="sectionNews contentWidth">
      <div className="sectionContentT">
        <PTag text="Our Progress" />
        <h3 className="bannerTitle">News & Articles</h3>
      </div>
      <div className="sectionContentC newsWrapper">
        <Slick />
      </div>
    </section>
  );
});

export default SectionNews;
