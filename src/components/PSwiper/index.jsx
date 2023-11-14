import react from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/virtual";
const PSwiper = ({ list = [] }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Scrollbar, Autoplay, Virtual]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {list.map((i, k) => {
        return <SwiperSlide key={k}>{i}</SwiperSlide>;
      })}
    </Swiper>
  );
};

export default PSwiper;
