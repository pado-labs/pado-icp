import React, { useState, useRef, useMemo, useEffect, memo } from "react";
import PSelect from "@com/PSelect";
import "./index.scss";

const PInputWithLabel = memo(
  ({
    onChange,
    options,
    placeholder = "",
    onSearch,
    value,
    label,
    className,
  }) => {
    return (
      <div className="pInputWithLabelWrapper ">
        <label>{label}</label>
        <PSelect
          className={className}
          placeholder={placeholder}
          value={value}
          options={options}
          onSearch={onSearch}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default PInputWithLabel;
