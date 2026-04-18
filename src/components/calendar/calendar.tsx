const Calendar = () => {
  const days = [null,null,null,null,null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  const eventDays = [8, 15, 22, 24]; 

  const weeks: (number | null)[][] = [];
  let week: (number | null)[] = [];
  days.forEach((d, i) => {
    week.push(d);
    if ((i + 1) % 7 === 0) { weeks.push(week); week = []; }
  });
  if (week.length) weeks.push(week);

  return (
    <div className="calendarSection">
      <div className="calendarContainer wrapper">
        {/* Left */}
        <div className="calendarLeft">
          <h2>Календар со датуми за сите претстојни настани</h2>
          <p>
            Погледнете ги сите настани распоредани на календар. Со клик на
            одреден датум ќе можете да ги видите деталите и да се пријавите.
          </p>
        </div>
     {/* Right */}
        <div className="calendarRight">
          <div className="calendarBox">
            <div className="calendarBoxLeft"></div>
            <div className="calendarBoxRight">
              <div className="calendar">
                <p className="calendarLabel">Избери Дата</p>
                <div className="calendarHeader">
                  <button className="calendarNavBtn">‹</button>
                  <span>Maj 2026</span>
                  <button className="calendarNavBtn">›</button>
                </div>
                <table className="calendarTable">
                  <thead>
                    <tr>
                      {["пон", "вт", "сре", "чет", "пет", "саб", "нед"].map(
                        (d) => (
                          <th key={d}>{d}</th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {weeks.map((week, wi) => (
                      <tr key={wi}>
                        {week.map((day, di) => (
                          <td
                            key={di}
                            className={
                              day && eventDays.includes(day)
                                ? "calendarEventDay"
                                : ""
                            }
                          >
                            {day || ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;