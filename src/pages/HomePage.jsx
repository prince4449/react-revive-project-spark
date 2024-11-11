import React from "react";
import AdSlider from "../components/AdSlider";
import ChooseYourPlan from "../components/ChooseYourPlan";
import ExpertPopUp from "../components/ExpertPopUp";
import Footer from "../components/Footer";
import HighlightedCard from "../components/HighlightedCard";
import HomeSearch from "../components/HomeSearch";
import ListYourBusiness from "../components/ListYourBusiness";
import MoreServices from "../components/MoreServices";
import NarrowHeader from "../components/NarrowHeader";
import Services from "../components/Services";
import HowItsWork from "../components/HowItsWork";

const HomePage = () => {
  return (
    <>
      <section>
        <div className="str ind2-home">
          <div
            className="hom-head"
            style={{
              backgroundImage: "url('/assets/images/3261288129ex2.jpg')",
            }}
          >
            <NarrowHeader />
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
                      src="/assets/images/ads/732314414ads2.png"
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
      <ExpertPopUp />
      <ListYourBusiness />
      {/* END */}
      <Footer />
    </>
  );
};

export default HomePage;
