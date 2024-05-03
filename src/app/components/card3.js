import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";

function Card3() {
  return (
    
    <div className="pl-5">
    <div className="grid gap-2 pt-8">
      <p className="font-semibold text-xl pb-4">Latest Product</p>
    </div>
    <div className="swiper">
      <Swiper
        spaceBetween={8} // Adjust as needed
        slidesPerView={2.2}
        initialSlide={2}
        modules={[Navigation]}
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        <SwiperSlide>
          <img src="/Rectangle5.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Rectangle6.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Rectangle5.png"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/Rectangle6.png"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
  )
}

export default Card3