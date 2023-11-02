import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { contractUs } from "@/api/productTrial";
import { PADODOCURLPRIVACY } from "@/config/constants";
import logo from "@img/home/logoLight.svg";
import iconArrowRight from "@img/home/iconArrowRight.svg";
import PButton from "@/components/PButton";
import "./index.scss";
import PInput from "@/components/PInput";
import iconFriendGithub from "@img/layout/iconFriendGithub.svg";
import iconFriendDiscord from "@img/layout/iconFriendDiscord.svg";
import iconFriendMedium from "@img/layout/iconFriendMedium.svg";
import iconFriendTwitter from "@img/layout/iconFriendTwitter.svg";
import SubmitSucDialog from "@com/ContactUs/SubmitSucDialog";

const friendList = [
  {
    icon: iconFriendTwitter,
    link: "https://twitter.com/padolabs",
    name: "Twitter",
  },
  {
    icon: iconFriendMedium,
    link: "https://medium.com/@padolabs",
    name: "Medium",
  },
  {
    icon: iconFriendGithub,
    link: "https://github.com/PADO-labs",
    name: "Github",
  },
  {
    icon: iconFriendDiscord,
    link: "https://discord.gg/YxJftNRxhh",
    name: "Discord",
  },
];
const PageFooter = () => {
  const [email,setEmail] = useState('')
  const [loading, setLoading] = useState(false);
  const [sucVisible, setSucVisible] = useState(false);

  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };
  const onClickSubscibe = async () => {
    if (!email) {
      return
    }
    const formatParams = {
      firstName: "-",
      lastName: "-",
      companyName: "-",
      jobTitle: "-",
      country: "-",
      businessEmail: email,
      phoneNumber: "-",
      receiveEmail: "1",
      contactType: "SUBSCRIBE",
    };
    setLoading(true);
    try {
      const { rc, result } = await contractUs(formatParams);
      if (rc === 0 ) {
        setSucVisible(true)
      }
      setLoading(false);
    } catch {
      setLoading(false);
      alert("Submit error!");
    }
  };
  const onCloseSucDialog = () => {
    setLoading(false);
    setSucVisible(false);
  };

  return (
    <div className="pageFooter ">
      <div className="pageFooterT">
        <div className="con contentWidth">
          <img className="logo" onClick={onClickLogo} src={logo} alt="" />
          <div className="qs">
            <div className="q">Want the latest updates about PADO Labs?</div>
            <div className="s">
              <PInput
                placeholder="Enter email address"
                value={email}
                onChange={(v) => {
                  setEmail(v);
                }}
              />
              <PButton text="Subscribe" onClick={onClickSubscibe} suffix={iconArrowRight} />
            </div>
          </div>
        </div>
      </div>
      <div className="pageFooterC contentWidth">
        <div className="con">
          <div className="copyright">
            <span>Copyright © 2023 PADO Labs</span>
            <a href={PADODOCURLPRIVACY} target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
          </div>
          <ul className="friends">
            {friendList.map((i) => {
              return (
                <li key={i.name}>
                  <a href={i.link} target="_blank" rel="noreferrer">
                    <img src={i.icon} alt="" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {sucVisible && !loading && <SubmitSucDialog onClose={onCloseSucDialog} />}
    </div>
  );
};
export default PageFooter;
