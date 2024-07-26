'use client'

import { useEffect, useRef, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
function useOutsideAlerter(ref, open) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                open(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, open]);
}

const Selectbox = ({ label, value, onChange, id, name, require, selectdata, data }) => {
    const wrapperRef = useRef(null);
    function handleOpen(value) {
        setOpen(value)
    }
    useOutsideAlerter(wrapperRef, handleOpen);
    const [open, setOpen] = useState(name + 0);
    return (
        <div ref={wrapperRef} className="relative w-full h-auto flex items-center group font-sans font-semibold bg-white/70 dark:bg-zinc-950 rounded-md border-[1.5px] border-spacing-10 border-zinc-500">
            <input autoComplete='off' className="z-20 bg-transparent cursor-pointer appearance-none w-full text-[12px] pt-5 pb-2 px-[10px] outline-none focus:outline-none focus:ring-4 shadow-md focus:rounded-md peer" type="text" onChange={onChange} value={value} id={id} name={name} required={require} onClick={() => open == name + 1 ? setOpen(name + 0) : setOpen(name + 1)} />
            <label className={`${!value.match(/\w/g) ? '' : 'pl-2 text-slate-400 scale-95 -translate-y-2'} uppercase absolute z-10 items-start pl-3 duration-300 transform peer-focus:pl-2 peer-focus:text-slate-400 peer-focus:scale-95 peer-focus:-translate-y-2 text-[10px]`}>{label}</label>
            <BsTrash onClick={() => data('')} className="absolute z-30 cursor-pointer right-7 w-8 text-zinc-400 hover:text-zinc-500 border-r-[2px] border-zinc-300" />
            <IoMdArrowDropdown className="absolute text-zinc-400 peer-hover:text-zinc-500 right-2" />
            <div className={`absolute w-full h-auto ${open == name + 1 ? 'flex' : 'hidden'} flex-col p-1 bg-zinc-100 dark:bg-zinc-950 rounded-sm ring-1 ring-[#B9B5AF] z-50 top-[50px]`}>
                {
                    selectdata.length == 0 ? <span className="w-full text-wrap p-1 text-[10px] text-slate-400">Tidak ada Data</span> : selectdata.map((items, index) => {
                        return (
                            <span key={items.name + index} onClick={() => {
                                data(items.name)
                                setOpen(name + 0)
                            }} className="cursor-pointer w-full text-wrap p-1 text-[10px] hover:bg-zinc-300/50 dark:hover:bg-white/10 hover:text-slate-950 text-slate-600 dark:text-slate-400 dark:hover:text-slate-100">{items.name}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Selectbox