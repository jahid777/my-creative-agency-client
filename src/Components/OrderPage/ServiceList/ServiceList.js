import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const ServiceList = () => {
  const [allData, setAllData] = useState([]);
  console.log("here", allData);
  useEffect(() => {
    fetch("http://localhost:5000/getOrderPic")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
     
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
                  <select style={{border:'none', outline:'none',backgroundColor:'#F4F7FC'}}>
                      <option value="pending">Pending</option>
                      <option value="done">Done</option>
                      <option value="onGoing">On Going</option>
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
