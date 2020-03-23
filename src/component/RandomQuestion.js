import React from "react";
import styleQuestions from "./images/styleQuestions.svg";

import winPopUp from "./images/winPopUp.svg";

const RandomQuestion = ({
  question,
  handleYes,
  handleNo,
  myAllyUrl,
  ourHeroUrl,
  handleUnmount,
  answered
}) => {
  const selectedYes = () => {
    handleYes(question);
  };

  const selectedNo = () => {
    handleNo(question);
  };
  const handleWinPop = () => {
    setTimeout(handleUnmount, 3000);
  };
  return (
    <div>
      <div>
        {answered === 0 ? null : answered === 1 ? (
          <div className="pop--all">
            <div className="pop--blur"></div>
            <div className="pop--wrap">
              <h1 class="pop--win">You won!!</h1>
              <p class="pop-text">You collected more allies!</p>
              <button className="pop--button" onClick={handleWinPop}>
                close
              </button>
            </div>
          </div>
        ) : (
          <div className="pop--all">
            <div className="pop--blur"></div>
            <div className="pop--wrap">
              <h1 class="pop--win">Try again</h1>
              <p class="pop-text">That was incorrect</p>
              <button className="pop--button" onClick={handleWinPop}>
                close
              </button>
            </div>
          </div>
        )}
      </div>
      <section className="question">
        <div className="question--wrap container-fluid">
          <div className="">
            <div className="question--wrapper">
              <img
                className="question--heroine"
                src={ourHeroUrl}
                alt="Super Heroine"
              />
            </div>

            <div className="question--title wrapper">
              <div className=" slide">
                <p className="question--title_p">{question.Q}</p>
              </div>

              <button
                type="button"
                className="question--btn btn btn-link"
                onClick={selectedYes}
              >
                Yes
              </button>
              <button
                type="button"
                className="question--btn btn btn-link"
                onClick={selectedNo}
              >
                No
              </button>
            </div>
            <div className="allies-all">
              <p className="allies--text">Your Allies!</p>
              <div className="allies--wrapper">
                {/* <img
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
                /> */}

                {myAllyUrl
                  ? myAllyUrl.map((item, index) => (
                      <div className="allies-all wrapper">
                        <div className="allies--wrapper slidehero ">
                          <img
                            className="question--allies"
                            key={index}
                            src={item}
                            alt="my allies"
                          />
                        </div>
                      </div>
                    ))
                  : null}
              </div>
              <div className="circle--wrap">
                <button
                  type="button"
                  className="circle--typo btn btn-link"
                  onClick={handleUnmount}
                >
                  Next!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    // <div>
    //   <p>{question.Q}</p>
    //   <button onClick={selectedYes}>Yes</button>
    //   <button onClick={selectedNo}>No</button>
    // </div>
  );
};

export default RandomQuestion;
