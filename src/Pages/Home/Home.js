import React from 'react';
import Carousel from '../Shared/Carousel';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Faq from './Faq';
import HotDeals from './HotDeals';
import Info from './Info';

const Home = () => {
    return (
        <div className='from-purple-100 via-red-300 to-indigo-500 bg-gradient-to-br'>
            <Carousel></Carousel>
           <Banner></Banner>
           <HotDeals></HotDeals>
           <Info></Info>
           <Faq></Faq>
           <Footer></Footer>
        </div>
    );
};

export default Home;