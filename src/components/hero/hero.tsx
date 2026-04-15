import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  leftImage?: string;
  rightImage?: string;
}

const Hero = ({
  title,
  subtitle,
  buttonText,
  buttonLink = "/",
  leftImage = "/images/leftImg.png",
  rightImage = "/images/rightImg.png",
}: HeroProps) => {
  return (
    <>
      <div className="heroSection">
        <div className="wrapper heroWrapper">
          <div className="leftImg slideFromTop">
            <Image
              src={leftImage}
              alt="HeroLeftImg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="rightImg slideFromRight">
            <Image
              src={rightImage}
              alt="HeroRightImg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="heroHeaderAndSignUpDiv">
            <div className="heroHeaderDiv heroItem fadeIn">
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
            <div className="heroSignUpDiv heroItem fadeIn">
              <p>Придружи ни се</p>
              <Link href={buttonLink}>
                <button className="primaryButton">{buttonText}</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="heroSocialMediaDiv heroItem fadeIn">
          <p>Заследи не на социјалните медиуми</p>
          <div className="heroSocialMediaIconsDiv">
            <FontAwesomeIcon icon={faLinkedin} className="socialMediaIcon" />
            <FontAwesomeIcon icon={faInstagram} className="socialMediaIcon" />
            <FontAwesomeIcon icon={faFacebook} className="socialMediaIcon" />
            <FontAwesomeIcon icon={faYoutube} className="socialMediaIcon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
