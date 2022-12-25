import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { BiUpload } from 'react-icons/bi'
import { MdOutlineAddToPhotos } from 'react-icons/md'
import { AdminContext } from '../../context/AdminContext'

export default function EditConcert() {
    const { concertData } = useContext(AdminContext)
    useEffect(() => {
        console.log("concertData");
        console.log(concertData);
        setImg(concertData?.concert?.banner)
    }, [concertData])

    const [img, setImg] = useState(null)

    const handleEdit = (key, val) => {
        if (val === concertData?.concert[key] || val.trim() === "") {
            return
        }
        const data = {
            id: concertData?.concert?.id,
            key: key,
            val: val,
        }
        axios.post("/api/edit/concert", data).then((res) => {
            console.log(res);
        })
    }
    const handleImg = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImg(reader.result);
        };
        reader.readAsDataURL(file);

        let formData = new FormData();
        formData.append("banner", e.target.files[0]);
        formData.append("id", concertData?.concert?.id);
        axios.post("/api/edit/concert/img", formData, {
            headers: {
                "Content-type": "multipart/form-data",
            },
        }).then((res) => {
            console.log(res);
        })


    }

    return (
        <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-candy  dark:bg-slate-800'>
            <p className='text-2xl text-center'>Manage Concert</p>

            <div className=' my-2 p-5 px-7 rounded-3xl  shadow-[inset_0_1px_10px_5px_rgba(0,0,0,0.1)]'>


                <div class="grid gap-6 mb-6 md:grid-cols-2 mt-4">
                    <div>
                        {/* {addFormErrors.class ? <small className='text-bad'>* 3 characters minimum</small> : ""} */}
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Name</label>
                        <input key={Math.random()} onBlur={e => handleEdit(e.target.name, e.target.value)} name='name' defaultValue={concertData?.concert?.name} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of the Concert ..." required />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Starting Date </label>
                        <input key={Math.random()} onBlur={e => handleEdit(e.target.name, e.target.value)} name='start_date' defaultValue={concertData?.concert?.start_date} type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Starting date ..." required />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Ending Date </label>
                        <input key={Math.random()} onBlur={e => handleEdit(e.target.name, e.target.value)} name='end_date' defaultValue={concertData?.concert?.end_date} type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ending date ..." required />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Location </label>
                        <input key={Math.random()} onBlur={e => handleEdit(e.target.name, e.target.value)} name='location' defaultValue={concertData?.concert?.location} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City / Location" required />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Location on the map </label>
                        <input key={Math.random()} onBlur={e => handleEdit(e.target.name, e.target.value)} name='map' defaultValue={concertData?.concert?.map} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a google maps URL ..." required />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Will start at </label>
                        <input key={Math.random()} onBlur={e => handleEdit(e.target.name, e.target.value)} name='time' defaultValue={concertData?.concert?.time} type="time" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Available seats </label>
                        <input key={Math.random()} onBlur={e => handleEdit(e.target.name, e.target.value)} name='seats' defaultValue={concertData?.concert?.seats} type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of available seats ..." required />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* type_id ** select </label>
                        <input key={Math.random()} onBlur={e => handleEdit(e.target.name, e.target.value)} name='type_id' defaultValue={concertData?.concert?.type_id} type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of available seats ..." required />
                    </div>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-1 mt-4">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Description </label>
                        <textarea key={Math.random()} onBlur={e => handleEdit(e.target.name, e.target.value)} rows={3} name='description' defaultValue={concertData?.concert?.description} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description about the concert ..." required />
                    </div>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-1 mt-4">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Additional info </label>
                        <textarea key={Math.random()} onBlur={e => handleEdit(e.target.name, e.target.value)} rows={3} name='info' defaultValue={concertData?.concert?.info} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rules or additional info about the concert ..." required />
                    </div>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-1 mt-4">


                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">* Upload Image </label>
                    <label className=' group cursor-pointer w-full h-full flex justify-center border-dashed border-2 rounded' htmlFor="inputImage" >

                        <input key={Math.random()} className='hidden' name='banner' type="file" id='inputImage' onChange={(e) => {
                            handleImg(e);
                            // setAddConcertData({ ...addConcertData, [e.target.name]: e.target.files[0] })
                        }} />
                        {
                            img ?
                                <img key={Math.random()} src={img} alt="Preview" className='w-full h-full hover:opacity-75' />
                                :
                                <BiUpload size={50} className="my-10 group-hover:text-green-400 text-green-600" />
                        }
                    </label>
                </div>
                <div className='w-full flex justify-end gap-x-5' >
                    <button class="text-white bg-good hover:bg-navy text-sm rounded-lg p-3 text-center dark:bg-good dark:hover:bg-navy flex gap-3 items-center"> <MdOutlineAddToPhotos size={20} />  <span> Add Category </span></button>

                </div>
            </div>

        </div>
    )
}
