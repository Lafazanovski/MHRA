import React from 'react'

const Calendar = () => {
  return (
    <>
    <div className='calendarSection'>
        <div className='calendarContainer wrapper'>
            <div className='calendarLeftDiv'>
                <h2>Календар со датуми за сите претстојни настани</h2>
                <p>Погледни ги сите настани распоредени на календар. Со клик на обележаните настани можеш да дознаеш повеќе информации за секој од настаните, но за целосни информации упатете се кон индивидуалната страна на настанот. </p>
            </div>
            <div className='calendarRightDiv'>
                <div className='calendarBox'>
                    <div className='calendarBoxLeftSide'></div>
                    <div className='calendarBoxRightSide'>
                        <h6>Избери Дата:</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Calendar