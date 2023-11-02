import React, { memo } from "react";
import "./index.scss";

const PTag = memo(({ text = "Our Mission" }) => {
  return <div className="pTag">{text}</div>;
});

export default PTag;
