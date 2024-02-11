import React from "react";
import footerlogo_png from "../imgss/icone2.png";
import phone_icon from "../imgss/white-phone-icon.png";
import insta_icon from "../imgss/wtapp_icon.png";
import watsapp_icon from "../imgss/watsapp.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerlogo_png} alt="" />
        <p>ShOppi</p>
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-social-icon-containter">
          <img src={phone_icon} alt=" " />
        </div>
        <div className="footer-social-icon-containter">
          <img src={insta_icon} alt=" " />
        </div>
        <div className="footer-social-icon-containter">
          <img src={watsapp_icon} alt=" " />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 ~ All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
