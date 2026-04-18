import {
  faGear,
  faLink,
  faMailBulk,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import SettingsModal from "../settingsModal/settingsModal";

const UserPersonalInfo = () => {
   const router = useRouter();
   const [userEmail, setUserEmail] = useState("");
   const [showSettings, setShowSettings] = useState(false);

   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
         setUserEmail(user.email || ""); 
       }
     });
     return () => unsubscribe();
   }, []);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      router.push("/signUp");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="userPersonalInfoSection">
        <div className="userPersonalInfoContainer wrapper">
          {/* Left */}
          <div className="userPersonalInfoLeftDiv">
            {/* image, Name, City */}
            <div className="ImageNameCityDiv">
              <div className="personalImageDiv"></div>
              <h2>{userEmail}</h2>
              <p>Скопје</p>
            </div>
            {/* Job, CV */}
            <div className="jobAndCvDiv">
              <div className="jobDiv personalInfoDiv">
                <div className="jobIcon">
                  <FontAwesomeIcon icon={faUser} className="personalInfoIcon" />
                </div>
                <p>HR Регрутер</p>
              </div>
              <div className="CvDiv personalInfoDiv">
                <div className="jobIcon">
                  <FontAwesomeIcon icon={faLink} className="personalInfoIcon" />
                </div>
                <p>CV</p>
              </div>
            </div>
            {/* Phone, Mail, Settings */}
            <div className="jobAndCvDiv">
              <div className="jobDiv personalInfoDiv">
                <div className="jobIcon">
                  <FontAwesomeIcon icon={faUser} className="personalInfoIcon" />
                </div>
                <p>+389 72 432 456</p>
              </div>
              <div className="CvDiv personalInfoDiv">
                <div className="jobIcon">
                  <FontAwesomeIcon
                    icon={faMailBulk}
                    className="personalInfoIcon"
                  />
                </div>
                <p>mhra@primer.com</p>
              </div>
              <div className="CvDiv personalInfoDiv">
                <div className="jobIcon">
                  <FontAwesomeIcon icon={faGear} className="personalInfoIcon" />
                </div>
                <p
                  onClick={() => setShowSettings(true)}
                  className="userDashboardSettingsButton"
                  style={{ cursor: "pointer" }}
                >
                  Поставки
                </p>
              </div>
            </div>
            {/* Back and Logout Div */}
            <div className="backAndLogoutDiv">
              {/* Back Button */}
              <div className="backButtonDiv">
                <button
                  onClick={() => router.push("/signUp?from=dashboard")}
                  className="backBtn"
                >
                  Назад
                </button>
              </div>
              {/* Log Out Button */}
              <div className="logOutDiv">
                <button onClick={handleLogOut} className="logOutBtn">
                  Одјави се
                </button>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="userPersonalInfoRightDiv">
            {/* User Biography */}
            <div className="shortBioDiv">
              <h2>Кратка Биографија</h2>
              <p>
                Јас сум Валентина Стојанова, искусен HR регрутер со над 10 години
                работно искуство во полето на човечките ресурси. Својата кариера
                ја започнав како помлад HR асистент и со текот на годините
                напредував, стекнувајќи богато знаење и вештини во регрутирањето
                и управувањето со таленти. Позната сум по мојот професионализам,
                одлична комуникација и способност да пронајдам и привлечам врвни
                таленти за различни индустрии. Работев со големи компании,
                помагајќи им да изградат силни и ефикасни тимови. Со посветеност
                кон мојата професија и постојана желба за усовршување, се
                стремам да бидам лидер и ментор во областа на HR.
              </p>
            </div>
            {/* Recommendations */}
            <div className="recommendationsDiv">
              <h3>Препораки</h3>
              {/* 1 */}
              <div className="recommendation1 recommendation">
                <div className="recommendationImageAndNameDiv">
                  <div className="recommendationImageDiv recommendationImageDiv1"></div>
                  <div className="recommendationNameDiv">
                    <h4>Фрањо</h4>
                    <p>Пред 9 минути</p>
                  </div>
                </div>
                <p>
                  Со задоволство ја препорачувам Валентина како извонредерн HR
                  регрутер. Нејзината способност да идентификува и привлече
                  врвни таленти е ненадминлива.
                </p>
              </div>
              {/* 2 */}
              <div className="recommendation2 recommendation">
                <div className="recommendationImageAndNameDiv">
                  <div className="recommendationImageDiv recommendationImageDiv2"></div>
                  <div className="recommendationNameDiv">
                    <h4>Бобан</h4>
                    <p>Пред 15 минути</p>
                  </div>
                </div>
                <p>
                  Валентина е извонреден HR професионалец кој постојано покажува
                  посветеност и страст конј својата работа. Со нејзината
                  способност да препознае и регрутира талантирани индивидуи, таа
                  ни помогна да изградиме силни и успешни тимови.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
    </>
  );
};

export default UserPersonalInfo;
