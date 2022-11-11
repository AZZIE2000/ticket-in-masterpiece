import { Button } from 'flowbite-react'
import React from 'react'


export default function EventCard() {
    return (

        <>

            <div className="flex flex-col shadow-md justify-between max-w-xs rounded m-auto  border-t-4 border-t-candy">
                <div className="p-5 ">
                    <p>concert title</p>
                    <img className='' src="https://w7.pngwing.com/pngs/313/180/png-transparent-rock-concert-music-festival-rock-music-others-stage-performance-computer-wallpaper-thumbnail.png" alt="" />
                </div>

                <div className=" border-dashed border-t-2 border-t-slate-500 p-5 relative before:content-[''] before:absolute before:block before:-top-5% before:-left-10px before:w-6 before:h-6 before:bg-white before:rounded-full   before:shadow-[inset_-3px_0px_2px_rgba(41,54,61,0.15)] after:content-[''] after:absolute after:block after:-top-5% after:-right-10px after:w-6 after:h-6 after:bg-white after:rounded-full   after:shadow-[inset_3px_0px_2px_rgba(41,54,61,0.15)]">
                    <p className="text-sm text-center">Amman-Airport.st</p>

                    <h3 className="font-mono text-center">07:00 PM</h3>

                    <p className="font-mono text-center"><i> 11 / November</i></p>
                    <Button
                        className='mx-auto'
                        outline={true}
                        gradientDuoTone="purpleToPink"
                    >
                        Buy Now
                    </Button>
                </div>
            </div>




        </>

    )
}
