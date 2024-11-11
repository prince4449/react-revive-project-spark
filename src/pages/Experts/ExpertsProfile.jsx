import React from 'react'
import NarrowHeader from '../../components/NarrowHeader';
import ListYourBusiness from '../../components/ListYourBusiness';
import ExpertPopUp from '../../components/ExpertPopUp';
import Footer from '../../components/Footer';

const ExpertsProfile = () => {
  return (
    <>
      <section>
        <div className="str ind2-home">
          <div>
     <NarrowHeader/>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <section>
        <div className="job-prof-pg exp-prof-pg">
          <div className="container">
            <div className="row">
              <div className="lhs">
                <div className="jpro-bd-chat">
                  <h4>
                    Book this (<b>Rn53</b>) Service expert{" "}
                    <span data-toggle="modal" data-target="#expfrm">
                      Book now
                    </span>
                  </h4>
                </div>
                {/*START*/}
                <div className="profile">
                  <div className="job-days">
                    <span className="ver">
                      <i className="material-icons" title="Verified expert">
                        verified_user
                      </i>
                    </span>
                    <span className="rat" title="User rating 5 out of">
                      5.0
                    </span>
                  </div>
                  <div className="jpro-ban-bg-img">
                    <span>
                      Status: <b>Busy</b>
                    </span>
                    <img src="/assets/images/services/1.jpg" alt="" loading="lazy" />
                  </div>
                  <div className="jpro-ban-tit">
                    <div className="s1">
                      <img src="/assets/images/services/3.jpg" alt="" loading="lazy" />
                    </div>
                    <div className="s2">
                      <h1>Rn53</h1>
                      <span className="loc">Dallas</span>
                      <p>House Decoration Services</p>
                    </div>
                    <div className="s3">
                      <span
                        className="cta fol comm-msg-act-btn"
                        data-toggle="modal"
                        data-target="#expfrm"
                      >
                        Book now
                      </span>
                      <span
                        className="cta"
                        data-toggle="modal"
                        data-target="#expwrirevi"
                      >
                        Write Review
                      </span>
                    </div>
                  </div>
                </div>
                {/*END*/}
                {/*START*/}
                <div className="jb-pro-bio">
                  <h4>Expert details</h4>
                  <ul>
                    <li>
                      Services Done <span>00</span>
                    </li>
                    <li>
                      Experience <span>6 years</span>
                    </li>
                    <li>
                      Base fare <span>$50</span>
                    </li>
                    <li>
                      Verified <span>Yes</span>
                    </li>
                    <li>
                      Location <span>Dallas</span>
                    </li>
                    <li>
                      Join date <span>10, Sep 2021</span>
                    </li>
                    <li>
                      Service time <span>6:00 AM to 9:00 PM</span>
                    </li>
                  </ul>
                </div>
                {/*END*/}
                {/*START*/}
                <div className="jpro-bd">
                  <div className="jpro-bd-com">
                    <h4>Services can do</h4>
                    <span>Carpenters Interior </span>
                    <span>Elevation design</span>
                    <span>House 3D drowing</span>
                    <span>Electrical designs</span>
                    <span>Interior design</span>
                  </div>
                  <div className="jpro-bd-com">
                    <h4>Experience</h4>
                    <ul>
                      <li>Panasonicc AC Service center 2 years experience</li>
                      <li>AC PCB board 2 years experience</li>
                      <li>4 years of good experience in AC Services</li>
                    </ul>
                  </div>
                  <div className="jpro-bd-com">
                    <h4>Education</h4>
                    <ul>
                      <li>BE Electronic</li>
                      <li>AC Service Special Course in LG</li>
                    </ul>
                  </div>
                  <div className="jpro-bd-com">
                    <h4>Additional information</h4>
                    <span>LG inplant training in Japan</span>
                    <span>6 months special training in AC services</span>
                  </div>
                  <div className="jpro-bd-com">
                    <h4>User Reviews</h4>
                    <div className="lp-ur-all-rat">
                      <ul>
                        <li>
                          <div className="lr-user-wr-img">
                            <img
                              src="/assets/images/services/2.jpeg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="lr-user-wr-con">
                            <h6>John Smith</h6>
                            <label className="rat">
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                            </label>
                            <span className="lr-revi-date">30, Jan 2022</span>
                            <p>Perfect service every.. strongly recomended</p>
                          </div>
                        </li>
                        <li>
                          <div className="lr-user-wr-img">
                            <img
                              src="/assets/images/services/3.jpg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="lr-user-wr-con">
                            <h6>John Smith</h6>
                            <label className="rat">
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                            </label>
                            <span className="lr-revi-date">20, Nov 2021</span>
                            <p>
                              Best AC Service ever.. I strongly recommended{" "}
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="lr-user-wr-img">
                            <img
                              src="/assets/images/services/5.jpeg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="lr-user-wr-con">
                            <h6 />
                            <label className="rat">
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                            </label>
                            <span className="lr-revi-date">22, Sep 2021</span>
                            <p>Perfect1</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*END*/}
              </div>
              <div className="rhs">
                <div className="ud-rhs-promo">
                  <h3>Are you a Service Expert?</h3>
                  <p>
                    Register now and generate your income multiple and move your
                    business on next level.
                  </p>
                  <a href="../login.html">Register for free</a>
                </div>
                <div className="job-rel-pro">
                  <div className="hot-page2-hom-pre">
                    <h4>Related profiles</h4>
                    <ul>
                      {/* Expert Service */}
                      <li>
                        <div className="hot-page2-hom-pre-1">
                          <img
                            src="/assets/images/services/6.jpeg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="hot-page2-hom-pre-2">
                          <h5>
                            Brian Jose <span className="rat">5.0</span>
                          </h5>
                          <span>
                            <b>House Decoration Services</b>
                          </span>
                        </div>
                        <a
                          href="service-experts-profile.html"
                          className="fclick"
                        />
                      </li>
                      {/* Expert Service */}
                      <li>
                        <div className="hot-page2-hom-pre-1">
                          <img
                            src="/assets/images/services/6.jpeg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="hot-page2-hom-pre-2">
                          <h5>
                            Brian Jose <span className="rat">5.0</span>
                          </h5>
                          <span>
                            <b>House Decoration Services</b>
                          </span>
                        </div>
                        <a
                          href="service-experts-profile.html"
                          className="fclick"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="job-rel-pro">
                  <div className="hot-page2-hom-pre">
                    <h4>Trending Services</h4>
                    <ul>
                      <li>
                        <div className="hot-page2-hom-pre-1">
                          <img
                            src="/assets/images/services/8.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="hot-page2-hom-pre-2">
                          <h5>Laptop service</h5>
                          <span>
                            <b>03 Experts</b>, 00 Services Done
                          </span>
                        </div>
                        <a
                          href="service-experts-profile.html"
                          className="fclick"
                        />
                      </li>
                      <li>
                        <div className="hot-page2-hom-pre-1">
                          <img
                            src="/assets/images/services/7.jpeg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="hot-page2-hom-pre-2">
                          <h5>Home restoration services</h5>
                          <span>
                            <b>00 Experts</b>, 00 Services Done
                          </span>
                        </div>
                        <a
                          href="service-experts-profile.html"
                          className="fclick"
                        />
                      </li>
                      <li>
                        <div className="hot-page2-hom-pre-1">
                          <img
                            src="/assets/images/services/5.jpeg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="hot-page2-hom-pre-2">
                          <h5>Pest control service</h5>
                          <span>
                            <b>01 Experts</b>, 00 Services Done
                          </span>
                        </div>
                        <a
                          href="service-experts-profile.html"
                          className="fclick"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<ListYourBusiness/>
<ExpertPopUp/>
<Footer/>

  

    </>
  );
}

export default ExpertsProfile