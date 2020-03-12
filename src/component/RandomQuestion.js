import React from "react";
import styleQuestions from "./images/styleQuestions.svg";
import "./scss/styleQuestions.scss";
import winPopUp from "./images/winPopUp.svg";
import tryAgain from "./images/tryAgain.svg";

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

  return (
    <div>
      <div>
        {answered === 0 ? null : answered === 1 ? (
          <div class="pop--bg">
            <img class="pop--win" src={winPopUp} alt="Winning" />
            <p class="pop-text">You collected more allies!</p>
            <button
              className="circle--typo btn btn-link"
              onClick={this.props.handlerUnmount}
            >
              Next challenge
            </button>
          </div>
        ) : (
          <div class="pop--bg">
            <img class="pop--win" src={tryAgain} alt="tryAgain" />
            <button
              className="circle--typo btn btn-link"
              onClick={this.props.handlerUnmount}
            >
              Next challenge
            </button>
          </div>
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
                className="question--btn btn btn-link"
                onClick={selectedNo}
              >
                No
              </button>
              <div className="allies-all">
                <p className="allies--text">Your Allies!</p>
                <div className="allies--wrapper">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RandomQuestion;
