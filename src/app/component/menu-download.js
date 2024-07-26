'use client'
import { Download } from "../services/download/download";
import Link from "next/link";
function Menudownload({ toggle }) {
    return (
        <div className={`${toggle == false ? 'opacity-0 invisible h-0' : 'opacity-100 visible h-full'} transition-all absolute z-[50] top-[70px] right-[100px] sm:w-[400px] w-[280px] sm:h-auto h-[280px] flex flex-col bg-zinc-200 dark:bg-zinc-800 text-slate-900 dark:text-gray-100 border-slate-600/35 dark:border-slate-400/35 border-[1px] rounded-lg text-xs py-2 delay-75 ease-in-out`}>
            <span className="border-b-[15.5px] border-l-[14px] border-r-[14px] border-r-transparent border-l-transparent border-b-gray-500 dark:border-b-slate-400/35 w-5 h-5 absolute right-[20px] -top-5"></span>
            <span className="border-b-[15px] border-l-[13px] border-r-[13px] border-r-transparent border-l-transparent border-b-zinc-200 dark:border-b-zinc-800 w-5 h-5 absolute right-[21px] -top-5"></span>
            <div className="w-full flex justify-between items-center px-3 pb-2 tracking-wide">
                <span className="text-base font-bold">Download data</span>
                {/* <span className="dark:text-sky-300 text-blue-500 cursor-pointer hover:underline">Mark all as read</span> */}
            </div>
            <div className="w-full h-full flex flex-col overflow-y-auto">
                {
                    Download().map((items, index) => {
                        return (
                            <Link target='_blank' href={items.link} key={index} className="w-full flex justify-between items-start border-t-[1px] p-4 dark:hover:bg-gray-900 hover:bg-gray-300 border-slate-600/35 dark:border-slate-400/35">
                                <div className="w-full flex flex-col">
                                    <span className="text-sm font-bold underline underline-offset-2">{items.name}</span>
                                    <span className="text-justify">{items.detail}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menudownload