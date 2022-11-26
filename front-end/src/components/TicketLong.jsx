import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WebContext } from '../context/WebContext';
export default function TicketLong({ concert }) {
    const { month } = useContext(WebContext)
    useEffect(() => {
        AOS.init({ once: true });

    }, [])




    return (
        <article
            data-aos-duration="1000"
            data-aos={concert.id % 2 === 0 ? "fade-right" : "fade-left"}
            class="md:flex  shadow-md shadow-gray-900/10 bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25"
        >
            <div class="md:rotate-180 p-2 md:[writing-mode:_vertical-lr]">
                <time
                    datetime="2022-10-10"
                    class="flex  items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
                >
                    <span>{concert?.start_date.slice(0, 4)}</span>
                    <span class="w-full border-b-[1px] md:border-b-0 border-gray-900/10 md:w-px md:flex-1 z-20 bg-black md:bg-gray-900/10 dark:bg-white/10"></span>
                    <span className='' >{concert?.start_date.slice(8, 10)} {month(concert?.start_date.slice(5, 7))}</span>

                </time>
            </div>

            <div class="  lg:basis-96  sm:block  basis-56">
                <img
                    alt="Guitar"
                    src={concert?.banner}
                    class=" object-cover lg:object-scale-down h-full   w-full "
                />
            </div>

            <div class="flex flex-1  flex-col justify-between">
                <div
                    class="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
                >
                    <a >
                        <h3 class="font-bold uppercase text-gray-900 dark:text-white">
                            {concert?.name}
                        </h3>
                    </a>

                    <p
                        class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?
                    </p>
                </div>

                <div class="sm:flex sm:items-end sm:justify-end">
                    <Link
                        to={`single-event/${concert?.id}`}
                        class="block bg-navy px-5 py-3 text-center text-xs font-bold uppercase text-white dark:bg-candy dark:hover:bg-navy transition hover:bg-candy"
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </article>

    )
}
