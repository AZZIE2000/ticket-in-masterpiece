import { Button, Card, TextInput } from 'flowbite-react';

import React, { useEffect, useState } from 'react'
import DesignOne from '../components/SingleEvent/areas/DesignOne'
import TicketPriceCard from '../components/TicketPriceCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
// ---------------------------
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import EventCard from '../components/EventCard';
import image0 from "../images/0.png";


// ---------------------------
export default function SingleEvent1() {
    // call how many tickets available and stop adding when their over

    return (

        <>

            <div className=' flex justify-center mt-10 overflow-hidden mx-auto'>


                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    // pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper min-w-[150%] -z-20 sm:min-w-[100%] mx-auto  "
                >
                    <SwiperSlide  >
                        <EventCard name={"vip"} />
                    </SwiperSlide>
                    <SwiperSlide  >
                        <EventCard name={"General"} />
                    </SwiperSlide>
                    <SwiperSlide  >
                        <EventCard name={"Golden Circle"} />
                    </SwiperSlide>


                </Swiper>
            </div>
            <div className="md:flex px-5 mt-10    container block justify-end">
                <div
                    className="overflow-hidden container  md:w-1/2 w-full   overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700"
                >
                    <table
                        className="min-w-full   divide-y divide-gray-200 text-[12px] md:text-sm dark:divide-gray-700"
                    >
                        <thead className="bg-gray-100 dark:bg-gray-800">
                            <tr>
                                <th
                                    className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                                >
                                    Ticket
                                </th>
                                <th
                                    className="whitespace-nowrap px-1 py-2 text-left font-medium text-gray-900 dark:text-white"
                                >
                                    Amount
                                </th>
                                <th
                                    className="whitespace-nowrap px-1 py-2 text-left font-medium text-gray-900 dark:text-white"
                                >
                                    Total
                                </th>
                                <th
                                    className="whitespace-nowrap px-2 py-2 text-left font-medium text-gray-900 dark:text-white"
                                >
                                    Price
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td
                                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                                >
                                    Vip
                                </td>
                                <td
                                    className="whitespace-nowrap px-1 py-2 text-gray-700 dark:text-gray-200"
                                >
                                    2
                                </td>
                                <td
                                    className="whitespace-nowrap px-1 py-2 text-gray-700 dark:text-gray-200"
                                >
                                    150 JD
                                </td>
                                <td
                                    className="whitespace-nowrap px-2 py-2 text-gray-700 dark:text-gray-200"
                                >
                                    50 JD
                                </td>
                            </tr>
                            <tr>
                                <td
                                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                                >
                                    Vip
                                </td>
                                <td
                                    className="whitespace-nowrap px-1 py-2 text-gray-700 dark:text-gray-200"
                                >
                                    2
                                </td>
                                <td
                                    className="whitespace-nowrap px-1 py-2 text-gray-700 dark:text-gray-200"
                                >
                                    150 JD
                                </td>
                                <td
                                    className="whitespace-nowrap px-2 py-2 text-gray-700 dark:text-gray-200"
                                >
                                    50 JD
                                </td>
                            </tr>
                            <tr>
                                <td
                                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                                >
                                    Vip
                                </td>
                                <td
                                    className="whitespace-nowrap px-1 py-2 text-gray-700 dark:text-gray-200"
                                >
                                    2
                                </td>
                                <td
                                    className="whitespace-nowrap px-1 py-2 text-gray-700 dark:text-gray-200"
                                >
                                    150 JD
                                </td>
                                <td
                                    className="whitespace-nowrap px-2 py-2 text-gray-700 dark:text-gray-200"
                                >
                                    50 JD
                                </td>
                            </tr>


                        </tbody>
                        <tfoot className='bg-gray-100 dark:bg-gray-800'>
                            <tr>
                                <td colSpan={"2"} className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                                    Total
                                </td>
                                <td className='whitespace-nowrap px-2 py-2 text-gray-700 dark:text-gray-200'>
                                    150 JD
                                </td>

                                <td className='whitespace-nowrap px-2 py-2 text-gray-700 dark:text-gray-200'>
                                    <div class="sm:flex sm:items-end sm:justify-end">
                                        <a
                                            href="#"
                                            class="block bg-navy px-1 py-2 sm:py-3 sm:px-2 text-center text-[7px] sm:text-xs font-semibold uppercase text-white dark:bg-candy dark:hover:bg-navy transition rounded-md hover:bg-candy"
                                        >
                                            Buy Now
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div className='h-[3px] bg-candy container w-3/4 mx-auto my-11' ></div>


            <div>
                <img className=' mx-auto w-3/4 object-scale-down -z-50' src={image0} />
                <div className='-mt-16 z-50 p-3 rounded-md text-[9px] text-white sm:text-sm bg-black relative dark:bg-duaa w-3/5  mx-auto  ' >
                    <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white">
                        Concert Title
                    </h5>
                    <p className="font-normal py-2 dark:text-gray-400">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias,
                    </p>
                    <p className="font-normal text-white dark:text-gray-400 flex">
                        <span className='px-1'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        </span>
                        Location: Amman - 7th circle

                    </p>
                    <p className="font-normal text-white dark:text-gray-400 flex">
                        <span className='px-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </span>
                        18:00 GMT+2

                    </p>
                    <ul className='list-disc'>
                        <li>asdasda</li>
                        <li>asdasda</li>
                        <li>asdasda</li>
                    </ul>
                </div>
            </div>


            <iframe className='mx-auto my-8 w-full container' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.3809915639263!2d35.86588818694307!3d31.95055927314005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca11d730d0fd1%3A0x149981646f758d8a!2sPrs.%20Alia%20St.%2C%20Amman!5e0!3m2!1sen!2sjo!4v1667598780518!5m2!1sen!2sjo" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}
