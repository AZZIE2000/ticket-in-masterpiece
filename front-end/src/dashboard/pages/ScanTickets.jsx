import axios from 'axios';
import React, { useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { QrReader } from 'react-qr-reader';

function ScanTickets() {
    const [data, setData] = useState();
    const [open, setOpen] = useState(false);

    const scanIt = (serial) => {
        const data = {
            id: serial
        }
        axios.post('/api/scan', data).then(res => {
            if (res.data.done === 'good') {
                alert('done')
            } else {
                alert('awwwww')

            }
        }).catch(res => {
            console.log(res);
        })
    }

    function QrReaderWrapper() {
        return (
            <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                        scanIt(result?.text);
                        console.log(result?.text);
                        setOpen(false)
                    }

                    if (!!error) {
                        console.info(error);
                    }
                }}
                style={{ width: '100%' }}
            />
        );
    }

    return (
        <>
            {
                open ?
                    <QrReaderWrapper /> :

                    <div className='w-full h-full flex justify-center items-center'>
                        <button onClick={() => setOpen(true)} className='px-10 py-7 text-lg flex items-center gap-4 rounded-lg bg-good focus:bg-good/95'> <AiFillCamera size={30} /> Open camera</button>
                    </div>
            }
        </>
    )
}

export default ScanTickets;