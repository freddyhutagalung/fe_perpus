import React from "react";
import gbr from "../../assets/carousel/peprpus.jpg";
import gbr1 from "../../assets/carousel/wallpaperbetter (1).jpg";
import gbr2 from "../../assets/carousel/wallpaperbetter.jpg";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import Style from "./Corousel.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Carousel = () => {
  return (
    <>
      <div className={`${Style.background} background`}>
        <div className="container">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className={``}>
              <img className={`${Style.gambar1} gambar1`} src={gbr1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={`${Style.gambar1} gambar1`} src={gbr} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className={`${Style.gambar1} gambar1`} src={gbr2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
