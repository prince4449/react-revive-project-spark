import React from 'react'

const MoreServices = () => {
  return (
    <>
      {/*START*/}
      <section>
        <div className="plac-hom-bd">
          <div className="container">
            <div className="row">
              <div className="plac-det-tit-inn">
                <h2>Explore our more Services</h2>
              </div>
              <div className="plac-hom-all-pla hom-more-modu">
                <ul className="travel-sliser-auto">
                  <li>
                    <div className="plac-hom-box">
                      <div className="plac-hom-box-im">
                        <img
                          src="/assets/images/home2-hand.jpg"
                          alt=""
                          loading="lazy"
                        />
                        <div className="inn-text">
                          <h4>Start finding your dream job now</h4>
                          <a href="jobs/">
                            Start finding{" "}
                            <i className="material-icons">arrow_forward</i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="plac-hom-box">
                      <div className="plac-hom-box-im">
                        <img
                          src="/assets/images/products/start-selling.jpg"
                          alt=""
                          loading="lazy"
                        />
                        <div className="inn-text">
                          <h4>Start selling your products online</h4>
                          <a href="products.html">
                            Start selling{" "}
                            <i className="material-icons">arrow_forward</i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="plac-hom-box">
                      <div className="plac-hom-box-im">
                        <img
                          src="/assets/images/coupon-deals.jpg"
                          alt=""
                          loading="lazy"
                        />
                        <div className="inn-text">
                          <h4>Coupon and deals for your shopping</h4>
                          <a href="coupons.html">
                            Coupons{" "}
                            <i className="material-icons">arrow_forward</i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="plac-hom-box">
                      <div className="plac-hom-box-im">
                        <img
                          src="/assets/images/places/3.jpg"
                          alt=""
                          loading="lazy"
                        />
                        <div className="inn-text">
                          <h4>Explore your travel destination</h4>
                          <a href="places/">
                            Explore travel{" "}
                            <i className="material-icons">arrow_forward</i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="plac-hom-box">
                      <div className="plac-hom-box-im">
                        <img
                          src="/assets/images/experts/expert1.jpg"
                          alt=""
                          loading="lazy"
                        />
                        <div className="inn-text">
                          <h4>Find your service experts for your needs</h4>
                          <a href="service-experts/index.html">
                            Book Expert Now{" "}
                            <i className="material-icons">arrow_forward</i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="plac-hom-box">
                      <div className="plac-hom-box-im">
                        <img
                          src="/assets/images/news.jpg"
                          alt=""
                          loading="lazy"
                        />
                        <div className="inn-text">
                          <h4>All news updates in one place</h4>
                          <a href="news/">
                            News &amp; Magazines{" "}
                            <i className="material-icons">arrow_forward</i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
    </>
  );
}

export default MoreServices
