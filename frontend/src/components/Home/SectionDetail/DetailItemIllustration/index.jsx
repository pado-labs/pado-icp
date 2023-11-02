import React, { memo } from "react";
import "./index.scss";
const DetailItemIllustration = memo(({ img }) => {
  return (
    <div className="illustrationWrapper">
      <img src={img} alt="" />
    </div>
  );
});

export default DetailItemIllustration;
