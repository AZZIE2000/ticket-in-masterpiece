import React, { useContext, useEffect, useRef } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
import { MdOutlineAddToPhotos } from 'react-icons/md';
export default function AddTypes() {
    const { types, delType, addType } = useContext(AdminContext)
    const input = useRef()
    const edit = (id, data) => {
        const lol = {
            id: id,
            data: data
        }
        axios.post('/api/edit/types', lol).then(res => {

        })
    }
    const handleAdd = () => {
        const data = {
            data: input.current.value
        }
        addType(data)
    }
    return (
        <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-candy  dark:bg-slate-800'>
            <p className='text-2xl text-center'>Manage Types</p>

            <div class="relative overflow-x-auto mt-5">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 flex items-end gap-2">
                                Name <small className='text-good'>  Double click to edit</small>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Actions
                            </th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            types?.map((type) => {

                                return (<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th onBlur={(e) => edit(type?.id, e.target.innerText)} contentEditable class="px-6 w-full py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {type?.title}
                                    </th>
                                    <td class="px-6 py-4  flex gap-2">
                                        <AiFillDelete className='text-bad cursor-pointer ' size={25} onClick={() => delType(type?.id)} />
                                    </td>
                                </tr>)
                            })
                        }

                    </tbody>
                </table>
                <div className='mt-5 flex items-end gap-5'>
                    <div className='w-full'>

                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add New Type</label>
                        <input ref={input} key={Math.random()} name='seat' type="text" class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                    </div>
                    <button onClick={handleAdd} class="text-white bg-good hover:bg-navy text-sm rounded-lg p-3 text-center dark:bg-good dark:hover:bg-navy flex gap-3 items-center"> <MdOutlineAddToPhotos size={20} />  <span> Add  </span></button>

                </div>
            </div>

        </div>
    )
}
