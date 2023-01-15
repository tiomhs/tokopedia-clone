import React from 'react';
import {AiTwotoneHome,AiFillCheckCircle,AiOutlineHeart} from 'react-icons/ai';
import {MdOutlineFeed} from 'react-icons/md';
import {BsNewspaper} from 'react-icons/bs';

const FooterMobile = () => {
  return (
    <div className=' sticky bottom-0 z-50 bg-white shadow-sm border-t-2 lg:hidden'>
        <div className="container">
            <div className="">
                <ul className='flex justify-between'>
                    <li className='hover:text-emerald-600'>
                        <AiTwotoneHome size={35} className='p-0.5 mx-auto'/>
                        <p className='text-gray-500 text-sm'>Home</p>
                    </li>
                    <li className='hover:text-emerald-600'>
                        <MdOutlineFeed size={35}  className='p-0.5 mx-auto'/>
                        <p className='text-gray-500 text-sm'>Feed</p>
                    </li>
                    <li className='hover:text-emerald-600'>
                        <AiFillCheckCircle size={35} className='p-0.5 mx-auto'/>
                        <p className='text-gray-500 text-sm'>Oficial Store</p>
                    </li>
                    <li className='hover:text-emerald-600'>
                        <AiOutlineHeart size={35} className='p-0.5 mx-auto'/>
                        <p className='text-gray-500 text-sm'>Wishlist</p>
                    </li>
                    <li className='hover:text-emerald-600'>
                        <BsNewspaper size={35} className='p-0.5 mx-auto'/>
                        <p className='text-gray-500 text-sm'>Transaksi</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FooterMobile