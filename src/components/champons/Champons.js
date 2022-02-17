import React from "react";

import HomeSection from "../hom-section/HomeSection";
import "./champons.scss";
import { bg2 } from "../../asset/images";
import { championsData } from "../../asset/dummy";
import { Swiper, SwiperSlide } from "swiper/react";
import ChamponCard from "./ChamponCard";

function Champons(props) {
  return (
    <HomeSection
      className={`champon ${props.isActive ? "active" : ""}`}
      contentClassName="overlay"
      bgImage={bg2}
    >
      <div className="container relative">
        <div className="champon-list">
          <Swiper
            className="swiper"
            slidesPerView="auto"
            spaceBetween={0}
            grapCoursor={true}
            nested={true}
          >
            {championsData.map((item, index) => (
              <SwiperSlide key={index}>
                <ChamponCard item={item} id={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </HomeSection>
  );
}

export default Champons;
