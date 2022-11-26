
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WebContext } from '../context/WebContext';
export default function Header() {
    const { banners } = useContext(WebContext)

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
                banners?.map((banner) => {
                    return (
                        <SwiperSlide key={banner?.id} >
                            <Link to={`single-event/${banner?.id}`}>
                                <img
                                    className=' w-full h-full object-scale-down lg:h-[500px] lg:object-cover '
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
