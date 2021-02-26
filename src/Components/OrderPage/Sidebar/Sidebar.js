import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import orderPic from "../../../images/icons/message-square.png";
import orderListPic from "../../../images/icons/plus 1.png";
import reviewPic from "../../../images/icons/person.png";
import serviceListPic from "../../../images/icons/message-square.png";
import addServicePic from "../../../images/icons/plus 1.png";
import makeAdminPic from "../../../images/icons/person.png";
import { UserContext } from "../../../App";
import { app } from "../../Login/Login";
import firebase from "firebase/app";


const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  // console.log(isAdmin);

//   const [user, setUser] = useState()

  //ata korsi jate email ta state theke haraia na jay reload dile porer useEffect a state ta dependency set kroe disi ata google method ..sob jaygay ata use korbo loggedInUser jate vanish na hoy reload dile
  useEffect(()=>{
      // if(firebase.apps.length === 0){}
        const unsubscribe = app.auth().onAuthStateChanged(user => {
          setLoggedInUser({email:user.email, photoURL:user.photoURL}); //loggedInUser ar ja ja send korte chay sob akhne dia set kore dibo
        });
        return unsubscribe; 
        
  },[])

  // const getEmail = sessionStorage.getItem('info')
  // const [strogeData, setStroageData] = (getEmail);
  
 

  
  useEffect(()=>{
    fetch(`https://mighty-hollows-14277.herokuapp.com/isAdminData?email=${loggedInUser.email}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.admin === true) {
        setIsAdmin(true);
      }
      if (data.admin === false) {
        setIsAdmin(false);
      }
    });
  },[loggedInUser.email])

  return (
    <div className="mt-2 ml-5">
      <img style={{ width: "150px" }} src={logo} alt="" />
      <ul className="mt-4 list-unstyled ml-4">
        <h5>
          <li>
            <img src={orderPic} className="mr-1" alt="" />
            <Link to="/order">Order</Link>
          </li>
        </h5>
        <h5>
          <li className="mt-4">
            <img
              style={{ height: "20px" }}
              src={orderListPic}
              className="mr-1"
              alt=""
            />
            <Link to="/orderList">Order List</Link>
          </li>
        </h5>
        <h5>
          <li className="mt-4">
            <img src={reviewPic} className="mr-1" alt="" />
            <Link to="/review">Review</Link>
          </li>
        </h5>
        {isAdmin === true ? 
        <div>
          <h5>

          <li className="mt-4">
                <img src={serviceListPic} className="mr-1" alt="" />
                <Link to="/serviceList">Service List</Link>
              </li>
          </h5>
          <h5>
            <li className="mt-4">
              <img
                src={addServicePic}
                style={{ height: "20px" }}
                className="mr-1"
                alt=""
              />
              <Link to="/addService">Add Service</Link>
            </li>
          </h5>
          <h5>
            <li className="mt-4">
              <img src={makeAdminPic} className="mr-1" alt="" />
              <Link to="/makeAdmin">Make Admin</Link>
            </li>
          </h5>
        </div>
         : ""}
      </ul>
    </div>
  );
};

export default Sidebar;



// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../../images/logos/logo.png';
// import orderPic from "../../../images/icons/message-square.png";
// import orderListPic from "../../../images/icons/plus 1.png";
// import reviewPic from "../../../images/icons/person.png";
// import serviceListPic from "../../../images/icons/message-square.png";
// import addServicePic from "../../../images/icons/plus 1.png";
// import makeAdminPic from "../../../images/icons/person.png";
// import { UserContext } from '../../../App';


// const Sidebar = () => {
//     const [loggedInUser, setsetLoggedInUser] = useContext(UserContext);
//     const [isAdmin, setIsAdmin] = useState(true);

//     fetch("https://mighty-hollows-14277.herokuapp.com/isAdminData", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({email: loggedInUser.email}),
//       })
//         .then(res => res.json())
//         .then(data => setIsAdmin(data));
//     return (
//         <div className="mt-2 ml-5">
//             <img style={{width:'150px'}} src={logo} alt=""/>
//             <ul className="mt-4 list-unstyled ml-4">
//                 <h5>
//                 <li>
//                     <img src={orderPic} className="mr-1" alt=""/>
//                     <Link to="/order">Order</Link>
//                 </li>
//                 </h5>

//                 <h5>
//                 <li  className="mt-4">
//                     <img style={{height:'20px'}} src={orderListPic} className="mr-1" alt=""/>
//                     <Link to="/orderList">Order List</Link>
//                 </li>
//                 </h5>


//                 <h5>
//                 <li className="mt-4">
//                     <img src={reviewPic} className="mr-1" alt=""/>
//                     <Link to="/review">Review</Link>
//                 </li>
//                 </h5>


//              {isAdmin && <div>                   
//                 <h5>
//                 <li className="mt-4">
//                     <img src={serviceListPic} className="mr-1" alt=""/>
//                     <Link to="/serviceList">Service List</Link>
//                 </li>
//                 </h5>
//                 <h5>
//                 <li className="mt-4">
//                     <img src={addServicePic} style={{height:'20px'}}className="mr-1" alt=""/>
//                     <Link to="/addService">Add Service</Link>
//                 </li>
//                 </h5>
//                 <h5>
//                 <li className="mt-4"> 
//                     <img src={makeAdminPic} className="mr-1" alt=""/>
//                     <Link to="/makeAdmin">Make Admin</Link>
//                 </li>
//                 </h5>
//                  </div>}

                
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;
