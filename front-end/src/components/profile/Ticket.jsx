import Aos from 'aos';
import { Button, Modal } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { GrMapLocation } from "react-icons/gr";
export default function Ticket({ ticket, concert, user, ShowM, show, mData }) {
    useEffect(() => {

        Aos.init({ once: true });
        // setCart([])
    }, [])

    return (
        <>
            <article
                onClick={() => {
                    if (!ticket.scanned) {
                        ShowM(!show)
                        mData(ticket)

                    }
                }}
                data-aos-duration="1000"
                data-aos="fade-up"
                className="md:flex cursor-pointer shadow-md shadow-gray-900/10 bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25"
            >
                <div className="md:rotate-180 p-2 md:[writing-mode:_vertical-lr]">
                    <time
                        dateTime="2022-10-10"
                        className="flex  items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
                    >
                        <span className={ticket.scanned ? "text-red-600" : "text-green-700"}>{ticket.scanned ? 'Ticket' : 'Tap to'}</span>
                        <span className="w-full border-b-[1px] md:border-b-0 border-gray-900/10 md:w-px md:flex-1 z-20 bg-black md:bg-gray-900/10 dark:bg-white/10"></span>
                        <span className={ticket.scanned ? "text-red-600" : "text-green-700"} >{ticket.scanned ? 'Scanned' : 'Scan'}</span>

                    </time>
                </div>

                <div className="  lg:basis-72  sm:block  basis-56">
                    <img
                        alt="Guitar"
                        src={concert?.banner}
                        className=" object-cover h-full"
                    />
                </div>


                <div
                    className="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
                >
                    <a >
                        <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                            {ticket.category.class}
                        </h3>
                    </a>
                    <div className="flex gap-1 justify-between">
                        <div className='flex  justify-between flex-col'>
                            <p
                                className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200"
                            >
                                Start date : {' '} {concert?.start_date}
                            </p>
                            <p
                                className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200"
                            >
                                Ticket owner : {' '} {user?.name}
                            </p>

                        </div>


                    </div>
                </div>



            </article>

        </>
    )
}
