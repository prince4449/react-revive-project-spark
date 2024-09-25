import React from 'react'

const ChooseYourPlan = () => {
  return (
    <>
      {/*PRICING DETAILS*/}
      <section className=" pri">
        <div className="container">
          <div className="row">
            <div className="plac-det-tit-inn">
              <h2>Choose your plan</h2>
            </div>
            <div>
              <ul>
                <li>
                  <div className="pri-box">
                    <div className="c2">
                      <h4>FreePLAN</h4>
                      <p>For getting started</p>
                    </div>
                    <div className="c3">
                      <h2>
                        <span />
                        FREE
                      </h2>
                      <p>Single user</p>
                    </div>
                    <div className="c5">
                      <a href="login.html" className="cta1">
                        Get Start
                      </a>
                      <a
                        href="pricing-details.html"
                        className="cta2"
                        target="_blank"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="pri-box">
                    <div className="c2">
                      <h4>StandardPLAN</h4>
                      <p>Perfect for small teams</p>
                    </div>
                    <div className="c3">
                      <h2>
                        <span />
                        $9
                      </h2>
                      <p>Startup business</p>
                    </div>
                    <div className="c5">
                      <a href="login.html" className="cta1">
                        Get Start
                      </a>
                      <a
                        href="pricing-details.html"
                        className="cta2"
                        target="_blank"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="pri-box">
                    <div className="c2">
                      <h4>PremiumPLAN</h4>
                      <p>Best value for large teams</p>
                    </div>
                    <div className="c3">
                      <h2>
                        <span />
                        $19
                      </h2>
                      <p>Medium business</p>
                    </div>
                    <div className="c5">
                      <a href="login.html" className="cta1">
                        Get Start
                      </a>
                      <a
                        href="pricing-details.html"
                        className="cta2"
                        target="_blank"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="pri-box">
                    <div className="c2">
                      <h4>Premium PlusPLAN</h4>
                      <p>Made for enterprises</p>
                    </div>
                    <div className="c3">
                      <h2>
                        <span />
                        $20
                      </h2>
                      <p>Made for enterprises</p>
                    </div>
                    <div className="c5">
                      <a href="login.html" className="cta1">
                        Get Start
                      </a>
                      <a
                        href="pricing-details.html"
                        className="cta2"
                        target="_blank"
                      >
                        Know more
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*END PRICING DETAILS*/}
    </>
  );
}

export default ChooseYourPlan