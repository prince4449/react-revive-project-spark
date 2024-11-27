import React from 'react'
import HeaderServices from './HeaderServices';

const HomeSearch = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="ban-tit">
            <h1>
              <b>
                Find your{" "}
                <span>
                  Local needs <i />
                </span>
              </b>{" "}
              Restaurants, cafe's, and bars in New york
            </h1>
          </div>
          <div className="ban-search ban-sear-all">
            <form name="filter_form" id="filter_form" className="filter_form">
              <ul>
                <li className="sr-cate">
                  <select
                    onchange="getSearchCategories(this.value);"
                    name="explor_select"
                    id="explor_select"
                    data-placeholder="Select Services"
                    className="chosen-select"
                  >
                    <option value="">Select Services</option>
                    <option value={1}>All Services</option>
                    <option value={2}>Service Experts</option>
                    <option value={3}>Jobs</option>
                    <option value={4}>Explore Travel</option>
                    <option value={5}>News &amp; Magazines</option>
                    <option value={6}>Events</option>
                    <option value={7}>Products</option>
                    <option value={8}>Coupon &amp; deals</option>
                    <option value={9}>Blogs</option>
                  </select>
                </li>
                <li className="sr-cit">
                  <select
                    id="city_check"
                    name="city_check"
                    data-placeholder="Select City"
                    className="chosen-select"
                  >
                    <option value={""}>Select City</option>
                    <option value={48025}>Los Angeles</option>
                    <option value={48026}>Chicago</option>
                    <option value={48027}>Houston</option>
                    <option value={48028}>Phoenix</option>
                    <option value={48024}>New York City</option>
                    <option value={48029}>Philadelphia</option>
                    <option value={48030}>San Antonio</option>
                    <option value={48031}>San Diego</option>
                    <option value={48032}>Dallas</option>
                    <option value={48035}>Illunois city</option>
                  </select>
                </li>
                <li className="sr-nor">
                  <select
                    id="expert-select-search"
                    name="expert-select-search"
                    className="chosen-select"
                  >
                    <option value="">What are you looking for?</option>
                    <option value="Spa and Facial">Spa and Facial</option>
                    <option value="Wedding halls">Wedding halls</option>
                    <option value="Automobiles">Automobiles</option>
                    <option value="Restaurants">Restaurants</option>
                    <option value="Technology">Technology</option>
                    <option value="Pet shop">Pet shop</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Sports">Sports</option>
                    <option value="Hospitals">Hospitals</option>
                    <option value="Education">Education</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Electricals">Electricals</option>
                  </select>
                </li>
                <li className="sr-sea">
                  <input
                    type="text"
                    autoComplete="off"
                    id="select-search"
                    placeholder="What are you looking for?"
                    className="search-field"
                  />
                  <ul id="tser-res" className="tser-res tser-res1">
                    <li>
                      <div>
                        <h4>Online classes for School Students</h4>
                        <span>
                          Schools, university, colleges, online classes, tution
                          centers, distance education..
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
                          New year 2022, event booking, hotel booking and more
                        </span>
                        <a href="event-details.html" />
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="sr-btn">
                  <input
                    type="submit"
                    id="filter_submit"
                    name="filter_submit"
                    defaultValue="Search"
                    className="filter_submit"
                  />
                </li>
              </ul>
            </form>
          </div>
          <HeaderServices />
          <div className="h2-ban-ql">
            <ul>
              <li>
                <div>
                  <img
                    src="/assets/images/icon/listing.png"
                    alt=""
                    loading="lazy"
                  />
                  <h5>
                    <span className="count1">12</span>All Services{" "}
                  </h5>
                  <a href="all-category.html">&nbsp;</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/assets/images/icon/expert.png"
                    alt=""
                    loading="lazy"
                  />
                  <h5>
                    <span className="count1">12</span>Service Experts{" "}
                  </h5>
                  <a href="service-experts/index.html">&nbsp;</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/assets/images/icon/employee.png"
                    alt=""
                    loading="lazy"
                  />
                  <h5>
                    <span className="count1">12</span>Jobs{" "}
                  </h5>
                  <a href="jobs/index.html">&nbsp;</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/assets/images/icon/shop.png"
                    alt=""
                    loading="lazy"
                  />
                  <h5>
                    <span className="count1">07</span>Products{" "}
                  </h5>
                  <a href="products.html">&nbsp;</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/assets/images/icon/event.png"
                    alt=""
                    loading="lazy"
                  />
                  <h5>
                    <span className="count1">09</span>Events{" "}
                  </h5>
                  <a href="events.html">&nbsp;</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/assets/images/icon/coupons.png"
                    alt=""
                    loading="lazy"
                  />
                  <h5>
                    <span className="count1">09</span>Coupons{" "}
                  </h5>
                  <a href="coupons.html">&nbsp;</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/assets/images/icon/blog.png"
                    alt=""
                    loading="lazy"
                  />
                  <h5>
                    <span className="count1">17</span>Blogs{" "}
                  </h5>
                  <a href="blog-posts.html">&nbsp;</a>
                </div>
              </li>
              <li>
                <div>
                  <img
                    src="/assets/images/icon/general.png"
                    alt=""
                    loading="lazy"
                  />
                  <h5>
                    <span className="count1">03</span>Community{" "}
                  </h5>
                  <a href="community.html">&nbsp;</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSearch
