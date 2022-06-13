import React from 'react';
import InfoCard from './InfoCard';
import  clock from '../../assets/icons/clock.svg'
import  marker from '../../assets/icons/marker.svg'
import  phone from '../../assets/icons/phone.svg'


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 mt-24'>
            <InfoCard cardTitle="Opening Hours" text="Saturday-Thursday: 9AM-9PM Friday: 10AM-6PM" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>

            <InfoCard cardTitle="Our Locations" text="Mohammadpur, Dhaka-1207" bgClass="bg-accent" img={marker}></InfoCard>

            <InfoCard cardTitle="Contact Us" text="Call: +8801744774700" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;