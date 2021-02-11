import React, { useState } from 'react';
import icon1 from '../../images/icons/service1.png';
import icon2 from '../../images/icons/service2.png';
import icon3 from '../../images/icons/service3.png';
import ServiceData from '../ServiceData/ServiceData';



const allService = [
    {  
         id: 1,
        img: icon1,
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {
        id: 2,
        img: icon2,
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        id: 3,
        img: icon3,
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
]

const Service = () => {
    const [services, setServices] = useState(allService)
    // console.log(services);
    return (
        <section style={{marginTop:'180px'}}>
            <h2 style={{textAlign:'center'}}>Provide awesome <span style={{color:'#7AB259'}}>services</span></h2>

            <div class="card-deck mx-5 my-5 mt-5 row">
            {
                services.map(serviceData => <ServiceData key={serviceData.id} service={serviceData}></ServiceData> )
            }
            </div>

        </section>
    );
};

export default Service;