import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Promo1 from './images/Promo1.jpg';
import Promo2 from './images/Promo2.jpg';
import Promo3 from './images/Promo3.jpg';
import Promo4 from './images/Promo4.jpg';

const Promo = () => {
  return (
    <div className='Promo py-2'>
        <div className="container">
            <div className="head flex justify-between items-center lg:justify-start lg:gap-2">
                <h4 className='text-xl font-bold py-2'>Spesial di Tokopedia Hari Ini</h4>
                <p className='text-emerald-600 font-bold text-base'>Lihat semua</p>
            </div>
        <div className="images hidden lg:flex-row lg:flex lg:gap-2 ">
            <img src={Promo1} alt="" className='lg:w-1/4 lg:p-0' />
            <img src={Promo2} alt="" className='lg:w-1/4 lg:p-0' />
            <img src={Promo3} alt="" className='lg:w-1/4 lg:p-0' />
            <img src={Promo4} alt="" className='lg:w-1/4 lg:p-0' />
        </div>
        </div>
        <div className="images flex flex-wrap lg:hidden">
            <img src={Promo1} alt="" className='w-1/2 pr-1 pb-1' />
            <img src={Promo2} alt="" className='w-1/2 pl-1 pb-1' />
            <img src={Promo3} alt="" className='w-1/2 pr-1 pt-1' />
            <img src={Promo4} alt="" className='w-1/2 pl-1 pt-1' />
        </div>
    </div>
  )
}

export default Promo