import React from 'react';
import brackBank from '../../assets/images/brackbank.jpg'
import bkash from '../../assets/images/bkash.jpg'
import gpStar from '../../assets/images/gpstar.jpg'
import easternBank from '../../assets/images/easternbank.jpg'
import nagadUpay from '../../assets/images/nagad&upay.jpg'
import scBank from '../../assets/images/scbank.jpg'
import HotDeal from './HotDeal';

const HotDeals = () => {
    const hotDeals = [
        {
            _id: 1,
            title: '0% EMI for up to 6 Months',
            description: 'For both domestic & int’l flights & BRAC Bank credit cardholders. Till 31 Jul ’22.',
            img: brackBank
        },
        {
            _id: 2,
            title: 'BDT 500 Instant Cashback on Flight Booking',
            description: 'Only for bKash payment. Min. purchase value has to be BDT 7,000. One user can avail cashback once. Till 31 Jul ‘22.',
            img: bkash
        },
        {
            _id: 3,
            title: 'Special Deal for GP Star',
            description: 'Up to 10% discount on Flight Up to 65% discount.',
            img: gpStar
        },
        {
            _id: 4,
            title: 'Up to BDT 3,000 Discount on Flight Booking',
            description: 'For all EBL Visa cards. Till 31 Jul’22.',
            img: easternBank
        },
        {
            _id: 5,
            title: 'On Domestic Flight Booking for Nagad & upay Payment',
            description: 'On base fare, for Nagad & upay payment. Till 31 Jul ’22.',
            img: nagadUpay
        },
        {
            _id: 6,
            title: 'Up to 15% Discount on Domestic Flight Bookings',
            description: 'On base fare, for StanChart credit cards. Till 08 Jul ‘22.',
            img: scBank
        }
    ];

    return (
        <div className=''>
            <div className='text-center'>
                <h3 className='text-3xl font-bold text-gray-800 md:text-5xl'>Hot Deals</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 mt-16'>
                {
                    hotDeals.map(hotDeal => <HotDeal
                        key={hotDeal._id}
                        hotDeal={hotDeal}
                    ></HotDeal>)
                }

            </div>
        </div>
    );
};

export default HotDeals;