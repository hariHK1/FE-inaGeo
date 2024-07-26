import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="flex z-10 flex-col w-full h-screen items-center justify-between sm:p-20 p-4">
      <div className="z-30 absolute top-0 left-0 w-screen h-14 flex items-center bg-slate-900/70 text-slate-200">
        <Marquee>
          Saat ini sedang dilakukan pemeliharaan aplikasi Ina-Geoportal, Anda tetap dapat menggunakan layanan pada link dibawah ini:
        </Marquee>
      </div>
      <Image className="-z-30 absolute top-0 left-0 w-screen h-full object-cover" src='/bg.jpg' width={1000} height={1000} alt="" unoptimized />
      <div className="w-full max-w-[700px] bg-slate-700/80 container mx-auto flex flex-col justify-center items-center px-4 text-slate-200 py-6 mt-10">
        <div className="w-full p-5 border-[1px] flex justify-center mb-4 text-xl tracking-wide font-semibold">
          Ina-Geoportal
        </div>
        <div className="w-full flex flex-col text-center justify-center items-center space-y-3">
          <Link target="_blank" href="https://tanahair.indonesia.go.id/map" className="w-full py-2 flex items-center justify-center hover:bg-slate-600 hover:ring-1 hover:ring-slate-300  hover:text-opacity-100 text-opacity-80 cursor-pointer  max-w-[350px] rounded-lg">Map Viewer</Link>
          <Link target="_blank" href="https://tanahair.indonesia.go.id/demnas" className="w-full py-2 flex items-center justify-center hover:bg-slate-600 hover:ring-1 hover:ring-slate-300  hover:text-opacity-100 text-opacity-80 cursor-pointer  max-w-[350px] rounded-lg">Unduh Data Demnas</Link>
          <Link target="_blank" href="https://onemap.big.go.id/" className="w-full py-2 flex items-center justify-center hover:bg-slate-600 hover:ring-1 hover:ring-slate-300  hover:text-opacity-100 text-opacity-80 cursor-pointer  max-w-[350px] rounded-lg">Unduh Data KSP</Link>
          <Link target="_blank" href="https://tanahair.indonesia.go.id/unduh-rbi" className="w-full py-2 flex items-center justify-center hover:bg-slate-600 hover:ring-1 hover:ring-slate-300  hover:text-opacity-100 text-opacity-80 cursor-pointer  max-w-[350px] rounded-lg">Unduh Data RBI per Wilayah</Link>
          <Link target="_blank" href="https://geoservices.big.go.id/portal/apps/webappviewer/index.html?id=114dc269c07446ebaa95307bf423fcf6" className="w-full py-2 flex items-center justify-center hover:bg-slate-600 hover:ring-1 hover:ring-slate-300  hover:text-opacity-100 text-opacity-80 cursor-pointer  max-w-[350px] rounded-lg">Unduh Peta Garis Pantai</Link>
          <Link target="_blank" href="https://geoservices.big.go.id/portal/apps/webappviewer/index.html?id=cf20eb402f114671a7e1194e22e527e8" className="w-full py-2 flex items-center justify-center hover:bg-slate-600 hover:ring-1 hover:ring-slate-300  hover:text-opacity-100 text-opacity-80 cursor-pointer  max-w-[350px] rounded-lg">Unduh Peta Indeks Unduh dan Basemap</Link>
          <Link target="_blank" href="https://geoservices.big.go.id/portal/apps/webappviewer/index.html?id=49bda2cefd3f4b92aa726300bcdb40f7" className="w-full py-2 flex items-center justify-center hover:bg-slate-600 hover:ring-1 hover:ring-slate-300  hover:text-opacity-100 text-opacity-80 cursor-pointer  max-w-[350px] rounded-lg">Unduh Peta Batas Wilayah</Link>
          <Link target="_blank" href="https://geoservices.big.go.id/portal/apps/webappviewer/index.html?id=4293dfc9104a4809a6cf2d396ced4e6b" className="w-full py-2 flex items-center justify-center hover:bg-slate-600 hover:ring-1 hover:ring-slate-300  hover:text-opacity-100 text-opacity-80 cursor-pointer  max-w-[350px] rounded-lg">Unduh Peta Indeks Ketersediaan Data dan Informasi Geospasial Dasar</Link>
        </div>
      </div>
    </main>
  );
}
