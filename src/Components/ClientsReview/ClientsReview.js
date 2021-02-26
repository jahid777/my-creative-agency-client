import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import img from '../../images/logos/google.png';

const ClientsReview = () => {
 
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);
    //this is for rivew
    const [feedBacks, setFeedBacks] = useState([]);
    useEffect(()=>{
        fetch("https://mighty-hollows-14277.herokuapp.com/feedBackCard")
        .then(res => res.json())
        .then(result =>{
            setFeedBacks(result)
        })
      },[])
      // console.log(feedBacks);

    return (
        
        <main>
          <div className="row" style={{justifyContent:'center'}}>
          {
            feedBacks.map(fdData => (
                <div  className="main-section mt-5 mb-2 col-md-3">
                <div className="d-flex">
                   <div className="mt-3 mb-3">
                     <img style={{height:'80px',marginLeft:'10px'}} src={fdData?.photoURL} className="rounded-circle" alt=""/>
                   </div>
                   <div className="mt-4 ml-2">
                       <h4><b>{fdData.ReviewName}</b> </h4>
                       <h6><b>CEO,USA</b></h6>
                   </div>
                </div>

                 <div className="text-center"> <p>{fdData.ReviewDescription}</p></div>
            </div>  
              ))
       }
       </div> 
    </main>
    );
};

export default ClientsReview;




