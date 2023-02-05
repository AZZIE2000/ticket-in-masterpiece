import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 2000)
    }, [])
    return (
        <div className='h-screen bg-kohli flex items-center justify-center'>

            <p className='text-center flex flex-col gap-10 text-white text-5xl '>
                Page Not Found
                <Link to={'/'} className='text-good'>Back to home</Link>
            </p>
        </div>
    )
}
