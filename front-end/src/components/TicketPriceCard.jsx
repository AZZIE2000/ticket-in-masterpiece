import { Button, Card } from 'flowbite-react'
import React from 'react'

export default function TicketPriceCard(props) {

    const tickets = props.tickets
    const add = props.add
    const remove = props.remove
    return (
        <div className="flex flex-col mt-2 lg:mt-5 md:mt-5 sm:mt-20  shadow-md justify-between min-w-[300px] max-w-xs rounded m-auto  border-t-4 border-t-candy">
            <div className="p-2 ">
                <p className='text-center'>Ticket Class</p>
            </div>

            <div className=" border-dashed border-t-2 border-t-slate-500 p-5 relative before:content-[''] before:absolute before:block before:-top-5% before:-left-10px before:w-6 before:h-6 before:bg-white before:rounded-full   before:shadow-[inset_-3px_0px_2px_rgba(41,54,61,0.15)] after:content-[''] after:absolute after:block after:-top-5% after:-right-10px after:w-6 after:h-6 after:bg-white after:rounded-full   after:shadow-[inset_3px_0px_2px_rgba(41,54,61,0.15)]">
                <p className="text-sm text-center">where you gonna be seated / Info</p>
                <div className='h-5'></div>
                <span className='flex justify-around'>

                    <p className="font-mono text-center"><i> 50 JD</i></p>
                    <p className="font-mono text-center"><i> 4 / Tickets</i></p>
                </span>
                <div className='h-5'></div>
                <div className='flex'>
                    <Button.Group >
                        <Button size={"md"} onClick={remove} color="gray">
                            -

                        </Button>
                        <span className='px-3 text-center text-[1.3rem] border-2'>{tickets} </span>
                        <Button size={"md"} onClick={add} color="gray">
                            +
                        </Button>
                    </Button.Group>
                    <Button
                        className='mx-auto'
                        outline={true}
                        gradientDuoTone="purpleToPink"
                    >
                        Buy Now
                    </Button>
                </div>
            </div>
        </div>
        // <div className="max-w-sm">

        //     <Card

        //     >

        //         <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        //             Ticket Class
        //         </h5>

        //         <div className="mt-2.5 mb-5 flex items-center">
        //             where you gonna be seated / Info
        //         </div>
        //         <div className="flex items-center justify-between">
        //             <span className="text-2xl font-bold text-gray-900 dark:text-white">
        //                 599 JD
        //                 <small className='text-[12px]'> Total / 4 Tickets</small>
        //             </span>
        //             <Button.Group >
        //                 <Button onClick={remove} color="gray">
        //                     -

        //                 </Button>
        //                 <span className='px-3 text-center text-[1.5rem] border-2'>{tickets} </span>
        //                 <Button onClick={add} color="gray">
        //                     +
        //                 </Button>
        //             </Button.Group>

        //         </div>
        //         <a
        //             href="#"
        //             className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        //         >
        //             Add to cart
        //         </a>
        //     </Card>
        // </div>
    )
}
