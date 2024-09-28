import React from "react";
import HowItsWork from "./../components/HowItsWork";
import ExpertPopUp from "./../components/ExpertPopUp";
import ListYourBusiness from "./../components/ListYourBusiness";
import Footer from "./../components/Footer";
import PremiumJob from "../components/PremiumJob";
import JoinUs from "./../components/JoinUs";
import TrendingJobs from "../components/TrendingJobs";
import NarrowHeader from "./../components/NarrowHeader";
import PopularJobCategory from "./../components/PopularJobCategory";
const Jobs = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .hom-head .container{display:none}\n.hom-top{transition:all .5s ease;background:#000;box-shadow:none}\n.hom-head{background:none!important;padding:0;margin:0}\n.hom-head .hom-top .container{display:block}\n.dmact .top-ser{display:block}\n.hm3-auto-ban{background:url(images/automobile-bg.jpg) no-repeat;background-size:100%;background-position:center right;padding-top:55px}\n.h2-ban-ql{display:table}\n.hm3-auto-ban .rhs .hom-col-req .log-bor{display:block}\n.caro-home{margin-top:90px;float:left;width:100%}\n.carousel-item:before{background:none}\n.ban-tit h1{font-weight:500;color:#fff;text-shadow:none}\n.ban-tit h1 b{font-weight:700;font-size:42px;line-height:49px;padding-bottom:15px;color:#fff;text-shadow:none}\n.h2-ban-ql ul li div{border:1px solid #d9d9da;background:#fff}\n.h2-ban-ql ul li div h5{font-weight:500;color:#383942}\n.h2-ban-ql ul li div h5 span{font-weight:700}\n.home-tit h2{font-weight:400}\n.home-tit h2 span{font-weight:700}\n.h2-ban-ql ul li div:hover{background:#d3f0fb;box-shadow:0 14px 22px -13px #0b1017ba}\n.land-pack-grid-text{position:relative;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease;position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;z-index:2;background:linear-gradient(to top,#000000c7,#00000008)}\n.land-pack-grid-text h4{padding:15px;font-size:20px;font-weight:400;text-align:center;bottom:0;position:absolute;width:100%;text-align:center;color:#fff}\n.land-pack-grid-text h4 .dir-ho-cat{color:#f6f7f9;font-size:11px;position:relative;width:100%;display:inline-block}\n.land-pack-grid-img{background:#333}\n.home-tit{padding-top:60px}\n.hom2-hom-ban{float:left;width:46%;background-size:cover;margin:0 2%;background:#e6f6fb;padding:30px 100px 30px 30px;border-radius:5px;position:relative}\n.hom2-hom-ban:hover a{background:#d6c607}\n.hom2-hom-ban h2{font-weight:600;font-size:22px;padding-bottom:5px}\n.hom2-hom-ban p{font-size:14px}\n.hom2-hom-ban a{background:#21d78d;color:#fff;padding:10px 20px;border-radius:5px;display:inline-block;cursor:pointer;font-size:13px;font-weight:400}\n.hom2-hom-ban p,.hom2-hom-ban h2,.hom2-hom-ban a{position:relative;color:#fff}\n.hom2-hom-ban:before{content:'';position:absolute;width:100%;height:100%;left:0;top:0;right:0;bottom:0;z-index:0;opacity:.8;background:#24C6DC;border-radius:5px}\n.hom2-hom-ban1:before{background-image:linear-gradient(140deg,#0c7ada 0%,#0761af 50%,#0f243e94 75%)}\n.hom2-hom-ban2:before{background-image:linear-gradient(140deg,#768404 0%,#768404 50%,#0f243e94 75%)}\n.hom2-hom-ban1{background-image:url(../images/home2-hand.jpg)}\n.hom2-hom-ban2{background-image:url(../images/home2-work.jpg)}\n.hom2-hom-ban-main{float:left;width:100%;padding-bottom:70px}\n.hom2-cus-sli{float:left;width:100%;padding-top:0}\n.hom2-cus-sli ul li{float:left;width:25%;padding:12px 20px}\n.testmo{width:100%;background:#fff;box-shadow:0 1px 7px -3px #161d2926;border-radius:5px;padding:30px;position:relative}\n.testmo img{width:64px;height:64px;border-radius:50px;object-fit:cover;margin:-80px 0 0}\n.testmo h4{font-size:14px;font-weight:600;margin-bottom:2px;}\n.testmo span{font-size:11px;font-weight:400;color:#727688}\n.testmo span a{font-weight:500;color:#4caf50;display:block;font-size:12px}\n.testmo p{color:#727688;font-size:12px;line-height:20px;margin:0;font-weight:400;height:58px;overflow:hidden;border-top:1px solid #f1eeee;padding-top:15px;margin-top:15px}\n.testmo p:before{content:'format_quote';font-size:21px;margin:-25px 0 0;background:#fff}\n.hom2-cus{background:#f7f8f9;padding-bottom:70px}\n.testmo .rat{padding:2px 2px 2px 10px;display:inline-block;position:absolute;right:30px;top:50px}\n.testmo .rat i{color:#FF9800;font-size:13px;width:7px}\n.hom2-cus-sli ul{position:relative;overflow:hidden;padding:20px 20px 0}\n.slick-arrow{width:50px;height:50px;border-radius:50px;background:#fff;border:1px solid #ededed;color:#ffffff03;position:absolute;z-index:9;top:38%}\n.slick-arrow:before{content:'chevron_left';font-size:27px;top:4px;left:9px}\n.slick-prev{left:14px}\n.slick-next{right:14px}\n.slick-next:before{content:'chevron_right';font-size:27px}\n.hom4-prop-box{padding:0;background:#fff;box-shadow:0 1px 14px -4px #161d2926;border:1px solid #efefef}\n.hom4-prop-box img{width:100%;border-radius:2px;margin:0;height:120px}\n.hom4-prop-box div{padding:25px}\n.hom4-prop-box .rat{position:relative;top:initial;right:initial;padding:2px 2px 2px 0;display:block;margin:0;height:17px;left:-2px}\n.hom4-fea{background:#fff;padding-bottom:40px}\n.hom4-fea .hom2-cus-sli ul li{padding:12px 20px}\n.hom4-fea .home-tit{margin-bottom:0;padding-top:70px}\n        ",
        }}
      />
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
        <div className="all-jobs-ban">
          <div className="container">
            <div className="row">
              <div className="jtit">
                <h1>Find your next job now</h1>
                <p>Over 100,000+ jobs are waiting for you</p>
              </div>
              <br />
              <div className="job-sear">
                <form
                  name="job_filter_form"
                  id="job_filter_form"
                  className="job_filter_form"
                >
                  <ul>
                    <li className="sr-sea">
                      <select
                        className="chosen-select"
                        id="job-select-search"
                        name="serjobs"
                      >
                        <option value={54}>Software</option>
                        <option value={53}>Technology</option>
                        <option value={52}>Service Industry:</option>
                        <option value={51}>Medical</option>
                        <option value={50}>Media</option>
                        <option value={49}>Law Enforcement</option>
                        <option value={48}>Education</option>
                        <option value={47}>Business</option>
                        <option value={46}>Arts</option>
                        <option value={45}>Aviation</option>
                      </select>
                    </li>
                    <li className="sr-loc">
                      <select
                        className="chosen-select"
                        id="job-select-city"
                        name="serjobsloc"
                      >
                        <option value={7}>New york</option>
                        <option value={9}>Illunois</option>
                        <option value={10}>Los Angeles</option>
                        <option value={11}>Chicago</option>
                      </select>
                    </li>
                    <li className="sr-btn">
                      <button id="job_filter_submit">
                        <i className="material-icons">search</i>
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
              <div className="job-pop-tag">
                <a href="all-jobs.html">Software</a>
                <a href="all-jobs.html">Medical</a>
                <a href="all-jobs.html">Aviation</a>
                <a href="all-jobs.html">Arts</a>
                <a href="all-jobs.html">Business</a>
              </div>
              <div className="job-counts">
                <ul>
                  <li>
                    <span className="count1">05</span>
                    <h4>Job Posted</h4>
                  </li>
                  <li>
                    <span className="count1">05</span>
                    <h4>Companies</h4>
                  </li>
                  <li>
                    <span className="count1">04</span>
                    <h4>Employees</h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <PopularJobCategory />
      {/* END */}
      {/* START */}
      <TrendingJobs />
      {/* END */}
      {/* START */}
      <JoinUs />
      {/* END */}
      {/* START */}
      <PremiumJob />
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

export default Jobs;
