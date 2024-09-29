import React from 'react'
import ListYourBusiness from '../../components/ListYourBusiness';
import Footer from '../../components/Footer';
import ExpertPopUp from '../../components/ExpertPopUp';
import NarrowHeader from '../../components/NarrowHeader';
import { userRoutes } from '../../routes/UserRoutes';
import { useNavigate } from 'react-router-dom';

const CategoryListing = () => {
      const navigate = useNavigate();

    const listings = [
      {
        id: 388,
        name: "Mia Skin Care",
        image: "images/listings/37577pexels-karolina-grabowska-5240337.jpg",
        address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
        phone: "876587675",
        email: "johnitsmes@gmail.com",
        whatsapp: "987654621",
        isOpen: true,
      },
      {
        id: 387,
        name: "Honey 2 Massage Center",
        image: "images/listings/87817pexels-photo-9335961.jpeg",
        address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
        phone: "876587675",
        email: "johnitsmes@gmail.com",
        whatsapp: "987654621",
        isOpen: true,
      },
      {
        id: 386,
        name: "Sophia Massage Center In Chicago",
        image: "images/listings/42814pexels-roman-odintsov-5912192.jpg",
        address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
        phone: "876587675",
        email: "johnitsmes@gmail.com",
        whatsapp: "987654621",
        isOpen: true,
      },
      {
        id: 385,
        name: "Olivia Facials",
        image: "images/listings/69656woman-girl-beauty-mask.jpg",
        address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
        phone: "876587675",
        email: "johnitsmes@gmail.com",
        whatsapp: "987654621",
        isOpen: true,
      },
      {
        id: 384,
        name: "Anna Spa & Massage",
        image: "images/listings/26574pexels-photo-3997981.jpeg",
        address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
        phone: "876587675",
        email: "johnitsmes@gmail.com",
        whatsapp: "987654621",
        isOpen: true,
      },
    ];
  return (
    <>
      {/* START */}
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
        <div className="all-listing all-listing-pg">
          {/*FILTER ON MOBILE VIEW*/}
          <div className="fil-mob fil-mob-act">
            <h4>
              Listing filters <i className="material-icons">filter_list</i>
            </h4>
          </div>
          <div className="all-list-bre">
            <div className="container sec-all-list-bre">
              <div className="row">
                <h1>Spa and Facial</h1>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="all-listing.html">All Category</a>
                  </li>
                  <li>
                    <a href="listing-details.html">Spa and Facial</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3 fil-mob-view">
                <div className="all-filt">
                  <span className="fil-mob-clo">
                    <i className="material-icons">close</i>
                  </span>
                  {/*START*/}
                  <div className="filt-alist-near">
                    <div className="tit">
                      <h4>Top Service Providers</h4>
                    </div>
                    <div className="near-ser-list top-ser-secti-prov">
                      <ul>
                        <li>
                          <div className="near-bx">
                            <div className="ne-1">
                              <img
                                src="images/listings/37577pexels-karolina-grabowska-5240337.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="ne-2">
                              <h5>Mia Skin Care</h5>
                              <p>
                                City:No:2, 4th Avenue, Newyork, USA, Near to
                                Airport
                              </p>
                            </div>
                            <div className="ne-3">
                              <span>5.0</span>
                            </div>
                            <a href="listing-details.html" />
                          </div>
                        </li>
                        <li>
                          <div className="near-bx">
                            <div className="ne-1">
                              <img
                                src="images/listings/87817pexels-photo-9335961.jpeg"
                                loading="lazy"
                              />
                            </div>
                            <div className="ne-2">
                              <h5>Honey 2 Massage Center</h5>
                              <p>
                                City:No:2, 4th Avenue, Newyork, USA, Near to
                                Airport
                              </p>
                            </div>
                            <div className="ne-3">
                              <span>5.0</span>
                            </div>
                            <a href="listing-details.html" />
                          </div>
                        </li>
                        <li>
                          <div className="near-bx">
                            <div className="ne-1">
                              <img
                                src="images/listings/42814pexels-roman-odintsov-5912192.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="ne-2">
                              <h5>Sophia Massage Center In Chicago</h5>
                              <p>
                                City:No:2, 4th Avenue, Newyork, USA, Near to
                                Airport
                              </p>
                            </div>
                            <div className="ne-3">
                              <span>5.0</span>
                            </div>
                            <a href="listing-details.html" />
                          </div>
                        </li>
                        <li>
                          <div className="near-bx">
                            <div className="ne-1">
                              <img
                                src="images/listings/69656woman-girl-beauty-mask.jpg"
                                loading="lazy"
                              />
                            </div>
                            <div className="ne-2">
                              <h5>Olivia Facials</h5>
                              <p>
                                City:No:2, 4th Avenue, Newyork, USA, Near to
                                Airport
                              </p>
                            </div>
                            <div className="ne-3">
                              <span>5.0</span>
                            </div>
                            <a href="listing-details.html" />
                          </div>
                        </li>
                        <li>
                          <div className="near-bx">
                            <div className="ne-1">
                              <img
                                src="images/listings/26574pexels-photo-3997981.jpeg"
                                loading="lazy"
                              />
                            </div>
                            <div className="ne-2">
                              <h5>Anna Spa &amp; Massage</h5>
                              <p>
                                City:No:2, 4th Avenue, Newyork, USA, Near to
                                Airport
                              </p>
                            </div>
                            <div className="ne-3">
                              <span>5.0</span>
                            </div>
                            <a href="listing-details.html" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*END*/}
                  {/*START*/}
                  <div className="filt-com lhs-search">
                    <form>
                      <ul>
                        <li>
                          <input
                            type="text"
                            id="search"
                            placeholder="Search the service"
                          />
                        </li>
                        <li>
                          <input type="submit" defaultValue="" />
                        </li>
                      </ul>
                    </form>
                  </div>
                  {/*END*/}
                  {/*START*/}
                  <div className="filt-com lhs-cate">
                    <h4>Categories</h4>
                    <div className="dropdown">
                      <select
                        onchange="SubcategoryFilter(this.value);"
                        className="cat_check chosen-select"
                        name="cat_check"
                        id="cat_check"
                      >
                        <option value="">Select Category</option>
                        <option selected="" value={15}>
                          Spa and Facial
                        </option>
                        <option value={19}>Wedding halls</option>
                        <option value={5}>Automobiles</option>
                        <option value={20}>Restaurants</option>
                        <option value={16}>Technology</option>
                        <option value={17}>Pet shop</option>
                        <option value={10}>Real Estate</option>
                        <option value={8}>Sports</option>
                        <option value={2}>Hospitals</option>
                        <option value={7}>Education</option>
                        <option value={3}>Transportation</option>
                        <option value={6}>Electricals</option>
                      </select>
                    </div>
                  </div>
                  {/*END*/}
                  {/*START*/}
                  <div className="sub_cat_section filt-com lhs-sub">
                    <h4>Sub category</h4>
                    <ul>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={48}
                            id="Health & Beauty"
                          />
                          <label htmlFor="Health & Beauty">
                            Health &amp; Beauty
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={47}
                            id="Health &Beauty"
                          />
                          <label htmlFor="Health &Beauty">
                            Health &amp;Beauty
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={46}
                            id="Hospitals& Diagnostic Supply"
                          />
                          <label htmlFor="Hospitals& Diagnostic Supply">
                            Hospitals&amp; Diagnostic Supply
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={45}
                            id="Gifts &Crafts"
                          />
                          <label htmlFor="Gifts &Crafts">
                            Gifts &amp;Crafts
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={44}
                            id="Gifts & Crafts"
                          />
                          <label htmlFor="Gifts & Crafts">
                            Gifts &amp; Crafts
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={38}
                            id="Face & Body"
                          />
                          <label htmlFor="Face & Body">Face &amp; Body</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={9}
                            id="Massage"
                          />
                          <label htmlFor="Massage">Massage</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            className="sub_cat_check"
                            name="sub_cat_check"
                            defaultValue={8}
                            id="Facial"
                          />
                          <label htmlFor="Facial">Facial</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*END*/}
                  {/*START*/}
                  <div className="filt-com lhs-featu">
                    <h4>Features</h4>
                    <ul>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="feature_check"
                            defaultValue="trusted"
                            className="feature_check"
                            id="trusted"
                          />
                          <label htmlFor="trusted">
                            Trusted services provider
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="feature_check"
                            defaultValue="premium"
                            className="feature_check"
                            id="premium"
                          />
                          <label htmlFor="premium">Premium services</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="feature_check"
                            defaultValue="verified"
                            className="feature_check"
                            id="verified"
                          />
                          <label htmlFor="verified">Verified services</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="feature_check"
                            defaultValue="trending"
                            className="feature_check"
                            id="trending"
                          />
                          <label htmlFor="trending">Trending services</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="feature_check"
                            defaultValue="offers"
                            className="feature_check"
                            id="offers"
                          />
                          <label htmlFor="offers">Offers and discounts</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="feature_check"
                            defaultValue="latest"
                            className="feature_check"
                            id="latest"
                          />
                          <label htmlFor="latest">Latest updated</label>
                        </div>
                      </li>
                      <li>
                        <div className="chbox">
                          <input
                            type="checkbox"
                            name="feature_check"
                            defaultValue="likes"
                            className="feature_check"
                            id="likes"
                          />
                          <label htmlFor="likes">Most likes</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*END*/}
                  {/*START*/}
                  <div className="filt-com lhs-cate">
                    <h4>Cities</h4>
                    <div className="dropdown">
                      <select
                        id="city_check"
                        name="city_check"
                        className="chosen-select"
                      >
                        <option value="">Select City</option>
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
                    </div>
                  </div>
                  {/*START*/}
                  <div className="filt-com lhs-rati">
                    <h4>Ratings</h4>
                    <ul>
                      <li>
                        <div className="rbbox">
                          <input
                            type="radio"
                            defaultValue={5}
                            name="rating_check"
                            className="rating_check"
                            id="rb1"
                          />
                          <label htmlFor="rb1">
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="rbbox">
                          <input
                            type="radio"
                            defaultValue={4}
                            name="rating_check"
                            className="rating_check"
                            id="rb2"
                          />
                          <label htmlFor="rb2">
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star_border</i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="rbbox">
                          <input
                            type="radio"
                            defaultValue={3}
                            name="rating_check"
                            className="rating_check"
                            id="rb3"
                          />
                          <label htmlFor="rb3">
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star_border</i>
                            <i className="material-icons">star_border</i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="rbbox">
                          <input
                            type="radio"
                            defaultValue={2}
                            name="rating_check"
                            className="rating_check"
                            id="rb4"
                          />
                          <label htmlFor="rb4">
                            <i className="material-icons">star</i>
                            <i className="material-icons">star</i>
                            <i className="material-icons">star_border</i>
                            <i className="material-icons">star_border</i>
                            <i className="material-icons">star_border</i>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="rbbox">
                          <input
                            type="radio"
                            defaultValue={1}
                            name="rating_check"
                            className="rating_check"
                            id="rb5"
                          />
                          <label htmlFor="rb5">
                            <i className="material-icons">star</i>
                            <i className="material-icons">star_border</i>
                            <i className="material-icons">star_border</i>
                            <i className="material-icons">star_border</i>
                            <i className="material-icons">star_border</i>
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*END*/}
                  {/*START*/}
                  <div className="filt-com lhs-ads">
                    <ul>
                      <li>
                        <div className="ads-box">
                          <a href="">
                            <span>Ad</span>
                            <img
                              src="images/ads/ads1.jpg"
                              alt=""
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*END*/}
                  <div className="all-list-filt-form">
                    <div className="tit">
                      <h3>
                        What service do you need?{" "}
                        <span>BizBook will help you</span>
                      </h3>
                    </div>
                    <div className="hom-col-req">
                      <div
                        id="home_slide_enq_success"
                        className="log"
                        style={{ display: "none" }}
                      >
                        <p>Your Enquiry Is Submitted Successfully!!!</p>
                      </div>
                      <div
                        id="home_slide_enq_fail"
                        className="log"
                        style={{ display: "none" }}
                      >
                        <p>Oops!! Something Went Wrong Try Later!!!</p>
                      </div>
                      <div
                        id="home_slide_enq_same"
                        className="log"
                        style={{ display: "none" }}
                      >
                        <p>You cannot make enquiry on your own listing!!</p>
                      </div>
                      <form
                        name="home_slide_enquiry_form"
                        id="home_slide_enquiry_form"
                        method="post"
                        encType="multipart/form-data"
                      >
                        <input
                          type="hidden"
                          className="form-control"
                          name="listing_id"
                          defaultValue={0}
                          placeholder=""
                          required=""
                        />
                        <input
                          type="hidden"
                          className="form-control"
                          name="listing_user_id"
                          defaultValue={0}
                          placeholder=""
                          required=""
                        />
                        <input
                          type="hidden"
                          className="form-control"
                          name="enquiry_sender_id"
                          defaultValue=""
                          placeholder=""
                          required=""
                        />
                        <input
                          type="hidden"
                          className="form-control"
                          name="enquiry_source"
                          defaultValue="Website"
                          placeholder=""
                          required=""
                        />
                        <div className="form-group">
                          <input
                            type="text"
                            name="enquiry_name"
                            defaultValue=""
                            required="required"
                            className="form-control"
                            placeholder="Enter name*"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email*"
                            required="required"
                            defaultValue=""
                            name="enquiry_email"
                            pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                            title="Invalid email address"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue=""
                            name="enquiry_mobile"
                            placeholder="Enter mobile number *"
                            pattern="[7-9]{1}[0-9]{9}"
                            title="Phone number starting with 7-9 and remaining 9 digit with 0-9"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows={3}
                            name="enquiry_message"
                            placeholder="Enter your query or message"
                            defaultValue={""}
                          />
                        </div>
                        <input type="hidden" id="source" />
                        <button
                          type="submit"
                          id="home_slide_enquiry_submit"
                          name="home_slide_enquiry_submit"
                          className="btn btn-primary"
                        >
                          Submit Requirements{" "}
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* END */}
                </div>
              </div>
              <div className="col-md-9">
                <div className="f2">
                  <div className="vfilter">
                    <i className="material-icons ic1 " title="Grid view">
                      apps
                    </i>
                    <i className="material-icons ic2 act" title="List view">
                      format_list_bulleted
                    </i>
                    <i className="material-icons ic3" title="Map view">
                      location_on
                    </i>
                  </div>
                </div>
                {/* LISTING INN FILTER */}
                <div className="list-filt-v2">
                  <ul>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="lfv2-all"
                          className="lfv2-all"
                          defaultValue={1}
                          id="lfv2-all"
                          defaultChecked="checked"
                        />
                        <label htmlFor="lfv2-all">All</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="lfv2-pop"
                          className="lfv2-pop"
                          id="lfv2-pop"
                        />
                        <label htmlFor="lfv2-pop">Popular</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="lfv2-op"
                          className="lfv2-op"
                          id="lfv2-op"
                        />
                        <label htmlFor="lfv2-op">Open</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="lfv2-tru"
                          className="lfv2-tru"
                          id="lfv2-tru"
                        />
                        <label htmlFor="lfv2-tru">Verified</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="lfv2-near"
                          className="lfv2-near"
                          id="lfv2-near"
                        />
                        <label htmlFor="lfv2-near">Nearby</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="lfv2-off"
                          className="lfv2-off"
                          id="lfv2-off"
                        />
                        <label htmlFor="lfv2-off">Offers</label>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* END LISTING INN FILTER */}
                {/*ADS*/}
                <div className="ban-ati-com ads-all-list">
                  <a href="">
                    <span>Ad</span>
                    <img src="images/ads/59040boat-728x90.png" loading="lazy" />
                  </a>
                </div>
                {/*ADS*/}
                {/* Loader Image */}
                <div id="loadingmessage" style={{ display: "none" }}>
                  <div id="loadingmessage1">&nbsp;</div>
                </div>
                {/* Loader Image */}
                <div className="all-list-sh all-listing-total">
                  <ul className="all-list-wrapper">
                    {listings.map((listing) => (
                      <li key={listing.id} className="all-list-item">
                        <div className="eve-box" onClick={()=>{navigate(userRoutes.CategoryDetails);}}>
                          {/* LISTING IMAGE */}
                          <div className="al-img">
                            <span className="open-stat">
                              {listing.isOpen ? "Open" : "Closed"}
                            </span>
                            <a>
                              <img
                                src={listing.image}
                                loading="lazy"
                                alt={listing.name}
                              />
                            </a>
                          </div>
                          {/* LISTING NAME */}
                          <div className="list-con">
                            <h4>
                              <a>{listing.name}</a>
                              <i className="li-veri">
                                <img
                                  src="images/icon/svg/verified.png"
                                  title="Verified"
                                  loading="lazy"
                                  alt="Verified"
                                />
                              </i>
                            </h4>
                            <div className="list-rat-all">
                              <span>No Reviews Yet</span>
                            </div>
                            <span className="addr">{listing.address}</span>
                            <span className="pho">{listing.phone}</span>
                            <span className="mail">{listing.email}</span>
                            <div className="links">
                              <a href="login?src=all-listing.html">Get quote</a>
                              <a>view more</a>
                              <a href={`Tel:${listing.phone}`}>Call Now</a>
                              <a
                                href={`https://wa.me/${listing.whatsapp}`}
                                className="what"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                WhatsApp
                              </a>
                            </div>
                          </div>
                          {/* SAVE */}
                          <span
                            className="enq-sav"
                            data-toggle="tooltip"
                            title="Click to like this listing"
                          >
                            <i
                              className={`l-like Animatedheartfunc${listing.id}`}
                              data-for={0}
                              data-section={1}
                              data-num={328}
                              data-item=""
                              data-id={listing.id}
                            >
                              <img
                                src="images/icon/svg/like.svg"
                                loading="lazy"
                                alt="Like"
                              />
                            </i>
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* ADS */}
                  <div className="ban-ati-com ads-all-list">
                    <a href="https://themeforest.net/item/bizbook-directory-listings-template/25391222">
                      <span>Ad</span>
                      <img
                        src="images/ads/32207ads.png"
                        loading="lazy"
                        alt="Ad"
                      />
                    </a>
                  </div>
                  {/* Pagination */}
                  <div id="all-list-pagination-container" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <section>
        <div className="list-map">
          <span
            id="map-error-box"
            className="map-error-box"
            style={{ display: "none" }}
          >
            !!! Oops No Listing with the Selected Category
          </span>
          <div className="list-map-resu map-view" id="map-view" />
          <div className="list-map-filt">
            <div className="map-fi-com map-fi-view">
              <div className="vfilter">
                <i className="material-icons ic-map-2" title="List view">
                  format_list_bulleted
                </i>
                <i className="material-icons ic-map-3 act" title="Map view">
                  layers
                </i>
              </div>
            </div>
            <div className="map-fi-com map-fi-cate">
              <select
                onchange="SubcategoryFilter1(this.value);"
                name="cat_check"
                id="cat_check1"
                className="cat_check chosen-select "
              >
                <option value="">Select Category</option>
                <option selected="" value="spa-and-facial">
                  Spa and Facial
                </option>
                <option value="wedding-halls">Wedding halls</option>
                <option value="automobiles">Automobiles</option>
                <option value="restaurants">Restaurants</option>
                <option value="technology">Technology</option>
                <option value="pet-shop">Pet shop</option>
                <option value="real-estate">Real Estate</option>
                <option value="sports">Sports</option>
                <option value="hospitals">Hospitals</option>
                <option value="education">Education</option>
                <option value="transportation">Transportation</option>
                <option value="electricals">Electricals</option>
              </select>
            </div>
            <div className="sub_cat_section1 map-fi-com map-fi-subcate">
              <select
                name="sub_cat_check"
                id="sub_cat_check1"
                className="sub_cat_check"
              >
                <option value="">Select Sub Category</option>
                <option value={48}>Health &amp; Beauty</option>
                <option value={47}>Health &amp;Beauty</option>
                <option value={46}>Hospitals&amp; Diagnostic Supply</option>
                <option value={45}>Gifts &amp;Crafts</option>
                <option value={44}>Gifts &amp; Crafts</option>
                <option value={38}>Face &amp; Body</option>
                <option value={9}>Massage</option>
                <option value={8}>Facial</option>
              </select>
            </div>
            <div className="map-fi-com map-fi-fea">
              <select id="city_check1" name="city_check">
                <option value="">Select City</option>
                <option value={48024}>New York City</option>
                <option value={48025}>Los Angeles</option>
                <option value={48028}>Phoenix</option>
                <option value={48029}>Philadelphia</option>
                <option value={48030}>San Antonio</option>
                <option value={48031}>San Diego</option>
                <option value={48032}>Dallas</option>
                <option value={48024}>New York City</option>
                <option value={48028}>Phoenix</option>
                <option value={48031}>San Diego</option>
                <option value={48025}>Los Angeles</option>
                <option value={48026}>Chicago</option>
                <option value={48027}>Houston</option>
                <option value={48028}>Phoenix</option>
                <option value={48025}>Los Angeles</option>
                <option value={48026}>Chicago</option>
                <option value={48027}>Houston</option>
                <option value={48028}>Phoenix</option>
                <option value={48029}>Philadelphia</option>
                <option value={48030}>San Antonio</option>
                <option value={48031}>San Diego</option>
                <option value={48032}>Dallas</option>
                <option value={48025}>Los Angeles</option>
                <option value={48028}>Phoenix</option>
                <option value={48026}>Chicago</option>
                <option value={48027}>Houston</option>
                <option value={48028}>Phoenix</option>
                <option value={48035}>Illunois city</option>
              </select>
              {/*END*/}
            </div>
            <div className="map-fi-com map-fi-fea">
              <select id="feature_check1" name="feature_check">
                <option value="">Select Feature</option>
                <option value="trusted">Trusted services provider</option>
                <option value="premium">Premium services</option>
                <option value="verified">Verified services</option>
                <option value="trending">Trending services</option>
                <option value="offers">Offers and discounts</option>
                <option value="latest">Latest updated</option>
                <option value="likes">Most likes</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <section>
        <div className="list-foot">
          <div className="container sec-all-foot-cat-info">
            <div className="row">
              <div className="list-foot-abo">
                <div className="list-rat-all">
                  <h4>Overall rating</h4>
                  <b>0 Ratings</b>
                </div>
                <h2>Spa and Facial</h2>
              </div>
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
}

export default CategoryListing