import React from 'react'
import NavBar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


export default function Layout() {
    return (
        <>
            <div className='min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col'>
                <NavBar />
                <div className='flex flex-1 overflow-hidden'>
                    <Sidebar />
                    <main className='flex-1 overflow-y-auto'>
                        <div className='mx-auto max-w-7xl'>
                            <Outlet />
                        </div>
                    </main>
                </div>

            </div>
            <Footer />
        </>
    )
}
