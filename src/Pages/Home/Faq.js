import React from 'react';
import './Faq.css'

const Faq = () => {
    return (
        <div class="py-12 px-6 md:py-20 md:px-0">
            <div class="max-w-default m-auto">
                <div class="text-center">
                    <h2 class="text-3xl font-bold text-gray-800 md:text-5xl">Flight Booking FAQs</h2>
                </div>
                <div class="mt-10 md:mt-16">
                    <div class="m-auto md:max-w-3xl rounded-lg gap-3">
                        <details class="border bg-white rounded">
                            <summary class="mb-1 cursor-pointer p-4 pt-5 text-lg font-bold text-gray-800 focus:text-blue-700">What are the advantages of online flight booking?</summary>
                            <p class="py-2 px-3 text-gray-600">Through online air ticket booking you can easily compare prices of multiple airlines to get your air tickets at lowest rates. Also, it is easy to do online flight booking as multiple payment options are available on websites like FlyBD.</p>
                        </details>
                        <details class="border mt-3 bg-white rounded">
                            <summary class="mb-1 cursor-pointer p-4 pt-5 text-lg font-bold text-gray-800 focus:text-blue-700">When should I book to get best flight ticket prices?</summary>
                            <p class="py-2 px-3 text-gray-600">For best flight ticket prices and flight ticket offers, it is recommended to book at least 3 to 4 weeks in advance for domestic air tickets.</p>
                        </details>
                        <details class="border mt-3 bg-white rounded">
                            <summary class="mb-1 cursor-pointer p-4 pt-5 text-lg font-bold text-gray-800 focus:text-blue-700">How can I book flight tickets online?</summary>
                            <p class="py-2 px-3 text-gray-600">With the help of FlyBD, you can easily book both domestic flight tickets in simple steps within a few seconds.</p>
                        </details>
                        <details class="border mt-3 bg-white rounded">
                            <summary class="mb-1 cursor-pointer p-4 pt-5 text-lg font-bold text-gray-800 focus:text-blue-700">Why should I make a flight booking from FlyBD?</summary>
                            <p class="py-2 px-3 text-gray-600">Along with an easy flight booking process, FlyBD offers various discounts, instant EMI options and credit/ debit card related offers on flight booking. By availing such benefits, you can book air tickets at reasonable prices.</p>
                        </details>
                        <details class="border mt-3 bg-white rounded">
                            <summary class="mb-1 cursor-pointer p-4 pt-5 text-lg font-bold text-gray-800 focus:text-blue-700">In how much time, my flight booking will get confirmed?</summary>
                            <p class="py-2 px-3 text-gray-600">After completing the air ticket booking process on FlyBD, you will get an instant confirmation mail and a message on the registered number and email id respectively.</p>
                        </details>
                        <details class="border mt-3 bg-white rounded">
                            <summary class="mb-1 cursor-pointer p-4 pt-5 text-lg font-bold text-gray-800 focus:text-blue-700">What are some of the popular flight routes?</summary>
                            <p class="py-2 px-3 text-gray-600">Some of the popular domestic flight routes are: <br />
                            1. Delhi to Coxs Bazar Flights <br />2. Dhaka to Chittagong Flights<br />
                            3. Dhaka to Jessore Flights<br />4. Pune to Sylhet Osmani Flights<br />
                            </p>
                        </details>
                        <details class="border mt-3 bg-white rounded">
                            <summary class="mb-1 cursor-pointer p-4 pt-5 text-lg font-bold text-gray-800 focus:text-blue-700">Which are the popular airlines for air travel?</summary>
                            <p class="py-2 px-3 text-gray-600">Some of the popular domestic flight routes are: <br />
                            1. Biman Airlines <br />2. US-Bangla Airlines<br />
                            3. Novo Airlines<br />
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Faq;