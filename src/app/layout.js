import "./globals.css";
import Sidebar from "@/app/component/sidebar";
import Navbar from "@/app/component/navbar";
import localFont from 'next/font/local'
import Footer from "./component/footer";
const myFont = localFont({
  src: [{
    path: './Oxygen-Regular.ttf',
    weight: '400',
    style: 'normal'
  }],
  display: 'swap',
})
export const metadata = {
  title: "Ina-Geoportal",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className} suppressHydrationWarning={true}>
        <main className="w-full flex flex-col top-0 bg-zinc-200 dark:bg-zinc-800 text-gray-800 dark:text-gray-200">
          {/* {children} */}
          <Navbar />
          {/* <aside className="absolute z-40 left-0 top-0">
            <Sidebar />
          </aside> */}
          <div className="relative flex w-full h-full px-4 top-2">
            <section className="px-3 w-full h-full flex flex-col">
              {children}
            </section>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
