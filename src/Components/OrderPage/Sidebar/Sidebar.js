import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import orderPic from "../../../images/icons/message-square.png";
import orderListPic from "../../../images/icons/plus 1.png";
import reviewPic from "../../../images/icons/person.png";
import serviceListPic from "../../../images/icons/message-square.png";
import addServicePic from "../../../images/icons/plus 1.png";
import makeAdminPic from "../../../images/icons/person.png";
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setsetLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    fetch("http://localhost:5000/isAdminData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email: loggedInUser.email}),
      })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    return (
        <div className="mt-2 ml-5">
            <img style={{width:'150px'}} src={logo} alt=""/>
            <ul className="mt-4 list-unstyled ml-4">
                <h5>
                <li>
                    <img src={orderPic} className="mr-1" alt=""/>
                    <Link to="/order">Order</Link>
                </li>
                </h5>

                <h5>
                <li  className="mt-4">
                    <img style={{height:'20px'}} src={orderListPic} className="mr-1" alt=""/>
                    <Link to="/orderList">Order List</Link>
                </li>
                </h5>


                <h5>
                <li className="mt-4">
                    <img src={reviewPic} className="mr-1" alt=""/>
                    <Link to="/review">Review</Link>
                </li>
                </h5>


             {isAdmin && <div>                   
                <h5>
                <li className="mt-4">
                    <img src={serviceListPic} className="mr-1" alt=""/>
                    <Link to="/serviceList">Service List</Link>
                </li>
                </h5>
                <h5>
                <li className="mt-4">
                    <img src={addServicePic} style={{height:'20px'}}className="mr-1" alt=""/>
                    <Link to="/addService">Add Service</Link>
                </li>
                </h5>
                <h5>
                <li className="mt-4"> 
                    <img src={makeAdminPic} className="mr-1" alt=""/>
                    <Link to="/makeAdmin">Make Admin</Link>
                </li>
                </h5>
                 </div>}

                
            </ul>
        </div>
    );
};

export default Sidebar;