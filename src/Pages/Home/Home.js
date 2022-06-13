import React from 'react';
import Carousel from '../Shared/Carousel';
import Banner from './Banner';
import Info from './Info';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
           <Banner></Banner>
           <Info></Info>
        </div>
    );
};

export default Home;