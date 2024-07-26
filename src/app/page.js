'use client'
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Textbox from "./component/form/textbox";
import { useState } from "react";
import Selectbox from "./component/form/select";
import Searching from "./services/filter/search";

export default function Home() {
  const [kategori, setKategori] = useState('');
  const [simpuljaringan, setSimpuljaringan] = useState('');
  const Selectdatakategori = [
    { id: 1, name: 'Kementerian/Lembaga' },
    { id: 2, name: 'Provinsi' },
    { id: 3, name: 'Kabupaten/Kota' },
  ]
  const Selectdatasimpuljaringan = [
    { id: 1, name: 'Jawa Barat' },
    { id: 2, name: 'Jawa Tengah' },
    { id: 3, name: 'Jawa Timur' },
    { id: 4, name: 'Banten' },
    { id: 5, name: 'DKI Jakarta' },
  ]
  const Filterselectdatakategori = value => Selectdatakategori.filter(i => value !== "" ? i.name.toLowerCase().includes(value.toLowerCase()) : i).sort((a, b) => a.id - b.id)
  const [dataselectedkategori, setDataselectedkategori] = useState('')
  const Datakategori = value => {
    setDataselectedkategori(value)
    setKategori(value)
  }
  const Filterselectdatasimpuljaringan = value => Selectdatasimpuljaringan.filter(i => value !== "" ? i.name.toLowerCase().includes(value.toLowerCase()) : i).sort((a, b) => a.id - b.id)
  const [dataselectedsimpuljaringan, setDataselectedsimpuljaringan] = useState('')
  const Datasimpuljaringan = value => {
    setDataselectedsimpuljaringan(value)
    setSimpuljaringan(value)
  }
  return (
    <main className="flex z-10 flex-col w-full h-full mb-10 items-center justify-between bg-[#ECE8E2] dark:bg-zinc-900 rounded-2xl shadow-lg ring-1 ring-[#B9B5AF] dark:ring-[#B9B5AF]/10">
      {/* <div className="z-30 absolute top-0 left-0 w-screen h-14 flex items-center bg-slate-900/70 text-slate-200">
        <Marquee>
          Saat ini sedang dilakukan pemeliharaan aplikasi Ina-Geoportal, Anda tetap dapat menggunakan layanan pada link dibawah ini:
        </Marquee>
      </div> */}
      <div className="relative flex flex-col w-full h-full max-h-[630px] rounded-t-2xl shadow-lg shadow-[#B9B5AF]/30 dark:shadow-slate-700 overflow-hidden">
        <Image className="w-full h-full object-cover opacity-90" src='/bg.jpg' width={800} height={800} alt="" unoptimized />
      </div>
      <span className="w-full flex border-b-2 border-b-[#B9B5AF]"></span>
      <div className="w-full h-[410px] flex flex-col lg:flex-row justify-between items-start px-4 py-6 my-10">
        <div className="lg:w-[800px] w-full h-full p-2 flex flex-col border border-[#B9B5AF] space-y-3">
          <Selectbox key='kategori' onChange={(e) => setKategori(e.target.value)} value={kategori} id='kategori' name='kategori' placeholder='Kategori' require={+true} label='Kategori simpul' selectdata={Filterselectdatakategori(kategori)} data={Datakategori} />
          <Selectbox key='simpuljaringan' onChange={(e) => setSimpuljaringan(e.target.value)} value={simpuljaringan} id='simpuljaringan' name='Simpul Jaringan' placeholder='simpul jaringan' require={+true} label='Simpul Jaringan' selectdata={Filterselectdatasimpuljaringan(simpuljaringan)} data={Datasimpuljaringan} />
          <div className="w-full h-56 flex flex-col justify-start items-start bg-white/70 dark:bg-zinc-950 rounded-md drop-shadow-lg border-[1.5px] text-sm border-[#B9B5AF] p-3 text-zinc-700 dark:text-zinc-300">
            <div className="w-full h-full overflow-auto overscroll-y-auto">
              <span className="w-full h-8 p-1 flex justify-start items-center hover:bg-zinc-500/10 cursor-pointer">
                <span className={`w-[13px] h-[13px] rounded-full bg-green-500 mx-2`}></span>
                <span>Kabupaten Bogor</span>
              </span>
              <span className="w-full h-8 p-1 flex justify-start items-center hover:bg-zinc-500/10 cursor-pointer">
                <span className={`w-[13px] h-[13px] rounded-full bg-green-500 mx-2`}></span>
                <span>Kota Bogor</span>
              </span>
              <span className="w-full h-8 p-1 flex justify-start items-center hover:bg-zinc-500/10 cursor-pointer">
                <span className={`w-[13px] h-[13px] rounded-full bg-red-500 mx-2`}></span>
                <span>Kota Bandung</span>
              </span>
              <span className="w-full h-8 p-1 flex justify-start items-center hover:bg-zinc-500/10 cursor-pointer">
                <span className={`w-[13px] h-[13px] rounded-full bg-green-500 mx-2`}></span>
                <span>Kabupaten Bandung</span>
              </span>
              <span className="w-full h-8 p-1 flex justify-start items-center hover:bg-zinc-500/10 cursor-pointer">
                <span className={`w-[13px] h-[13px] rounded-full bg-red-500 mx-2`}></span>
                <span>Kabupaten Majalengka</span>
              </span>
              <span className="w-full h-8 p-1 flex justify-start items-center hover:bg-zinc-500/10 cursor-pointer">
                <span className={`w-[13px] h-[13px] rounded-full bg-green-500 mx-2`}></span>
                <span>Kota Pekalongan</span>
              </span>
              <span className="w-full h-8 p-1 flex justify-start items-center hover:bg-zinc-500/10 cursor-pointer">
                <span className={`w-[13px] h-[13px] rounded-full bg-red-500 mx-2`}></span>
                <span>Kabupaten Pekalongan</span>
              </span>
              <span className="w-full h-8 p-1 flex justify-start items-center hover:bg-zinc-500/10 cursor-pointer">
                <span className={`w-[13px] h-[13px] rounded-full bg-green-500 mx-2`}></span>
                <span>Kota Cirebon</span>
              </span>
              <span className="w-full h-8 p-1 flex justify-start items-center hover:bg-zinc-500/10 cursor-pointer">
                <span className={`w-[13px] h-[13px] rounded-full bg-green-500 mx-2`}></span>
                <span>Kota Semarang</span>
              </span>
              <span className="w-full h-8 p-1 flex justify-start items-center hover:bg-zinc-500/10 cursor-pointer">
                <span className={`w-[13px] h-[13px] rounded-full bg-green-500 mx-2`}></span>
                <span>Kota Tegal</span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex border lg:border-l-0 p-2 border-[#B9B5AF]">
          <div className="w-full flex lg:flex-row flex-col p-2 justify-center items-center">
            <span className="w-[150px] h-[200px] flex flex-col rounded-xl justify-center items-center transition-all ease-in opacity-70 hover:opacity-100 hover:bg-zinc-300 hover:dark:bg-zinc-700">
              <Image className="w-[105px] h-[123px] object-cover" src="/provinsi/12. Jawa Barat.png" width={50} height={90} alt="lambang" />
              <span className="py-3 text-sm">Jawa Barat</span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
