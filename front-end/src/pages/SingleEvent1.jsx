import { Button, Card, TextInput } from 'flowbite-react';

import React, { useState } from 'react'
import DesignOne from '../components/SingleEvent/areas/DesignOne'
import TicketPriceCard from '../components/TicketPriceCard';

export default function SingleEvent1() {
    const [area, setArea] = useState(0);
    const [tickets, setTickets] = useState(0);

    function displayTicket(area) {
        setArea(area);

    }
    function addNumber() {
        if (tickets < 10) {
            setTickets(tickets + 1)
        }
    }
    function removeNumber() {
        if (tickets > 0) {
            setTickets(tickets - 1)
        }
    }

    return (

        <>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 '>
                <DesignOne funDisplayTicket={displayTicket} />
                <TicketPriceCard tickets={tickets} add={addNumber} remove={removeNumber} />
            </div>
            <div className='h-[3px] bg-candy   my-11' ></div>



            <img className='container mx-auto max-h-96 -z-10' src="https://w7.pngwing.com/pngs/313/180/png-transparent-rock-concert-music-festival-rock-music-others-stage-performance-computer-wallpaper-thumbnail.png" />
            <Card className='-mt-16 z-50 sm:w-96 lg:w-[80%] mx-auto relative border-t-4 border-b-azzam' >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Concert Title
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias, quam iusto adipisci eligendi sequi, beatae minima consectetur similique dolor et commodi voluptatum cupiditate quis esse perspiciatis minus aperiam officiis.
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 flex">
                    <span className='px-1'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    </span>
                    Location: Amman - 7th circle

                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400 flex">
                    <span className='px-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </span>
                    18:00 GMT+2

                </p>
            </Card>


            <iframe className='mx-auto my-8 w-full container' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.3809915639263!2d35.86588818694307!3d31.95055927314005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca11d730d0fd1%3A0x149981646f758d8a!2sPrs.%20Alia%20St.%2C%20Amman!5e0!3m2!1sen!2sjo!4v1667598780518!5m2!1sen!2sjo" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}
