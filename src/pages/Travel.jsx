import React from "react";
import ListYourBusiness from "../components/ListYourBusiness";
import Footer from "../components/Footer";
import ExpertPopUp from "../components/ExpertPopUp";
import TravelPlaces from "../components/TravelPlaces";
import NarrowHeader from "../components/NarrowHeader";

const Travel = () => {
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
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .hom-head .container {\n        display: none\n    }\n\n    .hom-top {\n        transition: all .5s ease;\n        background: #000;\n        box-shadow: none\n    }\n\n    .hom-head {\n        background: none !important;\n        padding: 0;\n        margin: 0\n    }\n\n    .hom-head .hom-top .container {\n        display: block\n    }\n\n    .hom-top {\n        background: #292c2e;\n    }\n        ",
        }}
      />
      {/* START */}
      <section>
        <div className="plac-hom-ban">
          <div className="container">
            <div className="row">
              <div className="plac-hom-ban-inn">
                <h1>Explore your Travel</h1>
                <p>
                  Plan your travel with
                  <b>Bizbook</b>. Find your place and get the nearest Services
                  &amp; Activities.
                </p>
                <div className="plac-hom-search">
                  <div className="job-sear">
                    <form
                      name="place_filter_form"
                      id="place_filter_form"
                      className="place_filter_form"
                    >
                      <ul>
                        <li className="sr-sea">
                          <select
                            className="chosen-select"
                            id="place-select-search"
                            name="place-select-search"
                          >
                            <option value={0}>Find your place now</option>
                            <option value={6}>Eiffel Tower</option>
                            <option value={5}>Taj Mahal, India</option>
                            <option value={4}>Bondi Beach, Sydney</option>
                            <option value={3}>Sydney Opera House</option>
                            <option value={2}>Goa beach</option>
                            <option value={1}>
                              Niagara Falls North America
                            </option>
                          </select>
                        </li>
                        <li className="sr-btn">
                          <button id="place_filter_submit">
                            <i className="material-icons">search</i>
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*END*/}
      {/*START*/}
      <TravelPlaces />
      {/*END*/}
      <section>
        <div className="container">
          <div className="row">
            <div className="plac-hom-tit plac-hom-tit-ic-sugg">
              <h2>Start adding a new place</h2>
              <p>
                You can send the suggestion or request to the
                <b>Bizbook Admin</b>
              </p>
              <span data-toggle="modal" data-target="#addplacepop">
                Submit a place
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* END */}
      {/* START */}
      <ExpertPopUp />

      <ListYourBusiness />
      <Footer />
    </>
  );
};

export default Travel;
