import React, { memo } from "react";

import PMask from "@/components/PMask";
import iconClose from "@img/productTrial/iconClose.svg";
import video from "@img/about/video.mp4";
import "./index.scss";

const VideoDialog = memo(({ onClose }) => {
  return (
    <PMask onClose={onClose}>
      <div className="videoDialog">
        <img className="iconClose" src={iconClose} alt="" onClick={onClose} />
        <video autoPlay className="video" preload loop muted controls>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </PMask>
  );
});

export default VideoDialog;
