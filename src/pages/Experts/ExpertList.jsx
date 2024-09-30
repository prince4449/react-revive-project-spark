import React from 'react'
import NarrowHeader from '../../components/NarrowHeader';
import ListYourBusiness from '../../components/ListYourBusiness';
import ExpertPopUp from '../../components/ExpertPopUp';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { userRoutes } from '../../routes/UserRoutes';

const ExpertList = () => {
    const navigate = useNavigate();

    const jobs = [
      {
        imgSrc: "././src/assets/images/services/1.jpg",
        rating: 4.0,
        name: "Richflayer",
        servicesDone: 32,
        experience: 10,
        verified: true,
        profileLink: "service-experts-profile.html",
      },
      {
        imgSrc: "././src/assets/images/services/2.jpeg",
        rating: 4.2,
        name: "David",
        servicesDone: 12,
        experience: 3,
        verified: true,
        profileLink: "service-experts-profile.html",
      },
      {
        imgSrc: "././src/assets/images/services/1.jpg",
        rating: 4.0,
        name: "Richflayer",
        servicesDone: 32,
        experience: 10,
        verified: true,
        profileLink: "service-experts-profile.html",
      },
      {
        imgSrc: "././src/assets/images/services/2.jpeg",
        rating: 4.2,
        name: "David",
        servicesDone: 12,
        experience: 3,
        verified: true,
        profileLink: "service-experts-profile.html",
      },
      {
        imgSrc: "././src/assets/images/services/1.jpg",
        rating: 4.0,
        name: "Richflayer",
        servicesDone: 32,
        experience: 10,
        verified: true,
        profileLink: "service-experts-profile.html",
      },
      {
        imgSrc: "././src/assets/images/services/2.jpeg",
        rating: 4.2,
        name: "David",
        servicesDone: 12,
        experience: 3,
        verified: true,
        profileLink: "service-experts-profile.html",
      },
      {
        imgSrc: "././src/assets/images/services/1.jpg",
        rating: 4.0,
        name: "Richflayer",
        servicesDone: 32,
        experience: 10,
        verified: true,
        profileLink: "service-experts-profile.html",
      },
      {
        imgSrc: "././src/assets/images/services/2.jpeg",
        rating: 4.2,
        name: "David",
        servicesDone: 12,
        experience: 3,
        verified: true,
        profileLink: "service-experts-profile.html",
      },
      // Add more job data here
      // ...
    ];
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
      {/* START */}
      <section>
        <div className="all-listing all-jobs all-serexp">
          {/*FILTER ON MOBILE VIEW*/}
          <div className="fil-mob fil-mob-act">
            <h4>
              Listing filters <i className="material-icons">filter_list</i>
            </h4>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3 fil-mob-view">
                {/*- START -*/}
                <div className="filt-com">
                  <div className="job-alert">
                    <h5>Are looking for Service Expert?</h5>
                    <p>We will help you to arrage best Service Expert.</p>
                    <a href="#" data-toggle="modal" data-target="#allexpfrm">
                      Send your queries
                    </a>
                  </div>
                </div>
                {/*- END -*/}
                {/*- START -*/}
                <div className="filt-com lhs-cate">
                  <h4>Categories</h4>
                  <div className="form-group">
                    <select
                      name="cat_check"
                      id="cat_check"
                      className="cat_check chosen-select"
                    >
                      <option value="">Select Category</option>
                      <option selected="" value="plumbers">
                        Plumbers
                      </option>
                      <option value="led-tv-services">LED Tv Services</option>
                      <option value="ac-services">AC Services</option>
                      <option value="electrical-service">
                        Electrical service
                      </option>
                      <option value="car-service">Car service</option>
                      <option value="house-cleaning-service">
                        House Cleaning service
                      </option>
                      <option value="bike-service">Bike service</option>
                      <option value="pest-control-service">
                        Pest control service
                      </option>
                      <option value="home-restoration-services">
                        Home restoration services
                      </option>
                      <option value="house-decoration-services">
                        House Decoration Services
                      </option>
                      <option value="laptop-service">Laptop service</option>
                    </select>
                  </div>
                </div>
                {/*- END -*/}
                {/*- START -*/}
                <div className="filt-com lhs-loc">
                  <h4>Location</h4>
                  <div className="form-group">
                    <select
                      className="city_check chosen-select"
                      name="city_check"
                      id="city_check"
                    >
                      <option value="">Select City</option>
                      <option value={1}>Los Angeles</option>
                      <option value={2}>Chicago</option>
                      <option value={4}>New york</option>
                      <option value={7}>Phoenix</option>
                      <option value={8}>Dallas</option>
                    </select>
                  </div>
                </div>
                {/*- END -*/}
                {/*- START -*/}
                <div className="filt-com lhs-rati lhs-avail">
                  <h4>Availability</h4>
                  <ul>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={3}
                          name="expert_avail"
                          className="availability_check"
                          id="avail1"
                          defaultChecked=""
                        />
                        <label htmlFor="avail1">All</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={0}
                          name="expert_avail"
                          className="availability_check"
                          id="avail2"
                          defaultChecked=""
                        />
                        <label htmlFor="avail2">Available</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={1}
                          name="expert_avail"
                          className="availability_check"
                          id="avail3"
                        />
                        <label htmlFor="avail3">Busy</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={2}
                          name="expert_avail"
                          className="availability_check"
                          id="avail4"
                        />
                        <label htmlFor="avail4">Closed today</label>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*- END -*/}
                {/*- START -*/}
                <div className="filt-com lhs-rati lhs-ver">
                  <h4>Verified</h4>
                  <ul>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={1}
                          name="expert_veri"
                          className="expert_veri"
                          id="exver1"
                          defaultChecked=""
                        />
                        <label htmlFor="exver1">All</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={2}
                          name="expert_veri"
                          className="expert_veri"
                          id="exver2"
                        />
                        <label htmlFor="exver2">Verified experts</label>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*- END -*/}
                {/*- START -*/}
                <div className="filt-com lhs-rati">
                  <h4>Rating</h4>
                  <ul>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={0}
                          name="expert_rat"
                          className="rating_check"
                          id="exrat6"
                          defaultChecked=""
                        />
                        <label htmlFor="exrat6">All</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={5}
                          name="expert_rat"
                          className="rating_check"
                          id="exrat1"
                        />
                        <label htmlFor="exrat1">5 Star</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={4}
                          name="expert_rat"
                          className="rating_check"
                          id="exrat2"
                        />
                        <label htmlFor="exrat2">4 Star</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={3}
                          name="expert_rat"
                          className="rating_check"
                          id="exrat3"
                        />
                        <label htmlFor="exrat3">3 Star</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={2}
                          name="expert_rat"
                          className="rating_check"
                          id="exrat4"
                        />
                        <label htmlFor="exrat4">2 Star</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={1}
                          name="expert_rat"
                          className="rating_check"
                          id="exrat5"
                        />
                        <label htmlFor="exrat5">1 Star</label>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*- END -*/}
                {/*- START -*/}
                <div className="filt-com lhs-rati lhs-ver">
                  <h4>Services Done</h4>
                  <ul>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={0}
                          name="expert_ser_cou"
                          className="expert_ser_cou"
                          id="exsercou1"
                          defaultChecked=""
                        />
                        <label htmlFor="exsercou1">All</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={2}
                          name="expert_ser_cou"
                          className="expert_ser_cou"
                          id="exsercou2"
                        />
                        <label htmlFor="exsercou2">High - Low</label>
                      </div>
                    </li>
                    <li>
                      <div className="rbbox">
                        <input
                          type="radio"
                          defaultValue={1}
                          name="expert_ser_cou"
                          className="expert_ser_cou"
                          id="exsercou3"
                        />
                        <label htmlFor="exsercou3">Low - High</label>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*- END -*/}
              </div>
              <div className="col-md-9">
                <div className="job-ser-cnt">Showing 03 Service Experts</div>
                <div className="job-list">
                  <ul>
                    {jobs.map((job, index) => (
                      <li key={index}>
                        <div className="job-box">
                          <div className="job-box-img">
                            <img
                              src={job.imgSrc}
                              alt={job.name}
                              loading="lazy"
                            />
                          </div>
                          <div
                            className="ser-exp-ave"
                            title="User currently available"
                          >
                            <span className="ser-avail-yes" />
                          </div>
                          <div className="job-days">
                            <span className="ver">
                              {job.verified && (
                                <i
                                  className="material-icons"
                                  title="Verified expert"
                                >
                                  verified_user
                                </i>
                              )}
                            </span>
                            <span className="rat">{job.rating}</span>
                          </div>
                          <div className="job-box-con">
                            <h4>{job.name}</h4>
                            <span>{job.servicesDone} Services Done</span>
                            <span>{job.experience} years Exp.</span>
                          </div>
                          <div className="job-box-apl">
                            <span
                              className="job-box-cta"
                              data-toggle="modal"
                              data-target="#allexpfrm"
                              onClick={()=>{navigate(userRoutes.expertProfile)}}
                            >
                              Contact me
                            </span>
                            <a
                            href='#'
                              className="serexp-cta-more"
                            >
                              More details
                            </a>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ListYourBusiness />
      <ExpertPopUp />
      <Footer />
    </>
  );
}

export default ExpertList