import React from 'react'
import { BiLike } from 'react-icons/bi'
import { BsCollectionPlay } from 'react-icons/bs'
import { FiUserCheck } from 'react-icons/fi'
import { GoVideo } from 'react-icons/go'
import { IoHome, IoSettings } from 'react-icons/io5'
import { LuHistory } from 'react-icons/lu'
import { MdOutlineVideoChat } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Sidebar({ sidebarToggel }) {
    let { user } = useSelector(state => state.auth)
    return (
        <div className={`md:block sticky left-0 top-14 ${sidebarToggel ? 'w-16 ps-4 hidden' : 'w-52 border-r px-4 block top-13 z-30'} h-full transition-all duration-200`}>
            <div className="flex flex-col gap-5 pt-4">
                <NavLink to='/'>
                    <div className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? '' : 'flex px-5 gap-7 py-2 bg-blue-100 rounded-full'}`}>
                        <IoHome fontSize={26} />
                        <p className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? 'text-sm' : 'font-bold'}`}>Home</p>
                    </div>
                </NavLink>

                <NavLink to='/liked-videos'>
                    <div className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? '' : 'flex px-5 gap-7 py-2 hover:bg-blue-100 rounded-full'}`}>
                        <GoVideo fontSize={26} />
                        <p className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? 'text-sm' : 'font-bold'}`}>Liked Videos</p>
                    </div>
                </NavLink>

                <NavLink to='/history'>
                    <div className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? '' : 'flex px-5 gap-7 py-2 hover:bg-blue-100 rounded-full'}`}>
                        <LuHistory fontSize={26} />
                        <p className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? 'text-sm' : 'font-bold'}`}>History</p>
                    </div>
                </NavLink>

                <NavLink to='/my-content'>
                    <div className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? '' : 'flex px-5 gap-7 py-2 hover:bg-blue-100 rounded-full'}`}>
                        <MdOutlineVideoChat fontSize={26} />
                        <p className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? 'text-sm' : 'font-bold'}`}>My Content</p>
                    </div>
                </NavLink>

                <NavLink to='/collection'>
                    <div className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? '' : 'flex px-5 gap-7 py-2 hover:bg-blue-100 rounded-full'}`}>
                        <BsCollectionPlay fontSize={26} />
                        <p className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? 'text-sm' : 'font-bold'}`}>Collection</p>
                    </div>
                </NavLink>

                <NavLink to='/subscribers'>
                    <div className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? '' : 'flex px-5 gap-7 py-2 hover:bg-blue-100 rounded-full'}`}>
                        <FiUserCheck fontSize={26} />
                        <p className={`hover:cursor-pointer transition-all duration-200 hover:scale-105 ${sidebarToggel ? 'text-sm' : 'font-bold'}`}>Subscribers</p>
                    </div>
                </NavLink>
            </div>
            <div className='flex flex-col space-y-8 mt-6'>
                {user ?
                    <NavLink to='/userdetail'>
                        <div className='rounded-full w-8 h-8'>
                            <img className='w-full h-full object-cover rounded-full' src={user?.data?.avatar} alt="" />
                            <p className='text-sm'>User</p>
                        </div>
                    </NavLink>
                    : null}
                <div>
                    <IoSettings fontSize={26} />
                    <p>settings</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
