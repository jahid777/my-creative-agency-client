import React, { useEffect, useState } from 'react';
import ClientsReview from '../ClientsReview/ClientsReview';

const CustomerPic = () => {
    const [customerImg, setCustomerImg] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/getOrderPic")
        .then(res => res.json())
        .then(result =>{
            setCustomerImg(result)
            console.log(result);
        })
      },[])
       // {`http://localhost:5000/${fdPic.file?.name}`} 
      console.log(customerImg);
   
      
    return (
        <div>            
            {
              customerImg.map(fd => <ClientsReview feedBackImg={fd}></ClientsReview>)
            }
        </div>
    );
};

export default CustomerPic;