'use client'

import Image from "next/image"
import { useState } from "react";
import { BiDotsHorizontalRounded, BiSolidLike } from "react-icons/bi"
import { BsChat } from "react-icons/bs";
import { IoTimeSharp } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import { MdPhotoCamera, MdEventNote } from "react-icons/md";
import { Category, Notifdata } from "../services/notification/notif";
const Notif = ({ toggle }) => {
    const [submenu, setSubmenu] = useState(null);
    function iconnotif(params) {
        return params == 1 ? <BsChat size={13} /> : params == 2 ? <MdEventNote size={13} /> : params == 3 ? <BiSolidLike size={13} /> : params == 4 ? <ImUser size={13} /> : <MdPhotoCamera size={13} />
    }
    function categories(params) {
        return Category().filter(item => item.id == params).map(items => items.detail)[0]
    }

    return (
        <div className={`${toggle == false ? 'opacity-0 invisible h-0' : 'opacity-100 visible h-[520px]'} transition-all absolute z-[50] top-[70px] right-[100px] sm:w-[400px] w-[280px] flex flex-col bg-gray-100 text-slate-900 dark:text-gray-100 dark:bg-slate-950 border-slate-600/35 dark:border-slate-400/35 border-[1px] rounded-lg text-xs py-2 delay-75 ease-in-out`}>
            <span className="border-b-[15.5px] border-l-[14px] border-r-[14px] border-r-transparent border-l-transparent border-b-gray-500 dark:border-b-slate-400/35 w-5 h-5 absolute right-[20px] -top-5"></span>
            <span className="border-b-[15px] border-l-[13px] border-r-[13px] border-r-transparent border-l-transparent border-b-gray-100 dark:border-b-slate-950 w-5 h-5 absolute right-[21px] -top-5"></span>
            <div className="w-full flex justify-between items-center px-3 pb-2 tracking-wide">
                <span className="text-sm font-bold">Notifications</span>
                <span className="dark:text-sky-300 text-blue-500 cursor-pointer hover:underline">Mark all as read</span>
            </div>
            <div className="w-full flex flex-col overflow-scroll">
                {
                    Notifdata().map((items, index) => {
                        return (
                            <div key={index} className="w-full flex justify-between items-start border-t-[1px] p-4 dark:hover:bg-gray-900 hover:bg-gray-200 border-slate-600/35 dark:border-slate-400/35">
                                <Image className="h-10 w-13 object-cover rounded-full" alt="" src='/profile1.jpeg' width={50} height={50} />
                                <div className="w-full flex flex-col px-4">
                                    <span className="text-sm font-semibold">{items.name}</span>
                                    <span className="flex items-center space-x-1 mb-3">
                                        {iconnotif(items.notif)}
                                        <span>{categories(items.notif)}</span>
                                        <span className="text-gray-400 dark:text-gray-600">{items.time}</span>
                                    </span>
                                    <span className="flex items-center space-x-1">
                                        <IoTimeSharp className="text-gray-400" size={13} />
                                        <span className="text-gray-500 text-xs tracking-wide">{items.dates}</span>
                                    </span>
                                </div>
                                <span className="relative flex p-3 rounded-lg justify-center items-center cursor-pointer hover:ring-[1px] hover:ring-gray-500/25" onClick={() => index == submenu ? setSubmenu(null) : setSubmenu(index)}>
                                    <BiDotsHorizontalRounded size={14} />
                                    <span className={`${index == submenu ? 'flex' : 'hidden'} absolute right-1 w-[150px] justify-start items-center rounded-md py-2 top-10 z-[21] bg-gray-100 text-slate-900/70 dark:text-gray-100/70 dark:bg-slate-950 border-[1px] border-slate-600/35 dark:border-slate-400/35`}>
                                        <span className="w-full hover:bg-gray-200 hover:text-slate-900 hover:dark:text-gray-100 hover:dark:bg-slate-800  py-2 px-4">
                                            Mark as unread
                                        </span>
                                    </span>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Notif