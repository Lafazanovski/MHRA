import Link from 'next/link'
import React from 'react'

const JoiningBenefits = () => {
  return (
    <>
      <div className="joiningBenefits">
        <div className="joiningBenefitsContainer wrapper">
          <div className="joiningBenefitsLeftDiv">
            {/* Div 1 */}
            <div className="reasonDiv">
              <div className="reasonNumberDiv">1</div>
              <div className="reasonTitleDiv">
                <h2>Едукативни настани</h2>
                <Link href="/">
                  <button className="readMoreBtn">Прочитај повеќе</button>
                </Link>
              </div>
            </div>

            {/* Div 2 */}
            <div className="reasonDiv">
              <div className="reasonNumberDiv">2</div>
              <div className="reasonTitleDiv">
                <h2>Најнови информации и случувања</h2>
                <Link href="/">
                  <button className="readMoreBtn">Прочитај повеќе</button>
                </Link>
              </div>
            </div>

            {/* Div 3 */}
            <div className="reasonDiv">
              <div className="reasonNumberDiv">3</div>
              <div className="reasonTitleDiv">
                <h2>Ширење на мрежата на контакти</h2>
                <Link href="/">
                  <button className="readMoreBtn">Прочитај повеќе</button>
                </Link>
              </div>
            </div>

            {/* Div 4 */}
            <div className="reasonDiv">
              <div className="reasonNumberDiv">4</div>
              <div className="reasonTitleDiv">
                <h2>Вклучување во работењето на МАЧР</h2>
                <Link href="/">
                  <button className="readMoreBtn">Прочитај повеќе</button>
                </Link>
              </div>
            </div>

            {/* Div 5 */}
            <div className="reasonDiv">
              <div className="reasonNumberDiv">5</div>
              <div className="reasonTitleDiv">
                <h2>HR огласи за работа</h2>
                <Link href="/">
                  <button className="readMoreBtn">Прочитај повеќе</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="joiningBenefitsRightDiv">
            <h2>Бенефити од зачленување во МАЧР</h2>
            <p>
              Македонската асоцијација за човечки ресурси - МАЧР како невладино,
              непрофитно и непартиско здружение на граѓани, продолжува со
              остварување на својата мисија за промоција и унапредување на
              професијата управување со човечките ресурси, како и создавање на
              имплеменирање на највисоките професионални стандарди и развој на
              човечкиот капитал во Република Македонија како единствен ентитет
              од овој вид во земјава.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoiningBenefits