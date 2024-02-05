import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import useBreakPoint from "@/hooks/useBreakPoint";
import { attestationregistry } from "@/declarations/attestationregistry";
//import { Entry } from "@/declarations/padoportal/padoportal.did";
import { PADODOCURL, PADOEXTENSIONDOWNLOADURL } from "@/config/constants";
import logo from "@img/home/logo.svg";
import iconMenu from "@img/home/iconMenu.svg";
// import iconArrowRight from "@img/home/iconArrowRight.svg";
import PButton from "@/components/PButton";
import "./index.scss";

const PageHeader = () => {
  const [icpAddress, setIcpAddress] = useState();
  const [icpAddress2, setIcpAddress2] = useState();
  const [isScroll, setIsScroll] = useState(false);
  const breakPoint = useBreakPoint();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const canisterId = searchParams.get("canisterId");

  const navList = useMemo(() => {
    let list = [
      {
        name: "Docs",
        path: "https://github.com/pado-labs/pado-icp/blob/main/README.md",
      },
      {
        name: "View Attestations",
        path: `/attestationsList?canisterId=${canisterId}`,
      },
      { name: "Get Started", path: PADOEXTENSIONDOWNLOADURL },
    ];
    return list;
  }, [canisterId]);
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
      // let balance = [1, 2, 3];
      // try {
      //   balance = await window.ic?.plug?.requestBalance();
      // } catch (e) {
      //   console.log("fetch balance e", e);
      // }
      // console.log("2221234567", balance);
      // const balance = [1,2,3]
      // localStorage.setItem("icpBalance", JSON.stringify(balance));
      setIcpAddress(window.ic.plug.principalId);
      navList[4].name = "Connect Pado";
    } catch (e) {
      console.log(e);
    }
  };
  const connectPadoFn = async () => {
    if (!icpAddress) {
      alert("please connect plug wallet first!");
    }
  };
  const upperChainFn = async () => {
    try {
      const padoUpperChainInfoStr = localStorage.getItem("padoUpperChainInfo");
      console.log("************************* before start");

      const entry = JSON.parse(padoUpperChainInfoStr);
      // const v = await padoportal.get(icpAddress);
      // console.log("upper chain info", entry);
      // const res = await padoportal.set(icpAddress, entry);
      // const newv = await padoportal.get(icpAddress);

      const attestParams = entry.eip712MessageRawDataWithSignature.message;
      attestParams.signature = entry.signature;

      var s = attestParams.data.substring(2);
      var result = [];

      for (var i = 0; i < s.length; i += 2) {
        result.push(parseInt(s.substring(i, i + 2), 16));
      }
      result = Uint8Array.from(result);
      attestParams.data = result;
      console.log("attest params", attestParams);
      const res = await attestationregistry.attest(attestParams, "PADO Labs");
      console.log("attest res", res);
      const getAttestationRes = await attestationregistry.getAttestation(res);
      console.log("getAttestation res", getAttestationRes);
      const getAttestationUidsRes =
        await attestationregistry.getAttestationUids();
      console.log("getAttestationUidsRes res", getAttestationUidsRes);
      window.postMessage(
        {
          target: "padoExtension",
          name: "icp",
          params: {
            operation: "upperChain",
            result: true,
            params: {
              attestationId: res,
              attestationDetailPath:
                window.location.href + "?attestationId=" + res,
              signature: entry.signature,
            },
          },
        },
        "*"
      );
    } catch {
      window.postMessage(
        {
          target: "padoExtension",
          name: "icp",
          params: {
            operation: "upperChain",
            result: false,
            params: {},
          },
        },
        "*"
      );
    }
  };
  const onClickNav = (navItem) => {
    const actPath = navItem.path;
    if (actPath.startsWith("http") || actPath.startsWith("https")) {
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
            {navList.map((i, k) => {
              return (
                <li
                  className={
                    activeNav === i.name ? "navItem active" : "navItem"
                  }
                  id={
                    k === 4
                      ? "ConnectPadoNav"
                      : i.name === "Upper Chain"
                      ? "UpperChainNav"
                      : ""
                  }
                  title={
                    k === 4
                      ? icpAddress
                      : i.name === "Upper Chain"
                      ? icpAddress2
                      : ""
                  }
                  key={k}
                  onClick={() => {
                    onClickNav(i);
                  }}
                >
                  {[
                    "Get Started",
                    "Connect Plug",
                    "Connect Pado",
                    "Upper Chain",
                  ].includes(i.name) ? (
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
