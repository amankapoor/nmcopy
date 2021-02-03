import React from "react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src="http://placekitten.com/600/300" /></SwiperSlide>
      <SwiperSlide><img src="http://placekitten.com/600/300" /></SwiperSlide>
      <SwiperSlide><img src="http://placekitten.com/600/300" /></SwiperSlide>
      <SwiperSlide><img src="http://placekitten.com/600/300" /></SwiperSlide>
    </Swiper>
  );
};