import React from 'react';
import Store from './images/Store.jpg';

const OpenStore = () => {
  return (
    <div className='OpenStore py-3 border-dashed border-2 lg:py-8'>
        <div className="container">
            <div className="lg:flex lg:items-centers">
                <div className="left lg:w-2/3">
                    <h4 className='text-orange-400 font-bold text-lg'>Punya Toko Online? Buka Cabangnya di Tokopedia</h4>
                    <p className='text-gray-400 text-sm my-1 lg:my-4'>Mudah, nyaman dan bebas Biaya Layanan Transaksi. <span className='font-bold text-gray-700'>GRATIS</span></p>
                    <div className="btn flex items-center">
                        <button type="button" className="focus:outline-none text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2 mt-2 dark:bg-emerald-500 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Buka Toko <span className='font-bold text-sm '>Gratis</span>
                        </button>
                        <p className='text-sm font-bold text-emerald-600'>Pelajari Lebih Lanjut</p>
                    </div>
                </div>
                <div className="right mt-4 lg:w-1/3">
                    <img src={Store} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OpenStore