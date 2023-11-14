import React, { memo, useEffect } from "react";
import useIconColor from "@/hooks/useIconColor";

const IconIntegrations = memo(
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
        <rect
          x="3.49994"
          y="2.5"
          width="32.5166"
          height="20.972"
          stroke={strokeColor}
          strokeLinejoin="round"
        />
        <path
          d="M12.3107 23.9717V28.911H6.72455V34.3991"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.5789 23.9717V28.911H33.165V34.3991"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.1309 23.5997L20.1309 34.0271"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.6 17.432L13.876 9.20001H15.148L18.436 17.432H17.416L16.552 15.26H12.424L11.572 17.432H10.6ZM12.748 14.444H16.228L15.148 11.696C15.124 11.632 15.088 11.536 15.04 11.408C14.992 11.28 14.936 11.136 14.872 10.976C14.816 10.808 14.756 10.64 14.692 10.472C14.636 10.304 14.58 10.152 14.524 10.016H14.44C14.392 10.168 14.328 10.348 14.248 10.556C14.176 10.764 14.1 10.972 14.02 11.18C13.948 11.38 13.884 11.552 13.828 11.696L12.748 14.444Z"
          fill={strokeColor}
        />
        <path
          d="M19.6234 17.432V9.20001H23.6554C24.2154 9.20001 24.6754 9.30801 25.0354 9.52401C25.4034 9.73201 25.6754 10.02 25.8514 10.388C26.0354 10.756 26.1274 11.176 26.1274 11.648C26.1274 12.136 26.0234 12.572 25.8154 12.956C25.6074 13.34 25.3194 13.64 24.9514 13.856C24.5834 14.064 24.1594 14.168 23.6794 14.168H20.5714V17.432H19.6234ZM20.5714 13.352H23.6074C24.0714 13.352 24.4474 13.204 24.7354 12.908C25.0234 12.604 25.1674 12.188 25.1674 11.66C25.1674 11.316 25.1074 11.024 24.9874 10.784C24.8754 10.536 24.7034 10.348 24.4714 10.22C24.2394 10.084 23.9514 10.016 23.6074 10.016H20.5714V13.352Z"
          fill={strokeColor}
        />
        <path
          d="M27.5804 17.432V9.20001H28.5284V17.432H27.5804Z"
          fill={strokeColor}
        />
        <circle cx="6.64699" cy="37.0992" r="0.899984" fill={strokeColor} />
        <circle cx="20.1465" cy="37.0992" r="0.899984" fill={strokeColor} />
        <circle cx="33.1958" cy="37.0992" r="0.899984" fill={strokeColor} />
      </svg>
    );
  }
);

export default IconIntegrations;
