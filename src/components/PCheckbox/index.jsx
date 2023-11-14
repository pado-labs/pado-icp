import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import iconCheckbox from "@img/productTrial/iconCheckbox.svg";
import iconCheckboxActive from "@img/productTrial/iconCheckboxActive.svg";
import iconCheckboxError from "@img/productTrial/iconCheckboxError.svg";
import "./index.scss";

const PRadio = memo(({ onChange, error = false }) => {
  const [activeValue, setActiveValue] = useState("1");

  const handleChange = () => {
    const activeV = activeValue === "1" ? "0" : "1";
    setActiveValue(activeV);

    onChange(activeV);
  };
  const activeImg = useMemo(() => {
    let actImg = iconCheckbox;
    if (activeValue === "0") {
      actImg = iconCheckboxActive;
    }
    if (activeValue === "1") {
      actImg = iconCheckbox;
    }
    if (error) {
      actImg = iconCheckboxError;
    }
    return actImg;
  }, [activeValue, error]);

  return (
    <div className="pCheckbox" onClick={handleChange}>
      <img src={activeImg} alt="" className="checkbox" />
    </div>
  );
});

export default PRadio;
