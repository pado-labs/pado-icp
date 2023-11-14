import React, { memo } from "react";
import "./index.scss";
import Mission from "./Mission";
import Positioning from "./Positioning";
import Vision from "./Vision";

const SectionDetail = memo(() => {
  return (
    <section className="sectionDetail">
      <Vision />
      <Mission />
      <Positioning />
    </section>
  );
});

export default SectionDetail;
