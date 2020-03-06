import React from "react";
import "./scss/evilRobot.scss";
import evilRobot from "./images/evilRobot.svg";

const EvilRobot = () => {
  return (
    <section className="robot">
      <div className="robot--wrap container-fluid">
        <div className="robot--row row">
          <div className="robot--col_left col">
            <div className="robot--wrapper">
              <img className="robot--eye" src={evilRobot} alt="Eye" />
            </div>
          </div>
          <div className="robot--col_right col">
            <div className="speech-bubble">
              <div className="typewriter-first">
                <h1>I have all my heroes fighting for me.</h1>
              </div>
              <div className="typewriter-second">
                <h1>You have no chance.</h1>
              </div>
              <div className="typewriter-third">
                <h1>You will never have a job in tech!</h1>
              </div>
              <div className="typewriter-fourth">
                <h1>Hahahahahahahahahahahahaha.</h1>
              </div>
              <div className="typewriter-fifth">
                <h1>What?? You wanna fight me??</h1>
              </div>
            </div>
            <div className="circle--wrap">
              <div className="blob"></div>
              <button type="button" className="circle--typo btn btn-link">
                Choose a heroine
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvilRobot;
