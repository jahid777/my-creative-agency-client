import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ServiceContext, UserContext } from "../../App";
import './ServiceData.css';


const ServiceData = ({service}) => {
  console.log(service,"this is the service data");
  // const {title, description,addImage } = props.service;
  const history = useHistory();
  console.log(service);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [serviceCard, setServiceCard] = useContext(ServiceContext);
  
  
  const handleServiceCard = (data) => {  
    const singleData = {...data}
    setServiceCard(singleData);     
    history.push('/order');
    console.log(singleData,"this is the single data");
  }
  const designImg ={
    height: '74px',
    width:'74px',
    margin:'15px auto'
  }
  
  return (   
      <div onClick={()=>handleServiceCard(service)} class="card service-card-style col-md-4">
        
        {
            service?.addImage ? <img src={`data:image/png;base64,${service?.addImage.img}`} style={designImg} alt="" class="card-img-top"/>
            :<img src={`http://localhost:5000/${service?.addImage?.img}`} alt="..." style={designImg} class="card-img-top"/>
          }
        <div class="card-body mb-5">
          <h5 class="card-title text-center">{service.title}</h5>
          <p class="card-text text-center">
            {service.description}
          </p>
        </div>

      </div>
   
  );
};

export default ServiceData;
