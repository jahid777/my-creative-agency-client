import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NewServiceContext, ServiceContext, UserContext } from '../../../../App';

const NewServiceData = ({service}) => {
    
    //  console.log(service)
    const history = useHistory();
   

    const [newServiceCard, setNewServiceCard] = useContext(NewServiceContext);
    console.log(newServiceCard,"this is form new");
    
    const handleServiceCard = (data) => {    
      const singleData = {...data}
      setNewServiceCard(singleData);     
      history.push('/order')
    }
    const designImg ={
      height: '74px',
      width:'74px',
      margin:'15px auto'
    }
    return (
        <div onClick={()=>handleServiceCard(service)} class="card service-card-style col-md-4">
          {
            service.addImage ? <img src={`data:image/png;base64,${service.addImage.img}`} style={designImg} alt="" class="card-img-top"/>
            :<img src={`http://localhost:5000/${service?.addImage?.img}`} alt="..." style={designImg} class="card-img-top"/>
          }
        
        <div class="card-body mb-5">
          <h5 class="card-title text-center">{service.addTitles}</h5>
          <p class="card-text text-center">
            {service.addDescriptions}
          </p>
        </div>
      </div>
    );
};

export default NewServiceData;