import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const NavSearch = () => {

  const [toogleState, setToogleState] = useState(1);

  const toogleTab = (index) => {
    setToogleState(index);
  }

  return (
    <div className='navSearch py-2'>
        <div className="container">
            <h2 className='font-bold text-lg'>Cari Semua Di Tokopedia!</h2>
            <div className="nav pt-1">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={window.innerWidth >= 1024 ? 9 : 3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className=''
                >
                  <SwiperSlide> <li className={toogleState === 1 ? 'p-2 text-emerald-600 border-b-2 border-b-emerald-600 font-bold text-sm text-center ' : 'p-2 text-gray-500 text-center font-bold border-b-2 cursor-pointer text-sm'} onClick={() => toogleTab(1) }>Promo</li></SwiperSlide>
                  <SwiperSlide> <li className={toogleState === 2 ? 'p-2 text-emerald-600 border-b-2 border-b-emerald-600 font-bold text-sm text-center ' : 'p-2 text-gray-500 text-center font-bold border-b-2 cursor-pointer text-sm'} onClick={() => toogleTab(2) }>Tiket Pesawat</li></SwiperSlide>
                  <SwiperSlide> <li className={toogleState === 3 ? 'p-2 text-emerald-600 border-b-2 border-b-emerald-600 font-bold text-sm text-center ' : 'p-2 text-gray-500 text-center font-bold border-b-2 cursor-pointer text-sm'} onClick={() => toogleTab(3) }>Tiket Kereta</li></SwiperSlide>
                  <SwiperSlide> <li className={toogleState === 4 ? 'p-2 text-emerald-600 border-b-2 border-b-emerald-600 font-bold text-sm text-center ' : 'p-2 text-gray-500 text-center font-bold border-b-2 cursor-pointer text-sm'} onClick={() => toogleTab(4) }>Kartu Prakerja</li></SwiperSlide>
                  <SwiperSlide> <li className={toogleState === 5 ? 'p-2 text-emerald-600 border-b-2 border-b-emerald-600 font-bold text-sm text-center ' : 'p-2 text-gray-500 text-center font-bold border-b-2 cursor-pointer text-sm'} onClick={() => toogleTab(5) }>Hotel</li></SwiperSlide>
                  <SwiperSlide> <li className={toogleState === 6 ? 'p-2 text-emerald-600 border-b-2 border-b-emerald-600 font-bold text-sm text-center ' : 'p-2 text-gray-500 text-center font-bold border-b-2 cursor-pointer text-sm'} onClick={() => toogleTab(6) }>Food & Voucher</li></SwiperSlide>
                  <SwiperSlide> <li className={toogleState === 7 ? 'p-2 text-emerald-600 border-b-2 border-b-emerald-600 font-bold text-sm text-center ' : 'p-2 text-gray-500 text-center font-bold border-b-2 cursor-pointer text-sm'} onClick={() => toogleTab(7) }>Produk Digital</li></SwiperSlide>
                  <SwiperSlide> <li className={toogleState === 8 ? 'p-2 text-emerald-600 border-b-2 border-b-emerald-600 font-bold text-sm text-center ' : 'p-2 text-gray-500 text-center font-bold border-b-2 cursor-pointer text-sm'} onClick={() => toogleTab(8) }>Fintech</li></SwiperSlide>
                  <SwiperSlide> <li className={toogleState === 9 ? 'p-2 text-emerald-600 border-b-2 border-b-emerald-600 font-bold text-sm text-center ' : 'p-2 text-gray-500 text-center font-bold border-b-2 cursor-pointer text-sm'} onClick={() => toogleTab(9) }>Tokopedia Salam</li></SwiperSlide>
                </Swiper>
            </div>
            <div className={toogleState === 1 ? 'Promo mt-2' : 'hidden'}>
              <div className='flex flex-wrap'>
                <ul className='w-1/2 lg:w-1/3'>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Bebas Ongkir</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>FlashSale</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tap Tap Kotak</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Serbu Official Store</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Semasa</li>
                </ul>
                <ul className='w-1/2 lg:w-1/3'>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Bebas Ongkir</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>FlashSale</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tap Tap Kotak</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Serbu Official Store</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Semasa</li>
                </ul>
                <ul className='w-1/2 lg:w-1/3'>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Bebas Ongkir</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>FlashSale</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tap Tap Kotak</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Serbu Official Store</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Semasa</li>
                </ul>
              
              </div>
            </div>
            <div className={toogleState === 2 ? 'Pesawat mt-2' : 'hidden'}>
              <div className='flex flex-wrap'>
                <ul className='w-1/2 lg:w-1/3'>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Bali</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Semarang</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Palembang</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Padang</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Batam</li>
                </ul>
                <ul className='w-1/2 lg:w-1/3'>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Singapore</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Surabaya</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Makasar</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Maluku</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Manado</li>
                </ul>
                <ul className='w-1/2 lg:w-1/3'>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Medan</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Malang</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Bandung</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Yogyakarta</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Pesawat Ke Jambi</li>
                </ul>
              </div>
            </div>
            <div className={toogleState === 3 ? 'Kereta mt-2' : 'hidden'}>
              <div className='flex flex-wrap'>
                <ul className='w-1/2 lg:w-1/3'>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Bandung Jakarta</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Bandung Surabaya</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Surabaya Malang</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Solo Semarang</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Sukabumi Bogor</li>
                </ul>
                <ul className='w-1/2 lg:w-1/3'>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Pekalongan Bandung</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Sidoarjo Banyuwangi</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Bandung Bekasi</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Jakarta Malang</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Surabaya Bandung</li>
                </ul>
                <ul className='w-1/2 lg:w-1/3'>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Jogja Bandung</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Semarang Solo</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Kebumen Jogja</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Cirebon Bandung</li>
                  <li className='p-2 text-gray-500 border-b-2 text-sm'>Tiket Kereta Malang Surabaya</li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default NavSearch