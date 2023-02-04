import {
    CardElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js';
import { Alert, Toast } from "flowbite-react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { json, unstable_HistoryRouter, useNavigate } from 'react-router-dom';


// Context
import { AuthContext } from '../context/AuthContext';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { useCookies } from 'react-cookie';
import { useRef } from 'react';

// Context
export default function Checkout() {
    useEffect(() => {
        AOS.init({ once: true });
        // setCart([])
    }, [])
    const [cookies, setCookie, removeCookie] = useCookies(['Token'])
    const { user, token } = useContext(AuthContext)
    const [card, setCard] = useState(true)
    const navigate = useNavigate()
    const [table, setTable] = useState([])
    const cartItems = JSON.parse(localStorage.getItem("tickets"))
    const id = JSON.parse(localStorage.getItem("for"))
    const [checkoutConcert, setCheckoutConcert] = useState()

    useEffect(() => {
        console.log('cartItems');
        console.log(cartItems);
        const uniq = cart => [...new Set(cartItems)];
        uniq(cartItems)
        setTable(uniq(cartItems))

    }, [])
    useEffect(() => {
        axios.get(`/api/concert/info/${id}`).then((res) => {
            if (res.status === 200) {
                setCheckoutConcert(res.data.concert)


            } else {
                console.log(res)
            }
        });
    }, []);
    const totalPrice = () => {
        let total = 0;
        cartItems.map((ticket) => {
            checkoutConcert?.categories.map((item) => {
                if (ticket === item.id) {
                    total = total + item.price
                }
            })
        })
        return total;
    }

    const findPrice = (id) => {
        return checkoutConcert?.categories.map(item => {
            if (id === item.id) {
                return item.price
            }
        })
    }


    const total = (id) => {
        return checkoutConcert?.categories.map((ticket) => {
            if (ticket.id === id) {
                // return "yes"
                return ((cartItems.filter(x => x == id).length) * (ticket.price))
            }

        })
    }

    const ticketCount = (id) => {
        return cartItems.filter(x => x == id).length
    }

    // -----------------------
    const stripe = useStripe();
    const elements = useElements();
    // const fName = user?.name.split(" ")[0]
    // const lName = user?.name.split(" ")[1]
    const [info, setInfo] = useState({
        fName: "",
        lName: "",
        phone: ""
    })
    useEffect(() => {
        if (user.name) {
            setInfo({
                fName: user?.name.split(" ")[0],
                lName: user?.name.split(" ")[1],
                phone: ""
            })
        }
    }, [user])
    const [err, setErr] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (info.fName === "" || info.lName === "" || info.phone.length < 10) {
            setErr(true)
            console.log(err);
            return
        } else {
            setErr(false)
        }
        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),

        }).then((res) => {
            if (res.paymentMethod) {


                const card = {
                    brand: res.paymentMethod.card.brand,
                    country: res.paymentMethod.card.country,
                    last4: res.paymentMethod.card.last4,
                }

                const data = {
                    serialNum: res.paymentMethod.id,
                    name: info.fName + " " + info.lName,
                    phone: info.phone,
                    cart: cartItems,
                    totalPrice: totalPrice(),
                    card: card,
                    concert: id,
                }

                axios
                    .post("/api/buy/tickets", data, {
                        headers: {
                            Authorization: `Bearer ${cookies.Token}`,
                        },
                    })
                    .then((res) => {
                        if (res.status) {
                            navigate('/profile')

                        }
                    });
            }
        })
    }

    useEffect(() => { console.log(info) }, [info])
    useEffect(() => { console.log(err) }, [err])

    return (
        <>



            <div className="relative mx-auto max-w-screen-2xl ">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className=" py-12 md:py-24  ">
                        <div className="mx-auto max-w-lg px-4 lg:px-8">
                            <div className="flex items-center">
                                <span className="h-5 w-5 rounded-full bg-navy dark:bg-candy"></span>

                                <h2 className="ml-4 font-medium">Welcome: {user?.name}</h2>
                            </div>

                            <div className="mt-8">
                                <p className="text-2xl font-medium tracking-tight">Total: {totalPrice()} JD</p>
                                <p className="mt-1 text-xs text-gray-500">An additional 3.0% service charge was added to the total.</p>
                                <p className="mt-1 text-sm text-gray-500">For the purchase of</p>
                            </div>

                            <div className="mt-12">
                                <div className="flow-root">
                                    <ul className="-my-4 rounded-md  flex flex-col gap-y-1  ">
                                        {
                                            table?.map((ticket) => {

                                                return checkoutConcert?.categories.map((item, i) => {
                                                    if (ticket === item.id) {
                                                        return (
                                                            <>
                                                                <li key={i} className="flex items-center rounded-md justify-between shadow-md dark:shadow-slate-600 dark:shadow-md  p-2 py-4">
                                                                    <div className="flex items-start  ">
                                                                        <img
                                                                            alt="Trainer"
                                                                            src={checkoutConcert.banner}
                                                                            className="h-16 w-16 flex-shrink-0 rounded-lg object-cover"
                                                                        />

                                                                        <div className="ml-4 ">
                                                                            <p className="text-sm">{item.class}</p>

                                                                            <dl className="mt-1 space-y-1 text-xs text-gray-500">
                                                                                <div>
                                                                                    <dt className="inline">Concert:</dt>
                                                                                    <dd className="inline"> {checkoutConcert.name}</dd>
                                                                                </div>

                                                                                <div>
                                                                                    <dt className="inline">Extra: </dt>
                                                                                    <dd className="inline">{item.description} </dd>
                                                                                </div>
                                                                            </dl>
                                                                        </div>
                                                                        <span className='w-1 hidden'></span>
                                                                    </div>

                                                                    <div className='flex gap-2 sm:gap-7 items-center flex-col sm:flex-row'>
                                                                        <p className='' >  {ticketCount(item.id)}<small className="text-gray-500"> Tickets</small> </p>
                                                                        <p className="text-sm pr-2">
                                                                            {total(item.id)}
                                                                            <small className="text-gray-500 "> JD</small>
                                                                        </p>
                                                                    </div>
                                                                </li>


                                                            </>
                                                        )
                                                    }
                                                })
                                            })
                                        }
                                    </ul>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-12 md:py-24 ">
                        <div className="mx-auto max-w-lg px-4 lg:px-8">
                            {
                                err ? <Alert
                                    color="failure"
                                    className=' mb-3 '
                                    data-aos-duration="2000"
                                    data-aos={"fade-top"}
                                // icon={HiInformationCircle}
                                >
                                    <span>
                                        <span className="font-medium">
                                            Info alert!
                                        </span>
                                        {' '}Please fill up all the fields and try again.
                                    </span>
                                </Alert> : null
                            }
                            <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4">
                                <div className="col-span-3">
                                    <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                                        First Name<small className='text-red-600 '></small>

                                    </label>
                                    <input
                                        className="w-full rounded-lg  bg-white text-black focus:bg-slate-700 dark:focus:bg-kohli dark:focus:text-white  border-gray-200 focus:text-white  p-2.5 text-sm shadow-sm "
                                        type="text"
                                        name='fName'
                                        defaultValue={user?.name ? user?.name.split(" ")[0] : ""}
                                        onChange={(e) => {
                                            setInfo({ ...info, fName: e.target.value })
                                        }}



                                    />
                                </div>
                                <div className="col-span-3">
                                    <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                                        Last Name<small className='text-red-600 '></small>
                                    </label>
                                    <input
                                        className="w-full rounded-lg  bg-white text-black focus:bg-slate-700 dark:focus:bg-kohli dark:focus:text-white  border-gray-200 focus:text-white  p-2.5 text-sm shadow-sm "
                                        type="text"
                                        name='lName'
                                        defaultValue={user?.name ? user?.name.split(" ")[1] : ""}

                                        onChange={(e) => {
                                            setInfo({ ...info, lName: e.target.value })
                                        }}
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                                        Email<small className='text-red-600 '></small>
                                    </label>
                                    <input
                                        className="w-full rounded-lg  bg-slate-700 text-white focus:bg-slate-700 dark:focus:bg-kohli dark:focus:text-white  border-gray-200 focus:text-white  p-2.5 text-sm shadow-sm"
                                        type="email"
                                        defaultValue={user?.email}
                                        disabled
                                    />
                                </div>

                                <div className="col-span-6 ">
                                    <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                                        Phone Number<small className='text-red-600 '></small>
                                    </label>

                                    <PhoneInput
                                        inputclassName={'w-fit  border-white rounded  bg-white text-black focus:bg-slate-700 dark:focus:bg-kohli focus:bg-kohli dark:focus:text-white  border-gray-200 focus:text-black'}
                                        country={'jo'}
                                        defaultValue={user?.phone}
                                        onChange={e => setInfo({ ...info, phone: e })}
                                        defaultErrorMessage={"lol"}
                                    />
                                </div>

                                <div className="col-span-6 ">
                                    <legend className="mb-1 block text-sm text-black  dark:text-white">
                                        Card Details
                                    </legend>
                                    <CardElement className=' bg-white p-4 rounded' />
                                </div>


                                <div className="col-span-6">
                                    <button
                                        className="block w-full rounded-lg bg-black dark:bg-navy/90 dark:text-white p-2.5 text-sm text-white"
                                        type="submit"
                                        disabled={!stripe || !elements}
                                    >
                                        Pay Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
