import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import img from '../../images/logos/google.png';

const ClientsReview = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);
    //this is for rivew
    const [feedBacks, setFeedBacks] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/feedBackCard")
        .then(res => res.json())
        .then(result =>{
            setFeedBacks(result)
        })
      },[])
      // console.log(feedBacks);
    //   //feedBackPic form server

     

      // const [feedBackPic, setFeedBackPic] = useState([])
      // useEffect(()=>{
      //     fetch("http://localhost:5000/getOrderPic")
      //     .then(res => res.json())
      //     .then(result =>{
      //         setFeedBackPic(result)
      //     })
      //   },[])
      //    // {`http://localhost:5000/${fdPic.file?.name}`} 
      //   console.log(feedBackPic);

    return (
        
        <main>
          <div className="row" style={{justifyContent:'center'}}>
          {
            feedBacks.map(fdData => (
                <div  className="main-section mt-5 mb-2 col-md-3">
                <div className="d-flex">
                   <div className="mt-3 mb-3">
                     <img style={{height:'80px',marginLeft:'10px'}} src={img} alt=""/>
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




