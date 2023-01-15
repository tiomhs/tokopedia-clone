import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide1 from './images/slide-1.jpg';
import Slide2 from './images/slide-2.jpg';
import Slide3 from './images/slide-3.jpg';
import Slide4 from './images/slide-4.png';
import Slide5 from './images/slide-5.png';

const SearchSlider = () => {
  return (
    <div className="SearchSlider py-2">
        <div className='container'>
            <div className="head flex justify-between items-center lg:justify-start">
                <h4 className='text-xl font-bold py-2'>Lanjutkan Pencarianmu✨</h4>
                <p className='text-emerald-600 font-bold text-base'>Lihat semua</p>
            </div>
            <Swiper
            spaceBetween={10}
            slidesPerView={window.innerWidth >= 1024 ? 5 : 3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='flex'
            >
                <SwiperSlide>
                    <div className="card">            
                        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <a href="#">
                                <img className="rounded-t-lg" src={Slide1} alt="" />
                            </a>
                            <div className="p-2">
                                <p className="text-gray-500 text-xs">Balik lihat</p>
                                <h5 className="mb-2 text-base font-bold">Dispenser</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">            
                        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <a href="#">
                                <img className="rounded-t-lg" src={Slide2} alt="" />
                            </a>
                            <div className="p-2">
                                <p className="text-gray-500 text-xs">Cek ini juga, yuk!</p>
                                <h5 className="mb-2 text-base font-bold">Alat Mandi</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">            
                        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <a href="#">
                                <img className="rounded-t-lg" src={Slide3} alt="" />
                            </a>
                            <div className="p-2">
                                <p className="text-gray-500 text-xs">Cek lebih banyak</p>
                                <h5 className="mb-2 text-base font-bold">Perkakas</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">            
                        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <a href="#">
                                <img className="rounded-t-lg" src={Slide4} alt="" />
                            </a>
                            <div className="p-2">
                                <p className="text-gray-500 text-xs">Cek juga</p>
                                <h5 className="mb-2 text-base font-bold">Content</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">            
                        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                            <a href="#">
                                <img className="rounded-t-lg" src={Slide5} alt="" />
                            </a>
                            <div className="p-2">
                                <p className="text-gray-500 text-xs">Cek yuk</p>
                                <h5 className="mb-2 text-base font-bold">Aksesoris</h5>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default SearchSlider