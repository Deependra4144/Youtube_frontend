import React from 'react'
import { BiLike } from 'react-icons/bi'
import { GoVideo } from 'react-icons/go'
import { IoHome } from 'react-icons/io5'
import { LuHistory } from 'react-icons/lu'

function Sidebar({ sidebarToggel }) {
    return (
        <div className={`md:block sticky left-0 top-14 ${sidebarToggel ? 'w-16 ps-4 hidden' : 'w-52 border-r px-4 block top-13 z-30'} h-full transition-all duration-200`}>
            <div className="flex flex-col gap-5 pt-4">
                <div className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? '' : 'flex px-5 gap-7 py-2 bg-blue-100 rounded-full'}`}>
                    <IoHome fontSize={26} />
                    <p className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? 'text-sm' : 'font-bold'}`}>Home</p>
                </div>

                <div className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? '' : 'flex px-5 gap-7 py-2 hover:bg-blue-100 rounded-full'}`}>
                    <LuHistory fontSize={26} />
                    <p className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? 'text-sm' : 'font-bold'}`}>History</p>
                </div>
                <div className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? '' : 'flex px-5 gap-7 py-2 hover:bg-blue-100 rounded-full'}`}>
                    <GoVideo fontSize={26} />
                    <p className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? 'text-sm' : 'font-bold'}`}>Your Video</p>
                </div>
                <div className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? '' : 'flex px-5 gap-7 py-2 hover:bg-blue-100 rounded-full'}`}>
                    <BiLike fontSize={26} />
                    <p className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? 'text-sm' : 'font-bold'}`}>Your Video</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
