import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
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
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
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
            <div className='flex justify-between dark:bg-navy rounded-md  w-full  p-3 z-50' >
                <b>LOGO</b>
                <div className='w-64 z-50' >

                    <ReactSearchAutocomplete
                        placeholder='search for event'
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                    />
                </div>
                <button className='pl-2  ' onClick={() => setShow(!show)}><AiOutlineMenu size={25} /></button>
            </div>
            <div className='grid  relative h-screen '>
                <SideBar show={show} setShow={setShow} />
                <div className='flex-1'>

                    <Outlet />
                </div>
            </div>
        </>
    )
}
