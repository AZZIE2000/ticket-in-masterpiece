import { Dropdown, TextInput, Pagination, Progress, Spinner, Table, Tooltip } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';

import { IoIosArrowDown } from 'react-icons/io';
export default function FullTable() {
    const { concertData, loadingT, setLoadingT, searchTicket, setSearchTicket } = useContext(AdminContext);
    const [data, setData] = useState();
    const [search, setSearch] = useState('');
    const [columns, setColumns] = useState();
    const [w, setW] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [nPages, setNPages] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10);
    const [indexOfLastRecord, setIndexOfLastRecord] = useState() // = currentPage * recordsPerPage;

    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage < 0 ? 0 : indexOfLastRecord - recordsPerPage;
    const [currentRecords, setCurrentRecords] = useState([])
    // const currentRecords = data?.slice(indexOfFirstRecord, indexOfLastRecord);
    const navigate = useNavigate()
    function transformDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    useEffect(() => {
        if (concertData) {

            const dataForTable = concertData?.tickets.map(ticket => ({
                id: ticket.id,
                ticket_class: ticket.category.class,
                user_name: ticket.user.name,
                user_email: ticket.user.email,
                updated_at: transformDate(ticket.updated_at),
                serial_num: ticket.serial_num,
                scanned: ticket.scanned
            }));

            setData(dataForTable)
            setLoadingT(false)
        }
    }, [concertData])
    useEffect(() => {
        setColumns([

            {
                name: "Id",
                id: 'id',
            },
            {
                name: "Serial",
                id: 'serial_num',
            },
            {
                name: "Name",
                id: 'user_name',
            },
            {
                name: "Email",
                id: 'user_email',
            },
            {
                name: "Class",
                id: 'ticket_class',
            },
            {
                name: "Scanned",
                id: 'scanned',
            },
            {
                name: "Scanned At",
                id: 'updated_at',
            },

        ])
    }, [])

    // useEffect(() => {
    //     setData([

    //         {
    //             id: 1,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 342,
    //         },
    //         {
    //             id: 2,
    //             class: 'VasdIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 54,
    //         },
    //         {
    //             id: 3,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 43,
    //         },
    //         {
    //             id: 4,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 2,
    //         },
    //         {
    //             id: 5,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 564,
    //         },
    //         {
    //             id: 6,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 5124,
    //         },
    //         {
    //             id: 7,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 51984,
    //         },
    //         {
    //             id: 8,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 7,
    //         },
    //         {
    //             id: 9,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 54,
    //         },
    //         {
    //             id: 10,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 86,
    //         },
    //         {
    //             id: 11,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 87,
    //         },
    //         {
    //             id: 12,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 59,
    //         },
    //         {
    //             id: 13,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 34,
    //         },
    //         {
    //             id: 14,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 13,
    //         },
    //         {
    //             id: 15,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 38,
    //         },
    //         {
    //             id: 16,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 22,
    //         },

    //         {
    //             id: 17,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 124,
    //         },
    //         {
    //             id: 18,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 412,
    //         },
    //         {
    //             id: 18,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 956,
    //         },
    //         {
    //             id: 19,
    //             class: 'VIP',
    //             name: "azzam",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 96,
    //         },
    //         {
    //             id: 20,
    //             class: 'VIP',
    //             name: "dana",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 514,
    //         },
    //         {
    //             id: 21,
    //             class: 'VIP',
    //             name: "dado",
    //             email: "azzam.faraj0@gmail.com",
    //             price: 514,
    //         },
    //         {
    //             id: 22,
    //             class: 'General',
    //             name: "dodo",
    //             email: "heim@gmail.com",
    //             price: 420,
    //         },
    //         {
    //             id: 23,
    //             class: 'golden',
    //             name: "duaa",
    //             email: "duaa@gmail.com",
    //             price: 568,
    //         },
    //     ])

    // }, [])

    useEffect(() => {

        data?.length - ((currentPage - 1) * recordsPerPage) < recordsPerPage ? setIndexOfLastRecord(data?.length) : setIndexOfLastRecord(recordsPerPage * currentPage)
        const num = Math.ceil(data?.length / recordsPerPage);
        if (num) {

            num <= 1 ? setNPages(1) : setNPages(num)
        }
    }, [data, currentPage, recordsPerPage])

    useEffect(() => {
        // setCurrentRecords()
        if (search == '') {
            setCurrentRecords(data?.slice(indexOfFirstRecord, indexOfLastRecord))
        } else {
            // const searchedData = data?.filter((i) => {
            //     i.includes(search.toLowerCase())
            // })
            const filtered = data?.filter(entry => Object.values(entry).some(val => (typeof val === "string" && (val.toLowerCase()).includes(search.toLowerCase())) || (typeof val === "number" && (val.toString()).includes(search.toString()))));
            // setCurrentRecords(data?.slice(indexOfFirstRecord, indexOfLastRecord))
            setCurrentRecords(filtered)
            // currentRecord
        }
    }, [data, search, indexOfFirstRecord, indexOfLastRecord])




    // check state effect



    function sortByKey(array, key, sort) {
        sort ? setData([...array].sort((a, b) => a[key] < b[key] ? 1 : -1)) : setData([...array].sort((a, b) => a[key] > b[key] ? 1 : -1))
        setW(!w)
    }

    const lookForATicket = (e) => {
        setSearchTicket(e)
        navigate('/edit/single/ticket')
    }


    return (
        <>
            <TextInput
                id="email1"
                type="email"
                placeholder="Search"
                required={true}
                className='w-52 my-2'
                onChange={(e) => setSearch(e.target.value)}
            />
            <>

                <table

                    className=" w-full divide-y divide-gray-200 text-sm dark:divide-gray-700  "
                >
                    <thead className="bg-gray-100 dark:bg-gray-800">

                        <tr>

                            {
                                columns?.map((col, i) => {
                                    return (
                                        <th
                                            key={i}
                                            className='!w-2 overflow-hidden'
                                        >
                                            <span onClick={() => sortByKey(data, col.id, w)} className="flex items-center gap-2 cursor-pointer hover:text-white">
                                                {col.name}
                                                <IoIosArrowDown size={12} />
                                            </span>
                                        </th>
                                    )
                                })
                            }
                        </tr>




                    </thead>

                    <tbody className="divide-y">
                        {
                            loadingT ?
                                <tr className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <td className="whitespace-nowrap font-medium text-gray-900 dark:text-white" colSpan={columns?.length}>
                                        <Spinner className='my-5' aria-label="Center-aligned spinner example" />
                                    </td>
                                </tr>
                                :
                                currentRecords?.length > 0 ?
                                    currentRecords?.map((item, i) => {
                                        return (
                                            <tr key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">


                                                <td className="whitespace-nowrap overflow-hidden font-medium text-gray-900 dark:text-white" >
                                                    {item.id}
                                                </td>
                                                <Tooltip content='Click To Edit'>
                                                    <td
                                                        onClick={() => lookForATicket(item.serial_num)}
                                                        className="whitespace-nowrap font-medium text-gray-900 dark:text-white cursor-pointer hover:text-blue-500 hover:dark:text-blue-500"
                                                    >
                                                        {item.serial_num}
                                                    </td>
                                                </Tooltip>
                                                <td
                                                    className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                                                >
                                                    {item.user_name}
                                                </td>
                                                <td
                                                    className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                                                >
                                                    {item.user_email}
                                                </td>
                                                <td className="whitespace-nowrap font-medium text-gray-900 dark:text-white">

                                                    {item.ticket_class}

                                                </td>
                                                <td className="whitespace-nowrap font-medium text-gray-900 dark:text-white">

                                                    {item.scanned}

                                                </td>
                                                <td className="whitespace-nowrap font-medium text-gray-900 dark:text-white">

                                                    {item.updated_at}

                                                </td>


                                            </tr>
                                        )
                                    })
                                    : <tr className="dark:bg-gray-900">

                                        <td colSpan={columns?.length} >
                                            <div className='flex justify-center items-center    '>
                                                <p>No Data Was Found</p>
                                            </div>
                                        </td>

                                    </tr>
                        }



                    </tbody>
                    <tfoot>
                        <tr  >
                            <td colSpan={columns?.length}>
                                <div className='flex justify-around items-center    '>
                                    <div>
                                        {
                                            search === '' ?
                                                <span>{indexOfFirstRecord + 1}-{indexOfLastRecord} of {data?.length}</span>
                                                :
                                                <span>Results found: {currentRecords?.length}</span>
                                        }
                                    </div>
                                    <Pagination
                                        className={` ${(nPages == 1 || search !== '') && 'invisible'}  pb-2`}
                                        currentPage={currentPage}
                                        totalPages={nPages}
                                        onPageChange={(e) => setCurrentPage(e)}
                                    />
                                    <div className={`flex gap-2 items-center ${search !== '' && 'invisible'}`}>
                                        <label className="text-sm whitespace-nowrap text-white">Rows per page:</label>
                                        <div className="mx-auto  w-full ">
                                            <div className="my-1 scale-90">
                                                <select onChange={(e) => setRecordsPerPage(parseInt(e.target.value))} className=" block  dark:bg-slate-700 rounded-md border border-gray-300 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                                    <option defaultValue="10">10</option>
                                                    <option defaultValue="20">20</option>
                                                    <option defaultValue="30">30</option>
                                                    <option defaultValue="50">50</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>

            </ >
        </>
    )
}
