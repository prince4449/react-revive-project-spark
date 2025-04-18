import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRoutes } from "../routes/UserRoutes";
import { Get } from "../Api/api";
import { URL_CONSTANTS } from "../Api/ApiUrl";

const NarrowHeader = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

    const fetchCategories = async () => {
      try {
        const response = await Get(URL_CONSTANTS.getAllCategory);
        console.log("response", response);
        if (response.data?.length > 0) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Error ", error.message);
      }
    };

    useEffect(() => {
      fetchCategories();
    }, [isMenuOpen]);
    console.log("categories", categories, isMenuOpen);
  return (
    <>
      <div className="hom-top">
        <div className="container">
          <div className="row">
            <div className="hom-nav">
              {/* MOBILE MENU */}
              <a
                className="top-log"
                onClick={() => {
                  navigate(userRoutes.home);
                }}
              >
                <img
                  src="/assets/images/179083357bizbook-white.png"
                  style={{ width: 192, height: "auto" }}
                  alt="Home"
                  loading="lazy"
                  className="ic-logo"
                />
              </a>
              <div className="menu" onClick={toggleMenu}>
                <h4>Explore</h4>
              </div>
              <div className={`pop-menu ${isMenuOpen ? "ani" : ""}`}>
                <div className="container">
                  <div className="row">
                    <i className="material-icons clopme" onClick={closeMenu}>
                      close
                    </i>
                    <div className="pmenu-spri">
                      <ul>
                        <li onClick={() => navigate(userRoutes.allCategory)}>
                          <a className="act">
                            <img
                              src="/assets/images/icon/shop.png"
                              loading="lazy"
                            />
                            All Services{" "}
                          </a>
                        </li>
                        <li onClick={() => navigate(userRoutes.serviceExpert)}>
                          <a className="act">
                            <img
                              src="/assets/images/icon/expert.png"
                              loading="lazy"
                            />
                            Service Experts{" "}
                          </a>
                        </li>
                        <li onClick={() => navigate(userRoutes.jobs)}>
                          <a className="act">
                            <img
                              src="/assets/images/icon/employee.png"
                              loading="lazy"
                            />
                            Jobs{" "}
                          </a>
                        </li>
                        <li onClick={() => navigate(userRoutes.travels)}>
                          <a className="act">
                            <img
                              src="/assets/images/places/icons/hot-air-balloon.png"
                              loading="lazy"
                            />
                            Explore Travel{" "}
                          </a>
                        </li>

                        <li onClick={() => navigate(userRoutes.products)}>
                          <a>
                            <img
                              src="/assets/images/icon/cart.png"
                              loading="lazy"
                            />
                            Products{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="pmenu-cat">
                      <h4>All Categories</h4>
                      <input
                        type="text"
                        id="pg-sear"
                        placeholder="Search category"
                      />
                      <ul id="pg-resu">
                        {categories.map((service, index) => (
                          <li
                            onClick={() => {
                              navigate(
                                `${userRoutes.categoryList}?id=${service.id}`
                              );
                              toggleMenu();
                            }}
                          >
                            <a>
                              {service?.name}{" "}
                              <span>
                                {service?.cards_count
                                  .toString()
                                  .padStart(2, "0")}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="dir-home-nav-bot">
                      <ul>
                        <li>
                          A few reasons you’ll love Online Business Directory{" "}
                          <span>Call us on: +01 6214 6548</span>
                        </li>
                        <li>
                          <a
                            href="post-your-ads.html"
                            className="waves-effect waves-light btn-large"
                          >
                            <i className="material-icons">font_download</i>{" "}
                            Advertise with us{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            href="pricing-details.html"
                            className="waves-effect waves-light btn-large"
                          >
                            {" "}
                            <i className="material-icons">store</i> Add your
                            business{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* END MOBILE MENU */}
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
                              Schools, university, colleges, online classes,
                              tution centers, distance education..
                            </span>
                            <a href="listing-details.html" />
                          </div>
                        </li>
                        <li>
                          <div>
                            <h4>Buy Iphone13 Pro now</h4>
                            <span>
                              Iphone 13, 12, 11 and all apple product available
                            </span>
                            <a href="product-details.html" />
                          </div>
                        </li>
                        <li>
                          <div>
                            <h4>Home cleaning services near you</h4>
                            <span>Home cleaning, pet control and more</span>
                            <a href="service-experts/all-experts.html" />
                          </div>
                        </li>
                        <li>
                          <div>
                            <h4>Best AC Service Expert near you</h4>
                            <span>
                              Service expert, ac service, ac service in new york
                            </span>
                            <a href="service-experts/all-experts.html" />
                          </div>
                        </li>
                        <li>
                          <div>
                            <h4>Now easy to buy Villas, Plots and Flats</h4>
                            <span>New york City</span>
                            <a href="all-listing.html" />
                          </div>
                        </li>
                        <li>
                          <div>
                            <h4>Spa Center For Womens</h4>
                            <span>
                              No:2, 4th Avenue, Newyork, USA, Near to Airport
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
                              New year 2022, event booking, hotel booking and
                              more
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
              <ul className="bl">
                <li>
                  <a href="pricing-details.html">Add business</a>
                </li>
                <li>
                  <a href="login.html">Sign in</a>
                </li>
                <li>
                  <a href="login.html?login=register">Create an account</a>
                </li>
              </ul>
              {/* MOBILE MENU */}
              <div className="mob-menu">
                <div className="mob-me-ic">
                  <i className="material-icons">menu</i>
                </div>
                <div className="mob-me-all">
                  <div className="mob-me-clo" onClick={closeMenu}>
                    <i className="material-icons">close</i>
                  </div>
                  <div className="mv-bus">
                    <h4 />
                    <ul>
                      <li>
                        <a href="pricing-details.html">Add business</a>
                      </li>
                      <li>
                        <a href="login.html">Sign in</a>
                      </li>
                      <li>
                        <a href="login.html?login=register">
                          Create an account
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mv-cate">
                    <h4>All Categories</h4>
                    <ul>
                      <li>
                        <a href="all-category.html">Spa and Facial</a>
                      </li>
                      <li>
                        <a href="all-category.html">Wedding Halls</a>
                      </li>
                      <li>
                        <a href="all-category.html">Automobiles</a>
                      </li>
                      <li>
                        <a href="all-category.html">Restaurants</a>
                      </li>
                      <li>
                        <a href="all-category.html">Technology</a>
                      </li>
                      <li>
                        <a href="all-category.html">Pet Shop</a>
                      </li>
                      <li>
                        <a href="all-category.html">Real Estate</a>
                      </li>
                      <li>
                        <a href="all-category.html">Sports</a>
                      </li>
                      <li>
                        <a href="all-category.html">Hospitals</a>
                      </li>
                      <li>
                        <a href="all-category.html">Education</a>
                      </li>
                      <li>
                        <a href="all-category.html">Transportation</a>
                      </li>
                      <li>
                        <a href="all-category.html">Electricals</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END MOBILE MENU */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NarrowHeader;
