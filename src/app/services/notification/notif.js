import { BiHome } from "react-icons/bi";
import { FaCode, FaRegCircleUser } from "react-icons/fa6";
import { PiPhoneCallLight } from "react-icons/pi";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
export const Notifdata = () => [
    { id: 1, name: 'Abu Bakar Ash Shiddiq', notif: 1, time: '10m', dates: '10:41 AM August 7,2021' },
    { id: 2, name: 'Umar bin Khattab', notif: 2, time: '8m', dates: '8:09 AM September 29,2021' },
    { id: 3, name: 'Utsman bin Affan', notif: 3, time: '1m', dates: '1:18 AM May 9,2023' },
    { id: 4, name: 'Ali bin Abi Thalib', notif: 4, time: '7m', dates: '4:12 AM June 2,2023' },
    { id: 5, name: 'Thalhah bin Ubaidillah', notif: 5, time: '14m', dates: '2:10 AM December 14,2023' },
    { id: 6, name: 'Zubair bin Awwam', notif: 3, time: '20m', dates: '5:18 AM October 17,2023' },
    { id: 7, name: 'Abdurrahman bin Auf', notif: 2, time: '35m', dates: '8:30 AM January 19,2023' },
    { id: 8, name: 'Saad bin Abi Waqqash', notif: 4, time: '41m', dates: '5:08 AM April 3, 2023' },
    { id: 9, name: 'Said bin Zaid', notif: 5, time: '21m', dates: '1:55 AM March 6,2023' },
    { id: 10, name: 'Abu Ubaidillah bin Jarrah', notif: 1, time: '45m', dates: '10:18 AM February 3,2023' },
]
export const Category = () => [
    { id: 1, notif: 'mention', detail: 'Mentioned you in a comment.' },
    { id: 2, notif: 'event', detail: 'Created an event.' },
    { id: 3, notif: 'like', detail: 'Liked your comment.' },
    { id: 4, notif: 'tag', detail: 'Tagged you in a comment.' },
    { id: 5, notif: 'tag', detail: 'Tagged you in a photo.' },
]