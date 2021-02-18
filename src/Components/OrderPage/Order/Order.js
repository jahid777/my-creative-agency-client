import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ServiceContext, UserContext } from "../../../App";
import uploadIcon from "../../../images/icons/upload.png";
import Sidebar from "../Sidebar/Sidebar";
import "./Order.css";

const Order = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [serviceCard, setServiceCard] = useContext(ServiceContext);
  const history = useHistory();
  //akhne email ar card ar data ek kore server a post krsi
  const [allData, setAllData] = useState([]);
  console.log(allData);
  console.log(serviceCard,"this is service card");
  

  const handleChange = (e) => {
    const newUserInfo = { ...loggedInUser, ...serviceCard, ...allData };
    newUserInfo[e.target.name] = e.target.value;
    setAllData(newUserInfo);
  };
   const[file, setFile] = useState(null);
   const handleFile = (e) => {
      const newFile = e.target.files[0]
      setFile(newFile)
   };

   const handleSubmit = (e) =>{
    const formData = new FormData()
    formData.append('file', file)
    formData.append('gmailName', allData.gmailName)
    formData.append('inputName', allData.inputName)
    formData.append('email', allData.email)
    formData.append('inputEmail', allData.inputEmail)
    formData.append('photoURL', allData.photoURL)
    formData.append('id', allData.id)
    formData.append('img', allData.img)
    formData.append('inputDescription', allData.inputDescription)
    formData.append('description', allData.description)
    formData.append('title', allData.title)   
    formData.append('price', allData.price)

    console.log(allData,"this is all data");

    fetch('http://localhost:5000/addACustomer', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if(data){
        alert("data submitted") 
       }
    })
    .catch(error => {
      console.error(error)
    })
    
    history.push("/orderList"); 
    e.preventDefault();

   }
  
  return (
    <div className="rightOption row">
      <div className="col-md-3">
         <Sidebar></Sidebar>
      </div>
      <form onSubmit={handleSubmit} className="order-form col-md-9 mt-5" style={{backgroundColor:'#F4F7FC'}}>
        <div className="form-group">
          <input
            type="text"
            name="inputName"
            placeholder="Your name / Company's name"
            id=""
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="inputEmail"
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
            name="inputDescription"
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
                onChange={handleFile}
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


