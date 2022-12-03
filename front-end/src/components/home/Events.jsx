import React, { useEffect, useState, useContext } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { WebContext } from '../../context/WebContext';
import LoadingCard from '../loading/LoadingCard';

import TicketLong from './TicketLong';
export default function Events() {
    const { concerts, month } = useContext(WebContext)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        if (concerts && concerts.length > 0) {
            setLoading(false)

        }
    }, [concerts])
    return (
        <>
            {
                loading ? <LoadingCard /> :

                    <Tabs className={'flex flex-col items-center my-10'} >
                        <TabList>
                            {
                                concerts?.map((type) => {
                                    return (<Tab key={type?.id}>{type?.title}</Tab>)
                                }
                                )
                            }
                        </TabList>
                        {
                            concerts?.map((type, i) => {
                                return (
                                    <TabPanel key={i}>
                                        <div className='flex gap-y-9 w-full lg:w-3/4 mt-3 container mx-auto flex-col'>
                                            {type?.concerts.map((concert, y) => {
                                                return (
                                                    <TicketLong key={y} concert={concert} />
                                                )
                                            })}

                                        </div>
                                    </TabPanel>
                                )
                            })

                        }

                    </Tabs>
            }
        </>
    )
}
