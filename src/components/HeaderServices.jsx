import React from 'react'

const HeaderServices = () => {
  return (
    <>
      <div className="ban-short-links">
        <ul>
          <li>
            <div>
              <img
                src="././src/assets/images/icon/shop.png"
                alt=""
                loading="lazy"
              />
              <h4>All Services</h4>
              <a href="all-category.html" className="fclick" />
            </div>
          </li>
          <li>
            <div>
              <img
                src="./src/assets/images/icon/expert.png"
                alt=""
                loading="lazy"
              />
              <h4>Experts</h4>
              <a href="service-experts/index.html" className="fclick" />
            </div>
          </li>
          <li>
            <div>
              <img
                src="./src/assets/images/icon/employee.png"
                alt=""
                loading="lazy"
              />
              <h4>Jobs</h4>
              <a href="jobs/index.html" className="fclick" />
            </div>
          </li>
          <li>
            <div>
              <img
                src="./src/assets/images/places/icons/hot-air-balloon.png"
                alt=""
                loading="lazy"
              />
              <h4>Travel</h4>
              <a href="places/index.html" className="fclick" />
            </div>
          </li>
          <li>
            <div>
              <img
                src="././src/assets/images/icon/news.png"
                alt=""
                loading="lazy"
              />
              <h4>News</h4>
              <a href="news/index.html" className="fclick" />
            </div>
          </li>
          <li>
            <div>
              <img
                src="./src/assets/images/icon/calendar.png"
                alt=""
                loading="lazy"
              />
              <h4>Events</h4>
              <a href="events.html" className="fclick" />
            </div>
          </li>
          <li>
            <div>
              <img
                src="././src/assets/images/icon/cart.png"
                alt=""
                loading="lazy"
              />
              <h4>Products</h4>
              <a href="products.html" className="fclick" />
            </div>
          </li>
          <li>
            <div>
              <img
                src="./src/assets/images/icon/coupons.png"
                alt=""
                loading="lazy"
              />
              <h4>Coupons</h4>
              <a href="coupons.html" className="fclick" />
            </div>
          </li>
          <li>
            <div>
              <img
                src="./src/assets/images/icon/blog1.png"
                alt=""
                loading="lazy"
              />
              <h4>Blogs</h4>
              <a href="blog-posts.html" className="fclick" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HeaderServices