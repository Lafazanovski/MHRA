import Link from 'next/link';
import React from 'react'

const ConferencePackages = () => {
  return (
    <>
      <div className="conferencePackagesSection">
        <div className="conferencePackagesContainer wrapper">
          <h2>Пакети за поединци и корпорации</h2>
          <div className='packagesContainer'>
            <div className='packagesLeftDiv packageDiv'>
                <h2>Поединци</h2>
                <h4>1500 ден</h4>
                <ul>
                    <li>1 седиште</li>
                    <li>Пауза за ручек</li>
                    <li>WiFi</li>
                </ul>
                <Link href="/conferencePage">
                <button className='primaryButton'>Купи Карта</button>
                </Link>
            </div>
            <div className='packagesRightDiv packageDiv'>
                <h2>Корпорации</h2>
                <h4>20 000 ден</h4>
                <ul>
                    <li>20 седишта</li>
                    <li>Паузи за чај и кафе</li>
                    <li>Пауза за ручек</li>
                    <li>WiFi</li>
                </ul>
                <Link href="/conferencePage">
                <button className='primaryButton'>Купи Карта</button>
                </Link>
            </div>
          </div>
          <div className="ShareWithFriendsButton">
            <Link href="/conferencePage">
              <button className="primaryButton">Предложи на пријател</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConferencePackages