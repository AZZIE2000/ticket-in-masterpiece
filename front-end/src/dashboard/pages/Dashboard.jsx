import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import NavBar from '../../components/navs/NavBar';
export default function Dashboard() {







    return (
        <>
            <NavBar />
            <div className='flex  '>
                <SideBar />

                <div className='flex-1  justify-center '>

                    <Outlet />
                </div>

            </div>
        </>
    )
}
