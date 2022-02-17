import React, { useEffect } from "react";

import HomeSection from "../HomeSection";
import {
  bg1,
  champAshe,
  champAhri,
  champGaren,
  distortion,
} from "../../../asset/images";
import Buttons from "../../buttons/Buttons";
import hoverEffect from "hover-effect";
import "./welcome.scss";
function Welcome(props) {
  const champImgs = [champAshe, champAhri, champGaren];
  useEffect(() => {
    const welcomeImgs = document.querySelectorAll("#welcome__img__slide > img");
    let animates = [];
    welcomeImgs.forEach((item, idx) => {
      let nextImg =
        welcomeImgs[idx === welcomeImgs.length - 1 ? 0 : idx + 1].getAttribute(
          "src"
        );
      let animation = new hoverEffect({
        parent: document.querySelector("#welcome__img__slide"),
        intensity: 0.5,
        image1: item.getAttribute("src"),
        image2: nextImg,
        displacementImage: distortion,
        hover: false,
      });
      animates.push(animation);
    });
    // remove all items in welcomImgs
    welcomeImgs.forEach((e) => e.remove());
    let currItem = 0;
    const autoImageSlider = () => {
      let prevItem = currItem;
      currItem = (currItem + 1) % animates.length;
      if (!document.hidden) {
        animates[prevItem].next();
      }
      setTimeout(() => {
        let canvas = document.querySelectorAll("#welcome__img__slide > canvas");
        document.querySelector("#welcome__img__slide").appendChild(canvas[0]);
        animates[prevItem].previous();
      }, 3000);
    };
    setInterval(autoImageSlider, 3000);
  }, []);
  return (
    <HomeSection
      className={`welcome ${props.isActive ? "active" : ""}`}
      contentClassName="overlay welcome__content"
      bgImage={bg1}
    >
      <div className="welcome__info relative">
        <div className="welcome__info__content">
          <div className="title">
            <span>Welcome To</span>
            <h2 className="main-color">Summoner's Rift</h2>
          </div>
          <div className="description m-t-4">
            Team up with friends and test your skills in 5v5 MOBA combat. All
            the high-skill competition you crave, designed especially for mobile
            and console with revamped controls and streamlined matches.Explore
            the living universe of Runeterra through lore, comics, games, and
            more. Then dive into the community of gamers, cosplayers, musicians,
            and content creators who are waiting for you to join them.
          </div>
          <div className="btns m-t-4">
            <Buttons className="btn-main">PLAY NOW</Buttons>
            <Buttons className="btn-second">GET STARTED</Buttons>
          </div>
        </div>
      </div>
      <div className="welcome__img relative">
        <div className="welcome__img__slide" id="welcome__img__slide">
          {champImgs.map((item, idx) => (
            <img src={item} key={idx} alt={`champ ${idx}`} />
          ))}
        </div>
      </div>
    </HomeSection>
  );
}

export default Welcome;
