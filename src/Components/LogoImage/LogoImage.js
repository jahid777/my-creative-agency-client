import React, { useState } from 'react';
import logo1 from '../../images/logos/slack.png';
import logo2 from '../../images/logos/gLogo.png';
import logo3 from '../../images/logos/netflix.png';
import logo4 from '../../images/logos/uber.png';
import logo5 from '../../images/logos/airbnb.png';
import LogoImageData from '../LogoImageData/LogoImageData';
import './LogoImage.css';


const allLogo = [
    {image: logo1},
    {image: logo2},
    {image: logo3},
    {image: logo4},
    {image: logo5}
]
const LogoImage = () => {
    const [logos, setLogos] = useState(allLogo)
    // console.log(logos);
    
    return (
        <div>
            <div class="card-deck card-deck-style" style={{marginLeft:'180px',marginRight:'180px'}}>
            {
                logos.map(logoData => <LogoImageData key={logoData.image} logo={logoData}></LogoImageData>)
            }
            </div>
        </div>
    );
};

export default LogoImage;