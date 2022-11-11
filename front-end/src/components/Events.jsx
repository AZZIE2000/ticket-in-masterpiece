import { Tabs } from 'flowbite-react'
import React from 'react'
import { HiUserCircle } from "react-icons/hi";
import { HiClipboardList } from "react-icons/hi";
import { HiAdjustments } from "react-icons/hi";
import EventCard from './EventCard';

export default function Events() {
    return (

        <Tabs.Group
            aria-label="Tabs with icons"
            style="underline"

            className={"mx-auto"}
        >
            <Tabs.Item
                active={true}
                className={"bg-candy"}
                title="Open Aria"

            >
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>

                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />

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
