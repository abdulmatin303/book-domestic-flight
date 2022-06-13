import React from 'react';
import flight from '../../assets/images/flight3.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={flight} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-4xl font-bold">Welcome to ShareTrip! <br /> Find Flights</h1>
                    <p class="py-6">Up to 10% & Add. up to 1,200 Tk Savings on Domestic Flight Bookings. Valid till 12 Jul ‘22.</p>
                    <button class="btn btn-primary">Booking</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;