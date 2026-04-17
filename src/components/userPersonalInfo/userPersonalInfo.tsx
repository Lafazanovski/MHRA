import {
  faGear,
  faLink,
  faMailBulk,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

const UserPersonalInfo = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      router.push("/signUp");
    } catch (err) {
      console.error(err)
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
              <h2>Валентина С.</h2>
              <p>Битола</p>
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
                <p>HR Регрутер</p>
              </div>
              <div className="CvDiv personalInfoDiv">
                <div className="jobIcon">
                  <FontAwesomeIcon
                    icon={faMailBulk}
                    className="personalInfoIcon"
                  />
                </div>
                <p>+389 70 481 440</p>
              </div>
              <div className="CvDiv personalInfoDiv">
                <div className="jobIcon">
                  <FontAwesomeIcon icon={faGear} className="personalInfoIcon" />
                </div>
                <p>Поставки</p>
              </div>
            </div>
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
          {/* Right */}
          <div className="userPersonalInfoRightDiv">
            {/* User Biography */}
            <div className="shortBioDiv">
              <h2>Кратка Биографија</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, magnam. Unde suscipit pariatur ducimus fugit mollitia
                consectetur autem illo architecto accusantium aperiam voluptates
                velit, earum ipsam? Ducimus ullam facilis esse necessitatibus
                quam nam hic perferendis eveniet repudiandae, quo ipsa et quia
                sunt a laudantium aliquam blanditiis animi similique? Culpa,
                eligendi.
              </p>
            </div>
            {/* Recommendations */}
            <div className="recommendationsDiv">
              {/* 1 */}
              <div className="recommendation1">
                <div className="recommendationImageAndNameDiv">
                  <div className="recommendationImageDiv">$$$</div>
                  <div className="recommendationNameDiv">
                    <h3>Фрањо</h3>
                    <p>Пред 9 минути</p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="recommendation2">
                <div className="recommendationImageAndNameDiv">
                  <div className="recommendationImageDiv">$$$</div>
                  <div className="recommendationNameDiv">
                    <h3>Бобан</h3>
                    <p>Пред 15 минути</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPersonalInfo;
