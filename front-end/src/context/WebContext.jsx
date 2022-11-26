import { createContext, useState, useEffect } from "react"
import axios from "axios"
export const WebContext = createContext()
export function WebProvider({ children }) {
    // save all home page concerts
    const [concerts, setConcerts] = useState()
    const [banners, setBanners] = useState()
    // Get home page concerts data
    useEffect(() => {
        axios.get("/api/concerts").then((res) => {
            if (res.status === 200) {
                setConcerts(res.data.concerts)
                setBanners(res.data.banners)
            } else {
                console.log(res)
            }
        });
    }, []);

    // handle months
    function month(month) {
        switch (month) {
            case "01":
                return "Jan"
                break;
            case "02":
                return "Feb"
                break;
            case "03":
                return "Mar"
                break;
            case "04":
                return "Apr"
                break;
            case "05":
                return "May"
                break;
            case "06":
                return "Jun"
                break;
            case "07":
                return "Jul"
                break;
            case "08":
                return "Aug"
                break;
            case "09":
                return "Sept"
                break;
            case "10":
                return "Oct"
                break;
            case "11":
                return "Nov"
                break;
            case "12":
                return "Dec"
                break;
            default:
                return "month"
                break;
        }

    }

    return (
        <>
            <WebContext.Provider value={{ concerts, banners, month }}>
                {children}
            </WebContext.Provider>
        </>
    )
}