import React from 'react'

const ExpertPopUp = () => {
  return (
    <>
      <div className="ani-quo">
        <div className="ani-q1">
          <h4>What you looking for?</h4>
          <p>We connect you to service experts.</p>
          <span>Get experts</span>
        </div>
        <div className="ani-q2">
          <img src="././src/assets/images/quote.png" alt="" loading="lazy" />
        </div>
      </div>
      {/* END */}
      {/* START */}
      <span className="btn-ser-need-ani">
        <img src="././src/assets/images/icon/help.png" alt="" loading="lazy" />
      </span>
      <div className="ani-quo-form">
        <i className="material-icons ani-req-clo">close</i>
        <div className="tit">
          <h3>
            What service do you need? <span>BizBook will help you</span>
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
              <select
                name="enquiry_category"
                id="enquiry_category"
                className="form-control chosen-select"
              >
                <option value="">Select Category</option>
                <option value={20}>Restaurants</option>
                <option value={19}>Wedding halls</option>
                <option value={17}>Pet shop</option>
                <option value={16}>Technology</option>
                <option value={15}>Spa and Facial</option>
                <option value={10}>Real Estate</option>
                <option value={8}>Sports</option>
                <option value={7}>Education</option>
                <option value={6}>Electricals</option>
                <option value={5}>Automobiles</option>
                <option value={3}>Transportation</option>
                <option value={2}>Hospitals</option>
              </select>
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
      </div>{" "}
    </>
  );
}

export default ExpertPopUp