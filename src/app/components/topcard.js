import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

function Topcard() {
  return (
    <div className="pt-8">
    <Swiper
      spaceBetween={8} // Adjust as needed
      slidesPerView={1.1}
      centeredSlides={true} // Center the slides
      initialSlide={1}
      modules={[Autoplay, Navigation]}
      loop={true}
      autoplay={{ delay: 2000 }}
    >
        <div>
      <SwiperSlide>
        <img src="/topcard.png"></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src="/topcard.png"></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src="/topcard.png"></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src="/topcard.png"></img>
      </SwiperSlide>
      </div>
    </Swiper>
    </div>

  );
}

export default Topcard;
