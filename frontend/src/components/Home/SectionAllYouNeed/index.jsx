import React, { memo, useState } from "react";
import useBreakPoint from "@/hooks/useBreakPoint";
import "./index.scss";
import PQRCode from "@/components/PQRCode";
import IconAndroidApp from "@/components/Icons/IconAndroidApp";
import IconIntegrations from "@/components/Icons/IconIntegrations";
import IconExtension from "@/components/Icons/IconExtension";
import IconIosApp from "@/components/Icons/IconIosApp";
import PButton from "@/components/PButton";
import allYouNeedApps from "@img/home/allYouNeedApps.svg";
import allYouNeedIntegrations from "@img/home/allYouNeedIntegrations.svg";
import allYouNeedExtension from "@img/home/allYouNeedExtension.svg";
import { PADOEXTENSIONDOWNLOADURL } from "@/config/constants";
const descList = [
  {
    img: allYouNeedExtension,
    title: "Extension",
    desc: "Build your own portal to collect your data, create and share data proofs. Data privacy is well preserved through the whole lifecycle.",
  },
  {
    img: allYouNeedIntegrations,
    title: "Integrations",
    desc: "Provide both SDK and APIs toolkits for developers and business partners to build data-driven features.",
  },
  {
    img: allYouNeedApps,
    title: "Apps",
    desc: "Enable convenient access to Web2 and Web3 services, while efficiently generate arbitrary data proofs.",
  },
];

const SectionAllYouNeed = memo(({}) => {
  const breakPoint = useBreakPoint();
  const [activeDownloadId, setActiveDownloadId] = useState();
  const [activeHoverDownloadId, setActiveHoverDownloadId] = useState();
  const downloadList = [
    {
      id: "0",
      element: <IconExtension isActive={activeHoverDownloadId === "0"} />,
      name: "Extension",
      link: PADOEXTENSIONDOWNLOADURL, // TODO

    },
    {
      id: "1",
      element: <IconIntegrations isActive={activeHoverDownloadId === "1"} />,
      name: "Integrations",
      link: "",
      disabled: true,
    },
    {
      id: "2",
      element: <IconAndroidApp isActive={activeHoverDownloadId === "2"} />,
      name: "Android App",
      link: "",
      disabled: true,
    },
    {
      id: "3",
      element: <IconIosApp isActive={activeHoverDownloadId === "3"} />,
      name: "iOS App",
      link: "",
      disabled: true,
    },
  ];
  const handleEnter = (i) => {
    if (!i.disabled) {
      setActiveHoverDownloadId(i.id);
    }
  };
  const handleLeave = (i) => {
    setActiveHoverDownloadId(undefined);
  };
  const handleClickDownload = (item) => {
    if (item.id === activeDownloadId) {
      setActiveDownloadId(undefined);
    } else {
      if (item.id === "0") {
        window.open(item.link);
      } else {
        setActiveDownloadId(item.id);
      }
    }
  };
  return (
    <section className="sectionAllYouNeed" id="allYouNeed">
      <div className="sectionContent contentWidth">
        <div className="sectionContentT">
          <h2 className="bannerTitle">
            <div>All you need</div>
            <span>to Manage your data</span>
          </h2>
          {/* <div className="downloadBtnWrapper">
            <PButton text="Download Now" />
            <div className="tip">Coming soon ...</div>
          </div> */}
          <ul className="downloadItems">
            {downloadList.map((i) => {
              return (
                <li
                  className={
                    i.disabled ? "downloadItem disabled" : "downloadItem"
                  }
                  key={i.id}
                  onMouseEnter={() => {
                    handleEnter(i);
                  }}
                  onMouseLeave={() => {
                    handleLeave(i);
                  }}
                  onClick={() => {
                    handleClickDownload(i);
                  }}
                >
                  {i.element}
                  <p>{i.name}</p>
                  {i.id !== "0" &&  (
                    <div className="tip">Coming soon ...</div>
                  )}
                  {activeDownloadId !== "0" &&
                    activeDownloadId === i.id &&
                    !i.disabled && (
                      <div className="qrcodeFloat">
                        <PQRCode
                          value=""
                          size={breakPoint === "s" ? 104 : 124}
                        />
                        <p>Scan to Download</p>
                      </div>
                    )}
                </li>
              );
            })}
          </ul>
          <ul className="descItems">
            {descList.map((i) => {
              return (
                <li key={i.title}>
                  <img src={i.img} alt="" />
                  <h6>{i.title}</h6>
                  <p>{i.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="sectionContentC">
          <h3>Lorem ipsum dolor sit amet</h3>
          <ul className="descItems">
            <li></li>
          </ul>
        </div> */}
      </div>
    </section>
  );
});

export default SectionAllYouNeed;
