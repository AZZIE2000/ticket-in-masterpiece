import React from 'react'
import CategForm from '../components/categories/CategForm'

export default function ManageCategories() {
    return (
        <>
            <div className='m-9 p-5 rounded-3xl border-t-4 shadow-lg border-green-500  dark:bg-slate-800'>
                <p className='text-xl '>Concert: amir azieyo</p>


            </div>
            <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-candy  dark:bg-slate-800'>
                <p className='text-2xl text-center'>Manage Categories</p>

                <CategForm />
                <CategForm />
                <CategForm />

            </div>
            <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-yellow-300  dark:bg-slate-800'>
                <div className='flex justify-around'>

                    <p className='text-2xl '>Add Ticket Category</p>
                    <p className='text-2xl '>Concert: amir azieyo</p>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="UserName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class</label>
                        <input type="text" id="UserName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="VIP" required />
                    </div>
                    <div>
                        <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <input type="email" id="Email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@email.com" required />
                    </div>

                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area</label>
                        <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" required />
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input type="number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]" required />
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available</label>
                        <input type="number" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]" required />
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Is Active</label>
                        <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="yes" required />
                    </div>

                </div>
                <div className='w-full flex justify-center gap-x-5' >
                    <button class="text-white bg-navy hover:bg-candy text-sm rounded-lg p-3 text-center dark:bg-candy dark:hover:bg-navy ">Add</button>

                </div>
            </div>
        </>
    )
}
