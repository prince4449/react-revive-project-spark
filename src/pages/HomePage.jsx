import React from "react";
import Footer from "../components/Footer";
import ChooseYourPlan from "../components/ChooseYourPlan";
import Services from "../components/Services";
import MoreServices from "../components/MoreServices";
import AdSlider from "../components/AdSlider";
import HomeSearch from "../components/HomeSearch";
import HighlightedCard from "../components/HighlightedCard";
import DesktopPopUpMenu from "../components/DesktopPopUpMenu";
import MobilePopUpMenu from "../components/MobilePopUpMenu";
import ListYourBusiness from "../components/ListYourBusiness";

const HomePage = () => {
  return (
    <>
      <section>
        <div className="str ind2-home">
          <div
            className="hom-head"
            style={{
              backgroundImage: "url('./src/assets/images/3261288129ex2.jpg')",
            }}
          >
            <div className="hom-top">
              <div className="container">
                <div className="row">
                  <div className="hom-nav ">
                    {/*MOBILE MENU*/}
                    <a href="index.html" className="top-log">
                      <img
                        src="./src/assets/images/home/16077bizbook-white.png"
                        style={{ width: 192, height: "auto" }}
                        alt=""
                        loading="lazy"
                        className="ic-logo"
                      />
                    </a>
                    <div className="menu">
                      <h4>Explore</h4>
                    </div>
                    <DesktopPopUpMenu />
                    {/*END MOBILE MENU*/}
                    <div className="top-ser">
                      <form
                        name="filter_form"
                        id="filter_form"
                        className="filter_form"
                      >
                        <ul>
                          <li className="sr-sea">
                            <input
                              type="text"
                              autoComplete="off"
                              id="top-select-search"
                              placeholder="What are you looking for?"
                            />
                            <ul id="tser-res1" className="tser-res tser-res2">
                              <li>
                                <div>
                                  <h4>Online classes for School Students</h4>
                                  <span>
                                    Schools, university, colleges, online
                                    classes, tution centers, distance
                                    education..
                                  </span>
                                  <a href="listing-details.html" />
                                </div>
                              </li>
                              <li>
                                <div>
                                  <h4>Buy Iphone13 Pro now</h4>
                                  <span>
                                    Iphone 13, 12, 11 and all apple product
                                    available
                                  </span>
                                  <a href="product-details.html" />
                                </div>
                              </li>
                              <li>
                                <div>
                                  <h4>Home cleaning services near you</h4>
                                  <span>
                                    Home cleaning, pet control and more
                                  </span>
                                  <a href="service-experts/all-experts.html" />
                                </div>
                              </li>
                              <li>
                                <div>
                                  <h4>Best AC Service Expert near you</h4>
                                  <span>
                                    Service expert, ac service, ac service in
                                    new york
                                  </span>
                                  <a href="service-experts/all-experts.html" />
                                </div>
                              </li>
                              <li>
                                <div>
                                  <h4>
                                    Now easy to buy Villas, Plots and Flats
                                  </h4>
                                  <span>New york City</span>
                                  <a href="all-listing.html" />
                                </div>
                              </li>
                              <li>
                                <div>
                                  <h4>Spa Center For Womens</h4>
                                  <span>
                                    No:2, 4th Avenue, Newyork, USA, Near to
                                    Airport
                                  </span>
                                  <a href="all-listing.html" />
                                </div>
                              </li>
                              <li>
                                <div>
                                  <h4>Software jobs waiting for you</h4>
                                  <span>Jobs in New york, High pay salary</span>
                                  <a href="jobs/job-details.html" />
                                </div>
                              </li>
                              <li>
                                <div>
                                  <h4>New year 2022 celebration started</h4>
                                  <span>
                                    New year 2022, event booking, hotel booking
                                    and more
                                  </span>
                                  <a href="event-details.html" />
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="sbtn">
                            <button
                              type="button"
                              className="btn btn-success"
                              id="top_filter_submit"
                            >
                              <i className="material-icons">&nbsp;</i>
                            </button>
                          </li>
                        </ul>
                      </form>
                    </div>
                    <MobilePopUpMenu />
                    {/*END MOBILE MENU*/}
                  </div>
                </div>
              </div>
            </div>
            <HomeSearch />
          </div>
        </div>
      </section>
      {/* END */}
      <HighlightedCard />
      {/* START */}
      <Services />
      {/* END */}
      <AdSlider />
      {/*START*/}
      <MoreServices />
      {/*END*/}
      <ChooseYourPlan />
      {/* START */}
      <section>
        <div className="str count">
          <div className="container">
            <div className="row">
              <div className="how-wrks">
                <div className="home-tit">
                  <h2>
                    <span>How It Works</span>
                  </h2>
                  <p>
                    Explore some of the best tips from around the world from our
                    <br />
                    partners and friends.lacinia viverra lectus.
                  </p>
                </div>
                <div className="how-wrks-inn">
                  <ul>
                    <li>
                      <div>
                        <span>1</span>
                        <img
                          src="././src/assets/images/icon/how1.png"
                          alt=""
                          loading="lazy"
                        />
                        <h4>Create an account</h4>
                        <p>
                          Fusce imperdiet ullamcorper metus eu fringilla. from
                          around the world from our partners and friends.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>2</span>
                        <img
                          src="././src/assets/images/icon/how2.png"
                          alt=""
                          loading="lazy"
                        />
                        <h4>Add your business</h4>
                        <p>
                          Fusce imperdiet ullamcorper metus eu fringilla. from
                          around the world from our partners and friends.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>3</span>
                        <img
                          src="././src/assets/images/icon/how3.png"
                          alt=""
                          loading="lazy"
                        />
                        <h4>Get more leads</h4>
                        <p>
                          Fusce imperdiet ullamcorper metus eu fringilla. from
                          around the world from our partners and friends.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span>4</span>
                        <img
                          src="././src/assets/images/icon/how4.png"
                          alt=""
                          loading="lazy"
                        />
                        <h4>Archive goles</h4>
                        <p>
                          Fusce imperdiet ullamcorper metus eu fringilla. from
                          around the world from our partners and friends.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mob-app">
                <div className="lhs">
                  <img
                    src="././src/assets/images/mobile.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="rhs">
                  <h2>
                    Looking for the Best Service Provider?{" "}
                    <span>Get the App!</span>
                  </h2>
                  <ul>
                    <li>HOM-APP-TITFind nearby listings</li>
                    <li>Easy service enquiry</li>
                    <li>Listing reviews and ratings</li>
                    <li>Manage your listing, enquiry and reviews</li>
                  </ul>
                  <span>
                    We'll send you a link, to you below provided email id &amp;
                    open it on your smart phone to download the app
                  </span>
                  <a href="#">
                    <img
                      src="././src/assets/images/gstore.png"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                  <a href="#">
                    <img
                      src="././src/assets/images/astore.png"
                      alt=""
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <section>
        <div className="hom-ads">
          <div className="container">
            <div className="row">
              <div className="filt-com lhs-ads">
                <div className="ads-box">
                  <a href="https://themeforest.net/item/holiday-hotel-and-tour-ticket-booking-online-html5-responsive-template/19411137">
                    <span>Ad</span>
                    <img
                      src="./src/assets/images/ads/732314414ads2.png"
                      alt=""
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <div className="ani-quo">
        <div className="ani-q1">
          <h4>What you looking for?</h4>
          <p>We connect you to service experts.</p>
          <span>Get experts</span>
        </div>
        <div className="ani-q2">
          <img src="././src/assets/images/quote.png" alt="" loading="lazy" />
        </div>
      </div>
      {/* END */}
      {/* START */}
      <span className="btn-ser-need-ani">
        <img src="././src/assets/images/icon/help.png" alt="" loading="lazy" />
      </span>
      <whatServiceYouNeedPopup />
      {/* END */}
      {/* START */}
      <ListYourBusiness />
      {/* END */}
      <Footer />
    </>
  );
};

export default HomePage;
