import React, { Component } from "react";
import RandomQuestion from "./RandomQuestion";
// import "./Questions.css";
import winPopUp from "./images/winPopUp.svg";

class Questions extends Component {
  // handleWinPop = () => {
  //   setTimeout(this.props.handlerQUnmount, 3000);
  // };
  render() {
    return (
      <div>
        <RandomQuestion
          question={this.props.question}
          handleYes={this.props.handleYes}
          handleNo={this.props.handleNo}
          ourHeroUrl={this.props.ourHeroUrl}
          handleUnmount={this.props.handlerQUnmount}
          myAllyUrl={this.props.myAlliesUrl}
          answered={this.props.answered}
        />
        <div className="pop--wrap">
          {this.props.answered === 0 ? null : this.props.answered === 1 ? (
            <div class="pop--bg">
              <img class="pop--win" src={winPopUp} alt="Winning" />
              <p class="pop-text">You collected more allies!</p>
              <button onClick={this.handleWinPop}>close</button>
            </div>
          ) : (
            <p>incorrect</p>
          )}
          <button onClick={this.props.handlerQUnmount}>close</button>

          {/* {this.props.answered === 1 ? (
            <WinPopUp
              answered={this.props.answered}
              handlerGameFlow={this.props.handlerGameFlow}
              handlerQUnmount={this.props.handlerQUnmount}
              myAllyUrl={this.props.myAlliesUrl}
            />
          ) : null}

          {this.props.answered === 2 ? (
            <TryAgainPopUp
              answered={this.props.answered}
              handlerGameFlow={this.props.handlerGameFlow}
              handlerQUnmount={this.props.handlerQUnmount}
            />
          ) : null} */}
        </div>
      </div>
    );
  }
}
export default Questions;
