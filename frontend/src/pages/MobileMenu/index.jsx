import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PADODOCURL } from "@/config/constants";
import "./index.scss";

const navList = [
  { name: "Techniques", path: "/#allYouNeed" },
  // { name: "About Us", path: "/about" },
  { name: "Docs", path: PADODOCURL },
  { name: "Contact", path: "/contactUs" },
];

const MobileMenu = () => {
  const [activeNav, setActiveNav] = useState();
  const navigate = useNavigate();
  const onClickNav = (navItem) => {
    const actPath = navItem.path;
    if (actPath.startsWith("http")) {
      window.open(actPath);
    } else {
      setActiveNav(navItem.name);
      navigate(navItem.path);
    }
  };
  

  return (
    <div className="menuPage">
      <ul>
        {navList.map((i) => {
          return (
            <li
              className={activeNav === i.name ? "active" : ""}
              onClick={() => {
                onClickNav(i);
              }}
            >
              {i.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MobileMenu;
