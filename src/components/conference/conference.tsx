import Link from 'next/link'
import React from 'react'

const Conference = () => {
  return (
    <>
    <div className='conference'>
        <div className='conferenceContainer wrapper'>
            {/* Left Div */}
            <div className='conferenceLeftDiv'>
                <div className='conferenceTextDiv'>
                    <h2>Најголемиот HR настан на нашите простори - Година HR конференција на МАЧР</h2>
                    <p>Меѓународна размена на искуства во полето на човечки ресурси и константно движење во чекор со светските трендови.</p>
                </div>
                <div className='conferencePresidentDiv'>
                    <div className='conferencePresidentImgDiv'></div>
                    <div className='conferencePresidentNameDiv'>
                        <h6>М-р Дарко Петровски</h6>
                        <p>Претседател на МАЧР</p>
                    </div>
                </div>
            </div>
            {/* Right Div */}
            <div className='conferenceRightDiv'>
                <div className='conferenceImgTopLeftDiv'></div>
                <div className='conferenceMainImgDiv'></div>
                <div className='conferenceBuyTicketDiv'>
                    <Link href="/">
                    <button className='buyTicketBtn'>
                        <div className='conferencePrimaryButton'>$</div>
                        <div className='buyTicketBtnDiv'>
                            <p><strong>Купи Карта</strong></p>
                            <p>mhraconference.com</p>
                        </div>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Conference