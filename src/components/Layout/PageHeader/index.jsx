import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useBreakPoint from "@/hooks/useBreakPoint";
import { PADODOCURL, PADOEXTENSIONDOWNLOADURL } from "@/config/constants";
import logo from "@img/home/logo.svg";
import iconMenu from "@img/home/iconMenu.svg";
// import iconArrowRight from "@img/home/iconArrowRight.svg";
import PButton from "@/components/PButton";
import "./index.scss";

const navList = [
  { name: "Techniques", path: "/#allYouNeed" },
  // { name: "About Us", path: "/about" },
  { name: "Docs", path: PADODOCURL },
  // { name: "Pricing", path: PADODOCURL },
  { name: "Contact", path: "/contactUs" },
  // { name: "Product Trial", path: "/product-trial" },
  { name: "Get Started", path: PADOEXTENSIONDOWNLOADURL },
];

const PageHeader = () => {
  const [isScroll, setIsScroll] = useState(false);
  const breakPoint = useBreakPoint();
  const location = useLocation();
  const pathname = useMemo(() => {
    return location.pathname;
  }, [location]);

  const [activeNav, setActiveNav] = useState();
  const navigate = useNavigate();
  
  
  const onClickNav = (navItem) => {
    const actPath = navItem.path;
    if (actPath.startsWith("http")) {
      window.open(actPath);
    } else {
      setActiveNav(navItem.name);
      if (navItem.name === "Techniques") {
        navigate(navItem.path);
        
        const hashEl = document.getElementById("allYouNeed");
       
        if (hashEl) {
          hashEl.scrollIntoView({
            behavior: "smooth",
          });
        }
      } else {
        if (
          navItem.path.startsWith("http") ||
          navItem.path.startsWith("https")
        ) {
          window.open(navItem.path);
        } else {
          navigate(navItem.path);
        }
      }
    }
  };
  const onClickLogo = () => {
    navigate("/");
  };
  const onClickMobileMenu = () => {
    const activePath = pathname === "/mobileMenu" ? "/" : "/mobileMenu";
    navigate(activePath);
  };
  useEffect(() => {
    let timer = null;
    let fn = (event) => {
      
      var afterTop = document.documentElement.scrollTop
        || document.body.scrollTop || window.pageYOffset;
      setIsScroll(afterTop > 1);
    };
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(fn, 0);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [breakPoint]);
  useEffect(() => {
    if (pathname === "/") {
      setActiveNav(undefined);
    }
  }, [pathname]);
  return (
    <div className={isScroll ? "pageHeader  isScroll" : "pageHeader "}>
      <div className="contentWidth">
        <img className="logo" src={logo} alt="" onClick={onClickLogo} />
        {breakPoint === "s" && (
          <img
            className="iconMenu"
            src={iconMenu}
            alt=""
            onClick={onClickMobileMenu}
          />
        )}
        {breakPoint !== "s" && (
          <ul className="navs">
            {navList.map((i) => {
              return (
                <li
                  className={
                    activeNav === i.name ? "navItem active" : "navItem"
                  }
                  key={i.name}
                  onClick={() => {
                    onClickNav(i);
                  }}
                >
                  {/* {i.name === "Product Trial" ? (
                  <PButton text={i.name}></PButton>
                ) : (
                  i.name
                )} */}
                  {i.name === "Get Started" ? (
                    <PButton text={i.name}></PButton>
                  ) : (
                    i.name
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
export default PageHeader;
