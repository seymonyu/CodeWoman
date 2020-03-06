import React from 'react'
import "./scss/angryRobot.scss";
import angryRobot from "./images/angryRobot.svg";
import evilRobot from "./images/evilRobot.svg"


function DisplayAngryRobot({forward_flag,handlerGameFlow,ourHeroUrl}){
    return(<body>
      <section className="robot">
        <div className="robot--wrap container-fluid">
          <div className="robot--row row">
            <div className="robot--col_left col">
              <div className="robot--wrapper_bounce">
                <img
                  className="robot--eye shake-slow shake-constant shake-constant--hover"
                  src={angryRobot}
                  alt="Robot"
                />
                
              </div>
            </div>
            <div className="robot--col_right col">
              <div className="speech-bubble">
                <div className="typewriter-first">
                 {forward_flag ===0? <h1>I have all my heroes fighting for me.</h1>:
                  <h1>I have all my heroes fighting for me.</h1>}

                </div>
                <div className="typewriter-second">
                  {forward_flag===0?<h1>You have no chance.</h1>:<h1>You have no chance.</h1>}
                </div>
                <div className="typewriter-third">
                  {forward_flag===0? <h1>You will never have a job in tech!</h1>:<h1>You will never have a job in tech!</h1>}
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
                <button  onClick={handlerGameFlow} type="button" className="circle--typo btn btn-link">
                  Choose a heroine
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>)
}
export default DisplayAngryRobot