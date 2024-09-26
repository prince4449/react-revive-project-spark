import React from "react";
import Footer from "../components/Footer";
import ListYourBusiness from "../components/ListYourBusiness";
import NarrowHeader from "../components/NarrowHeader";
import ExpertPopUp from "../components/ExpertPopUp";
import { Categoryservices } from "../../StaticData";

const AllCategory = () => {


  return (
    <>
      <section>
        <div className="str ind2-home">
          <div
            className="hom-head"
            style={{ backgroundImage: "url(images/3261288129ex2.jpg)" }}
          >
            <NarrowHeader />
          </div>
        </div>
      </section>{" "}
      {/* END */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        .hom-head {\n            padding: 0;\n            margin: 0;\n        }\n\n        .hom-head:before {\n            display: none\n        }\n\n        .hom-head .hom-top~.container {\n            display: none\n        }\n\n        .carousel-item:before {\n            background: none\n        }\n\n        .home-tit {\n            padding-top: 0\n        }\n\n    ",
        }}
      />
      <section className="abou-pg commun-pg-main">
        <div className="about-ban comunity-ban">
          <h1>All Services</h1>
          <p>Connect with the right Service Experts</p>
          <input
            type="text"
            id="tail-se"
            placeholder="Search sub category here.."
          />
        </div>
      </section>
      {/* START */}
      <section>
        <div className="str all-cate-pg">
          <div className="container">
            <div className="row">
              <div className="sh-all-scat">
                {Categoryservices.map((service, index) => (
                  <ul id="tail-re" key={index}>
                    <li>
                      <div className="sh-all-scat-box">
                        <div className="lhs">
                          <img
                            src={service.image}
                            alt={service.title}
                            loading="lazy"
                          />
                        </div>
                        <div className="rhs">
                          <h4>
                            <a href="all-listing.html">{service.title}</a>
                            <span>
                              {service.count.toString().padStart(2, "0")}
                            </span>
                          </h4>
                          <ol>
                            {service.subcategories.map(
                              (subcategory, subIndex) => (
                                <li key={subIndex}>
                                  <a href={subcategory.link}>
                                    {subcategory.name}{" "}
                                    <span>
                                      {subcategory.count
                                        .toString()
                                        .padStart(2, "0")}
                                    </span>
                                  </a>
                                </li>
                              )
                            )}
                          </ol>
                        </div>
                      </div>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <span className="btn-ser-need-ani">
        <img src="././src/assets/images/icon/help.png" alt="" loading="lazy" />
      </span>
      <ExpertPopUp />
      {/* END */}
      {/* START */}
      <ListYourBusiness />
      {/* END */}
      <Footer />
    </>
  );
};

export default AllCategory;
