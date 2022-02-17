import React from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Mousewheel, Pagination } from "swiper";
import { Welcome } from "../components/hom-section";
import Champons from "../components/champons/Champons";
import ChampionDetails from "../components/champons/ChampionDetails";
import { championsData } from "../asset/dummy";
import Trailer from "../components/hom-section/trailer/Trailer";
import Credit from "../components/hom-section/credit/Credit";
SwiperCore.use([Mousewheel, Pagination, EffectFade]);
const swiperOptions = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "fade",
  speed: 1000,
};
console.log(championsData);
function Home() {
  return (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          {({ isActive }) => <Welcome isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Champons isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => <Trailer isActive={isActive} />}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => <Credit isActive={isActive} />}
        </SwiperSlide>
      </Swiper>
      {championsData.map((item, index) => (
        <ChampionDetails key={index} item={item} id={index} />
      ))}
    </>
  );
}

export default Home;
