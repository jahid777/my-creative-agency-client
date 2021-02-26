import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import uploadImg from "../../../images/icons/upload.png";
import { useHistory } from "react-router-dom";

const AddService = () => {
  const history = useHistory();
  const [customerService, setCustomerService] = useState({});
  const [file, setFile] = useState({});
  console.log(customerService,"this is here");
  
  const handleChange = (e) =>{
    const newUserInfo = {...customerService};
    newUserInfo[e.target.name] = e.target.value;
    setCustomerService(newUserInfo);
  }
  const handleFile = (e) =>{
    const newFile = e.target.files[0]
    setFile(newFile)
  }

  const handleSubmit = (e) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('addTitle', customerService.addServiceTitle)
    formData.append('addDescription', customerService.addServiceDescription);

    fetch('https://mighty-hollows-14277.herokuapp.com/addACustomerService', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if(data){
        
       }
    })
    .catch(error => {
      console.error(error)
    })
    alert("data submitted") 
    history.push("/"); 
    e.preventDefault();
  }

  return (
    <section className="row mt-5">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8" style={{ backgroundColor: "#F4F7FC" }}>
        <form className="row mt-5" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label for="title">Service title</label>
            <input type="text" id="title" 
            onBlur={handleChange}
            name="addServiceTitle"
            class="form-control mb-3" />

            <label for="textArea">Description</label>
            <textarea class="form-control" id="textArea" rows="3" name="addServiceDescription" onBlur={handleChange}/>
          </div>
          <div className="col-md-6 mt-2">
          <input
                name="addServiceFile"
                id="upload"
                onChange={handleFile}
                type="file"
                hidden
                accept="image/*"
              />
              <label for="upload" className="upload-design">
                {" "}
                <img className="upload-img" src={uploadImg} alt="" /> Choose
                file
              </label> <br/>
              
                <input type="submit" value="Submit"
                style={{width:'120px'}}
                className="btn btn-primary ml-4 mt-5"/>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddService;
