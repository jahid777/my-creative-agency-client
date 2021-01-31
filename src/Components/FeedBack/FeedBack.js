import React, { useState } from "react";
import client1 from '../../images/customer-1.png';
import client2 from '../../images/customer-2.png';
import client3 from '../../images/customer-3.png';
import FeedBackData from "../FeedBackData/FeedBackData";

const allClient = [
  {
    img: client1,
    name: "Nash Patrik",
    title: "CEO Manpal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat"
  },
  {
    img: client2,
    name: "JACK",
    title: "CEO Manpal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat"
  },
  {
    img: client3,
    name: "MIKE",
    title: "CEO Manpal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat"
  },
];

const FeedBack = () => {
   const [clients, setClients] = useState(allClient);
//    console.log(clients);
  return (
    <section className="mt-5">
      <h2 className="text-center">
        Clients <span style={{ color: "#7AB259" }}>Feedback</span>
      </h2>
        
        <div className="row" style={{justifyContent:'center'}}>
        {
            clients.map(clientData => <FeedBackData key={clientData.name} client={clientData}></FeedBackData> )
        }
        </div>
    </section>
  );
};

export default FeedBack;
