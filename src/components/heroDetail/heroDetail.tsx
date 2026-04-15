import React, { useEffect, useState } from "react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BlogPost } from "@/types";

interface HeroDetailProps {
  title: string;
  subtitle: string;
  image?: string;
  buttonText?: string;
  buttonLink?: string;
}

const HeroDetail = ({ title, subtitle, image, buttonText, buttonLink = "/" }: HeroDetailProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((json) => setPosts(json.data));
  }, []);

  return (
    <>
      <div className="heroDetailSection">
        <div
          className="heroDetailContainer wrapper2"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="heroDetailTextDiv">
            <p>Блог / Настан</p>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <div className="heroSocialMediaDiv heroItem ">
            <p>Заследи не на социјалните медиуми</p>
            <div className="heroSocialMediaIconsDiv">
              <FontAwesomeIcon icon={faLinkedin} className="socialMediaIcon" />
              <FontAwesomeIcon icon={faInstagram} className="socialMediaIcon" />
              <FontAwesomeIcon icon={faFacebook} className="socialMediaIcon" />
              <FontAwesomeIcon icon={faYoutube} className="socialMediaIcon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroDetail
