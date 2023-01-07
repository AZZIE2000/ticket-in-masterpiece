
import React, { useRef } from 'react';

import axios from 'axios';
export default function SellTickets() {
    const sendEmail = () => {
        console.log('hi');
        axios.post('/api/sendEmail').then((res) => {
            console.log(res);
        })

        // var templateParams = {
        //     name: 'James',
        //     notes: 'Check this out!'
        // };

        // emailjs.send('service_z4qu28k', 'template_jxpgb3f', templateParams, 'GkDhVUSYg05AZiL4z')
        //     .then((response) => {
        //         console.log('SUCCESS!', response.status, response.text);
        //     }, (error) => {
        //         console.log('FAILED...', error);
        //     });
    }
    return (
        <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-candy  dark:bg-slate-800'>
            <p className='text-2xl'>Sell Tickets</p>
            <button onClick={sendEmail} className='p-5 bg-good rounded mx-auto'>Send</button>
        </div>
    )
}
