import React from "react";
import iconOKX from "@/assets/img/connectWallet/iconOKX.svg";
import padoColorful from "@/assets/img/connectWallet/padoColorful.svg";
import "./index.scss";
const connectWallet = ({ children }) => {
  return (
    <div className="connectWalletPage">
      <div className="cardWrapper">
        <div className="cardBody">
          <div className="title">
            <h1>Connect your wallet</h1>
            <h2>
              Authorize through your web3 wallet address to PADO extension
            </h2>
          </div>
          <ul className="walletList">
            <li className="wallet">
              <img className="icon" src={iconOKX} alt=""></img>
              <div className="name">OKX Wallet</div>
            </li>
          </ul>
        </div>

        <footer>
          <img src={padoColorful} alt="" />
        </footer>
      </div>
    </div>
  );
};
export default connectWallet;

<main className="pageWrapper">
      <div className={cardWrapperClassName}>
        <div className="cardBody">
          <div className="title">
            <h1>Submit to BNB Greenfield</h1>
            <h2>
              Authorize to change the network and complete the submission.
            </h2>
          </div>
          <ul className="walletList">
            <li className={liClassName} onClick={handleClick}>
              <Image className="icon" src={iconMetaMask} alt="" />
              <div className="name">{formatName}</div>
            </li>
          </ul>
          {activeStep === "submitSuc" && (
            <div className="resultWrapper suc">
              <Image src={iconSuc} alt="" />
              <div className="desc">
                Please back to the PADO extension to continue the BAS
                Attestation Alliance. This page will close automatically in
                several seconds, or you can manually close it.
              </div>
            </div>
          )}
          {activeStep === "submitError" && (
            <div className="resultWrapper error">
              <Image src={iconWarn} alt="" />
              <div className="desc">
                <p>Unable to proceed</p>
                <p>Your wallet declined authorization. Please try again.</p>
              </div>
            </div>
          )}
        </div>
        <footer>
          <Image src={padoColorful} alt="" />
        </footer>
      </div>
      <div className="secretBtns">
        <button ref={regenerateRef as any} id="regenerate">
          regenerate
        </button>
        <button id="upperChain" onClick={handleUpperChainStep2}>
          upperChain2
        </button>
        <button ref={completeRef as any} id="completeUpperChain">
          complete
        </button>
      </div>
    </main>
