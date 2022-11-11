import React from 'react'

export default function DesignOne(props) {
    const displayTicket = props.funDisplayTicket
    return (

        <div className=' rounded-xl bg-slate-600 relative h-[300px] w-[300px] sm:w-[300px] md:w-[400px] lg:w-[500px] mx-auto'>
            <div onClick={() => displayTicket(1)} className='bg-black rounded-xl h-[300px] w-[300px] sm:w-[300px] md:w-[400px] lg:w-[500px] mx-auto absolute' style={{ clipPath: "polygon(100% 0, 100% 20%, 60% 20%, 60% 45%, 40% 45%, 40% 20%, 0 20%, 0 0)" }}> </div>
            <div onClick={() => displayTicket(2)} className='bg-candy rounded-xl h-[300px] w-[300px] sm:w-[300px] md:w-[400px] lg:w-[500px] mx-auto absolute' style={{ clipPath: "polygon(70% 20%, 60% 20%, 60% 45%, 40% 45%, 40% 20%, 30% 20%, 30% 60%, 70% 60%)" }}></div>
            <div onClick={() => displayTicket(3)} className='bg-grape rounded-xl h-[300px] w-[300px] sm:w-[300px] md:w-[400px] lg:w-[500px] mx-auto absolute' style={{ clipPath: "polygon(70% 20%, 70% 60%, 30% 60%, 30% 20%, 15% 20%, 15% 70%, 30% 80%, 70% 80%, 85% 70%, 85% 20%)" }}></div>
            <div onClick={() => displayTicket(4)} className='bg-slate-600 rounded-xl h-[300px] w-[300px]   sm:w-[300px] md:w-[400px] lg:w-[500px] mx-auto absolute' style={{ clipPath: "polygon(100% 20%, 100% 100%, 0 100%, 0 20%, 15% 20%, 15% 70%, 30% 80%, 70% 80%, 85% 70%, 85% 20%)" }}></div>
        </div>

    )
}
