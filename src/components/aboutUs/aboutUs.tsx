import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUsSection">
        <div className="aboutUsContainer wrapper">
          {/* Left Div */}
          <div className="aboutUsLeftDiv">
            <div className="aboutUsLeftImgDiv">
              <div className="aboutUsLeftImg">
              </div>
              <div className="aboutUsLeftBubbleText">
                <p>
                  Сакаш да бидеш во тек со нас и најновите содржини што ги
                  споделуваме?
                </p>
              </div>
            </div>
            <div className="aboutUsLeftContentDiv">
              <h2>Дознај повеќе за нас и нашите цели и задачи! </h2>
              <p>
                Нашиот огранок за коучинг е формиран 22ри април 2019 година и е
                првата мрежа за професионални ментори во земјава.
              </p>
              <Link href="/aboutUs">
                <button className="primaryButton">Повеќе за нас</button>
              </Link>
            </div>
          </div>
          {/* Right Div */}
          <div className="aboutUsRightDiv">
            <div className="aboutUsRightContentDiv">
              <div className="aboutUsRightBubbleText">
                <p>
                  Претплати се на нашиот информативен билтен и никогаш повеќе не
                  пропуштај важни настани и известувања.
                </p>
              </div>
              <div className="aboutUsRightBulletinDiv">
                <Link href="/">
                  <div className="bulletinButton">
                    <div className="bulletinPrimaryButtonDiv">
                      <button className="primaryButton bulletinPrimaryButton"> <FontAwesomeIcon icon={ faLink } /> </button>
                    </div>
                    <div className="bulletinInfoDiv">
                      <p>
                        <strong>МАЧР Билтен</strong>
                      </p>
                      <p>contact@mhra.mk</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="aboutUsRightImgDiv">
              <div className="aboutUsRightImg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
