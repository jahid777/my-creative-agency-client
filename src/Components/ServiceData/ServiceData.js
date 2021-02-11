import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ServiceContext, UserContext } from "../../App";
import './ServiceData.css';


const ServiceData = (props) => {
  const { img, title, description } = props.service;
  const history = useHistory();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [serviceCard, setServiceCard] = useContext(ServiceContext);
  console.log(serviceCard);
  
  const handleServiceCard = (data) => {
   
    const singleData = {...data}
    setServiceCard(singleData);  
    
    history.push('/order')
  }
  
  return (
    
      <div onClick={()=>handleServiceCard(props.service)} class="card service-card-style col-md-4">
        <img style={{height:'74px',width:'74px',margin:'15px auto'}} src={img} class="card-img-top" alt="..."/>
        <div class="card-body mb-5">
          <h5 class="card-title text-center">{title}</h5>
          <p class="card-text text-center">
            {description}
          </p>
        </div>

      </div>
   
  );
};

export default ServiceData;
