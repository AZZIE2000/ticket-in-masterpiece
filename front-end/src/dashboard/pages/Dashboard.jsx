import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { Outlet, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import NavBar from '../../components/navs/NavBar';
import { AuthContext } from '../../context/AuthContext';
export default function Dashboard() {

    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (user && user?.role && user?.role !== "admin") {
            navigate('/')
        }
    }, [user])




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
