import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const ServiceList = () => {
  const [allData, setAllData] = useState([]);
  // console.log("here", allData);
  useEffect(() => {
    fetch("http://localhost:5000/getOrderPic")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
     

  const [status, setStatus] = useState("pending");
  console.log(status);
  useEffect(()=>{
    fetch("http://localhost:5000/statusData", {
            method: "POST",          
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({status:status}),
          })
            .then(res => res.json())
            .then(data => {
              if (data) {
                console.log(data);
              }
            });       
  },[status])
 
  return (
    <section className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8 mt-4" style={{ backgroundColor: "#F4F7FC"}}>
        <table class="table mt-5">
          <thead style={{ backgroundColor: "#FFFFFF" }}>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email Id</th>
              <th scope="col">ServiceList</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {allData.map((dt, index) => (
              <tr key={index}>
                <th scope="row">{dt.gmailName}</th>
                <td>{dt.email}</td>
                <td>{dt.title}</td>
                <td>{dt.inputDescription}</td>

                <td>
                  <select onChange={(e)=>{
                     const selectedStatus= e.target.value;
                    setStatus(selectedStatus)
                  }} style={{border:'none', outline:'none',backgroundColor:'#F4F7FC'}}>
                  <option name="pending" value="pending">Pending</option>
                      <option name="done" value="done">Done</option>
                      <option name="onGoing" value="onGoing">On Going</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ServiceList;
