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
export default function TicketsCatgs() {



    return (
        <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-green-600  dark:bg-slate-800'>
            <div className='flex gap-3 items-center'>
                <BsBarChartFill size={25} />
                <p className='text-2xl'>  Tickets Categories Status</p>
            </div>
            <div className='flex justify-center flex-wrap gap-5 mt-3'>


                <Card className="w-fit dark:bg-duaa dark:text-white   rounded-md dark:hover:shadow-white/50 dark:hover:shadow-sm shadow-lg ">
                    {/* <CardHeader color="blue" className="relative h-56">

                </CardHeader> */}
                    <CardBody className="">
                        <Typography variant="h5" className="mb-2 text-center">
                            VIP
                        </Typography>
                        <Typography>
                            <ul className='list-disc '>
                                <li  >Total tickets: 5000</li>
                                <li  >Tickets Sold: 200</li>
                                <li>Tickets available: 200 / 5000</li>
                            </ul>
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                        <Typography variant="small">available: 200 / 5000</Typography>
                        <Typography variant="small" >

                            Active
                        </Typography>
                    </CardFooter>
                </Card>

            </div>
        </div>
    )
}
