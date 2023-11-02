import React, { useEffect, useState, memo } from "react";

import PMask from "@/components/PMask";
import iconClose from "@img/productTrial/iconClose.svg";
import iconSuc from "@img/productTrial/iconSuc.svg";

import "./index.scss";

const SetSucDialog = memo(({ onClose }) => {
  return (
    <PMask onClose={onClose}>
      <div className="submitSucDialog">
        <img className="iconClose" src={iconClose} alt="" onClick={onClose} />
        <img className="iconSuc" src={iconSuc} alt="" />
        <div className="desc">
          <h3>Submit Successful</h3>
          <p>
            We will respond to you as soon as possible. Thank you for your
            patience.
          </p>
        </div>
      </div>
    </PMask>
  );
});

export default SetSucDialog;
