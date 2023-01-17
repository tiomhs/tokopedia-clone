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
                        <AiTwotoneHome size={25} className='p-0.5 mx-auto'/>
                        <p className='text-gray-500 text-xs'>Home</p>
                    </li>
                    <li className='hover:text-emerald-600'>
                        <MdOutlineFeed size={25}  className='p-0.5 mx-auto'/>
                        <p className='text-gray-500 text-xs'>Feed</p>
                    </li>
                    <li className='hover:text-emerald-600'>
                        <AiFillCheckCircle size={25} className='p-0.5 mx-auto'/>
                        <p className='text-gray-500 text-xs'>Oficial Store</p>
                    </li>
                    <li className='hover:text-emerald-600'>
                        <AiOutlineHeart size={25} className='p-0.5 mx-auto'/>
                        <p className='text-gray-500 text-xs'>Wishlist</p>
                    </li>
                    <li className='hover:text-emerald-600'>
                        <BsNewspaper size={25} className='p-0.5 mx-auto'/>
                        <p className='text-gray-500 text-xs'>Transaksi</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FooterMobile