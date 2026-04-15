import React from 'react'
import { faBook, faCalendar, faMugHot, faUser  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ConferenceFacts = () => {
  return (
    <>
      <div className="conferenceFactsSection">
        <div className="conferenceFactsContainer wrapper">
          <div className="conferenceFactsDiv">
            {/* Days */}
            <div className="conferenceFact conferenceFactDays">
              <div className="conferenceFactIcon">
                <FontAwesomeIcon icon={faCalendar} className="factIcon" />
              </div>
              <div className="conferenceFactText">
                <h5>2</h5>
                <p>Дена</p>
              </div>
            </div>
            {/* Speakers */}
            <div className="conferenceFact conferenceFactSpeakers">
              <div className="conferenceFactIcon">
                <FontAwesomeIcon icon={faUser} className="factIcon" />
              </div>
              <div className="conferenceFactText">
                <h5>9</h5>
                <p>Невероојатни спикери</p>
              </div>
            </div>
            {/* Restaurants */}
            <div className="conferenceFact conferenceFactRestaurants">
              <div className="conferenceFactIcon">
                <FontAwesomeIcon icon={faMugHot} className="factIcon" />
              </div>
              <div className="conferenceFactText">
                <h5>6</h5>
                <p>Ресторани</p>
              </div>
            </div>
            {/* Books */}
            <div className="conferenceFact conferenceFactBooks">
              <div className="conferenceFactIcon">
                <FontAwesomeIcon icon={faBook} className="factIcon" />
              </div>
              <div className="conferenceFactText">
                <h5>28</h5>
                <p>Едукативни книги</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConferenceFacts