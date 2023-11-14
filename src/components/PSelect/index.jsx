import React, { useState, useEffect, useRef, useMemo, memo } from "react";
// import { useSelector } from 'react-redux';
import iconArrowBottom from "@img/productTrial/iconArrowBottom.svg";

import "./index.scss";

const PSelect = memo(
  ({ onChange, options, placeholder = "", value, className = "" }) => {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const selectInputEl = useRef(null);
    const prefixIconEl = useRef(null);
    const suffixIconEl = useRef(null);
    const valEl = useRef(null);

    const handleChange = (item) => {
      onChange(item?.text ?? "");
    };
    const handleEnterAvatar = () => {
      setOptionsVisible(true);
    };
    const handleLeaveAvatar = () => {
      setOptionsVisible(false);
    };

    useEffect(() => {
      const dE = document.documentElement;
      const dEClickHandler = (ev) => {
        if (
          ev.target !== selectInputEl.current &&
          ev.target !== prefixIconEl.current &&
          ev.target !== suffixIconEl.current &&
          ev.target !== valEl.current
        ) {
          setOptionsVisible(false);
        }
      };
      dE.addEventListener("click", dEClickHandler);
      return () => {
        dE.removeEventListener("click", dEClickHandler);
      };
    }, []);
    const cN = useMemo(() => {
      return `pSelect ${className}`;
    }, [className]);
    return (
      <div className={cN}>
        <div
          ref={selectInputEl}
          className={optionsVisible ? "selectInput active" : "selectInput"}
          onClick={handleEnterAvatar}
          onMouseEnter={handleEnterAvatar}
          onMouseLeave={handleLeaveAvatar}
        >
          <span ref={valEl} className={value ? "" : "placeholder"}>
            {value ? value : placeholder}
          </span>
          <img
            ref={suffixIconEl}
            className="suffixIcon arrow"
            src={iconArrowBottom}
            alt=""
          />
        </div>
        {optionsVisible && (
          <div
            className="selectOptionswrapper"
            onClick={handleEnterAvatar}
            onMouseEnter={handleEnterAvatar}
            onMouseLeave={handleLeaveAvatar}
          >
            <ul className="selectOptions">
              {options.map((item) => {
                return (
                  <li
                    className="selectOption"
                    key={item.text}
                    onClick={() => handleChange(item)}
                  >
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

export default PSelect;
