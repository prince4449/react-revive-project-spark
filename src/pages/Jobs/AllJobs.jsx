import React from "react";
import NarrowHeader from "../../components/NarrowHeader";
import ExpertPopUp from "../../components/ExpertPopUp";
import ListYourBusiness from "../../components/ListYourBusiness";
import Footer from "../../components/Footer";
import { userRoutes } from "../../routes/UserRoutes";
import { useNavigate } from "react-router-dom";

const AllJobs = () => {
          const navigate = useNavigate();

    const jobs = [
      {
        imgSrc: "images/1.png",
        timeAgo: "4 Months ago",
        applicants: "0 Applicants",
        title: "Java Mobile App Developer",
        level: "Junior",
        type: "Part time",
        openings: "02 Openings",
      },
      {
        imgSrc: "jobs/images/jobs/17544customer-review.png",
        timeAgo: "1 Year ago",
        applicants: "2 Applicants",
        title: "Senior SEO Analysis",
        level: "Senior",
        type: "Contract",
        openings: "04 Openings",
      },
      {
        imgSrc: "jobs/images/jobs/69774software-development.png",
        timeAgo: "1 Year ago",
        applicants: "1 Applicant",
        title: "Junior Graphics Designer",
        level: "Junior Software Trainee 1",
        type: "Permanent",
        openings: "04 Openings",
      },
      {
        imgSrc: "jobs/images/jobs/33090office-(2).png",
        timeAgo: "1 Year ago",
        applicants: "1 Applicant",
        title: "Senior Software Engineer II Front End - Illinois",
        level: "Senior Software Engineer",
        type: "Permanent",
        openings: "02 Openings",
      },
    ];
  return (
    <div>
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
            "\n    .hom2-cus-sli ul {\n        position: relative;\n        overflow: hidden;\n        padding: 20px 20px 0\n    }\n\n    .slick-arrow {\n        width: 50px;\n        height: 50px;\n        border-radius: 50px;\n        background: #fff;\n        border: 1px solid #ededed;\n        color: #ffffff03;\n        position: absolute;\n        z-index: 9;\n        top: 38%\n    }\n\n    .slick-arrow:before {\n        content: 'chevron_left';\n        font-size: 27px;\n        top: 4px;\n        left: 9px\n    }\n\n    .slick-prev {\n        left: 14px\n    }\n\n    .slick-next {\n        right: 14px\n    }\n\n    .slick-next:before {\n        content: 'chevron_right';\n        font-size: 27px\n    }\n        ",
        }}
      />
      {/* START */}
      <section>
        <div className="all-listing all-jobs m">
          {/*FILTER ON MOBILE VIEW*/}
          <div className="fil-mob fil-mob-act">
            <h4>
              Listing filters
              <i className="material-icons">filter_list</i>
            </h4>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-3 fil-mob-view">
                {/*- START -*/}
                <div className="filt-com">
                  <div className="job-alert">
                    <h5>Get Personalised Jobs</h5>
                    <p>
                      Tell us what kind of a job you are looking for and stay
                      updated with latest opportunities.
                    </p>
                    <a href="login.html">Register for free</a>
                  </div>
                </div>
                {/*- END -*/}
                {/*- START -*/}
                <div className="filt-com lhs-cate">
                  <h4>Categories</h4>
                  <div className="form-group">
                    <select
                      onchange="jobSubcategoryFilter(this.value);"
                      name="cat_check"
                      id="cat_check"
                      className="cat_check chosen-select "
                    >
                      <option value="">Select Category</option>
                      <option value="aviation">Aviation</option>
                      <option value="arts">Arts</option>
                      <option value="business">Business</option>
                      <option value="education">Education</option>
                      <option value="law-enforcement">Law Enforcement</option>
                      <option value="media">Media</option>
                      <option value="medical">Medical</option>
                      <option value="service-industry">
                        Service Industry:
                      </option>
                      <option value="technology">Technology</option>
                      <option selected="" value="software">
                        Software
                      </option>
                    </select>
                  </div>
                </div>
                {/*- END -*/}
                {/*- START -*/}
                <div className="sub_cat_section filt-com lhs-sub">
                  <h4>Sub category</h4>
                  <ul>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          className="sub_cat_check"
                          name="sub_cat_check"
                          defaultValue={53}
                          id="Animation"
                        />
                        <label htmlFor="Animation">Animation</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          className="sub_cat_check"
                          name="sub_cat_check"
                          defaultValue={52}
                          id="Graphics Designer"
                        />
                        <label htmlFor="Graphics Designer">
                          Graphics Designer
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          className="sub_cat_check"
                          name="sub_cat_check"
                          defaultValue={51}
                          id="Web Developer"
                        />
                        <label htmlFor="Web Developer">Web Developer</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          className="sub_cat_check"
                          name="sub_cat_check"
                          defaultValue={50}
                          id="Software Developer"
                        />
                        <label htmlFor="Software Developer">
                          Software Developer
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          className="sub_cat_check"
                          name="sub_cat_check"
                          defaultValue={49}
                          id="Programmer"
                        />
                        <label htmlFor="Programmer">Programmer</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          className="sub_cat_check"
                          name="sub_cat_check"
                          defaultValue={48}
                          id="Database Administrator"
                        />
                        <label htmlFor="Database Administrator">
                          Database Administrator
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
                          id="Computer Systems Administrator"
                        />
                        <label htmlFor="Computer Systems Administrator">
                          Computer Systems Administrator
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
                          id="Computer Programmer"
                        />
                        <label htmlFor="Computer Programmer">
                          Computer Programmer
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
                          id="Back End Developer"
                        />
                        <label htmlFor="Back End Developer">
                          Back End Developer
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*- END -*/}
                {/*- START -*/}
                <div className="filt-com lhs-sub">
                  <h4>Job Type</h4>
                  <ul>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="job_type"
                          defaultValue={1}
                          className="job_type"
                          id="j1"
                        />
                        <label htmlFor="j1">Permanent</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="job_type"
                          defaultValue={2}
                          className="job_type"
                          id="j2"
                        />
                        <label htmlFor="j2">Contract</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="job_type"
                          defaultValue={3}
                          className="job_type"
                          id="j3"
                        />
                        <label htmlFor="j3">Part time</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="job_type"
                          defaultValue={4}
                          className="job_type"
                          id="j4"
                        />
                        <label htmlFor="j4">Freelance</label>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*- END -*/}
                {/*- START -*/}
                <div className="filt-com lhs-sub">
                  <h4>Job Location</h4>
                  <ul>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="city_check"
                          className="city_check"
                          defaultValue={7}
                          id="city_check7"
                        />
                        <label htmlFor="city_check7">New york</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="city_check"
                          className="city_check"
                          defaultValue={9}
                          id="city_check9"
                        />
                        <label htmlFor="city_check9">Illunois</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="city_check"
                          className="city_check"
                          defaultValue={10}
                          id="city_check10"
                        />
                        <label htmlFor="city_check10">Los Angeles</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="city_check"
                          className="city_check"
                          defaultValue={11}
                          id="city_check11"
                        />
                        <label htmlFor="city_check11">Chicago</label>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*- END -*/}
                {/*- START -*/}
                <div className="filt-com lhs-sub">
                  <h4>Salary</h4>
                  <ul>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="job_salary"
                          defaultValue={1000}
                          className="job_salary"
                          id="sal1"
                        />
                        <label htmlFor="sal1">$ 0 - 1000</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="job_salary"
                          defaultValue={5000}
                          className="job_salary"
                          id="sal2"
                        />
                        <label htmlFor="sal2">$ 1000 - 5000</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="job_salary"
                          defaultValue={15000}
                          className="job_salary"
                          id="sal3"
                        />
                        <label htmlFor="sal3">$ 5000 - 15000</label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox">
                        <input
                          type="checkbox"
                          name="job_salary"
                          defaultValue={15001}
                          className="job_salary"
                          id="sal4"
                        />
                        <label htmlFor="sal4">$ 15000 - above</label>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*- END -*/}
              </div>
              <div className="col-md-9 all-job-total">
                <div className="job-ser-cnt">Showing 04 job(s)</div>
                <div className="job-list">
                  <ul>
                    {jobs.map((job, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          navigate(userRoutes.jobDetails);
                        }}
                      >
                        <div className="job-box">
                          <div className="job-box-img">
                            <img src={job.imgSrc} alt={""} loading="lazy" />
                          </div>
                          <div className="job-days">
                            <span className="day">{job.timeAgo}</span>
                            <span className="apl">{job.applicants}</span>
                          </div>
                          <div className="job-box-con">
                            <h4>{job.title}</h4>
                            <span>{job.level}</span>
                            <span>{job.type}</span>
                            <span>{job.openings}</span>
                          </div>
                          <div className="job-box-apl">
                            <span className="job-box-cta">Apply now</span>
                            <span>More details</span>
                          </div>
                          <a className="job-full-cta" />
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
      <ExpertPopUp />
      {/* END */}
      {/* START */}
      <ListYourBusiness />
      {/* END */}
      <Footer />
    </div>
  );
};

export default AllJobs;
