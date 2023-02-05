

import React from 'react'
import { Link } from 'react-router-dom'
import logoDark from "../../images/dark_logo.png"
export default function FooterMain() {
    return (
        <>
            <footer aria-label="Site Footer" class="bg-gray-100 dark:bg-gray-900">
                <div
                    class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
                >


                    <div class="lg:flex lg:items-end lg:justify-between">
                        <div>
                            <div
                                class="flex justify-center text-teal-600 dark:text-teal-300 lg:justify-start "
                            >
                                <div className='bg-lightLogo dark:bg-darkLogo  w-52 h-24 bg-cover'>

                                </div>
                            </div>


                        </div>

                        <nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
                            <ul
                                class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
                            >
                                <li>
                                    <Link
                                        class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        to={'/about'}
                                    >
                                        About
                                    </Link>
                                </li>


                            </ul>
                        </nav>
                    </div>

                    <p
                        class="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-right"
                    >
                        &copy;    Ticket-In.com  {new Date().getFullYear()}. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}
