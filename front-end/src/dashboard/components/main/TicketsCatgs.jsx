import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { BsBarChartFill } from 'react-icons/bs';
import { useContext } from 'react';
import { AdminContext } from '../../../context/AdminContext';
export default function TicketsCatgs() {

    const { concertData } = useContext(AdminContext)

    return (
        <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-green-600  dark:bg-slate-800'>
            <div className='flex gap-3 items-center'>
                <BsBarChartFill size={25} />
                <p className='text-2xl'>  Tickets Categories Status</p>
            </div>
            <div className='flex justify-around flex-wrap gap-5 mt-3'>


                {/* <CardHeader color="blue" className="relative h-56">

</CardHeader> */}
                {
                    concertData?.concert?.categories?.map((category, i) => {
                        return (
                            <Card key={i} className="w-fit dark:bg-duaa dark:text-white   rounded-md dark:hover:shadow-white/10 dark:hover:shadow-lg shadow-lg ">
                                <CardBody className="">
                                    <Typography variant="h5" className="mb-2 text-center">
                                        {category?.class}
                                    </Typography>
                                    <Typography>
                                        <span >{category?.description}</span>
                                        <ul className='list-disc '>
                                            <li>  available: {category?.seats - category?.tickets_count} / {category?.seats}
                                            </li>
                                        </ul>
                                    </Typography>
                                </CardBody>
                                <CardFooter divider className="flex items-center justify-between py-3">
                                    <Typography variant="small">Sold: {category?.tickets_count}</Typography>
                                    <Typography variant="small" >

                                        {category?.active}
                                    </Typography>
                                </CardFooter>
                            </Card>
                        )
                    })
                }



            </div>
        </div>
    )
}
