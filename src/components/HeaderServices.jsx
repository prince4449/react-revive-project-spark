import React from 'react'
import { useNavigate } from 'react-router-dom';
import { userRoutes } from '../routes/UserRoutes';

const HeaderServices = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="ban-short-links">
        <ul>
          <li onClick={() => navigate(userRoutes.allCategory)}>
            <div>
              <img
                src="/assets/images/icon/shop.png"
                alt="All Services"
                loading="lazy"
              />
              <h4>All Services</h4>
            </div>
          </li>

          <li onClick={() => navigate(userRoutes.serviceExpert)}>
            <div>
              <img
                src="/assets/images/icon/expert.png"
                alt=""
                loading="lazy"
              />
              <h4>Experts</h4>
            </div>
          </li>
          <li onClick={() => navigate(userRoutes.jobs)}>
            <div>
              <img
                src="/assets/images/icon/employee.png"
                alt=""
                loading="lazy"
              />
              <h4>Jobs</h4>
            </div>
          </li>
          <li onClick={() => navigate(userRoutes.travels)}>
            <div>
              <img
                src="/assets/images/places/icons/hot-air-balloon.png"
                alt=""
                loading="lazy"
              />
              <h4>Travel</h4>
            </div>
          </li>
          {/* <li>
            <div>
              <img
                src="/assets/images/icon/news.png"
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
                src="/assets/images/icon/calendar.png"
                alt=""
                loading="lazy"
              />
              <h4>Events</h4>
              <a href="events.html" className="fclick" />
            </div>
          </li> */}
          <li onClick={() => navigate(userRoutes.products)}>
            <div>
              <img
                src="/assets/images/icon/cart.png"
                alt=""
                loading="lazy"
              />
              <h4>Products</h4>
            </div>
          </li>
          {/* <li>
            <div>
              <img
                src="/assets/images/icon/coupons.png"
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
                src="/assets/images/icon/blog1.png"
                alt=""
                loading="lazy"
              />
              <h4>Blogs</h4>
              <a href="blog-posts.html" className="fclick" />
            </div>
          </li> */}
        </ul>
      </div>
    </>
  );
}

export default HeaderServices