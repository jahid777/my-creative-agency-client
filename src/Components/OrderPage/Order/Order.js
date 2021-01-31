import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ServiceContext, UserContext } from "../../../App";
import uploadIcon from "../../../images/icons/upload.png";
import "./Order.css";

const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [serviceCard, setServiceCard] = useContext(ServiceContext);
  const history = useHistory();
  //akhne email ar card ar data ek kore server a post krsi
  const [allData, setAllData] = useState([]);

  const handleSubmit = (e) => {
    fetch("http://localhost:5000/addCourse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
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
    history.push("/orderList");
  };

  const handleChange = (e) => {
    const newUserInfo = { ...loggedInUser, ...serviceCard };
    newUserInfo[e.target.name] = e.target.value;
    setAllData(newUserInfo);
  };
  
  const setFile = () => {};
  
  return (
    <div className="rightOption">
      <form onSubmit={handleSubmit} className="order-form" action="">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your name / Company's name"
            id=""
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email address"
            id=""
            onChange={handleChange}
            defaultValue={loggedInUser.email}
            required
          />

          <input
            type="text"
            name="selectedServiceName"
            placeholder="selected Service Name "
            id=""
            onChange={handleChange}
            defaultValue={serviceCard.title}
            required
          />

          <textarea
            type="text-area"
            name="description"
            placeholder="Enter Description "
            id=""
            onChange={handleChange}
            required
            rows="4"
            cols="28"
            className="order-text-area"
          />

          <div className="form-row inline ">
            <div className=" form-group col mr-2">
              <input
                type="number"
                name="price"
                className=""
                placeholder="Price"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col ml-2 ">
              <input
                name="file"
                id="upload"
                type="file"
                hidden
                accept="image/*"
              />
              <label for="upload" className="upload-design">
                {" "}
                <img className="upload-img" src={uploadIcon} alt="" /> Choose
                file
              </label>
            </div>
          </div>
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

export default Order;


