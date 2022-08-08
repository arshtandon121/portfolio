import React from "react";
import "../Intro/Intro.css";
import face from "../img/face.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-l-wrapper">
          <h2 className="i-intro">Hello everyone , My Name Is </h2>
          <h1 className="i-name"> Arsh Deep</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">HTML CSS JS</div>
              <div className="i-title-item">MongoDB</div>
              <div className="i-title-item">angular</div>
            </div>
          </div>
          <div className="i-desc">
            <b>
              i  am a Fresher and want to become a good web designer ,i want to
              be a better version of myself , i am looking for intership{" "}
            </b>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={face} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
