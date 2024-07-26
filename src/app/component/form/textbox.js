'use client'

const Textbox = ({ label, value, onChange, id, name, require }) => {
    return (
        <div className="relative z-30 w-full flex items-center group font-sans font-semibold bg-white/70 dark:bg-zinc-500 rounded-md ring-1 ring-[#B9B5AF]">
            <input className="z-20 bg-transparent appearance-none w-full text-[12px] pt-5 pb-2 px-[10px] outline-none focus:outline-none focus:ring-2 focus:ring-sky-300 focus:rounded-md peer" type="text" onChange={onChange} value={value} id={id} name={name} required={require} />
            <label className={`${!value.match(/\w/g) ? '' : 'pl-2 text-slate-600/80 scale-95 -translate-y-2'} uppercase absolute z-10 items-start pl-3 duration-300 transform peer-focus:pl-2 peer-focus:text-slate-600/80 peer-focus:scale-95 peer-focus:-translate-y-2 text-[10px]`}>{label}</label>
        </div>
    )
}

export default Textbox