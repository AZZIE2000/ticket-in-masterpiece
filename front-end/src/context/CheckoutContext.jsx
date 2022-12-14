import { createContext, useState, useEffect } from "react"
import axios from "axios"
export const CheckoutContext = createContext()
export function CheckoutProvider({ children }) {
    // save all home page concerts
    const [cart, setCart] = useState([])
    const [concertToBuy, setConcertToBuy] = useState()

    // Get home page concerts data
    useEffect(() => {
        console.log(concertToBuy);
    }, [concertToBuy]);



    return (
        <>
            <CheckoutContext.Provider value={{ cart, setCart, concertToBuy, setConcertToBuy }}>
                {children}
            </CheckoutContext.Provider>
        </>
    )
}