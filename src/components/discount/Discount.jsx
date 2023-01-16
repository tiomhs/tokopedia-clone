import React from 'react';
import Countdown from 'react-countdown';
import { Swiper, SwiperSlide } from 'swiper/react';
import barang1 from './images/barang-1.png';
import barang2 from './images/barang-2.jpg';
import barang3 from './images/barang-3.jpg';
import barang4 from './images/barang-4.jpg';
import barang5 from './images/barang-5.png';
import bg1 from './images/bg1.png';
import {AiFillCheckCircle} from 'react-icons/ai';

const Discount = () => {
  return (
    <div className='discount py-2'>
        <div className="container">
            <div className="head flex justify-between items-end lg:justify-start lg:gap-2">
                <div className="left py-2 lg:flex lg:items-center lg:gap-2">
                    <h4 className='text-xl font-bold '>Kejar Diskon Spesial</h4>
                    <div className='flex'>
                        <p className='mr-1'>Berakhir dalam</p>
                        <Countdown date={Date.now() + 10000000} className='bg-red-600 rounded-xl px-2 text-white font-bold' />
                    </div>
                </div>
                <p className='text-emerald-600 font-bold text-base py-2'>Lihat semua</p>
            </div>

            <div className="slider relative lg:h-96 flex items-center mt-2">
                <div className="absolute w-full lg:w-72 rounded-lg bg-[#9f32cd]">
                    <img src={bg1} alt="" className='lg:h-96 lg:w-48 rounded-lg h-64 w-32' />
                </div>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={window.innerWidth >= 1024 ? 6 : 3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className=''
                    >
                        <SwiperSlide>
                            <div className="cardNewUser mt-4">            
                                <div className="lg:w-2/12 h-56 bg-transparent">
                                
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card ">            
                                <div className="w-full lg:w-fit lg:h-[350px] bg-white border border-gray-200 rounded-lg shadow-md">
                                    <a href="#">
                                        <img className="rounded-t-lg lg:h-44 lg:w-full" src={barang1} alt="" />
                                    </a>
                                    <div className="p-2">
                                        <p className="text-black text-sm hidden lg:block">Roegan Biotin Shampoo Hair Loss</p>
                                        <h5 className="text-base font-bold">Rp 86.000</h5>
                                        <div className="flex my-1">
                                            <p className='p-0.5 mr-1 rounded-sm bg-red-200 text-red-500 text-xs font-bold'>71% </p>
                                            <p className='text-gray-400 line-through text-xs '>Rp 296.000</p>
                                        </div>
                                        <div className="flex items-center">
                                            <AiFillCheckCircle size={20} className='text-indigo-800 mt-1 mr-0.5'/>
                                            <p className='text-xs text-gray-400'>Jakarta Barat</p>
                                        </div>
                                        <div className="relative mt-1.5">
                                            <div className="w-full bg-gray-300 p-0.5 rounded-full absolute z-0"></div>
                                            <div className="w-1/3 bg-red-400 p-0.5 rounded-full absolute z-10"></div>
                                        </div>
                                        <p className='font-bold text-gray-500 text-[10px] mt-2.5'>Segera Habis</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">            
                                <div className="w-full lg:w-fit lg:h-[350px] bg-white border border-gray-200 rounded-lg shadow-md">
                                    <a href="#">
                                        <img className="rounded-t-lg lg:h-44 lg:w-full" src={barang2} alt="" />
                                    </a>
                                    <div className="p-2">
                                        <p className="text-black text-sm hidden lg:block">Alat Penghemat BBM/Solar BBM Volt Stablillazer</p>
                                        <h5 className="text-base font-bold">Rp 200.000</h5>
                                        <div className="flex my-1">
                                            <p className='p-0.5 mr-1 rounded-sm bg-red-200 text-red-500 text-xs font-bold'>67%</p>
                                            <p className='text-gray-400 line-through text-xs '>Rp 600.000</p>
                                        </div>
                                        <div className="flex items-center">
                                            <AiFillCheckCircle size={20} className='text-indigo-800 mt-1 mr-0.5'/>
                                            <p className='text-xs text-gray-400'>Kota Cirebon</p>
                                        </div>
                                        <div className="relative mt-1.5">
                                            <div className="w-full bg-gray-300 p-0.5 rounded-full absolute z-0"></div>
                                            <div className="w-1/3 bg-red-400 p-0.5 rounded-full absolute z-10"></div>
                                        </div>
                                        <p className='font-bold text-gray-500 text-[10px] mt-2.5'>Segera Habis</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">            
                                <div className="w-full lg:w-fit lg:h-[350px] bg-white border border-gray-200 rounded-lg shadow-md">
                                    <a href="#">
                                        <img className="rounded-t-lg lg:h-44 lg:w-full" src={barang3} alt="" />
                                    </a>
                                    <div className="p-2">
                                        <p className="text-black text-sm hidden lg:block">Tas Tangan - Tote Bag Mini - Mois de Mars</p>
                                        <h5 className="text-base font-bold">Rp 50.000</h5>
                                        <div className="flex my-1">
                                            <p className='p-0.5 mr-1 rounded-sm bg-red-200 text-red-500 text-xs font-bold'>48% </p>
                                            <p className='text-gray-400 line-through text-xs '>Rp 98.500</p>
                                        </div>
                                        <div className="flex items-center">
                                            <AiFillCheckCircle size={20} className='text-indigo-800 mt-1 mr-0.5'/>
                                            <p className='text-xs text-gray-400'>Kab. Tangerang</p>
                                        </div>
                                        <div className="relative mt-1.5">
                                            <div className="w-full bg-gray-300 p-0.5 rounded-full absolute z-0"></div>
                                            <div className="w-1/3 bg-red-400 p-0.5 rounded-full absolute z-10"></div>
                                        </div>
                                        <p className='font-bold text-gray-500 text-[10px] mt-2.5'>Segera Habis</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">            
                                <div className="w-full lg:w-fit lg:h-[350px] bg-white border border-gray-200 rounded-lg shadow-md">
                                    <a href="#">
                                        <img className="rounded-t-lg lg:h-44 lg:w-full" src={barang4} alt="" />
                                    </a>
                                    <div className="p-2">
                                        <p className="text-black text-sm hidden lg:block">Marries Baby Diapers S 24S Triple Packs</p>
                                        <h5 className="text-base font-bold">Rp 162.000</h5>
                                        <div className="flex my-1">
                                            <p className='p-0.5 mr-1 rounded-sm bg-red-200 text-red-500 text-xs font-bold'>31% </p>
                                            <p className='text-gray-400 line-through text-xs '>Rp 237.400</p>
                                        </div>
                                        <div className="flex items-center">
                                            <AiFillCheckCircle size={20} className='text-indigo-800 mt-1 mr-0.5'/>
                                            <p className='text-xs text-gray-400'>Jakarta Timur</p>
                                        </div>
                                        <div className="relative mt-1.5">
                                            <div className="w-full bg-gray-300 p-0.5 rounded-full absolute z-0"></div>
                                            <div className="w-1/3 bg-red-400 p-0.5 rounded-full absolute z-10"></div>
                                        </div>
                                        <p className='font-bold text-gray-500 text-[10px] mt-2.5'>Segera Habis</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">            
                                <div className="w-full lg:w-fit lg:h-[350px] bg-white border border-gray-200 rounded-lg shadow-md">
                                    <a href="#">
                                        <img className="rounded-t-lg lg:h-44 lg:w-full" src={barang5} alt="" />
                                    </a>
                                    <div className="p-2">
                                        <p className="text-black text-sm hidden lg:block">Celana Panjang Pria Gunung Unisex Cozmeed</p>
                                        <h5 className="text-base font-bold">Rp 120.000</h5>
                                        <div className="flex my-1">
                                            <p className='p-0.5 mr-1 rounded-sm bg-red-200 text-red-500 text-xs font-bold'>25% </p>
                                            <p className='text-gray-400 line-through text-xs '>Rp 160.000</p>
                                        </div>
                                        <div className="flex items-center">
                                            <AiFillCheckCircle size={20} className='text-indigo-800 mt-1 mr-0.5'/>
                                            <p className='text-xs text-gray-400'>Kota Surakarta</p>
                                        </div>
                                        <div className="relative mt-1.5">
                                            <div className="w-full bg-gray-300 p-0.5 rounded-full absolute z-0"></div>
                                            <div className="w-1/3 bg-red-400 p-0.5 rounded-full absolute z-10"></div>
                                        </div>
                                        <p className='font-bold text-gray-500 text-[10px] mt-2.5'>Segera Habis</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card">            
                                <div className="w-full lg:w-fit lg:h-[350px] bg-white border border-gray-200 rounded-lg shadow-md">
                                    <a href="#">
                                        <img className="rounded-t-lg lg:h-44 lg:w-full" src={barang5} alt="" />
                                    </a>
                                    <div className="p-2">
                                        <p className="text-black text-sm hidden lg:block">Celana Panjang Pria Gunung Unisex Cozmeed</p>
                                        <h5 className="text-base font-bold">Rp 120.000</h5>
                                        <div className="flex my-1">
                                            <p className='p-0.5 mr-1 rounded-sm bg-red-200 text-red-500 text-xs font-bold'>25% </p>
                                            <p className='text-gray-400 line-through text-xs '>Rp 160.000</p>
                                        </div>
                                        <div className="flex items-center">
                                            <AiFillCheckCircle size={20} className='text-indigo-800 mt-1 mr-0.5'/>
                                            <p className='text-xs text-gray-400'>Kota Surakarta</p>
                                        </div>
                                        <div className="relative mt-1.5">
                                            <div className="w-full bg-gray-300 p-0.5 rounded-full absolute z-0"></div>
                                            <div className="w-1/3 bg-red-400 p-0.5 rounded-full absolute z-10"></div>
                                        </div>
                                        <p className='font-bold text-gray-500 text-[10px] mt-2.5'>Segera Habis</p>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Discount