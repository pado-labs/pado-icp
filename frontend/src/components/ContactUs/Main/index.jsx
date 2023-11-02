import React, { useState, useCallback, useEffect } from "react";
import counties from "@/config/countries";
import { contractUs } from "@/api/productTrial";

import PInput from "@com/PInputWithLabel";
import PSelect from "@com/PSelectWithLabel";
import PButton from "@/components/PButton";
import PCheckbox from "@/components/PCheckbox";
import SubmitSucDialog from "../SubmitSucDialog";
import iconArrowRightWhite from "@/assets/img/home/iconArrowRightWhite.svg";

import "./index.scss";
import useBreakPoint from "@/hooks/useBreakPoint";

const emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const ProductTrial = ({ title, desc, type, btnText }) => {
  const breakPoint = useBreakPoint();
  const [loading, setLoading] = useState(false);
  const [sucVisible, setSucVisible] = useState(false);
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    jobTitle: "",
    country: "",
    businessEmail: "",
    phoneNumber: "",
    receiveEmail: "1",
  });
  const [userFormValidation, setUserFormValidation] = useState({
    firstName: true,
    lastName: true,
    companyName: true,
    jobTitle: true,
    country: true,
    businessEmail: true,
    phoneNumber: true,
    receiveEmail: true,
  });
  const onChangeformItem = useCallback((val, key) => {
    if (key === "receiveEmail" && val === "0") {
      setUserFormValidation((v) => ({ ...v, receiveEmail: true }));
    }
    setUserForm((form) => ({ ...form, [key]: val }));
  }, []);
  const onClickApply = useCallback(async () => {
    if (loading) {
      return;
    }
    const keys = Object.keys(userForm);
    const errorKeyMap = {};
    keys.forEach((k) => {
      if (k !== "phoneNumber") {
        if (k === "receiveEmail") {
          if (userForm[k] === "0") {
            errorKeyMap[k] = true;
          } else {
            errorKeyMap[k] = false;
          }
        } else if (k === "businessEmail") {
          if (userForm[k] && emailReg.test(userForm[k])) {
            errorKeyMap[k] = true;
          } else {
            errorKeyMap[k] = false;
          }
        } else {
          if (userForm[k]) {
            errorKeyMap[k] = true;
          } else {
            errorKeyMap[k] = false;
          }
        }
      }
    });
    setUserFormValidation((v) => ({ ...v, ...errorKeyMap }));
    const isAllValid = Object.values(errorKeyMap).every((i) => i);
    if (isAllValid) {
      const formatParams = {
        ...userForm,
        contactType: type,
      };
      setLoading(true);
      try {
        const { rc, result } = await contractUs(formatParams);
        if (rc === 0 && result) {
          window.open(result);
        }
        setLoading(false);
        setSucVisible(true);
      } catch {
        setLoading(false);
        alert("Submit error!");
      }
    }
  }, [userForm, type, loading]);
  const forItemCN = useCallback(
    (key) => {
      const cn = userFormValidation[key] === false ? "error" : "";

      return cn;
    },
    [userFormValidation]
  );
  const myInitFn = () => {
    setSucVisible(false);
    setLoading(false);
    setUserForm({
      firstName: "",
      lastName: "",
      companyName: "",
      jobTitle: "",
      country: "",
      businessEmail: "",
      phoneNumber: "",
      receiveEmail: "1",
    });
    setUserFormValidation({
      firstName: true,
      lastName: true,
      companyName: true,
      jobTitle: true,
      country: true,
      businessEmail: true,
      phoneNumber: true,
      receiveEmail: true,
    });
  };
  useEffect(() => {
    myInitFn();
  }, []);
  const onCloseSucDialog = () => {
    myInitFn();
    setSucVisible(false);
  };
  const onClickP = () => {
    window.open("https://t.me/vkz111");
  };
  const onClickD = () => {
    window.open("https://t.me/X_Xavier");
  };

  return (
    <div className="pageProductTrial">
      <div className="pageProductTrialCon contentWidth">
        <div className="titleWrapper">
          <h1>{title}</h1>
          <p>{desc} </p>
          <div className="btnWrapper">
            <PButton
              text="Partnership & Marketing"
              onClick={onClickP}
              suffix={iconArrowRightWhite}
            />
            <PButton
              text="Developer & Academia"
              onClick={onClickD}
              suffix={iconArrowRightWhite}
            />
          </div>
        </div>
        {breakPoint !== "s" && (
          <div className="conWrapper">
            <div className="userForm">
              <div className="pRow">
                <div className="formItem">
                  <PInput
                    className={forItemCN("firstName")}
                    label="First name"
                    key="firstName"
                    placeholder="Your first name"
                    value={userForm.firstName}
                    onChange={(v) => {
                      onChangeformItem(v, "firstName");
                    }}
                  />
                </div>
                <div className="formItem">
                  <PInput
                    className={forItemCN("lastName")}
                    label="Last name"
                    key="lastName"
                    placeholder="Your first name"
                    value={userForm.flastName}
                    onChange={(v) => {
                      onChangeformItem(v, "lastName");
                    }}
                  />
                </div>
              </div>
              <div className="pRow">
                <div className="formItem">
                  <PInput
                    className={forItemCN("companyName")}
                    label="Company name"
                    key="companyName"
                    placeholder="Your Company name"
                    value={userForm.companyName}
                    onChange={(v) => {
                      onChangeformItem(v, "companyName");
                    }}
                  />
                </div>
                <div className="formItem">
                  <PInput
                    className={forItemCN("jobTitle")}
                    label="Job title"
                    key="jobTitle"
                    placeholder="Your job title"
                    value={userForm.jobTitle}
                    onChange={(v) => {
                      onChangeformItem(v, "jobTitle");
                    }}
                  />
                </div>
              </div>
              <div className="pRow">
                <div className="formItem">
                  <PSelect
                    className={forItemCN("country")}
                    label="Country"
                    key="country"
                    placeholder="Select your country"
                    value={userForm.country}
                    options={counties}
                    onChange={(v) => {
                      onChangeformItem(v, "country");
                    }}
                  />
                </div>
              </div>
              <div className="pRow">
                <div className="formItem">
                  <PInput
                    className={forItemCN("businessEmail")}
                    label="Business email"
                    key="businessEmail"
                    placeholder="Your business businessEmail"
                    value={userForm.businessEmail}
                    onChange={(v) => {
                      onChangeformItem(v, "businessEmail");
                    }}
                  />
                </div>
              </div>
              <div className="pRow">
                <div className="formItem">
                  <PInput
                    label="Phone number"
                    key="phoneNumber"
                    placeholder="Your phone number"
                    value={userForm.phoneNumber}
                    onChange={(v) => {
                      onChangeformItem(v, "phoneNumber");
                    }}
                  />
                </div>
              </div>
            </div>
            <p className="tip">
              By submitting this form, you confirm that you have read and
              understand PADO’s Privacy Policy.
            </p>
            <div className="agree">
              <PCheckbox
                error={userFormValidation.receiveEmail === false}
                onChange={(f) => {
                  onChangeformItem(f, "receiveEmail");
                }}
              />
              <span>
                Please send me updates about PADO Labs’ products & services,
                invites to special events, free giveaways and other cool stuff.
                (Unsubscribe at any time using the link located at the bottom of
                PADO Labs emails.)
              </span>
            </div>
            <PButton text={btnText} onClick={onClickApply} />
          </div>
        )}
      </div>

      {sucVisible && !loading && <SubmitSucDialog onClose={onCloseSucDialog} />}
    </div>
  );
};
export default ProductTrial;
