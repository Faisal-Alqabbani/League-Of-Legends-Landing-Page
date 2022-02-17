import React, { useRef, useEffect } from "react";
import "./champoin-details.scss";
import { closeIcon } from "../../asset/images";

function ChampionDetails({ item, active, id }) {
  const iframRef = useRef(null);
  useEffect(() => {
    const height = (iframRef.current.offsetWidth * 9) / 16 + "px";
    iframRef.current.setAttribute("height", height);
  }, []);

  const handleClose = () => {
    document.querySelector(`#champ-detail-${id}`).classList.remove("active");
    iframRef.current.setAttribute("src", "");
    const img = document.querySelector(`#champ-img-${id}`);
    img.style.opacity = 0;
    setTimeout(() => {
      img.remove();
    }, 500);
  };
  return (
    <div
      id={`champ-detail-${id}`}
      className={`champion-detail bg-image overlay ${active ? "active" : ""}`}
      style={{ backgroundImage: `url(${item.bgLarge})` }}
    >
      <div className="champion-detail__content">
        <span>{item.nickName}</span>
        <h2 className="name main-color">Something</h2>
        <span>
          Role <span className="second-color">{item.role}</span>
        </span>
        <br />
        <span>
          Difficulty <span className="second-color">{item.difficulty}</span>
        </span>
        <div className="story">{item.description}</div>
        <span>Champion Spotlight</span>
        <div className="video">
          <iframe
            title="champion spotlight"
            ref={iframRef}
            width="100%"
          ></iframe>
        </div>
      </div>
      {/* chmpion-detail__close */}
      <div className="champion-detail__close" onClick={handleClose}>
        <img src={closeIcon} alt="" />
      </div>
    </div>
  );
}

export default ChampionDetails;
