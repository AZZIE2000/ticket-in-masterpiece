import { DarkThemeToggle, Flowbite, Sidebar } from 'flowbite-react'
import React from 'react'
import { useState } from 'react'
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi'
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function SideBar({ show, setShow }) {



    return (
        <>
            <Sidebar collapseBehavior='hide' style={{ position: 'fixed', top: 0, height: '100vh', overflow: 'hidden', zIndex: '100' }} collapsed={show} >
                <Sidebar.Items className=' overflow-hidden  ' >

                    <Sidebar.ItemGroup className='flex flex-col justify-between h-full  ' >
                        <div>
                            <button className='pl-2  ' onClick={() => setShow(!show)}><AiOutlineMenu size={25} /></button>
                        </div>
                        <>


                            <div className='p-1 '>
                                <Flowbite >
                                    <DarkThemeToggle />
                                </Flowbite>
                            </div>





                            <Sidebar.Item

                                icon={HiChartPie}
                            >

                                <Link to={'/'}>Dashboard</Link>

                            </Sidebar.Item>
                            <Sidebar.Collapse
                                icon={HiShoppingBag}
                                label="E-commerce"

                            >
                                <Sidebar.Item href="#">
                                    Products
                                </Sidebar.Item>
                            </Sidebar.Collapse>
                            <Sidebar.Item
                                href="#"
                                icon={HiInbox}
                            >
                                Inbox
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiUser}
                            >
                                Users
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiShoppingBag}
                            >
                                Products
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                icon={HiArrowSmRight}
                            >
                                Sign In
                            </Sidebar.Item>

                            <Sidebar.Item
                                href="#"
                                icon={HiTable}
                            >
                                Sign Up
                            </Sidebar.Item>
                        </>

                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>

        </>
    )
}
