
import React from 'react'
import { Tab, TabList, Tabs } from 'react-tabs'

export default function LoadingCard() {
    return (
        <Tabs className='flex animate-pulse flex-col items-center mt-5  ' >
            <TabList>


                <Tab className={'text-gray-400'} >Concerts</Tab>


            </TabList>

            <div className='flex gap-y-9 w-full lg:w-3/4 mt-3 container mx-auto flex-col'>
                <article
                    data-aos-duration="1000"

                    className="md:flex animate-pulse shadow-md shadow-gray-900/10 bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25"
                >
                    <div className="md:rotate-180 p-2 md:[writing-mode:_vertical-lr]">
                        <time
                            dateTime="2022-10-10"
                            className="flex  items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
                        >
                            <span></span>
                            <span className="w-full border-b-[1px] md:border-b-0 border-gray-900/10 md:w-px md:flex-1 z-20 bg-black md:bg-gray-900/10 dark:bg-white/10"></span>
                            <span className='' ></span>

                        </time>
                    </div>

                    <div className="  lg:basis-96   sm:block  basis-56">
                        <div className="object-cover lg:object-scale-down h-full    w-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                        </div>

                    </div>

                    <div className="flex flex-1  flex-col justify-between">
                        <div
                            className="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
                        >
                            <a >
                                <h3 className="font-bold uppercase text-gray-900 dark:text-white">

                                </h3>
                            </a>

                            <p
                                className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200"
                            >
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                            </p>
                        </div>

                        <div className="sm:flex sm:items-end sm:justify-end">

                            <span
                                className="block bg-gray-200 px-5 py-3 text-center text-xs font-bold uppercase text-white dark:bg-gray-700 "
                            >
                                Buy
                            </span>
                        </div>
                    </div>
                </article>
                <article
                    data-aos-duration="1000"

                    className="md:flex animate-pulse shadow-md shadow-gray-900/10 bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25"
                >
                    <div className="md:rotate-180 p-2 md:[writing-mode:_vertical-lr]">
                        <time
                            dateTime="2022-10-10"
                            className="flex  items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
                        >
                            <span></span>
                            <span className="w-full border-b-[1px] md:border-b-0 border-gray-900/10 md:w-px md:flex-1 z-20 bg-black md:bg-gray-900/10 dark:bg-white/10"></span>
                            <span className='' ></span>

                        </time>
                    </div>

                    <div className="  lg:basis-96   sm:block  basis-56">
                        <div className="object-cover lg:object-scale-down h-full    w-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                        </div>

                    </div>

                    <div className="flex flex-1  flex-col justify-between">
                        <div
                            className="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
                        >
                            <a >
                                <h3 className="font-bold uppercase text-gray-900 dark:text-white">

                                </h3>
                            </a>

                            <p
                                className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200"
                            >
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                            </p>
                        </div>

                        <div className="sm:flex sm:items-end sm:justify-end">

                            <span
                                className="block bg-gray-200 px-5 py-3 text-center text-xs font-bold uppercase text-white dark:bg-gray-700 "
                            >
                                Buy
                            </span>
                        </div>
                    </div>
                </article>
                <article
                    data-aos-duration="1000"

                    className="md:flex animate-pulse shadow-md shadow-gray-900/10 bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25"
                >
                    <div className="md:rotate-180 p-2 md:[writing-mode:_vertical-lr]">
                        <time
                            dateTime="2022-10-10"
                            className="flex  items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
                        >
                            <span></span>
                            <span className="w-full border-b-[1px] md:border-b-0 border-gray-900/10 md:w-px md:flex-1 z-20 bg-black md:bg-gray-900/10 dark:bg-white/10"></span>
                            <span className='' ></span>

                        </time>
                    </div>

                    <div className="  lg:basis-96   sm:block  basis-56">
                        <div className="object-cover lg:object-scale-down h-full    w-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                        </div>

                    </div>

                    <div className="flex flex-1  flex-col justify-between">
                        <div
                            className="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
                        >
                            <a >
                                <h3 className="font-bold uppercase text-gray-900 dark:text-white">

                                </h3>
                            </a>

                            <p
                                className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200"
                            >
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                            </p>
                        </div>

                        <div className="sm:flex sm:items-end sm:justify-end">

                            <span
                                className="block bg-gray-200 px-5 py-3 text-center text-xs font-bold uppercase text-white dark:bg-gray-700 "
                            >
                                Buy
                            </span>
                        </div>
                    </div>
                </article>
            </div>

        </Tabs>
    )
}
