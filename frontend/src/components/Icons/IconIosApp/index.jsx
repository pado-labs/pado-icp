import React, { memo, useEffect } from "react";
import useIconColor from "@/hooks/useIconColor";

const IconIosApp = memo(
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
        <path
          d="M27.4961 11.7271L27.5141 11.7289L27.5321 11.7294C28.5679 11.7582 31.3763 12.1049 33.3478 14.4703C32.2498 15.2274 29.6868 17.3871 29.7217 21.0858C29.7463 23.8307 31.0115 25.6679 32.2708 26.8096C33.0816 27.5447 33.8939 27.9964 34.3841 28.2293C34.3812 28.2373 34.3784 28.2454 34.3755 28.2535C34.282 28.5156 34.1412 28.8811 33.9475 29.3163C33.5596 30.1877 32.9623 31.3313 32.1123 32.4813L32.1122 32.4812L32.105 32.4915C31.3698 33.5401 30.6506 34.526 29.829 35.258C29.0182 35.9804 28.136 36.4297 27.0717 36.446L27.0684 36.4461C26.0139 36.4692 25.3137 36.1849 24.4954 35.8526L24.459 35.8378C23.6103 35.4933 22.6588 35.1172 21.2015 35.1172C19.7384 35.1172 18.7723 35.4665 17.9111 35.8096C17.8523 35.8331 17.7941 35.8564 17.7365 35.8795C16.9612 36.1902 16.2879 36.4602 15.3246 36.4983C14.3474 36.5322 13.4457 36.0665 12.5698 35.2823C11.6919 34.4965 10.8984 33.4439 10.1367 32.4049C8.66268 30.3505 7.34456 27.4424 6.78468 24.4147C6.22405 21.3829 6.43374 18.2928 7.93119 15.82L7.9312 15.82L7.93257 15.8177C9.3799 13.3985 12.0195 11.8429 14.8321 11.8015L14.8345 11.8015C15.8917 11.7809 16.9324 12.1218 17.9379 12.5008C18.0655 12.5489 18.1937 12.598 18.3215 12.647C18.6836 12.7858 19.0428 12.9235 19.3777 13.0332C19.8309 13.1816 20.2942 13.2982 20.732 13.2982C21.1728 13.2982 21.6712 13.1566 22.1636 12.9871C22.434 12.894 22.7413 12.7778 23.0572 12.6584C23.305 12.5647 23.5582 12.469 23.8028 12.3809C24.9766 11.9583 26.2402 11.601 27.4961 11.7271ZM22.697 5.92469L22.6976 5.92395C23.773 4.72029 25.5789 3.76954 27.1125 3.54589C27.1522 5.21803 26.4258 6.86359 25.3721 8.12277C24.266 9.3649 22.5715 10.308 20.9135 10.3499C20.8625 8.72974 21.7141 7.02048 22.697 5.92469Z"
          stroke={strokeColor}
        />
      </svg>
    );
  }
);

export default IconIosApp;
