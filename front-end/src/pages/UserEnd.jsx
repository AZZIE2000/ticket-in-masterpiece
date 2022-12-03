import React from 'react'
import { Outlet } from "react-router-dom";
import FooterMain from '../components/navs/FooterMain';
import NavBar from '../components/navs/NavBar';
export default function UserEnd() {
    return (
        <>
            <NavBar />

            {/* An <Outlet> renders whatever child route is currently active in App.js */}
            <Outlet />

            <FooterMain />
        </>
    )
}
