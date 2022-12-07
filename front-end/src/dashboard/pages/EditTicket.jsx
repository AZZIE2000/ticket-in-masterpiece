import { TextInput } from 'flowbite-react'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function EditTicket() {
    return (
        <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-candy  dark:bg-slate-800'>
            <p className='text-2xl'>Manage Tickets</p>
            <div class="my-6">

                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search for a Ticket</label>
                <div className='flex gap-3 my-2'>

                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="Ticket serial number"
                        required={true}
                        className='w-full '
                    // onChange={(e) => setSearch(e.target.value)}
                    />
                    <button class="text-white bg-navy hover:bg-candy text-sm rounded-lg px-3 text-center dark:bg-candy dark:hover:bg-navy "><FaSearch /></button>
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
                        <input type="text" id="UserName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div>
                        <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="Email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@email.com" required />
                    </div>

                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                        <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>

                </div>
                <div class="inline-flex justify-center gap-3 items-center w-full">
                    <hr class="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
                    <p className='text-black dark:text-white' >Ticket Info</p>
                    <hr class="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="serialNum" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Serial number</label>
                        <input type="text" id="serialNum" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="serialNum" required />
                    </div>
                    <div>
                        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ticket Category</label>
                        <input type="email" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="VIP" required />
                    </div>

                    <div>
                        <label for="seat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seat number</label>
                        <input type="text" id="seat" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="c8" required />
                    </div>
                    <div>
                        <label for="Bought" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sold at</label>
                        <input type="text" id="Bought" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="25/4/2022" required />
                    </div>

                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-3">
                    <div>
                        <label for="updated" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last update at</label>
                        <input type="text" id="updated" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="25/5/2022" required />
                    </div>
                    <div>
                        <label for="scanned" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Scanned</label>
                        <input type="text" id="scanned" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="yes" required />
                    </div>
                    <div>
                        <label for="Price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="text" id="Price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="yes" required />
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
                        <input type="text" id="concertName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amir diab" required />
                    </div>
                    <div>
                        <label for="StartingDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Starting date</label>
                        <input type="email" id="StartingDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="VIP" required />
                    </div>
                    <div>
                        <label for="Time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
                        <input type="text" id="Time" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="c8" required />
                    </div>
                    <div>
                        <label for="Location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                        <input type="text" id="Location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="25/4/2022" required />
                    </div>
                    <div>
                        <label for="Type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                        <input type="text" id="updated" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="25/5/2022" required />
                    </div>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </>


        </div>
    )
}
