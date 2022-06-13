import React from 'react';

const HotDeal = ({hotDeal}) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={hotDeal.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{hotDeal.title}</h2>
                <p>{hotDeal.description}</p>
            </div>
        </div>
    );
};

export default HotDeal;