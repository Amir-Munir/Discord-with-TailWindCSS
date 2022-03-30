import React from 'react'
import { FaFire, FaPoo,FaDiscord, FaUserFriends } from 'react-icons/fa'
import { MdAdd, MdBolt, MdOutlineSearch, MdNotifications } from 'react-icons/md'
import { TiPin } from 'react-icons/ti'
import { VscQuestion } from 'react-icons/vsc'

import CR7 from './images/CR7.jpg'

const SideBar = () => {
  return (<>
    <div className='flex flex-col min-h-screen'>
        <div className='bg-gray-700 flex top-bar ml-20'>
            <div className='bg-gray-800 text-white w-44 flex-none'>
            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-gray-800 
             font-medium text-sm px-4 py-2.5 text-center inline-flex items-center drop-shadow-2xl  outline-none" type="button">
                Dropdown button 
                <svg className="ml-2 w-4 h-2" fill="none" stroke="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div id="dropdown" className="hidden z-10 w-44  rounded divide-y shadow dark:bg-gray-700">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                <li>
                    <a href="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                    <a href="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                    <a href="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                    <a href="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
                </ul>
            </div>
            </div>
            <div className=' bg-gray-700 text-white mt-2 ml-2'># general
                <div className='absolute right-0 space-x-3 top-1.5 flex'>
                <MdNotifications size='23' style={{color:"gray"}}/>
                <TiPin size='28' style={{color:"gray"}}/>
                <FaUserFriends size='23' style={{color:"gray"}}/>
                <input className='w-40 h-6 bg-gray-800 outline-none' type='text' placeholder='Search' ></input>
                <MdOutlineSearch size='23' style={{color:"gray"}}/>
                <VscQuestion size='23' style={{color:"gray"}}/>
                </div>
            </div>
        </div>
        <div className='flex-1 bg-blue-500 flex'>
            <div className='bg-gray-900 w-20 flex-none'>
            <div className='fixed mt-5 left-0 h-screen w-20 m-0 flex flex-col bg-gray-900 text-white shadow-lg icons-bar '>
                <div className='ml-5 shadow-lg bg-gray-00 mt-3 h-12 w-12 rounded-3xl  '>
                    <FaDiscord size='38' className='m-1'/>
                </div>
                <div className='mt-5'>
                    <SideBarIcon icon={ <FaFire size='28' />} />
                    <SideBarIcon icon={ <MdAdd size='38' />} />
                    <SideBarIcon icon={ <MdBolt size='38' />} />
                    <SideBarIcon icon={ <FaPoo size='28' />} />
                </div>
            </div> 
            </div>
            <div className='bg-gray-800 text-sm w-44 flex-col justify-between flex-none'>
                <div className='overflow-y-auto' >
                    <ul className='px-2 py-3'>
                        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
                            <a href='/' className='flex-item-center'>
                                <span className='text-xl '># </span>
                                <span className=''>Welcome</span>
                            </a>
                        </li>
                        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
                            <a href='/' className='flex-item-center'>
                                <span className='text-xl '># </span>
                                <span className=''>faq</span>
                            </a>
                        </li>
                    </ul>
                    <button className='flex items-center ml-2 text-gray-500 hover:text-gray-200 outline-none' >
                        TAILWINDCSS
                        <svg className="ml-2 w-4 h-2" fill="none" stroke="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <ul className='px-2 py-3'>
                        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
                            <a href='/' className='flex-item-center'>
                                <span className='text-xl '># </span>
                                <span className=''>general</span>
                            </a>
                        </li>
                        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
                            <a href='/' className='flex-item-center'>
                                <span className='text-xl '># </span>
                                <span className=''>core-dev</span>
                            </a>
                        </li>
                    </ul>
                    <button className='flex items-center ml-2 text-gray-500 hover:text-gray-200 outline-none' >
                        OFF TOPIC
                        <svg className="ml-2 w-4 h-2" fill="none" stroke="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <ul className='px-2 py-3'>
                        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
                            <a href='/' className='flex-item-center'>
                                <span className='text-xl '># </span>
                                <span className=''>plugins</span>
                            </a>
                        </li>
                        <li className='text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900'>
                            <a href='/' className='flex-item-center'>
                                <span className='text-xl '># </span>
                                <span className=''>doc</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='bg-green-500 flex-1 flex justify-between'>
                <div className='bg-indigo-900 flex-1 flex justify-between'>
                    <div className='bg-gray-750 flex-1 flex flex-col justify-between'>
                        <div className='text-sm text-gray-400 overflow-y-auto'>
                            <div className='flex mx-6 my-3 border-t border-gray-700'>
                                <div className='flex-none'>
                                    <img src={CR7} alt='avatar' className='w-10 h-10 rounded-full'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-indigo-600 w-56 flex-none'>user SideBar</div>
            </div>
        </div>
    </div>
    
    </>
  )
}

const SideBarIcon = ({ icon }) => {
   return( 
   <div className='sidebar-icon'>
        {icon}
    </div>
    )
}
export default SideBar;
 