import React from "react";

const TrendingJobs = () => {
  const jobs = [
    {
      img: "images/1.png",
      title: "Java Mobile App Developer",
      location: "Chicago",
      posted: "4 Months ago",
      applicants: "0 Applicants",
      type: "Part time",
      level: "Junior",
      openings: "02 Openings",
      salary: "5000K",
      link: "job-details.html",
    },
    {
      img: "images/1.png",
      title: "Junior Doctor Job in Los Angeles",
      location: "Los Angeles",
      posted: "1 Year ago",
      applicants: "1 Applicants",
      type: "Permanent",
      level: "Senior Doctors",
      openings: "02 Openings",
      salary: "5000K",
      link: "job-details.html",
    },
    {
      img: "images/1.png",
      title: "Senior SEO Analyst",
      location: "New York",
      posted: "1 Year ago",
      applicants: "2 Applicants",
      type: "Contract",
      level: "Senior",
      openings: "04 Openings",
      salary: "3500K",
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
                <span>Trending Jobs</span>
              </h2>
              <p>
                lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
                fringilla.
              </p>
            </div>
            <div className="job-tre">
              <ul>
                {jobs.map((job, index) => (
                  <li key={index}>
                    <div className="inn">
                      <div className="jbtre-img">
                        <div className="jbtre-img1">
                          <img src={job.img} alt="" loading="lazy" />
                        </div>
                        <div className="jbtre-img2">
                          <h4>{job.title}</h4>
                          <span>{job.location}</span>
                          <div className="jbtre-days">
                            <span>{job.posted}</span>
                            <span>{job.applicants}</span>
                          </div>
                        </div>
                      </div>
                      <div className="jbtre-con">
                        <span>{job.type}</span>
                        <span>{job.level}</span>
                        <span>{job.openings}</span>
                      </div>
                      <div className="jbtre-sale">
                        <span>Salary</span>
                        <span className="empsal">{job.salary}</span>
                      </div>
                      <div className="jbtre-apl">
                        <span className="job-box-cta">Apply now</span>
                        <span>More details</span>
                      </div>
                      <a href={job.link} className="job-full-cta"></a>
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

export default TrendingJobs;
