import React, { useEffect, useRef } from "react";
import { bgVideo } from "../../../asset/videos";
import Buttons from "../../buttons/Buttons";
import "./credit.scss";
const Credit = (props) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
    const pauseVideo = () => {
      if (!document.hidden) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    };
    document.addEventListener("webkitvisibilitychange", pauseVideo);
    return () => {
      document.removeEventListener("webkitvisibilitychange", pauseVideo);
    };
  }, []);

  return (
    <div className={`credit overlay ${props.isActive ? "active" : ""}`}>
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        loop={true}
        className="overlay"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="credit__content">
        <div className="title">
          <span>Start Your</span>
          <h2 className="main-color">LEGENDS</h2>
        </div>
        <div className="btns m-t-4">
          <Buttons className="btn-main">PLAY NOW</Buttons>
          <Buttons className="btn-second">GET STARTED</Buttons>
        </div>
      </div>
    </div>
  );
};
export default Credit;
