import { BiHome } from "react-icons/bi";
import { FaCode, FaRegCircleUser } from "react-icons/fa6";
import { PiPhoneCallLight } from "react-icons/pi";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
export const Menu = () => [
    { menu: 'main', category: 'Modules', title: 'Home', link: '/', dropdown: false, icon: <BiHome size={17} /> },
    { menu: 'main', category: 'Modules', title: 'Metadata', link: '/metadata', dropdown: false, icon: <FaCode size={17} /> },
    {
        menu: 'main', category: 'Modules', title: 'Direktorat', dropdown: true, iconStart: <HiOutlineBuildingOffice size={17} />, subMenu: [
            { title: 'DSTIG', link: '/dstig', icon: <HiOutlineBuildingOffice size={17} /> },
            { title: 'DKJIG', link: '/dkjig', icon: <HiOutlineBuildingOffice size={17} /> },
            { title: 'DSDM', link: '/dsdm', icon: <HiOutlineBuildingOffice size={17} /> },
        ]
    },
    { menu: 'main', category: 'Modules', title: 'Kontak', link: '/kontak', dropdown: false, icon: <PiPhoneCallLight size={17} /> },
    { menu: 'main', category: 'Content', title: 'Home', link: '/', dropdown: false, icon: <BiHome size={17} /> },
    { menu: 'main', category: 'Content', title: 'Metadata', link: '/metadata', dropdown: false, icon: <FaCode size={17} /> },
    {
        menu: 'main', category: 'Content', title: 'Direktorat', dropdown: true, iconStart: <HiOutlineBuildingOffice size={17} />, subMenu: [
            { title: 'DSTIG', link: '/dstig', icon: <HiOutlineBuildingOffice size={17} /> },
            { title: 'DKJIG', link: '/dkjig', icon: <HiOutlineBuildingOffice size={17} /> },
            { title: 'DSDM', link: '/dsdm', icon: <HiOutlineBuildingOffice size={17} /> },
        ]
    },
    { menu: 'main', category: 'Content', title: 'Kontak', link: '/kontak', dropdown: false, icon: <PiPhoneCallLight size={17} /> },
    { menu: 'foot', title: 'Akun', link: '/akun', dropdown: false, icon: <FaRegCircleUser size={17} /> },
]