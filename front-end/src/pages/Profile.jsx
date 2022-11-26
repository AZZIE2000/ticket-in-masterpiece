import { Accordion, Card, Label, Tabs, TextInput } from 'flowbite-react'
import React from 'react'

import { MdDashboard } from "react-icons/md";
import { HiAdjustments, HiUserCircle, HiClipboardList } from "react-icons/hi";
import Ticket from '../components/Ticket';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import { useState } from 'react';
export default function Profile() {
    const [cookies, setCookie, removeCookie] = useCookies(['Token']);
    const navigate = useNavigate()
    const { logout, token, setShow, user } = useContext(AuthContext)

    useEffect(() => {
        setTimeout(() => {

            if (cookies.Token === "" && token === "") {
                navigate('/', { replace: true })
                setShow(true)

            }
        }, 1000);

    }, [])
    // Tickets per concert for user -------
    const [concerts, setConcerts] = useState()
    useEffect(() => {
        if (cookies.Token) {
            axios
                .get("/api/ticketswconcerts", {
                    headers: {
                        Authorization: `Bearer ${cookies.Token}`,
                    },
                })
                .then((res) => {
                    if (res.data.status === 200) {
                        setConcerts(res.data.tickets)
                    } else {
                        console.log(res);
                    }
                });
        } else {
            return;
        }
    }, []);

    return (
        <>
            <div className='bg-navy h-64' >
                <p className='text-center text-5xl text-white pt-10'>Welcome Azzam</p>
                <p className='text-center text-3xl text-white pt-10'>HERE YOU CAN MANAGE YOUR PROFILE</p>
            </div>
            <div className='flex -mt-10 mb-10 justify-center'>
                <Card className='container' >

                    <Tabs.Group
                        aria-label="Tabs with icons"
                        style="underline"
                    >
                        <Tabs.Item
                            title="Profile"
                            icon={HiUserCircle}
                        >
                            <div className='container mx-auto  w-3/4'>
                                <div className=" grid grid-cols-2 gap-2">
                                    <div className='relative'>
                                        <input type="text" id="fname" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-candy peer" placeholder=" " />
                                        <label htmlFor="fname" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-candy peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">First Name</label>
                                    </div>
                                    <div className='relative'>
                                        <input type="text" id="lname" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-candy peer" placeholder=" " />
                                        <label htmlFor="lname" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-candy peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Last Name</label>
                                    </div>
                                </div>
                                <div className='relative mt-2'>
                                    <input value={"azzam.faraj0@gmail.com"} disabled type="text" id="lname" className="block  px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-candy peer" placeholder=" " />
                                    <label htmlFor="lname" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-candy peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                                </div>
                                <button
                                    className="flex float-right items-center mt-2  h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-navy  hover:bg-candy dark:bg-candy  dark:hover:bg-navy focus:shadow-outline focus:outline-none"
                                    title="Sign up"
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            active={true}
                            title="Tickets"
                            icon={MdDashboard}
                        >
                            <Accordion>
                                {concerts?.map((concert) => {
                                    return (
                                        <Accordion.Panel key={concert?.id} className="bg-candy " >
                                            <Accordion.Title>
                                                {concert?.name}
                                            </Accordion.Title>
                                            <Accordion.Content>
                                                {
                                                    concert?.tickets.map((ticket) => {
                                                        return (
                                                            // <p key={ticket?.id} className="mb-2 text-gray-500 dark:text-gray-400">
                                                            //     {ticket?.serial_num}
                                                            // </p>
                                                            <Ticket />
                                                        )
                                                    })
                                                }
                                            </Accordion.Content>
                                        </Accordion.Panel>
                                    )
                                })
                                }
                            </Accordion>

                        </Tabs.Item>

                        <Tabs.Item
                            title="Payments"
                            icon={HiClipboardList}

                        >


                            <div className="relative">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="py-3 px-6">
                                                Event
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Card Number
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Date
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Amer diab concert
                                            </th>
                                            <td className="py-4 px-6">
                                                **** **** **** 5489
                                            </td>
                                            <td className="py-4 px-6">
                                                20/9/2022
                                            </td>
                                            <td className="py-4 px-6">
                                                $399
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className='mt-10 border-candy border-t-2 rounded'>
                                <div className='flex gap-3'>
                                    <button className='p-3 mt-10 bg-navy rounded text-white'>Update Payment Method</button>
                                    <button className='p-3 mt-10 bg-candy rounded text-white'>Press me</button>
                                </div>
                            </div>

                        </Tabs.Item>
                        <Tabs.Item

                            title="Support"
                        >
                            yea whatever
                        </Tabs.Item>
                    </Tabs.Group>

                </Card>

            </div>
        </>
    )
}
