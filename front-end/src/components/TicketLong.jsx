import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TicketLong({ i, image }) {
    useEffect(() => {
        AOS.init();
    }, [])

    // console.log("hi");
    // console.log(image + i);
    return (
        <article
            data-aos-duration="1000"
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            class="md:flex  shadow-md shadow-gray-900/10 bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25"
        >
            <div class="md:rotate-180 p-2 md:[writing-mode:_vertical-lr]">
                <time
                    datetime="2022-10-10"
                    class="flex  items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
                >
                    <span>2022</span>
                    <span class="w-full border-b-[1px] md:border-b-0 border-gray-900/10 md:w-px md:flex-1 z-20 bg-black md:bg-gray-900/10 dark:bg-white/10"></span>
                    <span>10 sep</span>

                </time>
            </div>

            <div class="  lg:basis-96  sm:block  basis-56">
                <img
                    alt="Guitar"
                    src={image}
                    class=" object-cover lg:object-scale-down h-full   w-full "
                />
            </div>

            <div class="flex flex-1  flex-col justify-between">
                <div
                    class="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
                >
                    <a >
                        <h3 class="font-bold uppercase text-gray-900 dark:text-white">
                            Finding the right guitar for your style - 5 tips
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
                    <button

                        class="block bg-navy px-5 py-3 text-center text-xs font-bold uppercase text-white dark:bg-candy dark:hover:bg-navy transition hover:bg-candy"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </article>

    )
}
