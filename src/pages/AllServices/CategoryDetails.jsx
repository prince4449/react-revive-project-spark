import React, { useEffect, useState } from "react";
import ListYourBusiness from "../../components/ListYourBusiness";
import ExpertPopUp from "../../components/ExpertPopUp";
import Footer from "../../components/Footer";
import NarrowHeader from "../../components/NarrowHeader";
import { URL_CONSTANTS } from "../../Api/ApiUrl";
import { Get } from "../../Api/api";

const CategoryDetails = () => {
  const [categoriesDetails, setCategoriesDetails] = useState([]);

  const fetchCategoriesDetails = async (id) => {
    try {
      const response = await Get(URL_CONSTANTS.getCategoryDetails(id));
      setCategoriesDetails(response.data);
    } catch (error) {
      console.error("Error ", error.message);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    fetchCategoriesDetails(id);
  }, []);

  return (
    <>
      <section>
        <div className="str ind2-home">
          <div>
            <NarrowHeader />
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <section>
        <div className="v3-list-ql">
          <div className="container">
            <div className="row">
              <div className="v3-list-ql-inn">
                <ul>
                  <li className="active">
                    <a href="#ld-abo">
                      <i className="material-icons">person</i> About{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#ld-ser">
                      <i className="material-icons">business_center</i> Services{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#ld-gal">
                      <i className="material-icons">photo</i> Gallery{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#ld-off">
                      <i className="material-icons">style</i> Offers{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#ld-360">
                      <i className="material-icons">camera</i> 360 View{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#ld-rev">
                      <i className="material-icons">star_half</i> Write Review{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#" data-toggle="modal" data-target="#claim">
                      <i className="material-icons">store</i>Claim business{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <section>
        <div className="list-det-fix">
          <div className="container">
            <div className="row">
              <div className="list-det-fix-inn">
                <div className="list-fix-pro">
                  <img
                    src="images/listings/70463pexels-gustavo-fring-3985178.jpg"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="list-fix-tit">
                  <h3>{categoriesDetails.name}</h3>
                  <p>
                    <b>Address:</b> No:2, 4th Avenue, Newyork, USA, Near to
                    Airport
                  </p>
                </div>
                <div className="list-fix-btn">
                  <span
                    data-toggle="modal"
                    data-target="#quote"
                    className="pulse"
                  >
                    Send an enquiry
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <section>
        <div className="list-bann">
          <img
            src="images/listing-ban/14944pexels-gustavo-fring-3985159.jpg"
            alt=""
            loading="lazy"
          />
        </div>
      </section>
      {/* END */}
      {/* START */}
      {/*LISTING DETAILS*/}
      <section className=" pg-list-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pg-list-1-pro">
                <img
                  src="images/listings/70463pexels-gustavo-fring-3985178.jpg"
                  alt=""
                  loading="lazy"
                />
                <span className="stat">
                  <i className="material-icons">verified_user</i>
                </span>
              </div>
              <div className="pg-list-1-left">
                <h3>{categoriesDetails.name}</h3>
                <div className="list-rat-all">
                  <b>5.0</b>
                  <label className="rat">
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                    <i className="material-icons">star</i>
                  </label>
                  <span>1Reviews</span>
                </div>
                <p>
                  <b>Address:</b> No:2, 4th Avenue, Newyork, USA, Near to
                  Airport
                </p>
                <div className="list-number pag-p1-phone">
                  <ul>
                    <a href={`tel: ${categoriesDetails.mobile}`}>
                      <li className="ic-php">{categoriesDetails.mobile} </li>
                    </a>
                    <a href={`mailto: ${categoriesDetails.email}`}>
                      <li className="ic-mai">{categoriesDetails.email}</li>
                    </a>
                    <a target="_blank" href="http://www.Greys .com">
                      <li className="ic-web">www.Greys .com</li>
                    </a>
                  </ul>
                </div>
              </div>
              <div className="list-ban-btn">
                <ul>
                  <li>
                    <a
                      href={`tel: ${categoriesDetails.mobile}`}
                      className="cta cta-call"
                    >
                      Call Now
                    </a>
                  </li>
                  <li>
                    <span
                      className="cta cta-like ldelik Animatedheartfunc401 "
                      data-for={3}
                      data-section={1}
                      data-num={328}
                      data-item=""
                      data-id={401}
                    >
                      <b className="like-content401">3</b> LIKES
                    </span>
                  </li>
                  <li>
                    <a href="https://wa.me/987654621" className="cta cta-rev">
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <span
                      data-toggle="modal"
                      data-target="#quote"
                      className="pulse cta cta-get"
                    >
                      Get quote
                    </span>
                  </li>
                  <li>
                    <span
                      className="share-new-top"
                      data-toggle="modal"
                      data-target="#sharepop"
                    >
                      <i className="material-icons">share</i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" list-pg-bg">
        <div className="container">
          <div className="row">
            <div className="com-padd">
              <div id="ld-abo" className="list-pg-lt list-page-com-p">
                {/*LISTING DETAILS: LEFT PART 1*/}
                <div className="pglist-bg pglist-p-com">
                  <div className="pglist-p-com-ti">
                    <h3>
                      <span>About</span> Greys Sloan Memorial Hospital
                    </h3>
                  </div>
                  <div className="list-pg-inn-sp list-pg-inn-abo">
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of "de Finibus
                      Bonorum et Malorum" (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                      comes from a line in section 1.10.32.
                    </p>
                  </div>
                </div>
                {/*END LISTING DETAILS: LEFT PART 1*/}
                {/*LISTING DETAILS: LEFT PART 2*/}
                <div id="ld-ser" className="pglist-bg pglist-p-com">
                  <div className="pglist-p-com-ti">
                    <h3>
                      <span>Services</span> Offered
                    </h3>
                  </div>
                  <div className="list-pg-inn-sp">
                    <div className="row pg-list-ser">
                      <ul>
                        <li className="col-md-3">
                          <div className="pg-list-ser-p1">
                            <img
                              src="images/services/71960pexels-photo-3259629.jpeg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="pg-list-ser-p2">
                            <h4>Surgical Services</h4>
                          </div>
                        </li>
                        <li className="col-md-3">
                          <div className="pg-list-ser-p1">
                            <img
                              src="images/services/88511pexels-photo-2324837.jpeg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="pg-list-ser-p2">
                            <h4>Laboratory Services</h4>
                          </div>
                        </li>
                        <li className="col-md-3">
                          <div className="pg-list-ser-p1">
                            <img
                              src="images/services/67651pexels-photo-1170979.jpeg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="pg-list-ser-p2">
                            <h4>Paediatric Services</h4>
                          </div>
                        </li>
                        <li className="col-md-3">
                          <div className="pg-list-ser-p1">
                            <img
                              src="images/services/95526pexels-photo-263337.jpeg"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="pg-list-ser-p2">
                            <h4>Radiology Services</h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*END LISTING DETAILS: LEFT PART 2*/}
                {/*LISTING DETAILS: LEFT PART 3*/}
                <div id="ld-gal" className="pglist-bg pglist-p-com">
                  <div className="pglist-p-com-ti">
                    <h3>
                      <span>photo</span> Gallery
                    </h3>
                  </div>
                  <div className="list-pg-inn-sp">
                    <div
                      id="demo"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      {/* Indicators */}
                      <ul className="carousel-indicators">
                        <li
                          data-target="#demo"
                          data-slide-to={0}
                          className="active"
                        />
                        <li data-target="#demo" data-slide-to={1} />
                        <li data-target="#demo" data-slide-to={2} />
                        <li data-target="#demo" data-slide-to={3} />
                        <li data-target="#demo" data-slide-to={4} />
                        <li data-target="#demo" data-slide-to={5} />
                      </ul>
                      {/* The slideshow */}
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="images/listings/32983pexels-photo-3259629.jpeg"
                            alt="32983pexels-photo-3259629.jpeg"
                            loading="lazy"
                          />
                        </div>
                        <div className="carousel-item ">
                          <img
                            src="images/listings/72548pexels-photo-2324837.jpeg"
                            alt="72548pexels-photo-2324837.jpeg"
                            loading="lazy"
                          />
                        </div>
                        <div className="carousel-item ">
                          <img
                            src="images/listings/68415pexels-photo-1170979.jpeg"
                            alt="68415pexels-photo-1170979.jpeg"
                            loading="lazy"
                          />
                        </div>
                        <div className="carousel-item ">
                          <img
                            src="images/listings/19109pexels-photo-263337.jpeg"
                            alt="19109pexels-photo-263337.jpeg"
                            loading="lazy"
                          />
                        </div>
                        <div className="carousel-item viki">
                          <iframe
                            width={1031}
                            height={580}
                            src="https://www.youtube.com/embed/m8wXm-kDjJE"
                            frameBorder={0}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                        <div className="carousel-item viki">
                          <iframe
                            width={1031}
                            height={580}
                            src="https://www.youtube.com/embed/93_4_0Dyys8"
                            frameBorder={0}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                          />
                        </div>
                      </div>
                      {/* Left and right controls */}
                      <a
                        className="carousel-control-prev"
                        href="#demo"
                        data-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" />
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#demo"
                        data-slide="next"
                      >
                        <span className="carousel-control-next-icon" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*END LISTING DETAILS: LEFT PART 3*/}
                {/*LISTING DETAILS: LEFT PART 4*/}
                <div
                  id="ld-off"
                  className="pglist-bg pglist-off-last pglist-p-com"
                >
                  <div className="pglist-p-com-ti">
                    <h3>
                      <span>Special</span> Offers
                    </h3>
                  </div>
                  <div className="list-pg-inn-sp">
                    <div className="home-list-pop">
                      {/*LISTINGS IMAGE*/}
                      <div className="col-md-3">
                        <img
                          src="images/services/28972pexels-photo-263402.jpeg"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      {/*LISTINGS: CONTENT*/}
                      <div className="col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta">
                        <a href="#!">
                          <h3>50% Offer today only</h3>
                        </a>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p>
                        <span className="home-list-pop-rat list-rom-pric">
                          $99
                        </span>
                        <div className="list-enqu-btn">
                          <ul>
                            <li>
                              <a
                                target="_blank"
                                href="https://themeforest.net/item/bizbook-directory-listings-template/25391222?s_rank=1"
                              >
                                view more
                              </a>
                            </li>
                            <li>
                              <a
                                href="#!"
                                data-toggle="modal"
                                data-target="#quote"
                              >
                                Send enquiry
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*END 360 DEGREE MAP: LEFT PART 8*/}
                <div className="pglist-bg pglist-p-com" id="ld-360">
                  <div className="pglist-p-com-ti">
                    <h3>
                      <span>360 </span> Degree View
                    </h3>
                  </div>
                  <div className="list-pg-inn-sp list-360">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1572752787064!6m8!1m7!1sCAoSLEFGMVFpcE5FUjQ5UzRtckNvYVBldF9XbG5aOWExQnZsVnNaRy1JbTBEZHZV!2m2!1d40.7043249!2d-73.9903695!3f344.45792!4f0!5f0.7820865974627469"
                      width={600}
                      height={450}
                      frameBorder={0}
                      style={{ border: 0 }}
                      allowFullScreen=""
                    />
                  </div>
                </div>
                <div className="list-sh">
                  <span
                    className="share-new"
                    data-toggle="modal"
                    data-target="#sharepop"
                  >
                    <i className="material-icons">share</i> Share now
                  </span>
                </div>
                {/*END 360 DEGREE MAP: LEFT PART 8*/}
                {/*LISTING DETAILS: LEFT PART 6*/}
                <span id="Review_Disable">Login And Write Your Review</span>
                {/*LISTING DETAILS: LEFT PART 6*/}
                <div
                  className="pglist-bg pglist-p-com"
                  style={{ pointerEvents: "none", opacity: ".5" }}
                  id="ld-rev"
                >
                  <div className="pglist-p-com-ti">
                    <h3>
                      <span>Write Your</span> Reviews
                    </h3>
                  </div>
                  <div className="list-pg-inn-sp">
                    <div className="list-pg-write-rev">
                      <form className="col">
                        <input
                          type="hidden"
                          className="form-control"
                          name="listing_id"
                          defaultValue={401}
                        />
                        <input
                          type="hidden"
                          className="form-control"
                          name="listing_user_id"
                          defaultValue={328}
                        />
                        <input
                          name="review_user_id"
                          defaultValue=""
                          type="hidden"
                        />
                        <p>
                          Writing great reviews may help others discover the
                          places that are just apt for them. Here are a few tips
                          to write a good review:
                        </p>
                        <div
                          id="review_success"
                          style={{
                            textAlign: "center",
                            display: "none",
                            color: "green",
                          }}
                        >
                          Thanks for your Review !! Your Review Is Successful!!{" "}
                        </div>
                        <div
                          id="review_fail"
                          style={{
                            textAlign: "center",
                            display: "none",
                            color: "red",
                          }}
                        >
                          Oops!! Something Went Wrong Try Later!!!
                        </div>
                        <div className="row">
                          <div>
                            <fieldset className="rating">
                              <input
                                type="radio"
                                id="star5"
                                name="price_rating"
                                className="price_rating"
                                defaultValue={5}
                              />
                              <label
                                className="full"
                                htmlFor="star5"
                                title="Awesome"
                              />
                              <input
                                type="radio"
                                id="star4"
                                name="price_rating"
                                className="price_rating"
                                defaultValue={4}
                              />
                              <label
                                className="full"
                                htmlFor="star4"
                                title="Excellent"
                              />
                              <input
                                type="radio"
                                defaultChecked="checked"
                                id="star3"
                                className="price_rating"
                                name="price_rating"
                                defaultValue={3}
                              />
                              <label
                                className="full"
                                htmlFor="star3"
                                title="Good"
                              />
                              <input
                                type="radio"
                                id="star2"
                                name="price_rating"
                                className="price_rating"
                                defaultValue={2}
                              />
                              <label
                                className="full"
                                htmlFor="star2"
                                title="Average"
                              />
                              <input
                                type="radio"
                                id="star1"
                                name="price_rating"
                                className="price_rating"
                                defaultValue={1}
                              />
                              <label
                                className="full"
                                htmlFor="star1"
                                title="Poor"
                              />
                              <input
                                type="radio"
                                id="star0"
                                name="price_rating"
                                className="price_rating"
                                defaultValue={0}
                              />
                              <label htmlFor="star0" title="Very Poor" />
                            </fieldset>
                            <div id="star-value">3 Star</div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <input
                              id="review_name"
                              disabled=""
                              name="review_name"
                              type="text"
                              defaultValue=""
                            />
                          </div>
                          <div className="input-field col s6">
                            <input
                              id="review_mobile"
                              disabled=""
                              name="review_mobile"
                              type="text"
                              onkeypress="return isNumber(event)"
                              placeholder="Mobile number"
                              defaultValue=""
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s6">
                            <input
                              id="review_email"
                              disabled=""
                              name="review_email"
                              type="email"
                              placeholder="Email Id"
                              defaultValue=""
                            />
                          </div>
                          <div className="input-field col s6">
                            <input
                              id="review_city"
                              disabled=""
                              name="review_city"
                              placeholder="City"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <textarea
                              id="review_message"
                              disabled=""
                              placeholder="Write review"
                              name="review_message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                            <input
                              type="submit"
                              id=""
                              name=""
                              disabled="disabled"
                              readOnly="readonly"
                              defaultValue="You can't review this listing as per your plan !!"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/*END LISTING DETAILS: LEFT PART 6*/}
                {/*END LISTING DETAILS: LEFT PART 6*/}
                {/*LISTING DETAILS: LEFT PART 5*/}
                {/*LISTING DETAILS: LEFT PART 5*/}
                <div className="pglist-p3 pglist-bg pglist-p-com" id="ld-rev">
                  <div className="pglist-p-com-ti">
                    <h3>
                      <span>User</span> Reviews{" "}
                    </h3>
                  </div>
                  <div className="list-pg-inn-sp">
                    <div className="lp-ur-all">
                      <div className="lp-ur-all-left">
                        <div className="lp-ur-all-left-1">
                          <div className="lp-ur-all-left-11">Excellent</div>
                          <div className="lp-ur-all-left-12">
                            <div className="lp-ur-all-left-13" />
                          </div>
                        </div>
                        <div className="lp-ur-all-left-1">
                          <div className="lp-ur-all-left-11">Good</div>
                          <div className="lp-ur-all-left-12">
                            <div className="lp-ur-all-left-13 lp-ur-all-left-Good" />
                          </div>
                        </div>
                        <div className="lp-ur-all-left-1">
                          <div className="lp-ur-all-left-11">Satisfactory</div>
                          <div className="lp-ur-all-left-12">
                            <div className="lp-ur-all-left-13 lp-ur-all-left-satis" />
                          </div>
                        </div>
                        <div className="lp-ur-all-left-1">
                          <div className="lp-ur-all-left-11">Below Average</div>
                          <div className="lp-ur-all-left-12">
                            <div className="lp-ur-all-left-13 lp-ur-all-left-below" />
                          </div>
                        </div>
                        <div className="lp-ur-all-left-1">
                          <div className="lp-ur-all-left-11">Below Average</div>
                          <div className="lp-ur-all-left-12">
                            <div className="lp-ur-all-left-13 lp-ur-all-left-poor" />
                          </div>
                        </div>
                      </div>
                      <div className="lp-ur-all-right">
                        <h5>Overall Ratings</h5>
                        <p>
                          <label className="rat">
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                          </label>
                          <span>based on1Reviews</span>
                        </p>
                      </div>
                    </div>
                    <div className="lp-ur-all-rat">
                      <h5>Reviews</h5>
                      <ul>
                        <li>
                          <div className="lr-user-wr-img">
                            <img
                              src="images/user/29615rn53-themes.png"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div className="lr-user-wr-con">
                            <h6>Rn53</h6>
                            <label className="rat">
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                              <i className="material-icons">star</i>
                            </label>
                            <span className="lr-revi-date">20, Jul 2022</span>
                            <p>ghghhg</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*END LISTING DETAILS: LEFT PART 5*/}
                {/*ADS*/}
                <div className="ban-ati-com ads-det-page">
                  <a href="https://themeforest.net/item/bizbook-directory-listings-template/25391222">
                    <span>Ad</span>
                    <img src="images/ads/4414ads2.png" loading="lazy" />
                  </a>
                </div>
                {/*ADS*/}
                {/*RELATED PREMIUM LISTINGS*/}
                <div className="list-det-rel-pre">
                  <h2>Related listings:</h2>
                  <ul>
                    <li>
                      <div className="land-pack-grid">
                        <div className="land-pack-grid-img">
                          <img
                            src="images/listings/49021pexels-photo-263402.jpeg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="land-pack-grid-text">
                          <h4>MSI Hospitals in Melborn</h4>
                          <div className="list-rat-all">
                            <b />
                          </div>
                        </div>
                        <a
                          target="_blank"
                          href="listing/msi-hospitals-in-melborn"
                          className="land-pack-grid-btn"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="land-pack-grid">
                        <div className="land-pack-grid-img">
                          <img
                            src="images/listings/78887pexels-andrea-piacquadio-3884090.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="land-pack-grid-text">
                          <h4>Handys Health Hospital</h4>
                          <div className="list-rat-all">
                            <b />
                          </div>
                        </div>
                        <a
                          target="_blank"
                          href="listing/handys-health-hospital"
                          className="land-pack-grid-btn"
                        />
                      </div>
                    </li>
                    <li>
                      <div className="land-pack-grid">
                        <div className="land-pack-grid-img">
                          <img
                            src="images/listings/85462pexels-klaus-nielsen-6303590.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="land-pack-grid-text">
                          <h4>Globals Health Hospitals.</h4>
                          <div className="list-rat-all">
                            <b />
                          </div>
                        </div>
                        <a
                          target="_blank"
                          href="listing/globals-health-hospitals"
                          className="land-pack-grid-btn"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                {/*RELATED PREMIUM LISTINGS*/}
              </div>
              <div className="list-pg-rt">
                {/*LISTING DETAILS: LEFT PART 9*/}
                <div className="list-rhs-form pglist-bg pglist-p-com">
                  <div className="quote-pop">
                    <h3>
                      <span>Get</span> Quote{" "}
                    </h3>
                    <div
                      id="detail_enq_success"
                      className="log"
                      style={{ display: "none" }}
                    >
                      <p>Your Enquiry Is Submitted Successfully!!!</p>
                    </div>
                    <div
                      id="detail_enq_same"
                      className="log"
                      style={{ display: "none" }}
                    >
                      <p>You cannot make enquiry on your own listing!!</p>
                    </div>
                    <div
                      id="detail_enq_fail"
                      className="log"
                      style={{ display: "none" }}
                    >
                      <p>Oops!! Something Went Wrong Try Later!!!</p>
                    </div>
                    <form
                      method="post"
                      name="detail_enquiry_form"
                      id="detail_enquiry_form"
                    >
                      <input
                        type="hidden"
                        className="form-control"
                        name="listing_id"
                        defaultValue={401}
                        placeholder=""
                        required=""
                      />
                      <input
                        type="hidden"
                        className="form-control"
                        name="listing_user_id"
                        defaultValue={328}
                        placeholder=""
                        required=""
                      />
                      <input
                        type="hidden"
                        className="form-control"
                        name="enquiry_sender_id"
                        defaultValue=""
                        placeholder=""
                        required=""
                      />
                      <input
                        type="hidden"
                        className="form-control"
                        name="enquiry_source"
                        defaultValue="Website"
                        placeholder=""
                        required=""
                      />
                      <div className="form-group ic-user">
                        <input
                          type="text"
                          name="enquiry_name"
                          defaultValue=""
                          required="required"
                          className="form-control"
                          placeholder="Enter name*"
                        />
                      </div>
                      <div className="form-group ic-eml">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email*"
                          required="required"
                          defaultValue=""
                          name="enquiry_email"
                          pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                          title="Invalid email address"
                        />
                      </div>
                      <div className="form-group ic-pho">
                        <input
                          type="text"
                          className="form-control"
                          defaultValue=""
                          name="enquiry_mobile"
                          placeholder="Enter mobile number *"
                          pattern="[7-9]{1}[0-9]{9}"
                          title="Phone number starting with 7-9 and remaining 9 digit with 0-9"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={3}
                          name="enquiry_message"
                          placeholder="Enter your query or message"
                          defaultValue={""}
                        />
                      </div>
                      <input type="hidden" id="source" />
                      <button
                        disabled="disabled"
                        type="submit"
                        id="detail_enquiry_submit"
                        name="enquiry_submit"
                        className="btn btn-primary"
                      >
                        You can't make enquiry!! As per your plan !!{" "}
                      </button>
                    </form>
                  </div>
                </div>
                {/*END LISTING DETAILS: LEFT PART 9*/}
                {/*LISTING DETAILS: LEFT PART 7*/}
                <div className="lide-guar pglist-bg pglist-p-com">
                  <div className="pglist-p-com-ti pglist-p-com-ti-right">
                    <h3>
                      <span>Claim</span> Listing
                    </h3>
                  </div>
                  <div className="list-pg-inn-sp">
                    <div className="list-pg-guar">
                      <ul>
                        <li>
                          <div className="list-pg-guar-img">
                            <img
                              src="images/icon/g2.png"
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <h4>Claim this business</h4>
                          <span
                            data-toggle="modal"
                            data-target="#claim"
                            className="clim-edit"
                          >
                            Suggest an edit
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*END LISTING DETAILS: LEFT PART 7*/}
                {/*LISTING DETAILS: LEFT PART 8*/}
                <div className="pglist-p3 pglist-bg pglist-p-com">
                  <div className="pglist-p-com-ti pglist-p-com-ti-right">
                    <h3>
                      <span>Our</span> Location{" "}
                    </h3>
                  </div>
                  <div className="list-pg-inn-sp">
                    <div className="list-pg-map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1572752768106!5m2!1sen!2sin"
                        width={600}
                        height={450}
                        frameBorder={0}
                        style={{ border: 0 }}
                        allowFullScreen=""
                      />
                    </div>
                  </div>
                </div>
                {/*END LISTING DETAILS: LEFT PART 8*/}
                {/*LISTING DETAILS: LEFT PART 9*/}
                <div className="pglist-p3 pglist-bg pglist-p-com">
                  <div className="pglist-p-com-ti pglist-p-com-ti-right">
                    <h3>
                      <span>Company</span> Info
                    </h3>
                  </div>
                  <div className="list-pg-inn-sp">
                    <div className="list-pg-oth-info">
                      <ul>
                        <li>
                          Experience <span>20 years</span>
                        </li>
                        <li>
                          Open time <span>8:00 AM</span>
                        </li>
                        <li>
                          Close Time <span>9:00 PM</span>
                        </li>
                        <li>
                          Smoking area <span>yes</span>
                        </li>
                        <li>
                          Parking <span>Yes</span>
                        </li>
                        <li>
                          Since <span>1980</span>
                        </li>
                        <li>
                          Online booking <span>Yes</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*END LISTING DETAILS: LEFT PART 9*/}
                {/*LISTING DETAILS: LEFT PART 7*/}
                <div className="ld-rhs-pro pglist-bg pglist-p-com">
                  <div className="lis-pro-badg">
                    <div>
                      <span className="rat" alt="User rating">
                        4.2
                      </span>
                      <span className="by">Created by</span>
                      <img src="images/user/970813.jpg" alt="" loading="lazy" />
                      <h4>John Smith</h4>
                      <p>Member since Nov 2021</p>
                    </div>
                    <a
                      href="profile/john-smith"
                      className="fclick"
                      target="_blank"
                    >
                      &nbsp;
                    </a>
                  </div>
                </div>
                {/*END LISTING DETAILS: LEFT PART 7*/}
                {/*LISTING DETAILS: LEFT PART 10*/}
                <div className="list-mig-like">
                  <div className="list-ri-peo-like">
                    <h3>Who all are like this</h3>
                    <ul>
                      <li>
                        <a href="profile/" target="_blank">
                          <img
                            src="images/user/970813.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="profile/" target="_blank">
                          <img
                            src="images/user/970813.jpg"
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="profile/rn53" target="_blank">
                          <img
                            src="images/user/29615rn53-themes.png"
                            alt=""
                            loading="lazy"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*END LISTING DETAILS: LEFT PART 10*/}
                {/*ADS*/}
                <div className="ban-ati-com ads-det-page">
                  <a href="">
                    <span>Ad</span>
                    <img src="images/ads/59040boat-728x90.png" loading="lazy" />
                  </a>
                </div>
                {/*ADS*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* START */}
      <span className="btn-ser-need-ani">
        <img src="images/icon/help.png" alt="" loading="lazy" />
      </span>
      <div className="ani-quo-form">
        <i className="material-icons ani-req-clo">close</i>
        <div className="tit">
          <h3>
            What service do you need? <span>BizBook will help you</span>
          </h3>
        </div>
        <div className="hom-col-req">
          <div
            id="home_slide_enq_success"
            className="log"
            style={{ display: "none" }}
          >
            <p>Your Enquiry Is Submitted Successfully!!!</p>
          </div>
          <div
            id="home_slide_enq_fail"
            className="log"
            style={{ display: "none" }}
          >
            <p>Oops!! Something Went Wrong Try Later!!!</p>
          </div>
          <div
            id="home_slide_enq_same"
            className="log"
            style={{ display: "none" }}
          >
            <p>You cannot make enquiry on your own listing!!</p>
          </div>
          <form
            name="home_slide_enquiry_form"
            id="home_slide_enquiry_form"
            method="post"
            encType="multipart/form-data"
          >
            <input
              type="hidden"
              className="form-control"
              name="listing_id"
              defaultValue={0}
              placeholder=""
              required=""
            />
            <input
              type="hidden"
              className="form-control"
              name="listing_user_id"
              defaultValue={0}
              placeholder=""
              required=""
            />
            <input
              type="hidden"
              className="form-control"
              name="enquiry_sender_id"
              defaultValue=""
              placeholder=""
              required=""
            />
            <input
              type="hidden"
              className="form-control"
              name="enquiry_source"
              defaultValue="Website"
              placeholder=""
              required=""
            />
            <div className="form-group">
              <input
                type="text"
                name="enquiry_name"
                defaultValue=""
                required="required"
                className="form-control"
                placeholder="Enter name*"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email*"
                required="required"
                defaultValue=""
                name="enquiry_email"
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                title="Invalid email address"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                defaultValue=""
                name="enquiry_mobile"
                placeholder="Enter mobile number *"
                pattern="[7-9]{1}[0-9]{9}"
                title="Phone number starting with 7-9 and remaining 9 digit with 0-9"
                required=""
              />
            </div>
            <div className="form-group">
              <select
                name="enquiry_category"
                id="enquiry_category"
                className="form-control chosen-select"
              >
                <option value="">Select Category</option>
                <option value={20}>Restaurants</option>
                <option value={19}>Wedding halls</option>
                <option value={17}>Pet shop</option>
                <option value={16}>Technology</option>
                <option value={15}>Spa and Facial</option>
                <option value={10}>Real Estate</option>
                <option value={8}>Sports</option>
                <option value={7}>Education</option>
                <option value={6}>Electricals</option>
                <option value={5}>Automobiles</option>
                <option value={3}>Transportation</option>
                <option value={2}>Hospitals</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows={3}
                name="enquiry_message"
                placeholder="Enter your query or message"
                defaultValue={""}
              />
            </div>
            <input type="hidden" id="source" />
            <button
              type="submit"
              id="home_slide_enquiry_submit"
              name="home_slide_enquiry_submit"
              className="btn btn-primary"
            >
              Submit Requirements{" "}
            </button>
          </form>
        </div>
      </div>
      <ListYourBusiness />
      <ExpertPopUp />
      <Footer />

      {/* SHARE POPUP */}
      <div className="modal fade sharepop" id="sharepop">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Share now</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <input type="text" defaultValue="" id="shareurl" />
              <div className="shareurltip">
                <button onclick="shareurl()" onmouseout="shareurlout()">
                  <span className="shareurltxt" id="myTooltip">
                    Copy to clipboard
                  </span>
                  Copy text{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
