import React from 'react'
import TrendingJobs from '../../components/TrendingJobs';
import ListYourBusiness from '../../components/ListYourBusiness';
import ExpertPopUp from '../../components/ExpertPopUp';
import Footer from '../../components/Footer';
import NarrowHeader from '../../components/NarrowHeader';

const JobDetails = () => {
  return (
    <>
      <section>
        <div className="str ind2-home">
          <div>
      <NarrowHeader/>
          </div>
        </div>
      </section>
      {/* END */}
      {/* START */}
      <section className=" job-det-pg">
        <div className="container">
          <div className="row">
            <div className="job-det-desc">
              {/**/}
              <div className="s1">
                <h4 className="job-lhs-tit">About company</h4>
                <div className="job-comp-pro">
                  <div className="job-comp-img">
                    <img src="images/1.png" alt="" loading="lazy" />
                  </div>
                </div>
                <div className="job-comp-soc">
                  <ul>
                    <li className="ic-web">
                      <a href="www.rn53themes.com" target="_blank">
                        www.rn53themes.com
                      </a>
                    </li>
                    <li className="ic-user">Rn53</li>
                    <li className="ic-eml">jobs@openings.com</li>
                    <li className="ic-pho">459348753</li>
                  </ul>
                </div>
                <div className="job-comp-abo">
                  <p>
                    Remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing
                  </p>
                  <a
                    href="../company-profile.html"
                    target="_blank"
                    className="cta"
                  >
                    Company profile
                  </a>
                </div>
              </div>
              {/**/}
              {/**/}
              <div className="s2">
                <div className="lhs">
                  {/*START*/}
                  <h1>Java Mobile App Developer</h1>
                  {/*END*/}
                  {/*START*/}
                  <div className="desc">
                    <p></p>
                    <h1>Hi title</h1>
                    <p>
                      <strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum has
                      been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing
                    </p>
                    <h2>Hi Sub</h2>
                    <p>
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing
                    </p>
                    <p />
                    <div className="jb-skil-set">
                      <h4>Skill set:</h4>
                      <ul>
                        <li>Good teamwork capabilities</li>
                        <li>Linux</li>
                        <li>GIT</li>
                      </ul>
                    </div>
                  </div>
                  {/*END*/}
                  {/*START*/}
                  <div className="alpply">
                    <span
                      className="cta-app"
                      data-toggle="modal"
                      data-target="#apply"
                    >
                      Apply this job now
                    </span>
                  </div>
                  {/*END*/}
                </div>
              </div>
              {/**/}
              {/**/}
              <div className="s3">
                <div className="rhs">
                  {/*START*/}
                  <div className="job-summ">
                    <h4>Job Summary</h4>
                    <ul>
                      <li>
                        <span>Vacancy :</span> 02
                      </li>
                      <li>
                        <span>Job Type:</span> Part time
                      </li>
                      <li>
                        <span>Experience :</span> 4
                      </li>
                      <li>
                        <span>Job Location :</span> Chicago
                      </li>
                      <li>
                        <span>Salary :</span> $5000
                      </li>
                      <li>
                        <span>Role :</span> Junior
                      </li>
                      <li>
                        <span>Gender:</span> Any
                      </li>
                      <li>
                        <span>Education :</span> Any degree
                      </li>
                      <li>
                        <span>Date :</span> 31, Aug 2022
                      </li>
                      <li>
                        <span>Time :</span>10:30 AM
                      </li>
                      <li>
                        <span>Published on :</span> 02, Aug 2022
                      </li>
                    </ul>
                    <span
                      className="cta-app"
                      data-toggle="modal"
                      data-target="#apply"
                    >
                      Apply now
                    </span>
                  </div>
                  {/*END*/}
                  {/*START*/}
                  <div className="shar">
                    <h4>Share</h4>
                    <span
                      className="share-new-top share-ic-com"
                      data-toggle="modal"
                      data-target="#sharepop"
                    >
                      <i className="material-icons">share</i>
                    </span>
                  </div>
                  {/*END*/}
                </div>
              </div>
              {/**/}
            </div>
            {/*START*/}
            <TrendingJobs />
            {/*END*/}
          </div>
        </div>
      </section>
      {/*END*/}
      {/* START */}
      <ListYourBusiness />
      <ExpertPopUp />
      <Footer />

      {/* SHARE POPUP */}
      <div className="modal fade sharepop" id="sharepop">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Share now</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <input type="text" defaultValue="" id="shareurl" />
              <div className="shareurltip">
                <button onclick="shareurl()" onmouseout="shareurlout()">
                  <span className="shareurltxt" id="myTooltip">
                    Copy to clipboard
                  </span>
                  Copy text
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetails