import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../../context/AdminContext'
import { AuthContext } from '../../../context/AuthContext'

import { GrUserAdmin } from 'react-icons/gr';
export default function StatusCards() {

    const { concertData } = useContext(AdminContext)
    const { user } = useContext(AuthContext)
    const [time, setTime] = useState("")

    useEffect(() => {
        console.log(' lmaooooooooooooo');
        console.log(user);
    }, [concertData])
    function getCurrentTime() {
        setInterval(function () {
            const date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();

            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            const currentTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
            setTime(currentTime);
        }, 1000);
    }



    getCurrentTime()
    return (
        <>

            <div className="w-full px-9 grid gap-4 grid-cols-1 md:grid-cols-2  xl:grid-cols-4 ">

                <div className="w-full ">
                    <div className="widget w-full p-4 rounded-lg bg-white dark:bg-navy/80 shadow-lg border-l-4 border-red-400">
                        <div className="flex items-center">
                            <div className="icon w-14 p-3.5 flex justify-center bg-red-400 text-white rounded-full mr-3">
                                <GrUserAdmin size={25} />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-sm">Welcome: {user?.name}</div>
                                <div className="text-sm text-gray-400">{time}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="widget w-full p-4 rounded-lg bg-white dark:bg-navy/80 border-l-4 shadow-lg border-candy">
                        <div className="flex items-center">
                            <div className="icon w-14 p-3.5 bg-purple-400 text-white rounded-full mr-3">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-lg">{concertData?.sales} JD</div>
                                <div className="text-sm text-gray-400">Sales</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="widget w-full p-4 rounded-lg bg-white dark:bg-navy/80 shadow-lg border-l-4 border-blue-400">
                        <div className="flex items-center">
                            <div className="icon w-14 p-3.5 bg-blue-400 text-white rounded-full mr-3">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-lg">{concertData?.customers}</div>
                                <div className="text-sm text-gray-400">Customers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="widget w-full p-4 rounded-lg bg-white dark:bg-navy/80 shadow-lg border-l-4 border-yellow-400">
                        <div className="flex items-center">
                            <div className="icon w-14 p-3.5 bg-yellow-400 text-white rounded-full mr-3">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-lg">{concertData?.totalTicketsNum}</div>
                                <div className="text-sm text-gray-400">Ticket Sold</div>
                            </div>
                        </div>
                    </div>
                </div>






            </div>

        </>
    )
}
