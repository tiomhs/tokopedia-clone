import React from 'react';
import {BsPhone} from 'react-icons/bs';

const Head = () => {
  return (
    <div className='bg-gray-300 text-gray-800 hidden lg:block'>
        <div className='container mx-auto flex py-2'>
            <div className='flex gap-2 items-center'>
                <BsPhone/>
                <p>Download Tokopedia App</p>
            </div>
            <div className='ml-auto'>
                <ul className='flex gap-4'>
                    <li>Tentang Tokopedia</li>
                    <li>Mitra Tokopedia</li>
                    <li>Mulai Berjualan</li>
                    <li>Promo</li>
                    <li>Tokopedia Care</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Head