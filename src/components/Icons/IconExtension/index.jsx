import React, { memo, useEffect } from "react";
import useIconColor from "@/hooks/useIconColor";

const IconExtension = memo(
  ({
    color = "#fff",
    hoverColor = "#34DBFF",
    width = "40",
    isActive = false,
  }) => {
    const [strokeColor, handleEnter, handleLeave] = useIconColor(
      color,
      hoverColor
    );
    useEffect(() => {
      isActive && handleEnter();
      if (isActive) {
        handleEnter();
      } else {
        handleLeave();
      }
    }, [isActive, handleEnter, handleLeave]);
    return (
      <svg
        width={width}
        height={width}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1257_447)">
          <path
            d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 25.625C23.1066 25.625 25.625 23.1066 25.625 20C25.625 16.8934 23.1066 14.375 20 14.375C16.8934 14.375 14.375 16.8934 14.375 20C14.375 23.1066 16.8934 25.625 20 25.625Z"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 14.375H33.9062"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.1246 22.8133L8.17151 10.7664"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.8754 22.8125L17.9222 34.8594"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1257_447">
            <rect width={width} height={width} fill={strokeColor} />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

export default IconExtension;
