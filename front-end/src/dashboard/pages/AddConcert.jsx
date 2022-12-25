import React from 'react'
import { useState } from 'react'
import { MdOutlineAddToPhotos } from 'react-icons/md'
import { HiInformationCircle } from 'react-icons/hi'
import { Alert } from 'flowbite-react'
import { BiUpload } from 'react-icons/bi';
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
export default function AddConcert() {
    const { setConcertsList, setOptions, setActiveConcert } = useContext(AdminContext)
    const [img, setImg] = useState(null);
    const [err, setErr] = useState(false);
    const [success, setSuccess] = useState(false);
    const handleChange = (event) => {
        const file = event.target.files[0];

        const reader = new FileReader();
        reader.onloadend = () => {
            setImg(reader.result);
        };
        reader.readAsDataURL(file);
    };


    const [addConcertData, setAddConcertData] = useState({
        name: "",
        start_date: "",
        end_date: "",
        location: "",
        info: "",
        map: "",
        time: "",
        seats: "",
        banner: "",
        type_id: "",
        description: "",
    })
    const handleSubmit = () => {
        for (let i in addConcertData) {
            if (addConcertData[i] === "") {
                setErr(true)
                // return
            }
        }
        let formData = new FormData();
        formData.append("name", addConcertData.name);
        formData.append("start_date", addConcertData.start_date);
        formData.append("end_date", addConcertData.end_date);
        formData.append("location", addConcertData.location);
        formData.append("info", addConcertData.info);
        formData.append("map", addConcertData.map);
        formData.append("time", addConcertData.time);
        formData.append("seats", addConcertData.seats);
        formData.append("banner", addConcertData.banner);
        formData.append("type_id", addConcertData.type_id);
        formData.append("description", addConcertData.description);

        axios
            .post("/api/add/concert", formData, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            })
            .then((res) => {
                if (res.data.status === 200) {
                    setErr(false)
                    setSuccess(true)
                    setAddConcertData({
                        name: "",
                        start_date: "",
                        end_date: "",
                        location: "",
                        info: "",
                        map: "",
                        time: "",
                        seats: "",
                        banner: "",
                        type_id: "",
                        description: "",
                    })
                    setImg(null)
                    setConcertsList(res.data.concerts)
                    const transformedConcerts = res.data.concerts.map(concert => ({ value: concert.id, label: concert.name }));
                    setOptions(transformedConcerts)
                    setActiveConcert(transformedConcerts[0])
                    console.log(res);
                }
            });




    }
    useEffect(() => {
        console.log(addConcertData);
    }, [addConcertData])


    return (

        <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-candy  dark:bg-slate-800'>
            <p className='text-2xl text-center'>Add New Concert</p>
            <div className=' my-2 p-5 px-7 rounded-3xl  shadow-[inset_0_1px_10px_5px_rgba(0,0,0,0.1)]'>
                {

                    err && <Alert
                        color="failure"
                        icon={HiInformationCircle}
                        onDismiss={function onDismiss() { return setErr(false) }}
                    >
                        <span>
                            <span className="font-medium">
                                Form alert!
                            </span>
                            {' '}Make sure to fill up all the fields.
                        </span>
                    </Alert>
                }

                {
                    success && <Alert
                        color="success"
                        onDismiss={function onDismiss() { return setSuccess(false) }}
                    >
                        <span>
                            <span className="font-medium">
                                Congrats!
                            </span>
                            {' '}Concert added successfully.
                        </span>
                    </Alert>

                }
                <div class="grid gap-6 mb-6 md:grid-cols-2 mt-4">
                    <div>
                        {/* {addFormErrors.class ? <small className='text-bad'>* 3 characters minimum</small> : ""} */}
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Name</label>
                        <input onChange={e => { setAddConcertData({ ...addConcertData, [e.target.name]: e.target.value }) }} name='name' value={addConcertData?.name} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name of the Concert ..." required />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Starting Date </label>
                        <input onChange={e => { setAddConcertData({ ...addConcertData, [e.target.name]: e.target.value }) }} name='start_date' value={addConcertData?.start_date} type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Starting date ..." required />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Ending Date </label>
                        <input onChange={e => { setAddConcertData({ ...addConcertData, [e.target.name]: e.target.value }) }} name='end_date' value={addConcertData?.end_date} type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ending date ..." required />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Location </label>
                        <input onChange={e => { setAddConcertData({ ...addConcertData, [e.target.name]: e.target.value }) }} name='location' value={addConcertData?.location} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City / Location" required />
                    </div>

                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Location on the map </label>
                        <input onChange={e => { setAddConcertData({ ...addConcertData, [e.target.name]: e.target.value }) }} name='map' value={addConcertData?.map} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add a google maps URL ..." required />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Will start at </label>
                        <input onChange={e => { setAddConcertData({ ...addConcertData, [e.target.name]: e.target.value }) }} name='time' value={addConcertData?.time} type="time" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Available seats </label>
                        <input onChange={e => { setAddConcertData({ ...addConcertData, [e.target.name]: e.target.value }) }} name='seats' value={addConcertData?.seats} type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of available seats ..." required />
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* type_id ** select </label>
                        <input onChange={e => { setAddConcertData({ ...addConcertData, [e.target.name]: e.target.value }) }} name='type_id' value={addConcertData?.type_id} type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of available seats ..." required />
                    </div>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-1 mt-4">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Description </label>
                        <textarea onChange={e => { setAddConcertData({ ...addConcertData, [e.target.name]: e.target.value }) }} rows={3} name='description' value={addConcertData?.description} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description about the concert ..." required />
                    </div>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-1 mt-4">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">* Additional info </label>
                        <textarea onChange={e => { setAddConcertData({ ...addConcertData, [e.target.name]: e.target.value }) }} rows={3} name='info' value={addConcertData?.info} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rules or additional info about the concert ..." required />
                    </div>
                </div>

                <div class="grid gap-6 mb-6 md:grid-cols-1 mt-4">


                    <label class="block  text-sm font-medium text-gray-900 dark:text-white">* Upload Image </label>
                    <label className=' group cursor-pointer w-full h-full flex justify-center border-dashed border-2 rounded' htmlFor="inputImage" >

                        <input className='hidden' name='banner' type="file" id='inputImage' onChange={(e) => {
                            handleChange(e);
                            setAddConcertData({ ...addConcertData, [e.target.name]: e.target.files[0] })
                        }} />
                        {
                            img ?
                                <img src={img} alt="Preview" className='w-full h-full hover:opacity-75' />
                                :
                                <BiUpload size={50} className="my-10 group-hover:text-green-400 text-green-600" />
                        }
                    </label>
                </div>
                <div className='w-full flex justify-end gap-x-5' >
                    <button onClick={handleSubmit} class="text-white bg-good hover:bg-navy text-sm rounded-lg p-3 text-center dark:bg-good dark:hover:bg-navy flex gap-3 items-center"> <MdOutlineAddToPhotos size={20} />  <span> Add Category </span></button>

                </div>
            </div >

        </div >
    )
}
