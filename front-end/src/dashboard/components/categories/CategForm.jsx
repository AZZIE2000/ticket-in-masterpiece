import axios from 'axios'
import React, { useContext } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { AdminContext } from '../../../context/AdminContext'

export default function CategForm({ category, concert }) {
    const { setConcertData, concertData } = useContext(AdminContext)
    const updateCategory = (id, key, val) => {
        if (category[key] === val || val === "" || val === " ") {
            return
        }
        const data = {
            id: id,
            key: key,
            newVal: val,
            concert: concert
        }
        axios.post('/api/update/category', data).then(res => {
            setConcertData({ ...concertData, concert: res.data.concert })
            console.log(res);
        })
    }
    const handleDelete = (id) => {
        console.log(id);
    }
    return (
        <div className=' my-2 p-5 px-7 rounded-3xl  shadow-[inset_0_1px_10px_5px_rgba(0,0,0,0.1)]     '>
            <div key={category?.id} class="inline-flex py-3 mt-4 justify-center gap-x-3 items-center w-full">
                <hr class=" w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
                <p className='text-black dark:text-white' >{category?.class}</p>
                <hr class=" w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class</label>
                    <input key={Math.random()} onBlur={(e) => updateCategory(category?.id, 'class', e.target.value)} defaultValue={category?.class} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="VIP" required />
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input key={Math.random()} onBlur={(e) => updateCategory(category?.id, 'description', e.target.value)} defaultValue={category?.description} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@text.com" required />
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area</label>
                    <input key={Math.random()} onBlur={(e) => updateCategory(category?.id, 'area', e.target.value)} defaultValue={category?.area} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" required />
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                    <input key={Math.random()} onBlur={(e) => updateCategory(category?.id, 'price', e.target.value)} defaultValue={category?.price} type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]" required />
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Is Active</label>
                    <select onBlur={(e) => updateCategory(category?.id, 'active', e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                        <option selected={category?.active == 1} value="1">YES</option>
                        <option selected={category?.active == 0} value="0">NO</option>
                    </select>
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Available</label>
                    <input onBlur={(e) => updateCategory(category?.id, 'seats', e.target.value)} key={Math.random()} defaultValue={category?.seats} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="yes" required />
                </div>
            </div>
            <div className='w-full flex justify-end ' >
                <button onClick={() => handleDelete(category?.id)} class="text-white bg-bad hover:bg-navy text-sm rounded-lg p-3 text-center dark:bg-bad dark:hover:bg-navy flex items-center gap-3 "> <AiFillDelete size={20} /> <span> Delete Category </span></button>
            </div>
        </div>
    )
}
