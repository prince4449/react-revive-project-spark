import React from 'react'

const MobilePopUpMenu = () => {
  return (
    <>
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
      {/*MOBILE MENU*/}
      <div className="mob-menu">
        <div className="mob-me-ic">
          <i className="material-icons">menu</i>
        </div>
        <div className="mob-me-all">
          <div className="mob-me-clo">
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
                <a href="login.html?login=register">Create an account</a>
              </li>
            </ul>
          </div>
          <div className="mv-cate">
            <h4>All Categories</h4>
            <ul>
              <li>
                <a href="all-listing.html">Spa and Facial</a>
              </li>
              <li>
                <a href="all-listing.html">Wedding halls</a>
              </li>
              <li>
                <a href="all-listing.html">Automobiles</a>
              </li>
              <li>
                <a href="all-listing.html">Restaurants</a>
              </li>
              <li>
                <a href="all-listing.html">Technology</a>
              </li>
              <li>
                <a href="all-listing.html">Pet shop</a>
              </li>
              <li>
                <a href="all-listing.html">Real Estate</a>
              </li>
              <li>
                <a href="all-listing.html">Sports</a>
              </li>
              <li>
                <a href="all-listing.html">Hospitals</a>
              </li>
              <li>
                <a href="all-listing.html">Education</a>
              </li>
              <li>
                <a href="all-listing.html">Transportation</a>
              </li>
              <li>
                <a href="all-listing.html">Electricals</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobilePopUpMenu