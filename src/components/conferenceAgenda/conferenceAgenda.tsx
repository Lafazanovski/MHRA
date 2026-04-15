import React from 'react'

const ConferenceAgenda = () => {
  return (
    <>
      <div className="conferenceAgendaSection">
        <div className="conferenceAgendaContainer wrapper">
          <div className="eventsAgendaHeaderAndDateDiv">
            <h2>Агенда на конференцијата</h2>
            <div className="conferenceDays">
              <p>
                <span>Ден 1</span>
              </p>
              <p>Ден 2</p>
            </div>
          </div>
          <div className="eventsAgendaScheduleDiv">
            {/* Time and Topic */}
            <div className="eventsAgendaTimeFrame">
              <div className="eventsAgendaTime">
                <p>10:00</p>
              </div>
              <div className="eventsAgendaTopic">
                <h3>Регистрација и утринско кафе</h3>
                <blockquote>
                  <li>
                    Пристигнување и неформално запознавање меѓу учесниците.
                  </li>
                </blockquote>
              </div>
            </div>
            {/* Time and Topic */}
            <div className="eventsAgendaTimeFrame">
              <div className="eventsAgendaTime">
                <p>10:30</p>
              </div>
              <div className="eventsAgendaTopic">
                <h3>Вовед и отворање на настанот</h3>
                <blockquote>
                  <li>
                    Поздравен говор од организаторот и кратко претставување на
                    агендата.
                  </li>
                </blockquote>
              </div>
            </div>
            {/* Time and Topic */}
            <div className="eventsAgendaTimeFrame">
              <div className="eventsAgendaTime">
                <p>11:00</p>
              </div>
              <div className="eventsAgendaTopic">
                <h3>
                  Презентација: Важноста на соработката меѓу HR одделот и
                  синдикатот.
                </h3>
                <blockquote>
                  <li>
                    Презентер: <span>Оливиа Оил</span>
                  </li>
                  <li>
                    Клучни точки: Значењето на заедничката работа, придобивки и
                    потенцијални проблеми.
                  </li>
                </blockquote>
              </div>
            </div>
            {/* Time and Topic */}
            <div className="eventsAgendaTimeFrame">
              <div className="eventsAgendaTime">
                <p>11:45</p>
              </div>
              <div className="eventsAgendaTopic">
                <h3>Панел дискусија: Искусувања и предизвици во праксата.</h3>
                <blockquote>
                  <li>
                    Модератор: <span>Мајк Вазауски</span>
                  </li>
                  <li>
                    Панелисти: Претставници од HR и синдикатот од различни
                    индустрии.
                  </li>
                </blockquote>
              </div>
            </div>
            {/* Time and Topic */}
            <div className="eventsAgendaTimeFrame">
              <div className="eventsAgendaTime">
                <p>12:30</p>
              </div>
              <div className="eventsAgendaTopic">
                <h3>Пауза за ручек и неформални разговори</h3>
              </div>
            </div>
            {/* Time and Topic */}
            <div className="eventsAgendaTimeFrame">
              <div className="eventsAgendaTime">
                <p>13:00</p>
              </div>
              <div className="eventsAgendaTopic">
                <h3>Работилница: Стратегии за подобрување на соработката</h3>
                <blockquote>
                  <li>
                    Водител: <span>Една Моде</span>
                  </li>
                  <li>
                    Практични совети и техники за подобрување на комуникацијата
                    и соработката.
                  </li>
                </blockquote>
              </div>
            </div>
            {/* Time and Topic */}
            <div className="eventsAgendaTimeFrame">
              <div className="eventsAgendaTime">
                <p>14:00</p>
              </div>
              <div className="eventsAgendaTopic">
                <h3>Клучни алатки методи за успешна соработка</h3>
                <blockquote>
                  <li>
                    Презентер: <span>Џејмс Суливан</span>
                  </li>
                  <li>
                    Презентација на алатки и методи кои можат да се применат
                    веднаш.
                  </li>
                </blockquote>
              </div>
            </div>
            {/* Time and Topic */}
            <div className="eventsAgendaTimeFrame">
              <div className="eventsAgendaTime">
                <p>14:45</p>
              </div>
              <div className="eventsAgendaTopic">
                <h3>Завршни зборови и заклучоци</h3>
                <blockquote>
                  <li>
                    Сумирање на клучните поенти од настанот и дискусија за
                    понатамошни чекори.
                  </li>
                </blockquote>
              </div>
            </div>
            {/* Time and Topic */}
            <div className="eventsAgendaTimeFrame">
              <div className="eventsAgendaTime">
                <p>15:00</p>
              </div>
              <div className="eventsAgendaTopic">
                <h3>Мрежно поврзување инеформално завржување на настанот</h3>
                <blockquote>
                  <li>
                    Можност за неформални разговори и размена на контакти.
                  </li>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="patternSection"></div>
        </div>
      </div>
    </>
  );
}

export default ConferenceAgenda