import React from 'react';
import {BsCart} from 'react-icons/bs';
import { BiMap } from 'react-icons/bi';

const NavDesk = () => {
  return (
    <div className='NavDesk py-2 shadow-md hidden lg:block border-b-2 lg:bg-white'>
        <div className="container">
            <div className="first flex justify-between items-center gap-4">
                <h2 className='text-emerald-600 text-3xl font-bold'>Tokopedia</h2>
                <p className='text-gray-400 text-sm'>Kategori</p>
                
                <div className=" input relative grow">
                    <input type="search" id="search-dropdown" className="block p-1.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-100 border-l-2 border border-gray-300 " placeholder="Search" required></input>
                    <button type="submit" className="absolute top-0 right-0 p-1.5 text-sm font-medium text-gray-800 bg-gray-300 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "><svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                </div>
                <BsCart size={30}/>
                <div className="btn border-l-2 pl-4">
                    <button type="button" className="text-emerald-700 hover:text-white border border-emerald-700 hover:bg-emerald-800 focus:outline-none focus:ring-emerald-300 rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 font-bold">Masuk</button>
                    <button type="button" className="text-white bg-emerald-600 hover:text-emerald-600 border border-emerald-700 hover:bg-white focus:outline-none focus:ring-emerald-300 rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 font-bold">Daftar</button>
                </div>

            </div>
            <div className="second flex justify-between ml-56">
                <ul className='flex gap-2'>
                    <li className='text-xs text-gray-400'>Kursi Kantor</li>
                    <li className='text-xs text-gray-400'>Kandang Kucing</li>
                    <li className='text-xs text-gray-400'>Tas Selempang Pria</li>
                    <li className='text-xs text-gray-400'>Kalender 2023</li>
                    <li className='text-xs text-gray-400'>Oppo A53</li>
                    <li className='text-xs text-gray-400'>Iphone 11 Second</li>
                </ul>
                <div className="loc flex items-center">
                    <BiMap size={20}/>
                    <p className='text-xs text-gray-500'>Dikirim Ke <span className='font-bold'>Jakarta Pusat</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavDesk