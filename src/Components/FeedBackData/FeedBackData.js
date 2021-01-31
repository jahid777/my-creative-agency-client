import React from 'react';
import './FeedBackData.css';

const FeedBackData = (props) => {
    const {img, name, title, description} = props.client;
    return (
        <main className="main-section mt-5 mb-2 col-md-3">
            <div>
                <div className="d-flex">
                   <div className="mt-3 mb-3">
                     <img style={{height:'80px',marginLeft:'10px'}} src={img} alt=""/>
                   </div>
                   <div className="mt-4 ml-2">
                       <h4><b>{name}</b> </h4>
                       <h6><b>{title}</b></h6>
                   </div>
                </div>

                 <div className="text-center"> <p>{description}</p></div>
            </div>
        </main>
    );
};

export default FeedBackData;