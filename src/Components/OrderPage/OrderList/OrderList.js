import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import img from "../../../images/customer-1.png";
import Sidebar from "../Sidebar/Sidebar";
import "./OrderList.css";
import { app } from "../../Login/Login";

const ServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  //loggedInUser ar email ta session stroge a send korte jate reload korle data ta na haraia jay
  const [email, setEmail] = useState(loggedInUser.email);

  const [orderCard, setOrderCard] = useState([]);
  console.log(orderCard,"here is order cardData");
  useEffect(() => {
    fetch("http://localhost:5000/getOrderCard?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((result) => {
        setOrderCard(result);
      });
  }, [loggedInUser.email]);

  const designImg = {
    height: "80px",
    marginLeft: "10px",
  };

  //getting statusData
  const [statusData, setStatusData] = useState('')
  useEffect(()=>{
      fetch('http://localhost:5000/getStatus')
      .then(res => res.json())
      .then(data =>setStatusData(data))
  },[])
  
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div
        className="col-md-9 card-deck mt-4"
        style={{ backgroundColor: "#F4F7FC" }}
      >
        {orderCard.map((dataInfo, index) => (
          <section
            key={index}
            className="mt-5 col-md-5"
            style={{
              height: "200px",
              width: "400px",
              boxShadow: "2px 2px 3px lightGray",
              marginLeft: "20px",
              backgroundColor: "white",
            }}
          >
            <div>
              <div className="d-flex">
                <div className="mt-3 mb-3">
                  {/* <img style={{height:'80px',marginLeft:'10px'}} src={data.img} alt=""/> */}

                  {/* {dataInfo?.addImage ? (
                    <img
                      src={`data:image/png;base64,${dataInfo?.addImage.img}`}
                      style={designImg}
                      alt=""
                      class="card-img-top"
                    />
                  ) : (
                    <img
                      src={`http://localhost:5000/${dataInfo?.addImage?.img}`}
                      alt="..."
                      style={designImg}
                      class="card-img-top"
                    />
                  )} */}
                </div>
                <div className="mt-5" style={{ marginLeft: "auto" }}>
                  <button className="btn btn-warning">pending</button>
                </div>
              </div>

              <div className="">
                <h5>{dataInfo.title}</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Harum, nihil?
                </p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
