import { IoMdMenu } from "react-icons/io"
import youtubeIcon from '.././../assets/youtube.png'
import { IoMic, IoNotifications, IoPulse, IoSearch } from "react-icons/io5"
import { BiUser } from "react-icons/bi"
function Navbar({ setSidebarToggel }) {
    return (
        <div className="sticky bg-white border-b z-20 top-0 grid grid-cols-3 px-1 md:px-4 py-1">
            <div className="flex items-center gap-6">
                <IoMdMenu cursor={'pointer'} fontSize={28} onClick={() => { setSidebarToggel(prev => !prev) }} />
                <div className="flex items-center gap-2">
                    <img className="w-5 md:w-10" src={youtubeIcon} alt="" />
                    <p className="font-bold text-sm md:text-xl">YouTube<sup>In</sup></p>
                </div>
            </div>


            <div className=" flex gap-3">
                <div className="flex justify-end sm:justify-end overflow-hidden border border-white md:border-gray-400 rounded-full items-center w-full">
                    <input className="hidden md:block w-full outline-none px-4" type="search" placeholder="Search" />
                    <div className="md:bg-gray-300 md:px-3 md:py-1.5">
                        <IoSearch fontSize={26} />
                    </div>
                </div>
                <div className="md:bg-gray-300 md:grid md:place-content-center md:p-2 md:rounded-full">
                    <IoMic fontSize={26} />
                </div>
            </div>

            <div className="flex justify-end gap-7 items-center">
                <div className="hidden md:block">
                    <button className="flex items-center gap-3 bg-gray-200 rounded-full px-3 py-1">
                        <p className="text-2xl">+</p>
                        <p>Create</p>
                    </button>
                </div>
                <IoNotifications fontSize={26} />
                <BiUser fontSize={26} />
            </div>
        </div>
    )
}

export default Navbar
