
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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useContext } from 'react';
import { WebContext } from '../context/WebContext';
export default function Events() {
    const { concerts, month } = useContext(WebContext)

    useEffect(() => { console.log(concerts); }, [concerts])
    return (

        <Tabs className={'flex flex-col items-center '} >
            <TabList>
                {
                    concerts?.map((type) => {
                        return (<Tab key={type?.id}>{type?.title}</Tab>)
                    }
                    )
                }
            </TabList>

            {
                concerts?.map((type) => {
                    return (


                        <TabPanel>
                            <div className='flex gap-y-9 w-full lg:w-3/4 mt-3 container mx-auto flex-col'>
                                {type?.concerts.map((concert) => {
                                    return (


                                        <TicketLong concert={concert} />
                                    )
                                })}

                            </div>
                        </TabPanel>

                    )
                })

            }

        </Tabs>
    )
}
{/* <div className='flex gap-y-9 w-full lg:w-3/4 container mx-auto flex-col'></div> */ }

{/* <Tabs className={'flex justify-center'}>
<TabList>
    {
        concerts?.map((type) => {
            return (<Tab key={type?.id}>{type?.title}</Tab>)
        }
        )
    }
</TabList>
{
    concerts?.map((type) => {
        return (


            type?.concerts.map((concert) => {
                return (

                    <TabPanel>
                        <div className='flex gap-y-9 w-full lg:w-3/4 container mx-auto flex-col'>

                            <TicketLong concert={concert} />
                        </div>
                    </TabPanel>
                )
            })


        )
    })

}

</Tabs> */}