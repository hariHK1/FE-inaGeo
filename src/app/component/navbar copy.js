'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { BiSearch } from "react-icons/bi"
import { PiMoon, PiSun } from "react-icons/pi"
import { RiNotification3Line } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import Notif from "./notificaton"

export default function Navbar() {
    const [togglemode, setTogglemode] = useState('light');
    const [notiftoggle, setNotiftoggle] = useState(false);

    useEffect(() => {
        togglemode == 'light' ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark')
    }, [togglemode])
    const Logo = () =>
        <div className="flex space-x-3 items-center">
            <Image className={`flex items-center cursor-pointer z-50`} src='/logo2.png' alt="logo" width={50} height={40} />
            <span className="text-xl font-bold">Ina-Geoportal</span>
        </div>
    return <>
        <nav className="sticky top-0 z-20 px-10 w-full flex justify-between items-center p-3 pl-10 bg-zinc-200/70 dark:bg-zinc-800/70 backdrop-blur-2xl">
            <Logo />
            <div className="absolute w-full sm:flex hidden items-center justify-center left-0">
                <span className="md:w-[400px] w-[280px] border flex items-center space-x-2 border-slate-600 rounded-full p-[5px] px-4 text-[13px] antialiased">
                    <BiSearch size={15} />
                    <input placeholder="search..." type="text" className="w-full appearance-none bg-transparent outline-none dark:placeholder:opacity-40 placeholder:opacity-90" />
                </span>
            </div>
            <div className="w-full z-10 max-w-xs flex justify-end items-center space-x-3">
                <span onClick={() => togglemode == 'light' ? setTogglemode('dark') : setTogglemode('light')} className={`${togglemode == 'light' ? 'hover:bg-amber-700 bg-amber-700/30 text-amber-700 hover:text-amber-100' : 'bg-sky-700/30 hover:bg-sky-700 text-sky-700 hover:text-sky-100'} p-1 h-8 w-8 flex rounded-full justify-center items-center cursor-pointer transition-colors delay-[90] group has-tooltip`}>
                    {togglemode == 'light' ? <PiSun /> : <PiMoon />}
                    <span className="tooltip2"></span>
                    <span className='tooltip'>
                        {togglemode == 'light' ? "switch to dark theme" : "switch to light theme"}
                    </span>
                </span>
                <BiSearch size={20} className="sm:hidden cursor-pointer hover:opacity-100 opacity-80" />
                <RiNotification3Line onClick={() => notiftoggle == true ? setNotiftoggle(false) : setNotiftoggle(true)} size={20} className="cursor-pointer hover:opacity-100 opacity-80" />
                <CgMenuGridO size={20} className="cursor-pointer hover:opacity-100 opacity-80" />
                <Image className="h-10 w-10 object-cover rounded-full" alt="" src='/profile1.jpeg' width={50} height={50} />
            </div>
            <Notif toggle={notiftoggle} />
        </nav>
    </>
}