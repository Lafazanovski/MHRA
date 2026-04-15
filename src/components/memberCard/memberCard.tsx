import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

interface MemberCardProps {
  name: string;
  company: string;
  image: string;
}

const MemberCard = ({ name, company, image }: MemberCardProps) => {
  return (
    <>
      <div className="memberCard">
        <div className="memberCardImgDiv">
          <Image
            src={image}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="memberCardInfo">
          <h5 className="memberCardName">{name}</h5>
          <p className="memberCardCompany">{company}</p>
        </div>
        <div className="memberCardIcons">
          <FontAwesomeIcon className="memberCardIcon" icon={faFacebook} />
          <FontAwesomeIcon className="memberCardIcon" icon={faTwitter} />
          <FontAwesomeIcon className="memberCardIcon" icon={faInstagram} />
          <FontAwesomeIcon className="memberCardIcon" icon={faLinkedin} />
        </div>
      </div>
    </>
  );
}

export default MemberCard