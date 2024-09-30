import React from "react";
import { useNavigate } from "react-router-dom";
import { userRoutes } from "../routes/UserRoutes";

const PopularJobCategory = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Software", jobs: "4 Jobs" },
    { name: "Medical", jobs: "1 Jobs" },
    { name: "Aviation", jobs: "0 Jobs" },
    { name: "Arts", jobs: "0 Jobs" },
    { name: "Business", jobs: "0 Jobs" },
    { name: "Education", jobs: "0 Jobs" },
    { name: "Law Enforcement", jobs: "0 Jobs" },
    { name: "Media", jobs: "0 Jobs" },
    { name: "Service Industry", jobs: "0 Jobs" },
    { name: "Technology", jobs: "0 Jobs" },
  ];

  return (
    <section>
      <div className="jobs-cate">
        <div className="container">
          <div className="row">
            <div className="sub-tit">
              <h2>Popular Categories</h2>
              <p>Find jobs from various domains</p>
            </div>
            <div className="job-cate-main">
              <ul>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navigate(userRoutes.allJobs);
                    }}
                  >
                    <div>
                      <h4>{category.name}</h4>
                      <span>{category.jobs}</span>
                      <a className="fcli" />
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

export default PopularJobCategory;
