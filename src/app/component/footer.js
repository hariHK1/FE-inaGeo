'use client'

import Image from "next/image"


export default function Footer() {
    return (
        <>
            {/* <div className="absolute bottom-0 z-50 flex flex-col items-center justify-between w-full h-[200px] mx-auto bg-gray-900 shadow-2xl space-y-7 sm:flex-row sm:space-y-0 p-7 bg-slate rounded-t-xl text-slate-200">
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-start space-x-3">
                        <Image className="w-auto h-auto" src='/logo-footer.png' width={50} height={50} alt='logo-footer' />
                        <div className="flex flex-col items-start justify-start ml-3">
                            <span>
                                Badan Informasi Geospasial
                            </span>
                            <span className="text-[10px]">
                                Integritas, Visioner, Tanggung Jawab, Kerja Sama
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start w-full sm:items-end">
                    <span>
                        Hubungi kami :
                    </span>
                    <span className="text-[12px]">
                        Badan Informasi Geospasial
                    </span>
                    <span className="text-[12px]">
                        Jl. Raya Jakarta - Bogor Km. 46 Cibinong - Bogor
                    </span>
                    <span className="text-[12px]">
                        Telp. 021-8753155 atau 021-8752062
                    </span>
                    <span className="text-[12px]">
                        email : info@big.go.id
                    </span>
                </div>
            </div> */}
            <div className="bottom-0 flex p-2 bg-slate mx-auto w-full text-sm items-center justify-center bg-slate-900 z-10 shadow-inner h-[40px] text-slate-200">
                Copyright © 2024 Badan Informasi Geospasial All Right Reserved
            </div>
        </>
    )
}