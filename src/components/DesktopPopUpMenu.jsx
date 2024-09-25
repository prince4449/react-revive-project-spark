import React from 'react'

const DesktopPopUpMenu = () => {
  return (
    <>
      <div className="pop-menu">
        <div className="container">
          <div className="row">
            <i className="material-icons clopme">close</i>
            <div className="pmenu-spri">
              <ul>
                <li>
                  <a href="all-category.html" className="act">
                    <img
                      src="./src/assets/images/icon/shop.png"
                      loading="lazy"
                    />
                    All Services
                  </a>
                </li>
                <li>
                  <a href="service-experts/index.html" className="act">
                    <img
                      src="./src/assets/images/icon/expert.png"
                      loading="lazy"
                    />
                    Service Experts{" "}
                  </a>
                </li>
                <li>
                  <a href="jobs/index.html" className="act">
                    <img
                      src="./src/assets/images/icon/employee.png"
                      loading="lazy"
                    />
                    Jobs{" "}
                  </a>
                </li>
                <li>
                  <a href="places/index.html" className="act">
                    <img
                      src="./src/assets/images/places/icons/hot-air-balloon.png"
                      loading="lazy"
                    />
                    Explore Travel{" "}
                  </a>
                </li>
                <li>
                  <a href="news/index.html">
                    <img
                      src="./src/assets/images/icon/news.png"
                      loading="lazy"
                    />
                    News &amp; Magazines{" "}
                  </a>
                </li>
                <li>
                  <a href="events.html">
                    <img
                      src="./src/assets/images/icon/calendar.png"
                      loading="lazy"
                    />
                    Events{" "}
                  </a>
                </li>
                <li>
                  <a href="products.html">
                    <img
                      src="./src/assets/images/icon/cart.png"
                      loading="lazy"
                    />
                    Products{" "}
                  </a>
                </li>
                <li>
                  <a href="coupons.html">
                    <img
                      src="./src/assets/images/icon/coupons.png"
                      loading="lazy"
                    />
                    Coupon &amp; deals{" "}
                  </a>
                </li>
                <li>
                  <a href="blog-posts.html">
                    <img
                      src="./src/assets/images/icon/blog1.png"
                      loading="lazy"
                    />
                    Blogs{" "}
                  </a>
                </li>
                <li>
                  <a href="community.html">
                    <img src="./src/assets/images/icon/11.png" loading="lazy" />
                    Community{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="pmenu-cat">
              <h4>All Categories</h4>
              <input type="text" id="pg-sear" placeholder="Search category" />
              <ul id="pg-resu">
                <li>
                  <a href="all-listing.html">
                    Spa and Facial -<span>05</span>
                  </a>
                </li>
                <li>
                  <a href="all-listing.html">
                    Wedding halls -<span>00</span>
                  </a>
                </li>
                <li>
                  <a href="all-listing.html">
                    Automobiles -<span>05</span>
                  </a>
                </li>
                <li>
                  <a href="all-listing.html">
                    Restaurants -<span>01</span>
                  </a>
                </li>
                <li>
                  <a href="all-listing.html">
                    Technology -<span>04</span>
                  </a>
                </li>
                <li>
                  <a href="all-listing.html">
                    Pet shop -<span>00</span>
                  </a>
                </li>
                <li>
                  <a href="all-listing.html">
                    Real Estate -<span>05</span>
                  </a>
                </li>
                <li>
                  <a href="all-listing.html">
                    Sports -<span>00</span>
                  </a>
                </li>
                <li>
                  <a href="all-listing.html">
                    Hospitals -<span>06</span>
                  </a>
                </li>
                <li>
                  <a href="all-listing.html">
                    Education -<span>06</span>
                  </a>
                </li>
                <li>
                  <a href="all-listing.html">
                    Transportation -<span>05</span>
                  </a>
                </li>
                <li>
                  <a href="all-listing.html">
                    Electricals -<span>04</span>
                  </a>
                </li>
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
                    <i className="material-icons">font_download</i> Advertise
                    with us{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="pricing-details.html"
                    className="waves-effect waves-light btn-large"
                  >
                    {" "}
                    <i className="material-icons">store</i> Add your business{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesktopPopUpMenu
