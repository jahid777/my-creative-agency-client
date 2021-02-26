import React, { useEffect, useState } from 'react';
import ClientsReview from '../ClientsReview/ClientsReview';

const CustomerPic = () => {
    const [customerImg, setCustomerImg] = useState([]);
    useEffect(()=>{
        fetch("https://mighty-hollows-14277.herokuapp.com/getOrderPic")
        .then(res => res.json())
        .then(result =>{
            setCustomerImg(result)
            console.log(result);
        })
      },[])
       // {`https://mighty-hollows-14277.herokuapp.com/${fdPic.file?.name}`} 
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