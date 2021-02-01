import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const Review = () => {
    const history = useHistory();
    const [reviewData, SetReviewData] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   //input ar data review te creat kortesi
    const handleSubmitReview = (e) =>{
       fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reviewData),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          // alert("data submited");
          // history.push("/eventCard");
        }
        //    history.push('/home') //form ta jate submit hoia registration component a chole jabe
      });
    e.preventDefault();
    alert("data submitted");
    history.push('/')
    }
    const handleChangeReview = (e) => {
      const newUserInfo = {...reviewData}
     newUserInfo[e.target.name] = e.target.value;
     SetReviewData(newUserInfo);    
    }
    return (
        <div className="rightOption">
      <form onSubmit={handleSubmitReview} className="order-form" action="">
        <div className="form-group">
          <input
            type="text"
            name="ReviewName"
            placeholder="Your name / Company's name"
            id=""
            value={loggedInUser.gmailName}
            onChange={handleChangeReview}
            required
          />

          <input
            type="email"
            name="ReviewEmail"
            placeholder="Your email address"
            id=""
            value={loggedInUser.email}
            onChange={handleChangeReview}
            required
          />

          

          <textarea
            type="text-area"
            name="ReviewDescription"
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