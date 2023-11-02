import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import sendEmail from "@img/unsubscribe/sendEmail.svg";

import "./index.scss";
const Unsubscribe = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);
  return (
    <div className="pageUnsubscibe">
      <content>
        <img className="iconCancel" src={sendEmail} alt="" />
        <div className="desc">
          <h3>No more email notification from us.</h3>
          <p>
            Now that you’re successfully unsubscribed, we’ll automatically
            redirect you to our&nbsp;
            <Link to="/">home page</Link>&nbsp; in just a tick.
          </p>
        </div>
      </content>
    </div>
  );
};
export default Unsubscribe;
