import React, { useState, useMemo, useCallback, useEffect, memo } from "react";
import { useSearchParams } from "react-router-dom";
import { attestationregistry } from "@/declarations/attestationregistry";

import iconWalletPlugWallet from "@/assets/img/connectWallet/iconWalletPlugWallet.svg";
import padoColorful from "@/assets/img/connectWallet/padoColorful.svg";
import iconSuc from "@/assets/img/connectWallet/iconSuc.svg";
import iconWarn from "@/assets/img/connectWallet/iconWarn.svg";

import "./index.scss";

const ConnectWallet = memo(({ children }) => {
  const [searchParams] = useSearchParams();
  const operation = searchParams.get("operation");
  const canisterId = searchParams.get("canisterId");
  const [activeStep, setActiveStep] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const cardWrapperClassName = useMemo(() => {
    let cN = "cardWrapper";
    if (activeStep === "submitSuc" || activeStep === "submitError") {
      cN += " hasResult";
    }
    return cN;
  }, [activeStep]);
  const formatName = useMemo(() => {
    let str;
    switch (activeStep) {
      case "connected":
        str = `Connected!`;
        break;
      case "submitting":
        str = (
          <div>
            Request Connecting <i className="dots">...</i>
          </div>
        );
        break;
      case "submittingChain":
        str = (
          <div>
            Submitting to ICP <i className="dots">...</i>
          </div>
        );
        break;

      case "submitSuc":
        str = "Congratulations!";
        break;
      case "":
      case "submitError":
        str = "Connect Wallet";
        break;
    }
    return str;
  }, [activeStep]);
  const liClassName = useMemo(() => {
    let str = "wallet";
    if (activeStep !== "" && activeStep !== "submitError") {
      str += " active";
    }
    return str;
  }, [activeStep]);
  const connectWalletFn = useCallback(async () => {
    try {
      if (walletAddress) {
        return;
      }
      setActiveStep("submitting");
      const publicKey = await window.ic.plug.requestConnect();
      console.log(`The connected user's public key is:`, publicKey);
      console.log(
        `The connected user's principalId is:`,
        window.ic.plug.principalId
      );
      setWalletAddress(window.ic.plug.principalId);
      setActiveStep("connected");
      window.postMessage(
        {
          target: "padoExtension",
          origin: "padoIcp",
          name: "connectWalletRes",
          params: {
            operation: "connectWalletRes",
            result: true,
            params: {
              address: window.ic.plug.principalId,
            },
          },
        },
        "*"
      );
    } catch (e) {
      console.log(e);
      setActiveStep("submitError");
      window.postMessage(
        {
          target: "padoExtension",
          origin: "padoIcp",
          name: "connectWalletRes",
          params: {
            operation: "connectWalletRes",
            result: false,
            params: {},
          },
        },
        "*"
      );
    }
  }, [walletAddress]);
  const handleClick = useCallback(() => {
    if (activeStep === "") {
      connectWalletFn();
    }
  }, [activeStep]);

  const upperChainFn = useCallback(async (entry) => {
    try {
      setActiveStep("submittingChain");
      console.log("************************* before start");
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
          origin: "padoIcp",
          name: "upperChainRes",
          params: {
            operation: "upperChainRes",
            result: true,
            params: {
              attestationId: res,
              attestationDetailPath:
                window.location.protocol +
                window.location.host +
                "/attestationsDetail?canisterId=" +
                canisterId +
                "&id=" +
                res,
              signature: entry.signature,
            },
          },
        },
        "*"
      );
      setActiveStep("submitSuc");
    } catch {
      window.postMessage(
        {
          target: "padoExtension",
          origin: "padoIcp",
          name: "upperChainRes",
          params: {
            operation: "upperChainRes",
            result: false,
            params: {},
          },
        },
        "*"
      );
      setActiveStep("submitError");
    }
  }, []);
  useEffect(() => {
    const listenerFn = (e) => {
      const { target, name, params } = e.data;
      if (target === "padoIcp") {
        console.log("padoIcp onMessage", e.data, new Date());
        if (name === "upperChain") {
          upperChainFn(params);
        }
      }
    };
    window.addEventListener("message", listenerFn, false);
    return () => {
      window.removeEventListener("message", listenerFn);
    };
  }, [upperChainFn]);
  useEffect(() => {
    // connectWalletFn();
    if (operation === "connectWallet") {
      connectWalletFn();
    } else if (operation === "upperChain") {
    }
  }, []);

  return (
    <main className="connectWalletPageWrapper">
      <div className={cardWrapperClassName}>
        <div className="cardBody">
          <div className="title">
            <h1>Connect to Plug Wallet</h1>
            <h2>Authorize to sign and connect.</h2>
          </div>
          <ul className="walletList">
            <li className={liClassName} onClick={handleClick}>
              <img className="icon" src={iconWalletPlugWallet} alt="" />
              <div className="name">{formatName}</div>
            </li>
          </ul>
          {activeStep === "submitSuc" ||
            (activeStep === "connected" && (
              <div className="resultWrapper suc">
                <img src={iconSuc} alt="" />
                <div className="desc">
                  <p>Congratulations!</p>
                  <p>
                    Please check the PADO extension for more information. This
                    page will close automatically in several seconds, or you can
                    manually close it.
                  </p>
                </div>
              </div>
            ))}
          {activeStep === "submitError" && (
            <div className="resultWrapper error">
              <img src={iconWarn} alt="" />
              <div className="desc">
                <p>Unable to proceed</p>
                <p>Your wallet declined authorization. Please try again.</p>
              </div>
            </div>
          )}
        </div>
        <footer>
          <img src={padoColorful} alt="" />
        </footer>
      </div>
      {/* <div className="secretBtns">
        <button ref={regenerateRef} id="regenerate">
          regenerate
        </button>
        <button id="upperChain" onClick={handleUpperChainStep2}>
          upperChain2
        </button>
        <button ref={completeRef} id="completeUpperChain">
          complete
        </button>
      </div> */}
    </main>
  );
});
export default ConnectWallet;
