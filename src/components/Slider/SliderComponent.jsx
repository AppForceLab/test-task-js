// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import slide1 from '../../../src/images/camper1.jpg';
import slide2 from '../../../src/images/camper2.jpg';
import slide3 from '../../../src/images/camper3.jpg';

const SliderComponent = () => {
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <img src={slide1} alt="camper1" />
    </SwiperSlide>
    <SwiperSlide>
      <img img src={slide2} alt="camper2"  />
    </SwiperSlide>
    <SwiperSlide>
      <img img src={slide3} alt="camper3"  />
    </SwiperSlide>

  </Swiper>
  );
};

export default SliderComponent;