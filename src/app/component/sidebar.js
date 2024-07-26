'use client'

import Image from "next/image";
import { useState } from "react"
import { Menu } from "@/app/services/menu/menu";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";

export default function Sidebar() {
    const [toggle, setToggle] = useState(false);
    const [bukaaccor, setBukaaccor] = useState(0);
    const onToggle = () => toggle === true ? setToggle(false) : setToggle(true);
    const Logo = () =>
        <div className={`flex flex-col justify-center items-center my-4`}>
            <Image className={`${toggle === true ? 'flex' : 'hidden lg:flex'} items-center cursor-pointer`} src='/logo1.png' alt="logo user" width={toggle === true ? 40 : 50} height={toggle === true ? 40 : 50} onClick={onToggle} />
            {toggle === true ? '' : <label className="hidden lg:flex text-base mt-2">METADATA</label>}
        </div>
    return (
        <div className="fixed z-20 h-screen border-slate-600/40 border-r-[1px] bg-gray-100 text-slate-600 dark:text-gray-400 dark:bg-slate-950">
            {/* <div className={`absolute h-[75px] w-16 lg:w-0 left-0 top-0 z-[19] flex items-center justify-center text-gray-200`}>
                <BiMenu className="cursor-pointer hover:bg-white/15 p-1 rounded" size={35} onClick={onToggle} />
            </div> */}
            {/* <!-- open side Start --> */}
            {/* <div className={`${toggle === true ? 'w-16' : 'w-0'} sticky left-0 transition-all top-0 z-[19] flex flex-col items-center justify-center h-screen text-gray-400 bg-slate-950`}>
                {toggle === true ? <Logo /> : ''}
                <div className={`flex flex-col items-center border-t border-gray-700`}>
                    {
                        Menu().filter(item => item.menu == 'main').map((items, index) => {
                            return (
                                <div key={'menu' + index} className="w-full">
                                    {items.dropdown === false ?
                                        <Link href={`${items.link}`} className={`${toggle === true ? 'w-12' : 'hidden'} group flex items-center justify-center h-12 mt-2 rounded hover:bg-gray-200 hover:text-slate-950 hover:dark:text-gray-100 hover:dark:bg-slate-900`}>
                                            {items.icon}
                                            <span className="absolute left-[60px] rounded-xl text-gray-300 bg-slate-950 p-2 hidden ml-2 text-[13px] antialiased group-hover:flex">{items.title}
                                                <div className="absolute left-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-950"></div>
                                            </span>
                                        </Link> :
                                        <span className={`${toggle === true ? 'w-12' : 'hidden'} group relative flex items-center justify-center h-12 mt-2 rounded hover:bg-gray-200 hover:text-slate-950 hover:dark:text-gray-100 hover:dark:bg-slate-900 cursor-pointer`}>
                                            {items.iconStart}
                                            <div className="absolute -right-5 sm:-right-6 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-5 h-5 top-1 bg-slate-950 group-hover:bg-gray-800"></div>
                                            <div className={`absolute left-[48px] -top-1 w-0 transition-all p-0 space-y-1 rounded text-gray-400 bg-slate-950 group-hover:w-[150px] group-hover:p-3`}>
                                                {items.subMenu.map((items2, index) => {
                                                    return (
                                                        <Link key={'submenu' + index} href={`${items2.link}`} className="flex items-center w-0 h-12 px-0 rounded hover:bg-gray-200 hover:text-slate-950 hover:dark:text-gray-100 hover:dark:bg-slate-900 group-hover:w-full group-hover:px-3" >
                                                            {items2.icon}
                                                            <span className="hidden ml-2 text-sm font-medium group-hover:flex">{items2.title}</span>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </span>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className={`${toggle === true ? 'w-12' : 'hidden'} flex flex-col items-center mt-2 border-t border-gray-700`}>

                </div>
                <div className="w-full mt-auto">
                    {
                        Menu().filter(item => item.menu == 'foot').map((items, index) => {
                            return (
                                <div key={'menu' + index} className="w-full">
                                    {items.dropdown === false ?
                                        <Link href={`${items.link}`} className={`${toggle === true ? 'w-full' : 'w-0'} group flex items-center justify-center h-16 mt-1 bg-gray-800 hover:bg-gray-200 hover:text-slate-950 hover:dark:text-gray-100 hover:dark:bg-slate-900`}>
                                            {items.icon}
                                            <span className="absolute left-[60px] rounded-xl text-gray-300 bg-slate-950 p-2 hidden ml-2 text-[13px] antialiased group-hover:flex">{items.title}
                                                <div className="absolute left-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-950"></div>
                                            </span>
                                        </Link> :
                                        <span className={`${toggle === true ? 'w-12' : 'hidden'} group relative flex items-center justify-center h-16 mt-auto bg-gray-800 hover:bg-gray-200 hover:text-slate-950 hover:dark:text-gray-100 hover:dark:bg-slate-900 cursor-pointer`}>
                                            {items.iconStart}
                                            <div className="absolute -right-6 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-5 h-5 top-1 bg-slate-950 group-hover:bg-gray-800"></div>
                                            <div className={`absolute left-[48px] -top-1 w-0 transition-all p-0 space-y-1 rounded text-gray-400 bg-slate-950 group-hover:w-[150px] group-hover:p-3`}>
                                                {items.subMenu.map((items2, index) => {
                                                    return (
                                                        <Link key={'submenu' + index} href={`${items2.link}`} className="flex items-center w-0 h-12 px-0 rounded hover:bg-gray-200 hover:text-slate-950 hover:dark:text-gray-100 hover:dark:bg-slate-900 group-hover:w-full group-hover:px-3" >
                                                            {items2.icon}
                                                            <span className="hidden ml-2 text-sm font-medium group-hover:flex">{items2.title}</span>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </span>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div> */}
            {/* <!-- open side End  --> */}

            {/* <!-- close side Start --> */}
            <div className={`${toggle === false ? 'w-0 lg:min-w-64 lg:w-64' : 'w-0'} sticky transition-all flex flex-col items-center pt-[80px] h-full`}>
                <div className="space-y-2 w-full">
                    <div className="flex flex-col items-center w-full px-2">
                        {
                            Menu().filter(item => item.menu == 'main' & item.category == 'Modules').map((items, index) => <span key={index + 'menu'} className="flex w-full justify-start text-[11px] antialiased uppercase font-semibold py-2 font-sans">
                                <span className="opacity-0"><IoMdArrowDropright size={15} /></span>
                                {items.category}</span>)[0]
                        }
                        {
                            Menu().filter(item => item.menu == 'main' & item.category == 'Modules').map((items, index) => {
                                return (
                                    <div key={'menu2' + index} className="w-full">
                                        {items.dropdown === false ?
                                            <Link href={`${items.link}`} className={`${toggle === false ? 'hidden lg:flex w-full' : 'hidden'} flex items-center h-8 px-2 rounded-[10px] hover:bg-gray-200 hover:text-slate-950 hover:dark:text-gray-100 hover:dark:bg-slate-900 transition-colors delay-[5ms]`}>
                                                <span className="opacity-0"><IoMdArrowDropright size={15} /></span>
                                                {items.icon}
                                                <span className="ml-2 text-[13px] antialiased">
                                                    {items.title}
                                                </span>
                                            </Link> :
                                            <span className={`${toggle === false ? 'hidden lg:flex w-full' : 'hidden'} lg:flex lg:flex-col items-center`}>
                                                <span className={`${toggle === false ? 'hidden lg:flex w-full' : 'hidden'} flex items-center h-8 px-2 rounded-[10px] hover:bg-gray-200 hover:text-slate-950 hover:dark:text-gray-100 hover:dark:bg-slate-900 transition-colors delay-[5ms] cursor-pointer`} onClick={() => 'Modules' + index == bukaaccor ? setBukaaccor(0) : setBukaaccor('Modules' + index)}>
                                                    <span className=""><IoMdArrowDropright size={15} /></span>
                                                    {items.iconStart}
                                                    <span className={`ml-2 text-[13px] antialiased`}>
                                                        {items.title}
                                                    </span>
                                                </span>
                                                {items.subMenu.map((items2, index2) => {
                                                    return (
                                                        <Link key={'submenu2' + index2} href={`${items2.link}`} className={`${bukaaccor == 'Modules' + index ? 'lg:flex h-8' : 'h-0 invisible opacity-0'} w-full flex items-center px-[17px] rounded-[10px] hover:bg-gray-200 hover:text-slate-950 hover:dark:text-gray-100 hover:dark:bg-slate-900 transition-all delay-[5ms]`}>
                                                            <span className="mr-2 opacity-0"><IoMdArrowDropright size={15} /></span>
                                                            {/* {items2.icon} */}
                                                            <span className="ml-2 text-[13px] antialiased">
                                                                {items2.title}
                                                            </span>
                                                        </Link>
                                                    )
                                                })}
                                            </span>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col items-center w-full px-2">
                        {
                            Menu().filter(item => item.menu == 'main' & item.category == 'Content').map((items, index) => <span key={index + 'menu'} className="flex w-full justify-start text-[11px] antialiased uppercase font-semibold py-2 font-sans">
                                <span className="opacity-0"><IoMdArrowDropright size={15} /></span>
                                {items.category}</span>)[0]
                        }
                        {
                            Menu().filter(item => item.menu == 'main' & item.category == 'Content').map((items, index) => {
                                return (
                                    <div key={'menu2' + index} className="w-full">
                                        {items.dropdown === false ?
                                            <Link href={`${items.link}`} className={`${toggle === false ? 'hidden lg:flex w-full' : 'hidden'} flex items-center h-8 px-2 rounded-[10px] hover:bg-gray-200 hover:text-slate-950 hover:dark:text-gray-100 hover:dark:bg-slate-900 transition-colors delay-[5ms]`}>
                                                <span className="opacity-0"><IoMdArrowDropright size={15} /></span>
                                                {items.icon}
                                                <span className="ml-2 text-[13px] antialiased">
                                                    {items.title}
                                                </span>
                                            </Link> :
                                            <span className={`${toggle === false ? 'hidden lg:flex w-full' : 'hidden'} lg:flex lg:flex-col items-center`}>
                                                <span className={`${toggle === false ? 'hidden lg:flex w-full' : 'hidden'} flex items-center h-8 px-2 rounded-[10px] hover:bg-gray-200 hover:text-slate-950 hover:dark:text-gray-100 hover:dark:bg-slate-900 transition-colors delay-[5ms] cursor-pointer`} onClick={() => 'Content' + index == bukaaccor ? setBukaaccor(0) : setBukaaccor('Content' + index)}>
                                                    <span className=""><IoMdArrowDropright size={15} /></span>
                                                    {items.iconStart}
                                                    <span className={`ml-2 text-[13px] antialiased`}>
                                                        {items.title}
                                                    </span>
                                                </span>
                                                {items.subMenu.map((items2, index2) => {
                                                    return (
                                                        <Link key={'submenu2' + index2} href={`${items2.link}`} className={`${bukaaccor == 'Content' + index ? 'lg:flex h-8' : 'h-0 invisible opacity-0'} w-full flex items-center px-[17px] rounded-[10px] hover:bg-gray-200 hover:text-slate-950 hover:dark:text-gray-100 hover:dark:bg-slate-900 transition-all delay-[5ms]`}>
                                                            <span className="mr-2 opacity-0"><IoMdArrowDropright size={15} /></span>
                                                            {/* {items2.icon} */}
                                                            <span className="ml-2 text-[13px] antialiased">
                                                                {items2.title}
                                                            </span>
                                                        </Link>
                                                    )
                                                })}
                                            </span>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-full mt-auto">
                    {
                        Menu().filter(item => item.menu == 'foot').map((items, index) => {
                            return (
                                <div key={'menu2' + index} className="w-full">
                                    <Link href={`${items.link}`} className={`${toggle === false ? 'hidden lg:flex w-full' : 'hidden'} flex items-center justify-start px-6 h-16 mt-1 border-slate-600/50 border-t-[1px]`}>
                                        {items.icon}
                                        <span className="ml-2 text-[13.5px]">
                                            {items.title}
                                        </span>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* <!-- close side End  --> */}
        </div>
    )
}