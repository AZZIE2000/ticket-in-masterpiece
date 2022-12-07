import { Dropdown, TextInput, Pagination } from 'flowbite-react';
import React, { useEffect, useState } from 'react'


export default function FullTable() {

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

    useEffect(() => {
        const array = [];
        const possibleClasses = ["A", "B", "C", "D", "E"];
        const possibleNames = ["Alice", "Bob", "Charlie", "Dave", "Eve"];
        const possibleEmails = ["alice@example.com", "bob@example.com", "charlie@example.com", "dave@example.com", "eve@example.com"];

        for (let i = 1; i <= 50; i++) {
            const item = {
                id: i,
                class: possibleClasses[Math.floor(Math.random() * possibleClasses.length)],
                name: possibleNames[Math.floor(Math.random() * possibleNames.length)],
                email: possibleEmails[Math.floor(Math.random() * possibleEmails.length)],
                price: Math.floor(Math.random() * 500)
            };
            array.push(item);
        }
        setData(array)
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
            const filtered = data?.filter(entry => Object.values(entry).some(val => typeof val === "string" && (val.toLowerCase()).includes(search.toLowerCase())));
            // setCurrentRecords(data?.slice(indexOfFirstRecord, indexOfLastRecord))
            setCurrentRecords(filtered)
            // currentRecord
        }
    }, [data, search, indexOfFirstRecord, indexOfLastRecord])




    // check state effect


    useEffect(() => {
        setColumns([

            {
                name: "Id",
                id: 'id',
            },
            {
                name: "Class",
                id: 'class',
            },
            {
                name: "Name",
                id: 'name',
            },
            {
                name: "Email",
                id: 'email',
            },
            {
                name: "Price",
                id: 'price',
            },

        ])
    }, [])
    function sortByKey(array, key, sort) {
        sort ? setData([...array].sort((a, b) => a[key] < b[key] ? 1 : -1)) : setData([...array].sort((a, b) => a[key] > b[key] ? 1 : -1))
        setW(!w)
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
            <div
                className="overflow-hidden overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-xl"
            >

                <table
                    className="min-w-full divide-y divide-gray-200 text-sm dark:divide-gray-700 "
                >
                    <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                            {
                                columns?.map((col, i) => {
                                    return (
                                        <th
                                            key={i}
                                            className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900 dark:text-white"
                                        >
                                            <div className="flex items-center gap-2">
                                                {col.name}

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4 text-gray-700 cursor-pointer dark:text-gray-200"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    onClick={() => sortByKey(data, col.id, w)}
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </th>
                                    )
                                })
                            }



                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700 ">
                        {
                            currentRecords?.length > 0 ?
                                currentRecords?.map((item, i) => {
                                    return (
                                        <tr key={i} className="dark:bg-gray-900">

                                            <td
                                                className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white"
                                            >
                                                {item.id}
                                            </td>
                                            <td
                                                className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200"
                                            >
                                                {item.class}
                                            </td>
                                            <td
                                                className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200"
                                            >
                                                {item.name}
                                            </td>
                                            <td
                                                className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200"
                                            >
                                                {item.email}
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700 dark:text-gray-200">

                                                {item.price}

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

            </div >
        </>
    )
}
