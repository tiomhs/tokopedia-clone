import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {GiElectric, GiWaterDrop} from 'react-icons/gi';
import bgini from './images/bgini.jpg'

const NewUser = () => {
  return (
    <div className='fieldNewUser py-2'>
        <div className="container">
            <div className="head flex justify-between items-center lg:justify-start lg:gap-2">
                <h4 className='text-xl font-bold py-2'>Khusus Pengguna Baru</h4>
                <p className='text-emerald-600 font-bold text-base'>Lihat semua</p>
            </div>
        
            <div className="slider relative lg:h-96 flex items-center mt-2">
                <div className="absolute w-full lg:w-72 bg-emerald-600 rounded-lg">
                    <img src={bgini} alt="" className='lg:h-96 lg:w-56 rounded-lg h-64' />
                </div>
                <Swiper
                spaceBetween={10}
                slidesPerView={window.innerWidth >= 1024 ? 5 : 3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="cardNewUser mt-2">            
                            <div className="w-full h-56 bg-transparent">
                              
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cardNewUser mt-2">            
                            <div className="w-full h-56 lg:w-fit lg:h-80 bg-white border border-gray-200 rounded-lg shadow-md relative">
                                <div className="h-[40%] bg-emerald-300 rounded-br-3xl"></div>
                                <div className='p-2 bg-transparent drop-shadow-md -mt-8 rounded-xl '>
                                    <GiElectric size={40} className='text-yellow-400 bg-white border-2 border-black rounded-lg mx-auto '/>
                                </div>
                                <div className="p-2">
                                    <h5 className="mb-1 text-xs font-bold text-emerald-500 lg:text-xl">LISTRIK PLN</h5>
                                    <p className="text-black text-xs lg:text-lg">Butuh beli token atau bayar tagihan listrik?</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cardNewUser mt-2">            
                            <div className="w-full h-56 lg:w-fit lg:h-80 bg-white border border-gray-200 rounded-lg shadow-md relative">
                                <div className="h-[40%] bg-emerald-300 rounded-br-3xl"></div>
                                <div className='p-2 bg-transparent drop-shadow-md -mt-8 rounded-xl '>
                                    <GiElectric size={40} className='text-yellow-400 bg-white border-2 border-black rounded-lg mx-auto '/>
                                </div>
                                <div className="p-2">
                                    <h5 className="mb-1 text-xs font-bold text-emerald-500 lg:text-xl">LISTRIK PLN</h5>
                                    <p className="text-black text-xs lg:text-lg">Butuh beli token atau bayar tagihan listrik?</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cardNewUser mt-2">            
                            <div className="w-full h-56 lg:w-fit lg:h-80 bg-white border border-gray-200 rounded-lg shadow-md relative">
                                <div className="h-[40%] bg-emerald-300 rounded-br-3xl"></div>
                                <div className='p-2 bg-transparent drop-shadow-md -mt-8 rounded-xl '>
                                    <GiElectric size={40} className='text-yellow-400 bg-white border-2 border-black rounded-lg mx-auto '/>
                                </div>
                                <div className="p-2">
                                    <h5 className="mb-1 text-xs font-bold text-emerald-500 lg:text-xl">LISTRIK PLN</h5>
                                    <p className="text-black text-xs lg:text-lg">Butuh beli token atau bayar tagihan listrik?</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cardNewUser mt-2">            
                            <div className="w-full h-56 lg:w-fit lg:h-80 bg-white border border-gray-200 rounded-lg shadow-md relative">
                                <div className="h-[40%] bg-emerald-300 rounded-br-3xl"></div>
                                <div className='p-2 bg-transparent drop-shadow-md -mt-8 rounded-xl '>
                                    <GiElectric size={40} className='text-yellow-400 bg-white border-2 border-black rounded-lg mx-auto '/>
                                </div>
                                <div className="p-2">
                                    <h5 className="mb-1 text-xs font-bold text-emerald-500 lg:text-xl">LISTRIK PLN</h5>
                                    <p className="text-black text-xs lg:text-lg">Butuh beli token atau bayar tagihan listrik?</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cardNewUser mt-2">            
                            <div className="w-full h-56 lg:w-fit lg:h-80 bg-white border border-gray-200 rounded-lg shadow-md relative">
                                <div className="h-[40%] bg-emerald-300 rounded-br-3xl"></div>
                                <div className='p-2 bg-transparent drop-shadow-md -mt-8 rounded-xl '>
                                    <GiElectric size={40} className='text-yellow-400 bg-white border-2 border-black rounded-lg mx-auto '/>
                                </div>
                                <div className="p-2">
                                    <h5 className="mb-1 text-xs font-bold text-emerald-500 lg:text-xl">LISTRIK PLN</h5>
                                    <p className="text-black text-xs lg:text-lg">Butuh beli token atau bayar tagihan listrik?</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="cardNewUser mt-2">            
                            <div className="w-full h-56 lg:w-fit lg:h-80 bg-white border border-gray-200 rounded-lg shadow-md relative">
                                <div className="h-[40%] bg-emerald-300 rounded-br-3xl"></div>
                                <div className='p-2 bg-transparent drop-shadow-md -mt-8 rounded-xl '>
                                    <GiElectric size={40} className='text-yellow-400 bg-white border-2 border-black rounded-lg mx-auto '/>
                                </div>
                                <div className="p-2">
                                    <h5 className="mb-1 text-xs font-bold text-emerald-500 lg:text-xl">LISTRIK PLN</h5>
                                    <p className="text-black text-xs lg:text-lg">Butuh beli token atau bayar tagihan listrik?</p>
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

export default NewUser