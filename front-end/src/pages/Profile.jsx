import { Accordion, Button, Card, Label, Modal, Tabs, TextInput } from 'flowbite-react'
import React from 'react'

import { BiSupport } from "react-icons/bi";
import { HiUserCircle, HiClipboardList } from "react-icons/hi";
import { HiTicket } from "react-icons/hi2";
import { MdPayment } from "react-icons/md";
import Ticket from '../components/profile/Ticket';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Cookies, useCookies } from 'react-cookie';
import QRCode from "react-qr-code";
export default function Profile() {
    const [showM, setShowM] = useState(false)
    const [mData, setMData] = useState({ serial_num: "hi" })
    const [cookies, setCookie, removeCookie] = useCookies(['Token']);
    const navigate = useNavigate()
    const { setUser, setPayments, payments, logout, token, setShow, user } = useContext(AuthContext)
    const [pData, setPData] = useState(payments);
    useEffect(() => {
        setTimeout(() => {
            if (cookies.Token === "" && token === "") {
                navigate('/', { replace: true })
                setShow(true)
            }
        }, 1000)
    }, [token])

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
                        console.log(res.data);
                        setConcerts(res.data.tickets)

                    } else {
                        console.log(res);
                    }
                })
            axios
                .get("/api/payments/history", {
                    headers: {
                        Authorization: `Bearer ${cookies.Token}`,
                    },
                })
                .then((res) => {
                    if (res.data.status === 200) {
                        setPData(res.data.payments)
                    } else {
                        console.log(res)
                    }
                })
        } else {
            return
        }
    }, [])
    const updateInfo = (e) => {

        if (cookies.Token) {
            const data = { [e.target.name]: e.target.value }
            // console.log(data);
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios.put("/api/user/update", data, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }).then((res) => {
                    if (res.data.status === 200) {
                        // console.log("updated");
                        axios
                            .get("/api/user", {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            })
                            .then((res) => {
                                if (res.data.status === 200) {
                                    setUser(res.data.user)
                                } else {
                                    console.log(res)
                                }
                            });
                    } else {
                        console.log(res)
                    }
                })
            })
        } else {
            return
        }
    }
    const updateT = () => {
        console.log("============================");
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
            })
    }

    return (
        <>
            <div className='bg-navy h-64' >
                <p className='text-center text-5xl capitalize text-white pt-10'>welcome {user?.name}</p>
                <p className='text-center text-3xl text-white pt-10'>HERE YOU CAN MANAGE YOUR PROFILE</p>
            </div>
            <div className='flex -mt-10 mb-10 justify-center'>
                <Card className='container' >

                    <Tabs.Group

                        style="underline"
                    >
                        {
                            concerts?.length > 0 ?

                                <Tabs.Item

                                    title="Tickets"
                                    // title="Profile"
                                    icon={HiTicket}
                                >
                                    <Accordion>
                                        {concerts?.map((concert) => {
                                            return (
                                                <Accordion.Panel key={concert?.id} className="bg-candy " >
                                                    <Accordion.Title>
                                                        {concert?.name}
                                                    </Accordion.Title>
                                                    <Accordion.Content>
                                                        <div className='w-full'>
                                                            {/* FIXME add the scan all function */}
                                                            {/* <button className="block mx-auto mb-3 bg-navy px-5 py-3 text-center text-xs font-bold uppercase text-white dark:bg-candy dark:hover:bg-navy transition hover:bg-candy"> Scan All tickets</button> */}
                                                        </div>
                                                        <div className='grid grid-cols-1 sm:grid-cols-2 flex-col gap-3'>

                                                            {

                                                                concert?.tickets.map((ticket, i) => {
                                                                    return (

                                                                        <Ticket key={i} ShowM={setShowM} show={showM} mData={setMData} user={user} concert={concert} ticket={ticket} />
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </Accordion.Content>
                                                </Accordion.Panel>
                                            )
                                        })
                                        }
                                    </Accordion>

                                </Tabs.Item>

                                : ""
                        }
                        <Tabs.Item
                            title="Profile"
                            icon={HiUserCircle}
                        >
                            <div className='container mx-auto  w-3/4'>
                                <div className=" grid grid-cols-6 gap-2">
                                    <div className="col-span-3">
                                        <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                                            Name<small className='text-red-600 '></small>

                                        </label>
                                        <input
                                            className="w-full rounded-lg bg-kohli text-white focus:bg-white border-gray-200 focus:text-black  p-2.5 text-sm shadow-sm"
                                            type="text"
                                            placeholder={user?.name}
                                            defaultValue={user?.name}
                                            role={'textbox'}
                                            name='name'
                                            onBlur={updateInfo}
                                        />
                                    </div>
                                    <div className="col-span-3">
                                        <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                                            Phone<small className='text-red-600 '></small>

                                        </label>
                                        <input
                                            className="w-full rounded-lg  bg-kohli text-white focus:bg-white border-gray-200 focus:text-black  p-2.5 text-sm shadow-sm"
                                            type="number"
                                            placeholder={user?.phone}
                                            defaultValue={user?.phone}
                                            name='phone'
                                            onBlur={updateInfo}

                                        />
                                    </div>
                                    <div className="col-span-6">
                                        <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                                            Email<small className='text-red-600 '></small>

                                        </label>
                                        <input
                                            className="w-full rounded-lg  bg-kohli text-white focus:bg-white border-gray-200 focus:text-black  p-2.5 text-sm shadow-sm"
                                            type="email"
                                            placeholder={user?.email}
                                            value={user?.email}
                                            disabled
                                        />
                                    </div>
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


                        {
                            pData?.length > 0 ?
                                <Tabs.Item
                                    title="Payments"
                                    icon={MdPayment}

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
                                                {
                                                    pData?.map((payment) => {
                                                        return (


                                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {payment?.concert.name}
                                                                </th>
                                                                <td className="py-4 px-6">
                                                                    **** **** **** {JSON.parse(payment?.card_num).last4}
                                                                </td>
                                                                <td className="py-4 px-6">
                                                                    {payment?.created_at.slice(0, 10)} {" - "}{payment?.created_at.slice(11, 19)}
                                                                </td>
                                                                <td className="py-4 px-6">
                                                                    {payment?.total} {" "} JD

                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }

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
                                : ""
                        }

                    </Tabs.Group>

                </Card>

            </div>
            <Modal
                show={showM}
                size="md"
                // popup={true}
                onClose={() => setShowM(false)}
            >

                <Modal.Body>
                    <div className="text-center">

                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            <QRCode
                                size={256}
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                value={mData?.serial_num}
                                viewBox={`0 0 256 256`}
                                title={"Scan"}
                            />
                        </h3>

                        <p className='my-3'>Scan Now!</p>
                        <div className="flex flex-col justify-center gap-4">
                            <Button
                                className='w-full'
                                color="success"
                                onClick={() => {
                                    setShowM(false)
                                    if (!mData.scanned) {

                                        updateT()
                                    }
                                }}
                            >
                                Done
                            </Button>
                            <Button
                                className='w-full'
                                color="failure"
                                onClick={() => {
                                    setShowM(false)

                                }}
                            >
                                Cancel
                            </Button>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
