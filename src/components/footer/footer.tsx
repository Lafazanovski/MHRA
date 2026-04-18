import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footerContainer wrapper">
          {/* 1 */}
          <div className="footerLeftDiv footerDiv">
            <div className="navbarLogo">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={50}
                  height={60}
                />
              </Link>
            </div>
            <div className="footerInfoDiv">
              <div className="footerAddressDiv">
                <h4>Адреса</h4>
                <p>Бул. ВМРО бр. 7/1-7</p>
                <p>1000 Скопје, Македонија</p>
              </div>
              <div className="footerEmailDiv">
                <h4>E-mail</h4>
                <p>contact@mhra.mk</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="footerRightDiv footerDiv">
            <div className="footerFormDiv">
              <form action="#">
                <label htmlFor="email">
                  {" "}
                  <h3>Претплати се на билтер</h3>
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Билтен"
                />
              </form>
            </div>
            <div className="socialMediaIconsDiv">
              <FontAwesomeIcon icon={faLinkedin} className="socialMediaIcon" />
              <FontAwesomeIcon icon={faInstagram} className="socialMediaIcon" />
              <FontAwesomeIcon icon={faFacebook} className="socialMediaIcon" />
              <FontAwesomeIcon icon={faYoutube} className="socialMediaIcon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
