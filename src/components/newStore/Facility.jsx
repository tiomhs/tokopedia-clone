import React from 'react';
import aman from './images/aman.jpg';
import fasilitas from './images/fasilitasgratis.jpg';
import transparant from './images/transparant.jpg'

const Facility = () => {
  return (
    <div>
        <div className="container">
            <div className="all flex py-4">
                <div className="first flex flex-col justify-center w-1/3 mx-auto lg:flex-row lg:items-center">
                    <img src={transparant} className='w-16 mx-auto lg:w-32' alt="" />
                    <div className="sub text-center lg:text-start lg:ml-4">
                        <h4 className='text-sm font-bold text-emerald-500 lg:text-xl lg:mb-2'>Transparant</h4>
                        <p className='hidden lg:block text-gray-500'>Pembayaran Anda Baru diteruskan setelah Barang Anda terima</p>
                    </div>
                </div>
                <div className="second flex flex-col justify-center w-1/3 mx-auto lg:flex-row lg:items-center">
                    <img src={aman} alt="" className='w-16 mx-auto lg:w-32'/>
                    <div className="sub text-center  lg:text-start lg:ml-4">
                        <h4 className='text-sm font-bold  text-emerald-500 lg:text-xl lg:mb-2'>Aman</h4>
                        <p className='hidden lg:block text-gray-500'>Bandingkan review untuk berbaagi online shop terpercaya se Indonesia</p>
                    </div>
                </div>
                <div className="third flex flex-col justify-center w-1/3 mx-auto lg:flex-row lg:items-center">
                    <img src={fasilitas} alt="" className='w-16 mx-auto lg:w-32 '/>
                    <div className="sub text-center lg:text-start lg:ml-4">
                        <h4 className='text-sm font-bold text-emerald-500 lg:text-xl lg:mb-2'>Fasilitas Escrow Gratis</h4>
                        <p className='hidden lg:block text-gray-500'>Fasilitas Escrow (Rekening Bersama) Tokopedia tidak dikenakan biaya apapun</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facility