import React from 'react';
import img from '../../../images/customer-1.png';
import './OrderList.css';

const ServiceList = () => {
    return (
       <div className="row">
           <section className="mt-5 col-md-5" style={{height:'200px', width:'400px',border:'1px solid red',marginLeft:'20px',backgroundColor:'white'}}>
            <div>
                <div className="d-flex">
                   <div className="mt-3 mb-3">
                     <img style={{height:'80px',marginLeft:'10px'}} src={img} alt=""/>
                   </div>
                   <div className="mt-4 ml-5">
                       <button>submit</button>
                   </div>
                </div>

                 <div className="text-center"> <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nihil?
                 </p></div>
            </div>
        </section>
       </div>
    );
};

export default ServiceList;