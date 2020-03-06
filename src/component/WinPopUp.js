import React from "react";
import "./scss/winPopUp.scss";
import winPopUp from "./images/winPopUp.svg";

const WinPopUp = () => {
  return (
    <body>
      <div class="pop--bg">
        <img class="pop--win" src={winPopUp} alt="Winning" />
        <p class="pop-text">You collected more allies!</p>
      </div>
      <section class="question">
        <div class="question--wrap container-fluid">
          <div class="question--row row">
            <div class="question--col_left col">
              <div class="question--wrapper">
                <img
                  class="question--eye"
                  src="img/Question.svg"
                  alt="Question"
                />
              </div>
              <div class="question--wrapper">
                <img
                  class="question--heroine"
                  src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                  alt="Super Heroine"
                />
              </div>
            </div>
            <div class="question--col_right col">
              <div class="question--title">
                <h1>Here are our questions!</h1>
              </div>
              <button type="button" class="question--btn btn btn-link">
                Yes
              </button>
              <button type="button" class="uestion--btn btn btn-link">
                No
              </button>
              <div class="allies-all">
                <p class="allies--text">Your Allies!</p>
                <div class="allies--wrapper">
                  <img
                    class="question--allies"
                    src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                    alt="Super Heroine"
                  />
                  <img
                    class="question--allies"
                    src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                    alt="Super Heroine"
                  />
                  <img
                    class="question--allies"
                    src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                    alt="Super Heroine"
                  />
                </div>
              </div>
              <div class="circle--wrap">
                <div class="blob"></div>
                <button type="button" class="circle--typo btn btn-link">
                  Next!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};
export default WinPopUp;
