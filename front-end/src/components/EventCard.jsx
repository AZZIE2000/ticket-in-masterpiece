import { Button } from 'flowbite-react'
import React from 'react'


export default function EventCard({ name }) {
    return (

        <>

            <div className={`flex flex-col  shadow-md justify-between my-5 hover:shadow-lg dark:shadow-gray-700/25 hover:dark:shadow-gray-700/25 max-w-sm dark:bg-gray-800 rounded m-auto  border-t-4 border-t-navy dark:border-t-candy`}>

                <div className="  ">
                    <p className='p-5 text-center'>{name}<small> </small></p>

                </div>

                <div className=" border-dashed border-t-2 border-t-slate-500 p-5 relative before:content-[''] before:absolute before:block before:-top-[8%] before:-left-10px before:w-6 before:h-6   before:bg-white before:rounded-full   before:dark:bg-duaa
                before:dark:shadow-[inset_-3px_0px_2px_rgba(107,114,128,0.3)]
                after:dark:shadow-[inset_3px_0px_2px_rgba(107,114,128,0.3)]
                before:shadow-[inset_-3px_0px_2px_rgba(41,54,61,0.15)] after:content-[''] after:dark:bg-duaa after:absolute after:block after:-top-[8%] after:-right-10px after:w-6 after:h-6 after:bg-white after:rounded-full   after:shadow-[inset_3px_0px_2px_rgba(41,54,61,0.15)]">

                    <div className='flex justify-around pt-2'>

                        <p className="text-sm text-center">Price</p>

                        <h3 className="font-mono text-center">50 JD</h3>
                    </div>
                    <div>
                        <ul className=''>
                            <li className='list-item'>asdasd</li>
                        </ul>
                    </div>

                    <div className='flex justify-center w-full  '>
                        <button className='p-2 dark:bg-candy dark:hover:bg-navy bg-navy hover:bg-candy text-white font-bold text-lg rounded-full w-full m-3'>+</button>
                    </div>
                </div>
            </div>




        </>

    )
}