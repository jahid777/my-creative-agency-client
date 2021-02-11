import React from 'react';
import Carousel from '../Carousel/Carousel';
import ClientsReview from '../ClientsReview/ClientsReview';
import FeedBack from '../FeedBack/FeedBack';
import Header from '../Header/Header';
import LogoImage from '../LogoImage/LogoImage';
import NewService from '../OrderPage/MainNewService/NewService/NewService';
import Service from '../Service/Service';
import Footer from '../Shared/Footer/Footer';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <LogoImage></LogoImage>
            <Service></Service>
            <NewService></NewService>
            <Carousel></Carousel>
            <FeedBack></FeedBack>
            <ClientsReview></ClientsReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;