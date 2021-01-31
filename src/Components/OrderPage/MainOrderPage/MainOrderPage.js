import React, { useState } from "react";
import img from "../../../images/logos/logo.png";
import orderPic from "../../../images/icons/message-square.png";
import orderListPic from "../../../images/icons/plus 1.png";
import reviewPic from "../../../images/icons/person.png";
import Order from "../Order/Order";
import OrderList from "../OrderList/OrderList";
import Review from "../Review/Review";

const MainOrderPage = () => {
    const [order, setOrder] = useState(true);
    const [orderList, setOrderList] = useState(false);
    const  [review, setReview] = useState(false);


    let activeStyle = {
        color: "#207FEE",
        fontWeight: "600",
      };

      const handleOrder = () =>{
        setOrder(true)
        setOrderList(false)
        setReview(false)
      }

      const handleOrderList = () =>{
       setOrderList(true)
       setOrder(false)
       setReview(false)
    }

    const handleReview= () =>{
      setReview(true)
      setOrder(false)
      setOrderList(false)    
    }

  return (
    <section className="row mt-4 ml-5">

      <div className="col-md-2">
        <img style={{ height: "60px" }} src={img} alt="" />
        
         <div className="d-flex mt-5"
          style={order ? activeStyle : { cursor: "pointer" }}
          onClick={(e) => handleOrder(e)}
         >
             <div><img  src={orderPic} alt=""/></div>
             <div  className="ml-2"><p>Order</p></div>
        </div>

        <div className="d-flex"
         style={orderList ? activeStyle : { cursor: "pointer" }}
         onClick={(e) => handleOrderList(e)}
        >
             <div><img style={{height:'20px'}} src={orderListPic} alt=""/></div>
             <div  className="ml-2"><p> Order List</p></div>
        </div>

        <div className="d-flex"
         style={review ? activeStyle : { cursor: "pointer" }}
         onClick={(e) => handleReview(e)}
        >
             <div><img src={reviewPic} alt=""/></div>
             <div  className="ml-2"><p>Review</p></div>
        </div>

     
      </div>




      <div className="col-md-10">


          <h3>{order ? "Make Order" : " "}</h3>
          <div
          style={{
            // border: "25px solid lightGray",
            background: "rgba(222, 255, 237, 1)",
            height: "auto",
            marginRight: "15px",
            borderRadius: "5px",
            display: order ? "block" : "none",
          }}
        >
            <Order></Order>
            </div>


         <h3>{orderList ? "Order List" : " "}</h3>  
          <div
          style={{
            // border: "25px solid lightGray",
            background: "rgba(222, 255, 237, 1)",
            height: "auto",
            marginRight: "15px",
            borderRadius: "5px",
            display: orderList ? "block" : "none",
          }}
          >
              <OrderList></OrderList>
          </div>


          <h3>{review ? "Give a Review" : " "}</h3>   
          <div
          style={{
            // border: "25px solid lightGray",
            background: "rgba(222, 255, 237, 1)",
            height: "auto",
            marginRight: "15px",
            borderRadius: "5px",
            display: review ? "block" : "none",
          }}
        >
            <Review></Review>
            </div>



      </div>
    </section>
  );
};

export default MainOrderPage;
