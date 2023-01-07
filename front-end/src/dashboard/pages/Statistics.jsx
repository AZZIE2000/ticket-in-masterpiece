import React from 'react'
import StatusCards from '../components/main/StatusCards'
import Select from 'react-select'
import TicketsSquare from '../components/main/TicketsSquare'
import TicketsCatgs from '../components/main/TicketsCatgs'
import ConcertChart from '../components/ConcertChart'

export default function Statistics() {


    return (
        <>
            <StatusCards />
            <ConcertChart />
            <TicketsSquare />
            <TicketsCatgs />
        </>
    )
}
