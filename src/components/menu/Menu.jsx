import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {GiPriceTag, GiCommercialAirplane} from 'react-icons/gi';
import {MdOutlineWindow, MdStore} from 'react-icons/md';
import {BiHeadphone, BiBasket} from 'react-icons/bi';
import {RiFilePaper2Line} from 'react-icons/ri';
import {ImSpoonKnife} from 'react-icons/im';
import {AiFillCheckCircle} from 'react-icons/ai';
import {BsFillPlayCircleFill, BsController} from 'react-icons/bs';
import {FaHandHoldingHeart} from 'react-icons/fa';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Banner1 from './images/banner-1.jpg'
import Banner2 from './images/banner-2.jpg'
import Banner3 from './images/banner-3.jpg'
import sepatu from './images/sepatu.jpg'
import makan from './images/makan.jpg'
import tas from './images/tas.jpg'
import figure from './images/figure.jpg'
import Pulsa from '../pulsa/Pulsa';


const Menu = () => {
  return (
    <div className='bg-white -mt-2 rounded-xl pt-2 lg:mt-0'>
      <div className="container">
        {/* mobile */}
        <div className="menuMob lg:hidden">
          <div className="first flex gap-4 text-center pt-4 ">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="promo">
                  <GiPriceTag size={30} className='mx-auto'/>
                  <p className='text-sm'>Promo Hari Ini</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="window">
                  <MdOutlineWindow size={30} className='mx-auto'/>
                  <p className='text-sm'>Lihat Semua</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="shop">
                  <BiBasket size={30}className='mx-auto'/>
                  <p className='text-sm'>Toserba</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="elect">
                  <BiHeadphone size={30} className='mx-auto'/>
                  <p className='text-sm'>Elektronik</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="topup">
                  <RiFilePaper2Line size={30} className='mx-auto'/>
                  <p className='text-sm'>Top-Up & Tagihan</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="airplane">
                  <GiCommercialAirplane size={30} className='mx-auto'/>
                  <p className='text-sm'>Travel</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="banner py-2">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img src={Banner1} alt="" className='w-96 rounded-md '/>
              </SwiperSlide>
              <SwiperSlide><img src={Banner2} alt="" className='w-96 rounded-md ' /></SwiperSlide>
              <SwiperSlide><img src={Banner3} alt="" className='w-96 rounded-md ' /></SwiperSlide>
              
              
            </Swiper>
          </div>
          <div className="second flex gap-4 text-center pb-4 ">
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="promo">
                  <ImSpoonKnife size={30} className='mx-auto'/>
                  <p className='text-sm'>GoFood</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="window">
                  <AiFillCheckCircle size={30} className='mx-auto'/>
                  <p className='text-sm'>Official Store</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="shop">
                  <BsFillPlayCircleFill size={30}className='mx-auto'/>
                  <p className='text-sm'>Live Shopping</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="elect">
                  <BsController size={30} className='mx-auto'/>
                  <p className='text-sm'>Tokopedia Seru</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="topup">
                  <MdStore size={30} className='mx-auto'/>
                  <p className='text-sm'>Diskon di Denpasar</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="topup">
                  <FaHandHoldingHeart size={30} className='mx-auto'/>
                  <p className='text-sm'>Diskon di Denpasar</p>
                </div>
              </SwiperSlide>
            </Swiper> 
          </div>
        </div>

        {/* desktop */}
        <div className="MenuDesk hidden lg:block py-4">
          <div className="slider">
          <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img
                        className="object-fill w-full rounded-xl "
                        src={Banner1}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full rounded-xl "
                        src={Banner2}
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill w-full rounded-xl"
                        src={Banner3}
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
            
            


          </div>
          <div className="kategori my-1 border-2 rounded-xl mt-4">
            <div className="content flex">
              <div className="left w-1/2 py-2">
                <h4 className='text-xl font-bold px-4'>Kategori pilihan</h4>
                <ul className='flex px-4 gap-4 mt-4 '>
                  <li className='p-2 border-2 w-1/4 rounded-xl'>
                    <img src={makan} alt="" width={150} />
                  </li>
                  <li className='p-2 border-2 w-1/4 rounded-xl'>
                    <img src={figure} alt="" width={150} />
                  </li>
                  <li className='p-2 border-2 w-1/4 rounded-xl'>
                    <img src={tas} alt="" width={150} />
                  </li>
                  <li className='p-2 border-2 w-1/4 rounded-xl'>
                    <img src={sepatu} alt="" width={150} />
                  </li>
                  
                </ul>
              </div>
              <div className="right w-1/2 ">
                  <Pulsa/>
              </div>
            </div>
            <div className="icon">
              <div className="text-center py-4 pl-4">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={6}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className="promo flex items-center border-2 rounded-full justify-center w-fit p-1 ">
                      <GiPriceTag size={30} className='m-0'/>
                      <p className='text-sm'>Promo Hari Ini</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="window flex items-center border-2 rounded-full justify-center w-fit p-1">
                      <MdOutlineWindow size={30} className='m-0'/>
                      <p className='text-sm'>Lihat Semua</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="shop flex items-center gap-2 border-2 rounded-full justify-center w-48 py-0.5">
                      <BiBasket size={35}className='m-0'/>
                      <p className='text-sm'>Toserba</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="elect flex items-center gap-2 border-2 rounded-full justify-center w-48 py-0.5">
                      <BiHeadphone size={35} className='m-0'/>
                      <p className='text-sm'>Elektronik</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="topup flex items-center gap-2 border-2 rounded-full justify-center w-48 py-0.5">
                      <RiFilePaper2Line size={35} className='m-0'/>
                      <p className='text-sm'>Top-Up & Tagihan</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="airplane flex items-center gap-2 border-2 rounded-full justify-center w-48 py-0.5">
                      <GiCommercialAirplane size={35} className='m-0'/>
                      <p className='text-sm'>Travel</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="promo flex items-center gap-2 border-2 rounded-full justify-center w-48 py-0.5">
                  <ImSpoonKnife size={35} className='m-0'/>
                  <p className='text-sm'>GoFood</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="window flex items-center gap-2 border-2 rounded-full justify-center w-48 py-0.5">
                  <AiFillCheckCircle size={35} className='m-0'/>
                  <p className='text-sm'>Official Store</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="shop flex items-center gap-2 border-2 rounded-full justify-center w-48 py-0.5">
                  <BsFillPlayCircleFill size={35}className='m-0'/>
                  <p className='text-sm'>Live Shopping</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="elect flex items-center gap-2 border-2 rounded-full justify-center w-48 py-0.5">
                  <BsController size={35} className='m-0'/>
                  <p className='text-sm'>Tokopedia Seru</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="topup flex items-center gap-2 border-2 rounded-full justify-center w-48 py-0.5">
                  <MdStore size={35} className='m-0'/>
                  <p className='text-sm'>Diskon di Denpasar</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="topup flex items-center gap-2 border-2 rounded-full justify-center w-48 py-0.5">
                  <FaHandHoldingHeart size={35} className='m-0'/>
                  <p className='text-sm'>Diskon di Denpasar</p>
                </div>
              </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Menu