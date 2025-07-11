import React from "react";
import { Logo } from "../assets/assets";
import { footerData } from "./data";


  const Footer = () => {
    return (
      <footer className="footer container">
          <div className="footerAbout">
            <div className="footLogo">
              <img src={Logo} alt="this is logo" />
              <span>TravelWorld</span>
            </div>
            <p className="footCopy">
              Making travel dreams come true since 2010. Your journey begins
              with us.
            </p>
          </div>

            {footerData.map((foot, inx) => (
              <div key={inx}>
                <h2>{foot.footTitle}</h2>
                <p>{foot.foot1}</p>
                <p>{foot.foot2}</p>
                <p>{foot.foot3}</p>
              </div>
            ))}
      </footer>
    );
  };

export default Footer;
