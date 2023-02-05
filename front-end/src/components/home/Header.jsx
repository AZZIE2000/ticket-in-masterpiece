
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { WebContext } from '../../context/WebContext';
export default function Header() {
    const { banners } = useContext(WebContext)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        if (banners && banners.length > 0) {
            setLoading(false)

        }
    }, [banners])
    return (

        <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            autoplay={{
                delay: 5000,
                disableOnInteraction: true
            }}
            loop
            className='swiper-container'
        >

            {
                loading ? <div
                    className=' bg-slate-500 animate-pulse w-full h-full object-scale-down lg:h-[500px] lg:object-cover '


                ></div> :
                    banners?.map((banner) => {
                        return (
                            <SwiperSlide key={banner?.id} >
                                <Link to={`single-event/${banner?.id}`}>
                                    <img
                                        className=' w-full h-full object-scale-down lg:h-[600px] lg:object-cover '
                                        src={banner?.banner}
                                        alt="..."
                                    />
                                </Link>
                            </SwiperSlide>
                        )

                    })
            }

        </Swiper>
    )
}
