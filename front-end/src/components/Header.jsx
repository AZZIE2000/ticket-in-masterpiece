// import { Carousel } from 'flowbite-react'
// import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import image0 from "../images/0.png";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";

export default function Header() {

    return (
        // <div className=" container mx-auto h-56 sm:h-64 xl:h-80 2xl:h-96">
        //     <Carousel slideInterval={5000}>

        //        
        //         <img
        //             src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        //             alt="..."
        //         />
        //         <img
        //             src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        //             alt="..."
        //         />

        //     </Carousel>
        // </div>
        <Swiper
            // className='h-full  '
            // modules={[Autoplay]}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }}
            // onSlideChange={(e) => console.log(e.activeIndex)}
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            autoplay={{
                delay: 3000,

                disableOnInteraction: true
            }}
            loop
            className='swiper-container'
        // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide >
                <img
                    className=' w-full h-full object-scale-down lg:h-[500px] lg:object-cover '
                    src={image0}
                    alt="..."
                />
            </SwiperSlide>
            <SwiperSlide >
                <img
                    className=' w-full h-full object-scale-down lg:h-[500px] lg:object-cover '
                    src={image1}
                    alt="..."
                />
            </SwiperSlide>
            <SwiperSlide >
                <img
                    className=' w-full h-full object-scale-down lg:h-[500px] lg:object-cover '
                    src={image2}
                    alt="..."
                />
            </SwiperSlide>
            <SwiperSlide >
                <img
                    className=' w-full h-full object-scale-down lg:h-[500px] lg:object-cover '
                    src={image3}
                    alt="..."
                />
            </SwiperSlide>
            <SwiperSlide >
                <img
                    className=' w-full h-full object-scale-down lg:h-[500px] lg:object-cover '
                    src={image4}
                    alt="..."
                />
            </SwiperSlide>



        </Swiper>
    )
}
