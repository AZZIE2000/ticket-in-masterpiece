import { createContext, useState, useEffect } from "react"
import axios from "axios"
export const CheckoutContext = createContext()
export function CheckoutProvider({ children }) {
    // save all home page concerts
    const [cart, setCart] = useState([])

    // Get home page concerts data
    useEffect(() => {

    }, []);



    return (
        <>
            <CheckoutContext.Provider value={{ cart, setCart }}>
                {children}
            </CheckoutContext.Provider>
        </>
    )
}