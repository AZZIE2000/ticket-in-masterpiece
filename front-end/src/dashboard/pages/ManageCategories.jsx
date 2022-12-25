import axios from 'axios'
import { Toast } from 'flowbite-react'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { HiFire } from 'react-icons/hi'
import { MdOutlineAddToPhotos } from 'react-icons/md'
import { AdminContext } from '../../context/AdminContext'
import CategForm from '../components/categories/CategForm'
// import swal from 'sweetalert';
export default function ManageCategories() {
    const { concertData, setConcertData } = useContext(AdminContext)


    const [addForm, setAddForm] = useState({
        concert_id: concertData?.concert?.id,
        class: "",
        description: "",
        area: "",
        price: "",
        seats: "",
    })
    const [addFormErrors, setAddFormErrors] = useState({
        class: false,
        description: false,
        area: false,
        price: false,
        seats: false,
    })
    const handleFormData = (n, v) => {
        setAddForm({ ...addForm, [n]: v })
        if (n === 'price' || n === 'seats') {
            if (v.trim().replace(/ /g, "") !== "" && v.trim().replace(/ /g, "").length >= 2) {
                setAddFormErrors({ ...addFormErrors, [n]: false })
                return
            } else {
                setAddFormErrors({ ...addFormErrors, [n]: true })
                return
            }
        }
        if (v.trim().replace(/ /g, "") !== "" && v.trim().replace(/ /g, "").length >= 3) {
            setAddFormErrors({ ...addFormErrors, [n]: false })
        } else {
            setAddFormErrors({ ...addFormErrors, [n]: true })
        }
    }
    useEffect(() => {
        setAddForm({ ...addForm, concert_id: concertData?.concert?.id, })
        // console.log(addForm);
    }, [concertData])

    const handleSubmit = () => {
        for (let i in addFormErrors) {
            if (addFormErrors[i]) {
                alert('there is an issue')
                return
            }
        }
        for (let i in addForm) {
            if (addForm[i] === "") {
                alert('there is an issue')
                return
            }
        }

        axios.post('/api/add/category', addForm).then(res => {
            if (res.data.status === 200) {
                console.log(res);
                console.log('concertData');
                console.log(concertData);
                setConcertData({ ...concertData, concert: res.data.concert })
                setAddForm({
                    concert_id: concertData?.concert?.id,
                    class: "",
                    description: "",
                    area: "",
                    price: "",
                    seats: "",
                })
                setAddFormErrors({
                    class: false,
                    description: false,
                    area: false,
                    price: false,
                    seats: false,
                })
            }
        })
    }



    useEffect(() => {
        console.log('after');
        console.log(concertData);
        // console.log('concertData');
        // console.log(concertData);
        // console.log(addForm);
        // console.log(addFormErrors);
    }, [concertData])
    return (
        <>

            <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-candy  dark:bg-slate-800'>
                <p className='text-2xl text-center'>Manage Categories</p>
                {
                    concertData?.concert?.categories.map((category, i) => {

                        return <CategForm key={i} concert={concertData?.concert?.id} category={category} />
                    })
                }


            </div>
            <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-yellow-300  dark:bg-slate-800'>

                <p className='text-2xl text-center pb-4 '>Add Ticket Category</p>
                <div className=' my-2 p-5 px-7 rounded-3xl  shadow-[inset_0_1px_10px_5px_rgba(0,0,0,0.1)]'>


                    <div class="grid gap-6 mb-6 md:grid-cols-2 mt-4">
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Class {addFormErrors.class ? <small className='text-bad'>* 3 characters minimum</small> : ""}</label>
                            <input onChange={(e) => handleFormData(e.target.name, e.target.value)} value={addForm.class} name='class' type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Class of the ticket ..." required />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Area {addFormErrors.area ? <small className='text-bad'>* 3 characters minimum</small> : ""}</label>
                            <input onChange={(e) => handleFormData(e.target.name, e.target.value)} value={addForm.area} name='area' type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe where the customers will be seated ..." required />
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Price {addFormErrors.price ? <small className='text-bad'>* Please fill</small> : ""}</label>
                            <input onChange={(e) => handleFormData(e.target.name, e.target.value)} value={addForm.price} name='price' type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How much will it coast" pattern="[0-9]" required />
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Available {addFormErrors.seats ? <small className='text-bad'>* Please fill</small> : ""}</label>
                            <input onChange={(e) => handleFormData(e.target.name, e.target.value)} value={addForm.seats} name='seats' type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="How many seats available" pattern="[0-9]" required />
                        </div>
                    </div>
                    <div class="grid gap-6 mb-6 md:grid-cols-1 mt-4">
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Description {addFormErrors.description ? <small className='text-bad'>* 3 characters minimum</small> : ""}</label>
                            <textarea rows={3} onChange={(e) => handleFormData(e.target.name, e.target.value)} value={addForm.description} name='description' type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description about the ticket ..." required />
                        </div>
                    </div>
                    <div className='w-full flex justify-end gap-x-5' >
                        <button onClick={handleSubmit} class="text-white bg-good hover:bg-navy text-sm rounded-lg p-3 text-center dark:bg-good dark:hover:bg-navy flex gap-3 items-center"> <MdOutlineAddToPhotos size={20} />  <span> Add Category </span></button>

                    </div>
                </div>
            </div>
        </>
    )
}
