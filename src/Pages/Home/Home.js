import React from 'react';
import Carousel from '../Shared/Carousel';
import Banner from './Banner';
import HotDeals from './HotDeals';
import Info from './Info';

const Home = () => {
    return (
        <div className=''>
            <Carousel></Carousel>
           <Banner></Banner>
           <HotDeals></HotDeals>
           <Info></Info>
        </div>
    );
};

export default Home;