import React from 'react';

const LogoImageData = (props) => {
    const {image} = props.logo
    // console.log(props);
    return (
        
        <div class="card" style={{border:'none',marginTop:'60px'}}>
          <img style={{height:'36px',width:'140px'}} src={image} class="card-img-top" alt="..."/>
        </div>
        
     
    );
};

export default LogoImageData;