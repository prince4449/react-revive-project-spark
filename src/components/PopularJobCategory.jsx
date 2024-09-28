import React from "react";

const PopularJobCategory = () => {
  const categories = [
    { name: "Software", jobs: "4 Jobs", link: "all-jobs.html" },
    { name: "Medical", jobs: "1 Jobs", link: "all-jobs.html" },
    { name: "Aviation", jobs: "0 Jobs", link: "all-jobs.html" },
    { name: "Arts", jobs: "0 Jobs", link: "all-jobs.html" },
    { name: "Business", jobs: "0 Jobs", link: "all-jobs.html" },
    { name: "Education", jobs: "0 Jobs", link: "all-jobs.html" },
    { name: "Law Enforcement", jobs: "0 Jobs", link: "all-jobs.html" },
    { name: "Media", jobs: "0 Jobs", link: "all-jobs.html" },
    { name: "Service Industry", jobs: "0 Jobs", link: "all-jobs.html" },
    { name: "Technology", jobs: "0 Jobs", link: "all-jobs.html" },
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
                  <li key={index}>
                    <div>
                      <h4>{category.name}</h4>
                      <span>{category.jobs}</span>
                      <a href={category.link} className="fcli" />
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
