import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { json, unstable_HistoryRouter } from 'react-router-dom';


// Context
import { AuthContext } from '../context/AuthContext';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

// Context
export default function Checkout() {

    const { user } = useContext(AuthContext)
    const [card, setCard] = useState(true)
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

                                                return checkoutConcert?.categories.map((item) => {
                                                    if (ticket === item.id) {
                                                        return (
                                                            <>
                                                                <li className="flex items-center rounded-md justify-between shadow-md dark:shadow-slate-600 dark:shadow-md  p-2 py-4">
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
                            <form className="grid grid-cols-6 gap-4">
                                <div className="col-span-3">
                                    <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                                        First Name<small className='text-red-600 '></small>

                                    </label>
                                    <input
                                        className="w-full rounded-lg  bg-white text-black focus:bg-slate-700 dark:focus:bg-duaa dark:focus:text-white  border-gray-200 focus:text-white  p-2.5 text-sm shadow-sm "
                                        type="text"
                                        name='fName'
                                        defaultValue={user?.name ? user?.name.split(" ")[0] : ""}
                                    />
                                </div>
                                <div className="col-span-3">
                                    <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                                        Last Name<small className='text-red-600 '></small>
                                    </label>
                                    <input
                                        className="w-full rounded-lg  bg-white text-black focus:bg-slate-700 dark:focus:bg-duaa dark:focus:text-white  border-gray-200 focus:text-white  p-2.5 text-sm shadow-sm "
                                        type="text"
                                        name='lName'
                                        defaultValue={user?.name ? user?.name.split(" ")[1] : ""}
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                                        Email<small className='text-red-600 '></small>
                                    </label>
                                    <input
                                        className="w-full rounded-lg  bg-slate-700 text-white focus:bg-slate-700 dark:focus:bg-duaa dark:focus:text-white  border-gray-200 focus:text-white  p-2.5 text-sm shadow-sm"
                                        type="email"
                                        defaultValue={user?.email}
                                        disabled
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                                        Phone Number<small className='text-red-600 '></small>
                                    </label>
                                    <IntlTelInput
                                        preferredCountries={['jo', 'sa']}
                                        inputClassName={'w-fit border-white rounded bg-white text-black focus:bg-slate-700 dark:focus:bg-duaa dark:focus:text-white  border-gray-200 focus:text-white'}
                                        fieldName={''}
                                        defaultValue={user ? user?.phone : ""}
                                        placeholder={"07 7808 1234"}
                                    />
                                </div>

                                <fieldset className="col-span-6">
                                    <legend className="mb-1 block text-sm text-gray-600">
                                        Card Details
                                    </legend>

                                    <div className="-space-y-px rounded-lg bg-white shadow-sm">
                                        <div>
                                            <label className="sr-only" for="card-number">Card Number</label>

                                            <input
                                                className="relative w-full rounded-t-lg  bg-white text-black focus:bg-slate-700 dark:focus:bg-duaa dark:focus:text-white  border-gray-200 focus:text-white p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                type="text"
                                                name="card-number"
                                                id="card-number"
                                                placeholder="Card number"
                                            />
                                        </div>

                                        <div className="flex -space-x-px">
                                            <div className="flex-1">
                                                <label className="sr-only" for="card-expiration-date">
                                                    Expiration Date
                                                </label>

                                                <input
                                                    className="relative w-full rounded-bl-lg bg-white text-black focus:bg-slate-700 dark:focus:bg-duaa dark:focus:text-white  border-gray-200 focus:text-white p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                    type="text"
                                                    name="card-expiration-date"
                                                    id="card-expiration-date"
                                                    placeholder="MM / YY"
                                                />
                                            </div>

                                            <div className="flex-1">
                                                <label className="sr-only" for="card-cvc">CVC</label>

                                                <input
                                                    className="relative w-full rounded-br-lg bg-white text-black focus:bg-slate-700 dark:focus:bg-duaa dark:focus:text-white  border-gray-200 focus:text-white p-2.5 text-sm placeholder-gray-400 focus:z-10"
                                                    type="text"
                                                    name="card-cvc"
                                                    id="card-cvc"
                                                    placeholder="CVC"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="col-span-6">
                                    <button
                                        className="block w-full rounded-lg bg-black dark:bg-navy/90 dark:text-white p-2.5 text-sm text-white"
                                        type="submit"
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
