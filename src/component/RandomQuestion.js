import React from "react";
import styleQuestions from "./images/styleQuestions.svg";
import "./scss/styleQuestions.scss";
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
          <div class="pop--bg">
            <img class="pop--win" src={winPopUp} alt="Winning" />
            <p class="pop-text">You collected more allies!</p>
            <button onClick={handleWinPop}>close</button>
          </div>
        ) : (
          <p>incorrect</p>
        )}
      </div>
      <section className="question">
        <div className="question--wrap container-fluid">
          <div className="question--row row">
            <div className="question--col_left col">
              <div className="question--wrapper">
                <img className="question--eye" src={styleQuestions} alt="Eye" />
              </div>
              <div className="question--wrapper">
                <img
                  className="question--heroine"
                  src={ourHeroUrl}
                  alt="Super Heroine"
                />
              </div>
            </div>
            <div className="question--col_right col">
              <div className="question--title">
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
                className="uestion--btn btn btn-link"
                onClick={selectedNo}
              >
                No
              </button>
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
                        <img
                          className="question--allies"
                          key={index}
                          src={item}
                          alt="my allies"
                        />
                      ))
                    : null}
                </div>
              </div>
              <div className="circle--wrap">
                <div className="blob"></div>
               {/*  <button
                  type="button"
                  className="circle--typo btn btn-link"
                  onClick={handleUnmount}
                >
                  Next!
                </button> */}
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
