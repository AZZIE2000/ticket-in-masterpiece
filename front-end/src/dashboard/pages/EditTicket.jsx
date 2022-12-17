import axios from 'axios';
import { TextInput } from 'flowbite-react'
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { FaSearch } from 'react-icons/fa'
import { AdminContext } from '../../context/AdminContext';

export default function EditTicket() {
    const { searchTicket, setSearchTicket, ticketInfo, concertData, setTicketInfo } = useContext(AdminContext);
    const search = useRef()
    const handleSearch = () => {
        setSearchTicket(search.current.value)
    }
    function transformDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        if (date.toLocaleDateString('en-US', options) === 'Invalid Date') {
            return ""
        } else {
            return date.toLocaleDateString('en-US', options);

        }
    }
    useEffect(() => {
        console.log(ticketInfo);
    }, [ticketInfo])
    const editTInfo = (id, key, val) => {
        if (id && key && val && val !== "") {

            const data = {
                id: id,
                key: key,
                val: val
            }
            axios.post('/api/update/ticket', data).then(res => {
                setTicketInfo(res.data.ticket)

            })
        }
    }
    return (
        <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-candy  dark:bg-slate-800'>
            <p className='text-2xl'>Manage Tickets</p>
            <div class="my-6">

                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search for a Ticket</label>
                <div className='flex gap-3 my-2'>

                    <TextInput
                        id="email1"
                        type="email"
                        ref={search}
                        defaultValue={searchTicket}
                        placeholder="Ticket serial number"
                        required={true}
                        className='w-full '
                    // onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={handleSearch} class="text-white bg-navy hover:bg-candy text-sm rounded-lg px-3 text-center dark:bg-candy dark:hover:bg-navy "><FaSearch /></button>
                </div>

            </div>
            <hr class="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <>
                <div class="inline-flex pb-3 justify-center gap-x-3 items-center w-full">
                    <hr class=" w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
                    <p className='text-black dark:text-white' >User Info</p>
                    <hr class=" w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="UserName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                        <input key={Math.random()} defaultValue={ticketInfo?.user?.name} type="text" id="UserName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div>
                        <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input key={Math.random()} value={ticketInfo?.user?.email} type="email" id="Email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
                    </div>

                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                        <input key={Math.random()} defaultValue={ticketInfo?.user?.phone} type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>

                </div>
                <div class="inline-flex justify-center gap-3 items-center w-full">
                    <hr class="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
                    <p className='text-black dark:text-white' >Ticket Info</p>
                    <hr class="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ticket Category</label>
                        <select onChange={(e) => editTInfo(ticketInfo?.id, 'ticket_category_id', e.target.value)} key={Math.random()} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >

                            {
                                ticketInfo?.concert?.categories ?
                                    ticketInfo?.concert?.categories?.map((category) => {

                                        return <option key={Math.random()} selected={category?.id == ticketInfo?.category?.id} value={category?.id}>{category?.class}</option>
                                    })
                                    :
                                    <option selected={true} disabled  >No Categories</option>
                            }

                        </select>
                    </div>



                    <div>
                        <label for="scanned" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Scanned</label>
                        <select onChange={(e) => editTInfo(ticketInfo?.id, 'scanned', e.target.value)} key={Math.random()} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                            <option selected={ticketInfo?.scanned == 1} value="1">YES</option>
                            <option selected={ticketInfo?.scanned == 0} value="0">NO</option>
                        </select>
                    </div>
                    <div>
                        <label for="seat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seat number</label>
                        <input onChange={(e) => editTInfo(ticketInfo?.id, 'seat', e.target.value)} key={Math.random()} defaultValue={ticketInfo?.seat} type="text" id="seat" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div>
                        <label for="Price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input key={Math.random()} value={ticketInfo?.category?.price ? ticketInfo?.category?.price + " JD" : ""} type="text" id="Price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
                    </div>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="Bought" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sold at</label>
                        <input key={Math.random()} value={transformDate(ticketInfo?.created_at)} type="text" id="Bought" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
                    </div>
                    <div>
                        <label for="updated" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last update at</label>
                        <input key={Math.random()} value={transformDate(ticketInfo?.updated_at)} type="text" id="updated" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
                    </div>

                </div>
                <div class="inline-flex justify-center gap-3 items-center w-full">
                    <hr class="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
                    <p className='text-black dark:text-white' >Concert Info</p>
                    <hr class="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="concertName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Concert name</label>
                        <input key={Math.random()} value={ticketInfo?.concert.name} type="text" id="concertName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
                    </div>
                    <div>
                        <label for="StartingDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Starting date</label>
                        <input key={Math.random()} value={ticketInfo?.concert.start_date} type="email" id="StartingDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
                    </div>
                    <div>
                        <label for="Time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
                        <input key={Math.random()} value={ticketInfo?.concert.time} type="text" id="Time" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
                    </div>
                    <div>
                        <label for="Location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                        <input key={Math.random()} value={ticketInfo?.concert.location} type="text" id="Location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
                    </div>

                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </>


        </div>
    )
}
