import React, { useEffect, useState } from 'react';
import NewServiceData from '../NewServiceData/NewServiceData';

const NewService = () => {
    const [newServiceData, setNewServiceData] = useState([]);
    console.log(newServiceData);
    useEffect(()=>{
        fetch("http://localhost:5000/newService")
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setNewServiceData(result)
        });
    },[])
    return (
        <div class="card-deck mx-5 my-5 mt-5 row">
        {
            newServiceData.map(serviceData => <NewServiceData key={serviceData._id} service={serviceData}></NewServiceData> )
        }
        </div>
    );
};

export default NewService;