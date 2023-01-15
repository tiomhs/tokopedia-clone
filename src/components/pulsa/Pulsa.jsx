import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {GiElectric} from 'react-icons/gi';

const Pulsa = () => {
    const [toogleState, setToogleState] = useState(1);
    const toogleTab = (index) => {
        setToogleState(index);
    }
  return (
    <div className='navSearch py-2'>
        <div className="container">
            <h2 className='font-bold text-lg lg:text-xl'>Top-up, Tagihan & Cari Tiket</h2>
            <div className="lg:border-2 lg:rounded-xl lg:mt-4">
              <div className="nav pt-1">
                  <Swiper
                      spaceBetween={0}
                      slidesPerView={3}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                      className=''
                  >
                    <SwiperSlide> <li className={toogleState === 1 ? 'p-2 text-emerald-600 border-b-2 border-b-emerald-600 font-bold text-xs text-center ' : 'p-2 text-gray-500 text-center font-bold border-b-2 cursor-pointer text-xs'} onClick={() => toogleTab(1) }>Top-up & tagihan</li></SwiperSlide>
                    <SwiperSlide> <li className={toogleState === 2 ? 'p-2 text-emerald-600 border-b-2 border-b-emerald-600 font-bold text-xs text-center ' : 'p-2 text-gray-500 text-center font-bold border-b-2 cursor-pointer text-xs'} onClick={() => toogleTab(2) }>Keuangan</li></SwiperSlide>
                    <SwiperSlide> <li className={toogleState === 3 ? 'p-2 text-emerald-600 border-b-2 border-b-emerald-600 font-bold text-xs text-center ' : 'p-2 text-gray-500 text-center font-bold border-b-2 cursor-pointer text-xs'} onClick={() => toogleTab(3) }>Travel</li></SwiperSlide>
                    <SwiperSlide> <li className={toogleState === 4 ? 'p-2 text-emerald-600 border-b-2 border-b-emerald-600 font-bold text-xs text-center ' : 'p-2 text-gray-500 text-center font-bold border-b-2 cursor-pointer text-xs'} onClick={() => toogleTab(4) }>Entertaiment</li></SwiperSlide>
                  </Swiper>
              </div>
              <div className={toogleState === 1 ? 'top-up mt-4 lg:p-2.5 lg:mt-0' : 'hidden'}>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={2}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                      <div class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                        <div className="head flex justify-between items-center mb-2">
                          <GiElectric size={35} className='border-2 rounded-md text-yellow-400'/>
                          <h5 class="text-sm text-gray-500">Listrik Pulsa</h5>
                        </div>
                          <p class="text-sm">Praktis isi Ulang Pulsa Telkomsel, Xl, Indosat dll</p>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                        <div className="head flex justify-between items-center mb-2">
                          <GiElectric size={35} className='border-2 rounded-md text-yellow-400'/>
                          <h5 class="text-sm text-gray-500">Listrik Pulsa</h5>
                        </div>
                          <p class="text-sm">Praktis isi Ulang Pulsa Telkomsel, Xl, Indosat dll</p>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div class="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                        <div className="head flex justify-between items-center mb-2">
                          <GiElectric size={35} className='border-2 rounded-md text-yellow-400'/>
                          <h5 class="text-sm text-gray-500">Listrik Pulsa</h5>
                        </div>
                          <p class="text-sm">Praktis isi Ulang Pulsa Telkomsel, Xl, Indosat dll</p>
                      </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className={toogleState === 2 ? 'keuangan mt-2' : 'hidden'}>
              <Swiper
                  spaceBetween={10}
                  slidesPerView={2}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                      <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                        <div className="head flex justify-between items-center mb-2">
                          <GiElectric size={35} className='border-2 rounded-md text-yellow-400'/>
                          <h5 className="text-sm text-gray-500">Tokopedia Card</h5>
                        </div>
                          <p className="text-sm">Nikmati cicilan 0% bebas layanan dan unlimited cashback</p>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                        <div className="head flex justify-between items-center mb-2">
                          <GiElectric size={35} className='border-2 rounded-md text-yellow-400'/>
                          <h5 className="text-sm text-gray-500">Listrik Pulsa</h5>
                        </div>
                          <p className="text-sm">Praktis isi Ulang Pulsa Telkomsel, Xl, Indosat dll</p>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md">
                        <div className="head flex justify-between items-center mb-2">
                          <GiElectric size={35} className='border-2 rounded-md text-yellow-400'/>
                          <h5 className="text-sm text-gray-500">Listrik Pulsa</h5>
                        </div>
                          <p className="text-sm">Praktis isi Ulang Pulsa Telkomsel, Xl, Indosat dll</p>
                      </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className={toogleState === 3 ? 'Kereta mt-2' : 'hidden'}>
                <div className='flex justify-center items-center'>
                  <p className='text-sm font-bold text-gray-500'>Content Belum tersedia</p>
                </div>
              </div>
              <div className={toogleState === 4 ? 'Kereta mt-2' : 'hidden'}>
                <div className='flex justify-center items-center'>
                  <p className='text-sm font-bold text-gray-500'>Content Belum tersedia</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Pulsa