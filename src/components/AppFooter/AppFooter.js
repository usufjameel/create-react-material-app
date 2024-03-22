import React, { useEffect, useState } from "react";
import "./AppFooter.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
/**
 * this is the footer component
 * The Footer component displays information at the bottom of a web page.
 */

export default function AppFooter(props) {
  const [year, setYear] = useState(0);
  useEffect(() => {
    let newDate = new Date();
    let year = newDate.getFullYear();
    setYear(year);
  }, []);

  return (
    <div className={"custom-footer"}>
      <div
        className={
          "strip-footer d-md-flex justify-content-md-between align-items-center"
        }
      >
        <div className="footer-links">
          <Link
            to="/termsofservices"
            className="link-black2 font-medium font-14"
          >
            Terms of Services
          </Link>
          <Link to="/privacypolicy" className="link-black2 font-medium font-14">
            Privacy Policy
          </Link>
          <Link to="/cookiespolicy" className="link-black2 font-medium font-14">
            Cookies Policy
          </Link>
          <Link to="/disclaimer" className="link-black2 font-medium font-14">
            Disclaimer
          </Link>
        </div>
        <div>
          <span className="link-black2 font-medium font-14">{`Copyright (c) ${year}. All Rights Reserved.`}</span>
        </div>
      </div>
    </div>
  );
}
