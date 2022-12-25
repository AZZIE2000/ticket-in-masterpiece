import { createContext, useState, useEffect } from "react"
import axios from "axios"
export const AdminContext = createContext()
export function AdminProvider({ children }) {
    const [loadingT, setLoadingT] = useState(true)
    const [options, setOptions] = useState();
    const [concertsList, setConcertsList] = useState();
    const [activeConcert, setActiveConcert] = useState()
    const [concertData, setConcertData] = useState()
    const [searchTicket, setSearchTicket] = useState("")
    const [ticketInfo, setTicketInfo] = useState()

    useEffect(() => {
        axios.get('/api/concerts/list').then(res => {
            if (res.data.status === 200) {
                setConcertsList(res.data.concerts)
                const transformedConcerts = res.data.concerts.map(concert => ({ value: concert.id, label: concert.name }));
                setOptions(transformedConcerts)
                setActiveConcert(transformedConcerts[0])
                console.log(transformedConcerts);
            }
        })

        axios.get('/api/types/list').then(res => {
            console.log(res);
        })

    }, [])
    useEffect(() => {
        if (activeConcert) {
            setLoadingT(true)
            const data = {
                id: activeConcert.value
            }
            axios.post('/api/concert/info', data).then(res => {
                if (res.data.status === 200) {
                    setConcertData(res.data)
                    // console.log(res.data);

                }
            })

        }
    }, [activeConcert])

    const getTicketInfo = () => {
        const data = {
            serial: searchTicket
        }
        axios.post('/api/ticket/info', data).then(res => {
            if (res.data.status === 200) {
                setTicketInfo(res.data.ticket);
                // console.log(res.data.ticket);
            } else {
                console.log(res);
            }
        })
    }
    useEffect(() => {
        if (searchTicket !== "") {
            getTicketInfo()
        }
    }, [searchTicket])

    return (
        <>
            <AdminContext.Provider value={{ concertsList, activeConcert, options, concertData, setConcertData, loadingT, setLoadingT, searchTicket, setSearchTicket, setTicketInfo, ticketInfo, setConcertsList, setOptions, setActiveConcert }} >
                {children}
            </AdminContext.Provider>
        </>
    )
}