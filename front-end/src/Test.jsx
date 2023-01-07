import React from 'react'
import logo from './Light_logo.png'
export default function Test() {
    return (
        <div className='h-screen w-screen '>
            <div className='h-32 border-b-2 flex items-center justify-evenly'>
                <img src={logo} className='w-52' />
                <p className='text-lg'>Json BLah adsasdas asdas blah</p>
            </div>
            <div className='flex justify-around mt-10'>
                <span>

                    <p>Ticket serial number:</p>
                    <p>asdasd658d6as5sda64s</p>

                </span>
                <div className='w-52 h-52 '>
                    {/* qrCode */}
                </div>
            </div>

        </div>
    )
}
