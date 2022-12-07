import React from 'react'
import FullTable from '../FullTable'

export default function TicketsSquare() {

    return (
        <div className='m-9 p-10 rounded-3xl border-t-4 shadow-lg border-candy  dark:bg-slate-800'>
            <p className='text-2xl'>Sold Tickets</p>
            <FullTable />

        </div>
    )
}
