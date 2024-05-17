// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./Swiper.css"
import 'swiper/css/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
// Import Swiper styles


export default function SwiperBg(){
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src="./img/swiper1bg.jpg" style={{width:"100vw" , height:"100vh"}} className='swiper-img' />
        <h1 className='Name-photographer'>Olivia Peterson</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/swiper2.jpg" style={{width:"100vw" , height:"100vh"}}/>
         <h1 className='Name-photographer'>Emma Watson</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/swiper3.jpg" style={{width:"100vw" , height:"100vh"}}/>
         <h1 className='Name-photographer'>Ava Johnson</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/swiper4.jpg"  style={{width:"100vw" , height:"100vh"}}/>
         <h1 className='Name-photographer'>Isabella Miller</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/swiper5.jpg"  style={{width:"100vw" , height:"100vh"}}/>
         <h1 className='Name-photographer'>Sophia Williams</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/swiper6.jpg"  style={{width:"100vw" , height:"100vh"}}/>
        <h1 className='Name-photographer'>Charlotte Brown</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src="./img/swiper7.jpg"  style={{width:"100vw" , height:"100vh"}}/>
        <h1 className='Name-photographer'>Charlotte Brown</h1>
      </SwiperSlide>
    </Swiper>
  );
};
 