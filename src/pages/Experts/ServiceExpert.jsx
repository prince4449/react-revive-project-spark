import React from "react";
import ExpertPopUp from "../../components/ExpertPopUp";
import ListYourBusiness from "../../components/ListYourBusiness";
import Footer from "../../components/Footer";
import NarrowHeader from "../../components/NarrowHeader";
import JoinUs from "../../components/JoinUs";
import { reviews, services } from "../../../StaticData";
import HowItsWork from "../../components/HowItsWork";
import { useNavigate } from "react-router-dom";
import { userRoutes } from "../../routes/UserRoutes";

const ServiceExpert = () => {
    const navigate = useNavigate();


  return (
    <>
      <section>
        <div className="str ind2-home">
          <NarrowHeader />
        </div>
      </section>
      {/* END */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .hom-head .container {\n            display: none\n        }\n\n        .hom-top {\n            transition: all .5s ease;\n            background: #3d05c6;\n            box-shadow: none\n        }\n\n        .hom-head {\n            background: none !important;\n            padding: 0;\n            margin: 0\n        }\n\n        .hom-head .hom-top .container {\n            display: block\n        }\n\n        .dmact .top-ser {\n            display: block\n        }\n\n        .hm3-auto-ban {\n            background: url(images/automobile-bg.jpg) no-repeat;\n            background-size: 100%;\n            background-position: center right;\n            padding-top: 55px\n        }\n\n        .h2-ban-ql {\n            display: table\n        }\n\n        .hm3-auto-ban .rhs .hom-col-req .log-bor {\n            display: block\n        }\n\n        .caro-home {\n            margin-top: 90px;\n            float: left;\n            width: 100%\n        }\n\n        .carousel-item:before {\n            background: none\n        }\n\n        .ban-tit h1 {\n            font-weight: 500;\n            color: #fff;\n            text-shadow: none\n        }\n\n        .ban-tit h1 b {\n            font-weight: 700;\n            font-size: 42px;\n            line-height: 49px;\n            padding-bottom: 15px;\n            color: #fff;\n            text-shadow: none\n        }\n\n        .h2-ban-ql ul li div {\n            border: 1px solid #d9d9da;\n            background: #fff\n        }\n\n        .h2-ban-ql ul li div h5 {\n            font-weight: 500;\n            color: #383942\n        }\n\n        .h2-ban-ql ul li div h5 span {\n            font-weight: 700\n        }\n\n        .home-tit h2 {\n            font-weight: 400;\n        }\n\n        .home-tit h2 span {\n            font-weight: 700;\n            font-size: 32px;\n            color: #4a5e95;\n            position: relative;\n            z-index: 2\n        }\n\n        .home-tit h2 span:before {\n            content: '';\n            position: absolute;\n            width: 40%;\n            height: 6px;\n            background: #ff83bc;\n            bottom: 1px;\n            left: 30%;\n            z-index: -1;\n            transform: skew(51deg, 0deg)\n        }\n\n        .home-tit p {\n            color: #4e6d8d\n        }\n\n        .all-jobs-ban {\n            margin-bottom: 0\n        }\n\n        .job-sear ul li.sr-btn button {\n            background: #8cc152\n        }\n\n        .all-jobs-ban h1 {\n            font-size: 58px;\n            color: #fff;\n            text-shadow: 0 1px 3px #333333f7\n        }\n\n        .job-sear ul li.sr-sea:before {\n            content: 'people'\n        }\n\n        .all-jobs-ban p {\n            color: #fff\n        }\n\n        .all-jobs-ban {\n            background: url(../images/ex2.jpg) #45c027 no-repeat;\n            background-size: cover\n        }\n\n        .all-jobs-ban:before {\n            content: '';\n            position: absolute;\n            background: #000000ba;\n            left: 0;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        .h2-ban-ql ul li div:hover {\n            background: #d3f0fb;\n            box-shadow: 0 14px 22px -13px #0b1017ba\n        }\n\n        .land-pack-grid-text {\n            position: relative;\n            -webkit-transition: all .5s ease;\n            -moz-transition: all .5s ease;\n            -o-transition: all .5s ease;\n            transition: all .5s ease;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            width: 100%;\n            height: 100%;\n            z-index: 2;\n            background: linear-gradient(to top, #000000c7, #00000008)\n        }\n\n        .land-pack-grid-text h4 {\n            padding: 15px;\n            font-size: 20px;\n            font-weight: 400;\n            text-align: center;\n            bottom: 0;\n            position: absolute;\n            width: 100%;\n            text-align: center;\n            color: #fff\n        }\n\n        .land-pack-grid-text h4 .dir-ho-cat {\n            color: #f6f7f9;\n            font-size: 11px;\n            position: relative;\n            width: 100%;\n            display: inline-block\n        }\n\n        .land-pack-grid-img {\n            background: #333\n        }\n\n        .home-tit {\n            margin-bottom: 20px;\n            padding-top: 60px\n        }\n\n        .hom2-hom-ban {\n            float: left;\n            width: 46%;\n            background-size: cover;\n            margin: 0 2%;\n            background: #e6f6fb;\n            padding: 30px 100px 30px 30px;\n            border-radius: 5px;\n            position: relative;\n        }\n\n        .hom2-hom-ban:hover a {\n            background: #d6c607\n        }\n\n        .hom2-hom-ban h2 {\n            font-weight: 600;\n            font-size: 22px;\n            padding-bottom: 5px\n        }\n\n        .hom2-hom-ban p {\n            font-size: 14px\n        }\n\n        .hom2-hom-ban a {\n            background: #21d78d;\n            color: #fff;\n            padding: 10px 20px;\n            border-radius: 5px;\n            display: inline-block;\n            cursor: pointer;\n            font-size: 13px;\n            font-weight: 400\n        }\n\n        .hom2-hom-ban p,\n        .hom2-hom-ban h2,\n        .hom2-hom-ban a {\n            position: relative;\n            color: #fff\n        }\n\n        .hom2-hom-ban:before {\n            content: '';\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            left: 0;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            z-index: 0;\n            opacity: .8;\n            background: #24C6DC;\n            border-radius: 5px\n        }\n\n        .hom2-hom-ban1:before {\n            background-image: linear-gradient(140deg, #0c7ada 0%, #0761af 50%, #0f243e94 75%)\n        }\n\n        .hom2-hom-ban2:before {\n            background-image: linear-gradient(140deg, #768404 0%, #768404 50%, #0f243e94 75%)\n        }\n\n        .hom2-hom-ban1 {\n            background-image: url(../images/home2-hand.jpg)\n        }\n\n        .hom2-hom-ban2 {\n            background-image: url(../images/home2-work.jpg)\n        }\n\n        .hom2-hom-ban-main {\n            float: left;\n            width: 100%;\n            padding-bottom: 70px\n        }\n\n        .hom2-cus-sli {\n            float: left;\n            width: 100%\n        }\n\n        .hom2-cus-sli ul li {\n            float: left;\n            width: 25%;\n            padding: 12px 20px\n        }\n\n        .testmo {\n            width: 100%;\n            background: #fff;\n            box-shadow: 0 1px 7px -3px #161d2926;\n            border-radius: 5px;\n            padding: 30px;\n            position: relative\n        }\n\n        .testmo img {\n            width: 64px;\n            height: 64px;\n            border-radius: 50px;\n            object-fit: cover;\n            margin: -80px 0 0\n        }\n\n        .testmo h4 {\n            font-size: 14px;\n            font-weight: 600;\n            margin-bottom: 2px;\n        }\n\n        .testmo span {\n            font-size: 11px;\n            font-weight: 400;\n            color: #727688\n        }\n\n        .testmo span a {\n            font-weight: 500;\n            color: #4caf50;\n            display: block;\n            font-size: 12px\n        }\n\n        .testmo p {\n            color: #727688;\n            font-size: 12px;\n            line-height: 20px;\n            margin: 0;\n            font-weight: 400;\n            height: 58px;\n            overflow: hidden;\n            border-top: 1px solid #f1eeee;\n            padding-top: 15px;\n            margin-top: 15px\n        }\n\n        .testmo p:before {\n            content: 'format_quote';\n            font-size: 21px;\n            margin: -25px 0 0;\n            background: #fff\n        }\n\n        .hom2-cus {\n            background: #f7f8f9;\n            padding-bottom: 70px\n        }\n\n        .testmo .rat {\n            padding: 2px 2px 2px 10px;\n            display: inline-block;\n            position: absolute;\n            right: 30px;\n            top: 50px\n        }\n\n        .testmo .rat i {\n            color: #FF9800;\n            font-size: 13px;\n            width: 7px\n        }\n\n        .hom2-cus-sli ul {\n            position: relative;\n            overflow: hidden;\n            padding: 20px 20px 0\n        }\n\n        .slick-arrow {\n            width: 50px;\n            height: 50px;\n            border-radius: 50px;\n            background: #fff;\n            border: 1px solid #ededed;\n            color: #ffffff03;\n            position: absolute;\n            z-index: 9;\n            top: 38%\n        }\n\n        .slick-arrow:before {\n            content: 'chevron_left';\n            font-size: 27px;\n            top: 4px;\n            left: 9px\n        }\n\n        .slick-prev {\n            left: 14px\n        }\n\n        .slick-next {\n            right: 14px\n        }\n\n        .slick-next:before {\n            content: 'chevron_right';\n            font-size: 27px\n        }\n\n        .hom4-prop-box {\n            padding: 0;\n            background: #fff;\n            box-shadow: 0 1px 14px -4px #161d2926;\n            border: 1px solid #efefef\n        }\n\n        .hom4-prop-box img {\n            width: 100%;\n            border-radius: 2px;\n            margin: 0;\n            height: 120px\n        }\n\n        .hom4-prop-box div {\n            padding: 25px\n        }\n\n        .hom4-prop-box .rat {\n            position: relative;\n            top: initial;\n            right: initial;\n            padding: 2px 2px 2px 0;\n            display: block;\n            margin: 0;\n            height: 17px;\n            left: -2px\n        }\n\n        .hom4-fea {\n            background: #fff;\n            padding-bottom: 40px;\n            float: left;\n            width: 100%\n        }\n\n        .str {\n            float: left;\n            width: 100%\n        }\n\n        .hom4-fea .hom2-cus-sli ul li {\n            padding: 12px 20px\n        }\n\n        .hom4-fea .home-tit {\n            margin-bottom: 0;\n            padding-top: 70px\n        }\n\n        @media screen and (max-width: 767px) {\n            .land-pack-grid-text h4 {\n                font-size: 16px\n            }\n        }\n    ",
        }}
      />
      {/* START */}
      <section>
        <div className="all-jobs-ban">
          <div className="container">
            <div className="row">
              <div className="jtit">
                <h1>Find Service Experts</h1>
                <p>
                  We make it easy to hire the right professional for your Home
                </p>
              </div>
              <br />
              <div className="job-sear">
                <form
                  name="expert_filter_form"
                  id="expert_filter_form"
                  className="expert_filter_form"
                >
                  <ul>
                    <li className="sr-sea">
                      <select
                        className="chosen-select"
                        id="expert-select-search1"
                        name="expert-select-search"
                      >
                        <option value="Plumbers">Plumbers</option>
                        <option value="LED Tv Services">LED Tv Services</option>
                        <option value="AC Services">AC Services</option>
                        <option value="Electrical service">
                          Electrical service
                        </option>
                        <option value="Car service">Car service</option>
                        <option value="House Cleaning service">
                          House Cleaning service
                        </option>
                        <option value="Bike service">Bike service</option>
                        <option value="Pest control service">
                          Pest control service
                        </option>
                        <option value="Home restoration services">
                          Home restoration services
                        </option>
                        <option value="House Decoration Services">
                          House Decoration Services
                        </option>
                        <option value="Laptop service">Laptop service</option>
                      </select>
                    </li>
                    <li className="sr-loc">
                      <select
                        className="chosen-select"
                        id="job-select-city"
                        name="serjobsloc"
                      >
                        <option value={1}>Los Angeles</option>
                        <option value={2}>Chicago</option>
                        <option value={4}>New york</option>
                        <option value={7}>Phoenix</option>
                        <option value={8}>Dallas</option>
                      </select>
                    </li>
                    <li className="sr-btn">
                      <button id="expert_filter_submit">
                        <i className="material-icons">search</i>
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
              <div className="job-pop-tag">
                <a href="service-experts-profile.html">AC Services</a>
                <a href="service-experts-profile.html">LED Tv Services</a>
                <a href="service-experts-profile.html">Car service</a>
                <a href="service-experts-profile.html">Electrical service</a>
                <a href="service-experts-profile.html">Plumbers</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <section>
        <div className="str">
          <div className="container">
            <div className="row">
              <div className="home-tit">
                <h2>
                  <span>All Services</span>
                </h2>
                <p>
                  lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
                  fringilla.
                </p>
              </div>
              <div className="land-pack">
                <ul>
                  {services.map((service, index) => (
                    <li key={index} onClick={()=>{navigate(userRoutes.expertList)}}>
                      <div className="land-pack-grid">
                        <div className="land-pack-grid-img">
                          <img
                            src={service.imgSrc}
                            alt={service.title}
                            loading="lazy"
                          />
                        </div>
                        <div className="land-pack-grid-text">
                          <h4>
                            {service.title}
                            <span className="dir-ho-cat">
                              Experts {service.experts}
                            </span>
                          </h4>
                        </div>
                        <a className="land-pack-grid-btn">
                          View all experts
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <JoinUs />
      {/* END */}
      {/* START */}
      <section>
        <div className="str hom2-cus">
          <div className="container">
            <div className="row">
              <div className="home-tit">
                <h2>
                  <span>Our user reviews</span>
                </h2>
                <p>
                  We connect with targeted customers for greater business
                  conversion
                </p>
              </div>
              <div className="hom2-cus-sli">
                <ul className="multiple-items">
                  {reviews.map((review, index) => (
                    <li key={index}>
                      <div className="testmo">
                        <img
                          src={review.imgSrc}
                          alt={review.reviewer}
                          loading="lazy"
                        />
                        <h4>{review.reviewer}</h4>
                        <span>
                          Written a review to{" "}
                          <a href={review.reviewLink}>{review.reviewFor}</a>
                        </span>
                        <label className="rat">
                          {[...Array(review.rating)].map((_, i) => (
                            <i key={i} className="material-icons">
                              star
                            </i>
                          ))}
                        </label>
                        <p>{review.platform}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <HowItsWork />
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
                      src="../images/ads/732314414ads2.png"
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
      <ExpertPopUp />
      {/* END */}
      {/* START */}
      <ListYourBusiness />
      {/* END */}
      <Footer />
    </>
  );
};

export default ServiceExpert;
