import React from 'react';
import {AiOutlineMail, AiOutlineBell} from 'react-icons/ai';
import {BsCart, BsPaypal} from 'react-icons/bs';
import {RxHamburgerMenu} from 'react-icons/rx';
import {BiMap} from 'react-icons/bi';
import {MdStars} from 'react-icons/md';

const Navbar = () => {
  return (
    // mobile
    <div className='bg-emerald-600 sticky top-0 lg:hidden'>
        <div className="container py-3">
            <div className="head flex justify-between items-center">
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-4/6 p-2" placeholder='Cari di Tokopedia' required/>
                <AiOutlineMail size={25} className='text-white'/>
                <AiOutlineBell size={25} className='text-white'/>
                <BsCart size={25} className='text-white'/>
                <RxHamburgerMenu size={25} className='text-white'/>
            </div>
            <div className='loc py-2 flex text-white items-center'>
                <BiMap size={20}/>
                <p className='text-sm'>Dikirim ke <span className='font-bold'>Rumah Jack Kahuna Laguna</span></p>
            </div>

            {/* saldo dan rewards */}
            <div className='Saldo flex bg-white rounded-xl my-2'>
                <div className="kiri w-1/2 p-3">
                    <p className='flex items-center gap-1 text-gray-500'><BsPaypal className='text-blue-500'/>PayPal</p>
                    <p className='font-bold text-lg'><span>Rp</span>20.000</p>
                    <p className='text-sm text-gray-500'>2000 Coins</p>
                </div> 
                <div className="kanan w-1/2 p-3">
                    <p className='flex items-center gap-1 text-gray-500'><MdStars className='text-gray-300'/> Rewards</p>
                    <p className='font-bold text-lg'>Silver</p>
                    <p className='text-sm text-gray-500'>10 Kupon Baru</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar