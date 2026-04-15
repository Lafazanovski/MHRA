import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUsSection">
        <div className="aboutUsContainer wrapper">
          {/* Left Div */}
          <div className="aboutUsLeftDiv">
            <div className="aboutUsLeftImgDiv">
              <div className="aboutUsLeftImg">
                <Image
                  src="/images/img3.png"
                  alt="About Us Left Img"
                  className="aboutUsLeftImg"
                  width={200}
                  height={250}
                />
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
                      <button className="primaryButton bulletinPrimaryButton">$</button>
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
                <Image
                  src="/images/img4.png"
                  alt="About Us Right Img"
                  className="aboutUsRightImg"
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
