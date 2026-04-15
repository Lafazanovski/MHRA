import React from 'react'

const ConferenceLocation = () => {
  return (
    <>
      <div className="conferenceLocationSection">
        <div className="conferenceLocationContainer wrapper">
          <div className="conferenceMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.1861733385986!2d21.429290011901593!3d41.996279871109074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415b475092443%3A0x2420e649a4b27994!2z4oCeTWFjZWRvbmlh4oCcIFNxdWFyZQ!5e0!3m2!1sen!2smk!4v1776277071984!5m2!1sen!2smk"
              className='locationMap'   
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConferenceLocation