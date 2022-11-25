import { Tabs } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { HiUserCircle } from "react-icons/hi";
import { HiClipboardList } from "react-icons/hi";
import { HiAdjustments } from "react-icons/hi";
import EventCard from './EventCard';
import TicketLong from './TicketLong';
import image0 from "../images/0.png";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
export default function Events() {

    const arr = [1, 2, 3, 4, 5]
    const images = [image0, image1, image2, image3, image4]
    return (

        <Tabs.Group
            aria-label="Tabs with icons"
            style="underline"

            className={"mx-auto overflow-hidden  mt-5"}
        >
            <Tabs.Item
                active={true}
                className={"bg-candy overflow-hidden dark:border-candy"}
                title="Open Aria"

            >
                {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>

                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />

                </div> */}
                <div className='flex gap-y-9 w-full lg:w-3/4 container mx-auto flex-col'>
                    {
                        arr.map((e, i) => {

                            return <TicketLong image={images[i]} i={i} />
                        })
                    }



                </div>
            </Tabs.Item>
            <Tabs.Item

                title="Concerts"

            >
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 '>


                    <EventCard />


                </div>
            </Tabs.Item>
            <Tabs.Item
                title="Events"

            >
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>

                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />

                </div>
            </Tabs.Item>


        </Tabs.Group>
    )
}
