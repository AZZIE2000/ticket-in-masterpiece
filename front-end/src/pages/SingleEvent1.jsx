// React thingies
import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
// React thingies

// Import Swiper React components
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// Import Swiper React components

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
// AOS

// Components & icons

import { BsFillCalendarEventFill, BsFillClockFill, BsFillGeoAltFill, BsCircleFill } from 'react-icons/bs';
import { FaMinus, FaPlus } from 'react-icons/fa';
// Components & icons

// Context
import { CheckoutContext } from '../context/CheckoutContext';
import { WebContext } from '../context/WebContext';
import { AuthContext } from '../context/AuthContext';
import { useCookies } from 'react-cookie';
import EventCard from '../components/SingleEvent/EventCard';
// Context

export default function SingleEvent1() {
    const [cookies, setCookie, removeCookie] = useCookies(['Token']);
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        AOS.init({ once: true });

    }, [])

    const { setShow, token } = useContext(AuthContext)
    useEffect(() => {

        console.log("token");
        console.log(token);
    }, [token])
    const { month } = useContext(WebContext)
    const { cart, setCart, concertToBuy, setConcertToBuy } = useContext(CheckoutContext)
    // call how many tickets available and stop adding when their over
    const [concert, setConcert] = useState()
    const [table, setTable] = useState([])
    useEffect(() => {
        axios.get(`/api/concert/info/${id}`).then((res) => {
            if (res.status === 200) {
                setConcert(res.data.concert)


            } else {
                console.log(res)
            }
        });
    }, []);

    useEffect(() => {
        // console.log(cart);
        const uniq = cart => [...new Set(cart)];
        uniq(cart)
        setTable(uniq(cart))

    }, [cart])

    useEffect(() => {
        // console.log(table);
    }, [table])
    const amount = (id) => cart.filter(x => x == id).length
    const total = (id) => {
        return concert?.categories.map((ticket) => {
            if (ticket.id === id) {
                // return "yes"
                return ((cart.filter(x => x == id).length) * (ticket.price))
            }

        })
    }

    const totalPrice = () => {
        let total = 0;
        cart.map((ticket) => {
            concert?.categories.map((item) => {
                if (ticket === item.id) {
                    total = total + item.price
                }
            })
        })
        return total;
    }
    const deleteTicket = (id) => {
        var index = cart.indexOf(id);
        if (index > -1) {
            cart.splice(index, 1);
            const newCart = [...cart]
            setCart(newCart)
            localStorage.setItem("tickets", JSON.stringify(newCart))
            console.log("done");
            console.log(newCart)
        }

        return cart;

    }
    const min = null
    const max = null
    const addTicket = (ticket) => {
        if (min && max && min !== 0 && max !== 0) {

            setConcertToBuy(concert.id)
            if (cart.length < max) {
                if (cart.length >= min) {
                    const tt = [...cart, ticket]
                    setCart(tt)
                    localStorage.setItem("tickets", JSON.stringify(tt))
                    localStorage.setItem("for", concert.id)
                } else {
                    let arr = []
                    for (let index = 0; index < min; index++) {
                        arr.push(ticket)
                    }
                    const tt = [...cart, ...arr]
                    setCart(tt)
                    localStorage.setItem("tickets", JSON.stringify(tt))
                    localStorage.setItem("for", concert.id)
                }
            }
        } else {
            const tt = [...cart, ticket]
            setCart(tt)
            localStorage.setItem("tickets", JSON.stringify(tt))
            localStorage.setItem("for", concert.id)
        }
    }


    return (

        <>
            <div className=' flex justify-center mt-10 overflow-hidden mx-auto'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={concert?.categories.length == 1 ? 1 : concert?.categories.length == 2 ? 2 : 3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    // pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper min-w-[150%] -z-20 sm:min-w-[100%] mx-auto  "
                >

                    {
                        concert?.categories.map((ticket) => {
                            return (
                                <SwiperSlide key={ticket?.id}  >
                                    <EventCard crrId={id} ticket={ticket} concertId={concert?.id} />
                                </SwiperSlide>
                            )
                        })
                    }



                </Swiper>
            </div>
            <div className="md:flex px-5 mt-10    container block justify-center">
                {
                    cart?.length > 0 ?
                        <div
                            className="overflow-hidden container  md:w-1/2 w-full   overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700"
                        >
                            <table
                                data-aos-duration="2000"
                                data-aos={"fade-top"}
                                className="min-w-full   divide-y divide-gray-200 text-[12px] md:text-sm dark:divide-gray-700"
                            >
                                <thead className="bg-gray-100 dark:bg-gray-800">
                                    <tr>
                                        <th
                                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                                        >
                                            Ticket
                                        </th>
                                        <th
                                            className="whitespace-nowrap px-1 py-2 text-left font-medium text-gray-900 dark:text-white"
                                        >
                                            Quantity
                                        </th>
                                        <th
                                            className="whitespace-nowrap px-1 py-2 text-left font-medium text-gray-900 dark:text-white"
                                        >
                                            Total
                                        </th>
                                        <th
                                            className="whitespace-nowrap px-2 py-2 text-left font-medium text-gray-900 dark:text-white"
                                        >
                                            Price
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">


                                    {
                                        table?.map((Tticket) => {

                                            return concert?.categories.map((catTicket, i) => {

                                                if (Tticket === catTicket.id) {

                                                    return (

                                                        <tr key={i}>
                                                            <td
                                                                className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"

                                                            >
                                                                {catTicket.class}
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap px-1 py-2 flex gap-x-2 text-gray-700 dark:text-gray-200"
                                                            >
                                                                <button onClick={() => deleteTicket(catTicket.id)} className='text-white   border bg-navy hover:bg-candy dark:bg-candy dark:hover:bg-navy border-black dark:border-black rounded-full p-[2px]' ><FaMinus /></button>
                                                                {
                                                                    <span>{amount(catTicket.id)}</span>
                                                                }
                                                                <button onClick={() => addTicket(catTicket.id)} className='text-navy dark:text-candy hover:text-candy dark:hover:text-white border border-black dark:border-white rounded-full p-[2px]' ><FaPlus /></button>
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap px-1 py-2 text-gray-700 dark:text-gray-200"
                                                            >
                                                                {total(catTicket.id)} JD
                                                            </td>
                                                            <td
                                                                className="whitespace-nowrap px-2 py-2 text-gray-700 flex justify-between dark:text-gray-200"
                                                            >
                                                                <span>{catTicket.price} JD </span>
                                                            </td>
                                                        </tr>

                                                    )
                                                }
                                            })
                                        })
                                    }





                                </tbody>
                                <tfoot className='bg-gray-100 dark:bg-gray-800'>
                                    <tr>
                                        <td colSpan={"2"} className='whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200'>
                                            Total
                                        </td>
                                        <td className='whitespace-nowrap px-2 py-2 text-gray-700 dark:text-gray-200'>
                                            {totalPrice()} JD
                                        </td>

                                        <td className='whitespace-nowrap px-2 py-2 text-gray-700 dark:text-gray-200'>
                                            <div className="sm:flex sm:items-end sm:justify-end">
                                                <button
                                                    onClick={() => {
                                                        !cookies.Token ? setShow(true) : navigate("/checkout")

                                                    }}
                                                    // to={"/checkout"}
                                                    className="block bg-navy px-1 py-2 sm:py-3 sm:px-2 text-center text-[7px] sm:text-xs font-semibold uppercase text-white dark:bg-candy dark:hover:bg-navy transition rounded-md hover:bg-candy"
                                                >
                                                    Buy Now
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        : null
                }

            </div>

            <div className='h-[3px] bg-candy container w-3/4 mx-auto my-11' ></div>


            <div>
                <img className=' mx-auto w-3/4 object-scale-down -z-50' src={concert?.banner} />
                <div className='-mt-16 z-50 p-3 rounded-md text-[9px] text-black dark:text-white sm:text-sm bg-slate-100 dark:shadow-white/20 shadow-md relative dark:bg-slate-800 w-3/5  mx-auto  ' >
                    <h5 className="text-2xl font-bold tracking-tight ">
                        {concert?.name}
                    </h5>
                    <p className="font-normal py-3 dark:text-gray-400">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam molestias,
                    </p>
                    <p className="font-normal pt-1 flex">
                        <span className='flex gap-x-3 items-center'>
                            <span className='px-1'>

                                <BsFillGeoAltFill />
                            </span>

                            Location: {concert?.location}
                        </span>

                    </p>
                    <p className="font-normal pt-1 flex">
                        <span className='flex gap-x-3 items-center'>
                            <span className='px-1'>

                                <BsFillClockFill />
                            </span>
                            <span>{concert?.time.slice(0, 3) + "00"} GMT+2</span>
                        </span>
                    </p>
                    <p className="font-normal pt-1 flex">
                        <span className='flex gap-x-3 items-center'>
                            <span className='px-1'>
                                <BsFillCalendarEventFill />
                            </span>
                            <span>{concert?.start_date.slice(8, 10)} {month(concert?.start_date.slice(5, 7))}</span>
                        </span>
                    </p>
                    <p className="font-normal py-3  flex">
                        <span className='flex gap-x-3 flex-col '>

                            <span className='px-1 flex items-center gap-x-4'>
                                <BsCircleFill className='h-2' />
                                <span>Note one</span>
                            </span>
                            <span className='px-1 flex items-center gap-x-4'>
                                <BsCircleFill className='h-2' />
                                <span>Note two</span>
                            </span>
                            <span className='px-1 flex items-center gap-x-4'>
                                <BsCircleFill className='h-2' />
                                <span>Note three</span>
                            </span>
                        </span>
                    </p>

                </div>
            </div>


            <iframe className='mx-auto my-8 w-full container' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.3809915639263!2d35.86588818694307!3d31.95055927314005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca11d730d0fd1%3A0x149981646f758d8a!2sPrs.%20Alia%20St.%2C%20Amman!5e0!3m2!1sen!2sjo!4v1667598780518!5m2!1sen!2sjo" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}
