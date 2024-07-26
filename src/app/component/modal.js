'use client'

import { BiX } from "react-icons/bi"

export default function Modal({ open, style, onClose, children }) {
    return (
        <div
            className={`absolute z-[20] left-0 top-0 bottom-0 right-0 w-full h-screen`}
        >
            <div
                onClick={onClose}
                className={`fixed pb-[60px] pt-[50px] left-0 top-0 bottom-0 right-0 flex items-start justify-center transition-colors ${open ? 'visible bg-black/50 backdrop-blur-sm' : 'invisible'}`}
            >
                <div
                    onClick={e => e.stopPropagation()}
                    className={`${style} w-full max-w-[90%] dark:bg-slate-800 bg-slate-100 text-slate-800 dark:text-slate-100 rounded-md shadow p-9 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
                    <button onClick={onClose} className="absolute p-1 text-gray-400 rounded-lg top-2 right-2 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-600 dark:hover:text-gray-300">
                        <BiX size={20} />
                    </button>
                    {children}
                </div>
            </div>
        </div>
    )
}
