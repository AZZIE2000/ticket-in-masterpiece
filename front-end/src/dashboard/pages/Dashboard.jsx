import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import NavBar from '../../components/navs/NavBar';
export default function Dashboard() {
    const [show, setShow] = useState(true);

    const items = [
        {
            id: 0,
            name: 'Cobol'
        },
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'Basic'
        },
        {
            id: 3,
            name: 'PHP'
        },
        {
            id: 4,
            name: 'Java'
        }
    ]

    const handleOnSearch = (string, results) => {
        console.log(string, results)
    }

    const handleOnHover = (result) => {

        console.log(result)
    }

    const handleOnSelect = (item) => {

        console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }
    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
            </>
        )
    }


    return (
        <>
            <NavBar />
            <div className='flex '>
                <SideBar show={show} setShow={setShow} />

                <div className='flex-1 justify-center'>

                    <Outlet />
                </div>

            </div>
        </>
    )
}
