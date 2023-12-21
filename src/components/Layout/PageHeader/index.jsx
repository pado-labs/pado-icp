import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useBreakPoint from "@/hooks/useBreakPoint";
import { counter } from "@/declarations/counter";
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
  { name: "Connect Plug", path: "" },
  { name: "Connect Pado", path: "" },
  { name: "Upper Chain", path: "" },
];

const PageHeader = () => {
  const [icpAddress, setIcpAddress] = useState();
  const [icpAddress2, setIcpAddress2] = useState();
  const [isScroll, setIsScroll] = useState(false);
  const breakPoint = useBreakPoint();
  const location = useLocation();
  const pathname = useMemo(() => {
    return location.pathname;
  }, [location]);

  const [activeNav, setActiveNav] = useState();
  const navigate = useNavigate();
  const connectWalletFn = async () => {
    try {
      const publicKey = await window.ic.plug.requestConnect();
      console.log(`The connected user's public key is:`, publicKey);
      console.log(
        `The connected user's principalId is:`,
        window.ic.plug.principalId
      );
      let balance = [1, 2, 3];
      try {
        balance = await window.ic?.plug?.requestBalance();
      } catch (e) {
        console.log("fetch balance e", e);
      }
      // console.log("2221234567", balance);
      // const balance = [1,2,3]
      localStorage.setItem("icpBalance", JSON.stringify(balance));
      setIcpAddress(window.ic.plug.principalId);
    } catch (e) {
      console.log(e);
    }
  };
  const connectPadoFn = async () => {
    if (!icpAddress) {
      alert('please connect plug wallet first!')
    }
  };
  const upperChainFn = async () => {
    console.log("222");
    // const balance = await window.ic?.plug?.requestBalance();
    // console.log("2221234567", balance);
    // await connectWalletFn()
    console.log("************************* before start");
    const v = await counter.getValue();
    const greeting = await counter.increment();
    const newV = await counter.getValue();
    console.log("*********** 2221,v,", v,greeting,newV);
    setIcpAddress2(window.ic.plug.accountId);
  };
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
        if (navItem.name === "Connect Plug") {
          connectWalletFn();
        } else if (navItem.name === "Connect Pado") {
          connectPadoFn();
        } else if (navItem.name === "Upper Chain") {
          upperChainFn();
        } else if (
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
      var afterTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
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
  // useEffect(() => {
  //   const fn = function () {
  //     // Check if the page is hidden
  //     if (document.hidden) {
  //       console.log("User opened another tab");
  //     } else {
  //       console.log("pado content unjected,reload...");
  //       window.location.reload();
  //     }
  //   };
  //   document.addEventListener("visibilitychange", fn);
  //   return () => {
  //     document.removeEventListener("visibilitychange", fn);
  //   };
  // }, []);
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
                  id={
                    i.name === "Connect Pado"
                      ? "ConnectPadoNav"
                      : i.name === "Upper Chain"
                      ? "UpperChainNav"
                      : ""
                  }
                  title={
                    i.name === "Connect Pado"
                      ? icpAddress
                      : i.name === "Upper Chain"
                      ? icpAddress2
                      : ""
                  }
                  key={i.name}
                  onClick={() => {
                    onClickNav(i);
                  }}
                >
                  {["Get Started", "Connect Plug", "Connect Pado"].includes(
                    i.name
                  ) ? (
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
