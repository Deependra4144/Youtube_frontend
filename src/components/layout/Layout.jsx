import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loadUser } from '../../features/auth/authSlice'

function Layout() {
    const [sidebarToggel, setSidebarToggel] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadUser())
    }, [])
    return (
        <div className="h-screen overflow-y-scroll">

            <Navbar setSidebarToggel={setSidebarToggel} />
            <div className="flex">
                <Sidebar sidebarToggel={sidebarToggel} />
                <div className='w-full'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
