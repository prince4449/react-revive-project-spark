import React from "react";
import { userRoutes } from "../routes/UserRoutes";
import { useNavigate } from "react-router-dom";

const PremiumJob = () => {
      const navigate = useNavigate();

  const jobs = [
    {
      img: "images/1.png",
      day: "Just now",
      applicants: "10 Applicants",
      type: "Fulltime",
      level: "Senior",
      openings: "5 Openings",
      link: "job-details.html",
    },
    {
      img: "images/1.png",
      day: "Just now",
      applicants: "10 Applicants",
      type: "Fulltime",
      level: "Senior",
      openings: "5 Openings",
      link: "job-details.html",
    },
    {
      img: "images/1.png",
      day: "Just now",
      applicants: "10 Applicants",
      type: "Fulltime",
      level: "Senior",
      openings: "5 Openings",
      link: "job-details.html",
    },
    {
      img: "images/1.png",
      day: "Just now",
      applicants: "10 Applicants",
      type: "Fulltime",
      level: "Senior",
      openings: "5 Openings",
      link: "job-details.html",
    },
    {
      img: "images/1.png",
      day: "Just now",
      applicants: "10 Applicants",
      type: "Fulltime",
      level: "Senior",
      openings: "5 Openings",
      link: "job-details.html",
    },
  ];

  return (
    <section>
      <div className="str hom2-cus hom4-fea">
        <div className="container">
          <div className="row">
            <div className="home-tit">
              <h2>
                <span>Premium Jobs</span>
              </h2>
              <p>
                lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
                fringilla.
              </p>
            </div>
            <div className="hom2-cus-sli job-list">
              <ul className="multiple-items1">
                {jobs.map((job, index) => (
                  <li key={index} onClick={()=>{navigate(userRoutes.jobDetails)}}>
                    <div className="job-box">
                      <div className="job-box-img">
                        <img src={job.img} alt="" loading="lazy" />
                      </div>
                      <div className="job-days">
                        <span className="day">{job.day}</span>
                        <span className="apl">{job.applicants}</span>
                      </div>
                      <div className="job-box-con">
                        <h4 />
                        <span>{job.type}</span>
                        <span>{job.level}</span>
                        <span>{job.openings}</span>
                      </div>
                      <div className="job-box-apl">
                        <span className="job-box-cta">Apply now</span>
                      </div>
                      <a className="job-full-cta"></a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumJob;
