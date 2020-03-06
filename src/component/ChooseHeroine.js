import React from "react";
import "./scss/chooseHeroine.scss";
import chooseHeroine from "./images/chooseHeroine.svg";

const ChooseHeroine = () => {
  return (
    <body>
      <section className="question">
        <div className="question--wrap container-fluid">
          <div className="question--row row">
            <div className="question--col_left col">
              <div className="question--wrapper">
                <img className="choose--eye" src={chooseHeroine} alt="Eye" />
              </div>
            </div>
            <div className="question--col_right col">
              <div className="question--title">
                <h1>Choose your Heroine!</h1>
              </div>
              <div className="allies-all">
                <div className="allies--wrapper">
                  <img
                    className="question--allies"
                    src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                    alt="Super Heroine"
                  />
                  <img
                    className="question--allies"
                    src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                    alt="Super Heroine"
                  />
                  <img
                    className="question--allies"
                    src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                    alt="Super Heroine"
                  />
                  <img
                    className="question--allies"
                    src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                    alt="Super Heroine"
                  />
                  <img
                    className="question--allies"
                    src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                    alt="Super Heroine"
                  />
                  <img
                    className="question--allies"
                    src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                    alt="Super Heroine"
                  />
                  <img
                    className="question--allies"
                    src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                    alt="Super Heroine"
                  />
                  <img
                    className="question--allies"
                    src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                    alt="Super Heroine"
                  />
                  <img
                    className="question--allies"
                    src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                    alt="Super Heroine"
                  />
                  <img
                    className="question--allies"
                    src="https://cdn.vox-cdn.com/thumbor/ruew5Rmzlkrjuw_9jnSWwsSIc8E=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19581903/Screen_Shot_2020_01_07_at_10.26.15_AM.png"
                    alt="Super Heroine"
                  />
                </div>
              </div>
              <div className="circle--wrap">
                <div className="blob"></div>
                <button type="button" className="circle--typo btn btn-link">
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

export default ChooseHeroine;
