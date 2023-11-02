import React, { useState, useRef, useMemo, useEffect, memo } from "react";
import "./index.scss";

const PInput = memo(
  ({
    onChange,
    type = "text",
    placeholder = "",
    onSearch,
    value,
    className = "",
  }) => {
    const inputEl = useRef(null);
    // const [val, setVal] = useState();

    const activeType = useMemo(() => {
      return type;
    }, [type]);

    const handleChange = (e) => {
      const formatVal = e.target.value.trim();
      // setVal(formatVal);
      onChange(formatVal);
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        const formatVal = e.target.value.trim();
        onSearch && onSearch(formatVal);
      }
    };
    // useEffect(() => {
    //   if (value !== null && value !== undefined) {
    //     setVal(value);
    //   }
    // }, [value]);
    const cN = useMemo(() => {
      return `pInputWrapper pControledInput ${className}`;
    }, [className]);
    return (
      <div className={cN}>
        <input
          ref={inputEl}
          type={activeType}
          className="pInput"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
);

export default PInput;
