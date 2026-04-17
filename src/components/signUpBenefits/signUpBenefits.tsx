import React from 'react'

const SignUpBenefits = () => {
  return (
    <>
      <div id='sign-up-benefits' className="signUpBenefitsSection">
        <div className="signUpBenefitsContainer wrapper">
          {/* Top Div */}
          <div className="signUpBenefitsTopDiv">
            <div className="signUpBenefitsTopLeftDiv">
              <div className="signUpBenefitsTopLeftImage">
              </div>
            </div>
            <div className="signUpBenefitsTopRightDiv">
              <h2>Бенефити од индивидуално зачленување</h2>
              <ul>
                <li>Едукативни настани</li>
                <li>Најнови информации и случувања</li>
                <li>Ширење на мрежата на контакти</li>
                <li>Вклучување во работењето на МАЧР</li>
                <li>HR огласи за работа</li>
              </ul>
            </div>
          </div>
          {/* Bottom Div */}
          <div className="signUpBenefitsBottomDiv">
            <div className="signUpBenefitsBottomLeftDiv">
              <h2>Бенефити од корпоративно зачленување</h2>
              <ul>
                <li>Претставник во корпоративниот одбор на МАЧР</li>
                <li>Можности за промоција на вашата компанија</li>
                <li>Ширење на мрежата регионално и интернационално</li>
                <li>Попусти на HR настани, обуки, конференции и сл</li>
                <li>HR огласи за работа</li>
              </ul>
            </div>
            <div className="signUpBenefitsBottomRightDiv">
              <div className="signUpBenefitsBottomRightImage"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpBenefits