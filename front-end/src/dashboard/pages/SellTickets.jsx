
import React, { useEffect, useRef } from 'react';

import axios from 'axios';
import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
export default function SellTickets() {
    const { concertData } = useContext(AdminContext)
    const [tData, setTData] = useState({
        ticket_category_id: "",
        seat: "aa",
        note: null,
        price: 0,
        cash: true,
        last_4: "0000",
        card_type: "visa",
        number_of_tickets: 1,
        phone: "",
        sold_from: 'pos',
        invitation: true,
        user_email: "",
        concert_id: concertData?.concert?.id,

    })
    const sendTicket = () => {
        axios.post('/api/pos', tData).then((res) => {

            setTData({
                ticket_category_id: "",
                seat: "aa",
                note: null,
                price: 0,
                cash: true,
                last_4: "0000",
                card_type: "visa",
                number_of_tickets: 1,
                phone: "",
                sold_from: 'pos',
                invitation: true,
                user_email: "",
                concert_id: concertData?.concert?.id,

            })
        })
    }
    // const sendEmail = () => {
    //     console.log('hi');
    //     axios.post('/api/sendEmail').then((res) => {
    //         console.log(res);
    //     })
    // }
    useEffect(() => {
        console.log('concertData====', concertData);
        setTData({
            ...tData,
            concert_id: concertData?.concert?.id,

        })
    }, [concertData])
    useEffect(() => {
        console.log('tData====', tData);

    }, [tData])

    // ticket_category_id	
    // seat	
    // note		
    // sold_from	
    // invitation	
    // concert_id	
    // user_id	

    return (
        <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-candy  dark:bg-slate-800'>
            <p className='text-2xl'>Sell Tickets</p>
            <div class="grid gap-6 mb-6 md:grid-cols-2 mt-4">
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Phone Number</label>
                    <PhoneInput
                        inputClass={' !py-5 !text-black !w-full '}
                        country={'jo'}
                        defaultValue={tData?.phone}
                        onChange={e => setTData({ ...tData, phone: e })}
                        defaultErrorMessage={"lol"}
                    />
                </div>
                <div>

                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Number of tickets</label>
                    <input key={Math.random()} onChange={(e) => setTData({ ...tData, number_of_tickets: Number(e.target.value) })} value={tData.number_of_tickets} name='seat' type="number" defaultValue={1} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seat num ..." required />
                </div>
                <div>

                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Seat</label>
                    <input onChange={(e) => setTData({ ...tData, seat: e.target.value })} name='seat' type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seat num ..." required />
                </div>



                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* User Email </label>
                    <input onChange={(e) => setTData({ ...tData, user_email: e.target.value })} value={tData.user_email} name='email' type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@email.com" required />
                </div>
                <div>
                    <div>
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ticket Category</label>
                        <select key={Math.random()} onChange={(e) => setTData({ ...tData, ticket_category_id: e.target.value })} defaultValue={tData?.ticket_category_id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >

                            {
                                concertData?.concert?.categories ?
                                    concertData?.concert?.categories?.map((category, i) => {

                                        return <option key={i} value={category?.id}>{category?.class}</option>
                                    })
                                    :
                                    <option selected={true} disabled  >No Categories</option>
                            }

                        </select>
                    </div>
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Invitation? </label>
                    <select onChange={(e) => setTData({ ...tData, invitation: e.target.value === "1" })} name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value='1'>
                            Invitation
                        </option>
                        <option value='2'>
                            Sale
                        </option>
                    </select>
                </div>

                {
                    !tData.invitation && (<>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Price <small>For 1 ticket</small> </label>
                            <input onChange={(e) => setTData({ ...tData, price: Number(e.target.value) })} name='price' type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="price" required />
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Payment type </label>
                            <select onChange={(e) => setTData({ ...tData, cash: e.target.value === "1" })} name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value='1'>
                                    Cash
                                </option>
                                <option value='2'>
                                    Card
                                </option>
                            </select>
                        </div>
                        {
                            !tData.cash &&
                            <>
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Payment type </label>
                                    <select onChange={(e) => setTData({ ...tData, card_type: e.target.value })} name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value='Visa'>
                                            Visa
                                        </option>
                                        <option value='Master Card'>
                                            Master Card
                                        </option>
                                        <option value='American Express'>
                                            American Express
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Last 4 Number </label>
                                    <input onChange={(e) => setTData({ ...tData, last_4: e.target.value })} value={tData.last_4} name='last_4' max={4} type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="**** **** **** 1234" required />
                                </div>
                            </>
                        }
                    </>)
                }
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Note </label>
                    <textarea onChange={(e) => setTData({ ...tData, note: e.target.value })} value={tData.note} name='start_date' type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Notes ..." required />
                </div>
            </div>
            <div className='w-full flex justify-end gap-x-5' >
                <button onClick={sendTicket} class="text-white bg-good hover:bg-navy text-sm rounded-lg w-20 py-2 px-5 text-center dark:bg-good dark:hover:bg-navy flex gap-3 items-center"><span> {tData.invitation ? "Invite" : "Sell"} </span></button>

            </div>
        </div>
    )
}
