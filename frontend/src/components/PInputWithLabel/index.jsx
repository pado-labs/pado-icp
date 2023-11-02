import React, { useState, useRef, useMemo, useEffect, memo } from "react";
import PInput from "@com/PInput";
import "./index.scss";

const PInputWithLabel = memo(
  ({ onChange, type = "text", placeholder = "", onSearch, value, label,className}) => {
  
    return (
      <div className="pInputWithLabelWrapper ">
        <label>{label}</label>
        <PInput
          type={type}
          placeholder={placeholder}
          value={value}
          onSearch={onSearch}
          onChange={onChange}
          className={className}
        />
      </div>
    );
  }
);

export default PInputWithLabel;
