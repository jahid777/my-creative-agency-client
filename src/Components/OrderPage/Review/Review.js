import React from 'react';

const Review = () => {
    const handleSubmitReview = () =>{

    }
    const handleChangeReview = () => {

    }
    return (
        <div className="rightOption">
      <form onSubmit={handleSubmitReview} className="order-form" action="">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your name / Company's name"
            id=""
            onChange={handleChangeReview}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email address"
            id=""
            onChange={handleChangeReview}
            required
          />

          

          <textarea
            type="text-area"
            name="description"
            placeholder="Enter Description "
            id=""
            onChange={handleChangeReview}
            required
            rows="4"
            cols="28"
            className="order-text-area"
          />
        </div>

        <div className="" style={{ width: " 170px", marginTop:'-20px'}}>
          <input
            className="submit-button "
            type="submit"
            value="Send"
            style={{
              background: "#111430",
              padding: " 0 60px 0 60px",
              width: "170px",
              color:"white"
            }}
          />
        </div>
      </form>
    </div>
    );
};

export default Review;