// import { DarkThemeToggle, Flowbite, Sidebar } from 'flowbite-react'
// import React from 'react'
// import { useState } from 'react'
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi'
// import { AiOutlineMenu } from 'react-icons/ai'
// import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Select from 'react-select'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { AiFillPieChart } from 'react-icons/ai'
import { SiFuturelearn } from 'react-icons/si'
import { TiEdit } from 'react-icons/ti'
import { FaCashRegister } from 'react-icons/fa'
import { CgAddR, CgProfile } from 'react-icons/cg'
import { HiTicket } from 'react-icons/hi'
import { MdOutlineCategory, MdQrCodeScanner } from 'react-icons/md'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { BiSearchAlt } from 'react-icons/bi'

export default function SideBar() {
    const { setActiveConcert, options } = useContext(AdminContext)
    const [open, setOpen] = useState(true)
    const location = useLocation()
    const Menus = [
        { title: 'Dashboard', path: '/dashboard/statistics', src: <AiFillPieChart /> },
        { title: 'Ticket', path: '/edit/single/ticket', src: <HiTicket /> },
        { title: 'Categories', path: '/manage/categories', src: <MdOutlineCategory /> },
        { title: 'Edit Concert Info', path: '/edit/concert', src: <TiEdit /> },
        { title: 'Add New Concert', path: '/add/concert', src: <CgAddR />, gap: 'true' },
        { title: 'Scan Tickets', path: '/scan', src: <MdQrCodeScanner /> },
        { title: 'POS', path: '/pos/tickets', src: <FaCashRegister /> },
        { title: 'Manage Types', path: '/add/types', src: <CgAddR />, gap: 'true' },
    ]
    return (
        <>

            <div
                className={`${open ? 'w-60' : 'w-fit'
                    }   sm:block sticky top-0 h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
            >
                <BsArrowLeftCircle
                    className={`${!open && 'rotate-180'
                        } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
                    onClick={() => setOpen(!open)}
                />
                {open && (
                    <span className='text-xl capitalize font-medium whitespace-nowrap dark:text-white'>
                        choose event
                    </span>
                )}


                {
                    open && <Select
                        className="basic-single w-full mt-2 dark:text-black dark:bg-black "
                        placeholder="Events"

                        onChange={(value) => setActiveConcert(value)}
                        isSearchable={true}

                        options={options}
                    />
                }

                <ul className='pt-4'>
                    {
                        open ? null
                            : <li className='flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 mt-2'>
                                <span className='text-2xl'><BiSearchAlt onClick={() => setOpen(!open)} /></span>
                            </li>
                    }
                    {Menus.map((menu, index) => (
                        <Link to={menu.path} key={index}>
                            <li
                                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9 ' : 'mt-2'} ${location.pathname === menu.path &&
                                    'bg-gray-200 dark:bg-gray-700'
                                    }`}
                            >
                                <span className='text-2xl'>{menu.src}</span>
                                <span
                                    className={`${!open && 'hidden'
                                        } origin-left duration-300 hover:block`}
                                >
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}
