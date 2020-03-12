import React, { Component } from "react";
import RandomQuestion from "./RandomQuestion";
import winPopUp from "./images/winPopUp.svg";
import tryAgain from "./images/tryAgain.svg";

class Questions extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        {this.props.answered === 0 ? (
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
          </div>
        ) : this.props.answered === 1 ? (
          <div class="pop--bg">
            <img class="pop--win" src={winPopUp} alt="Winning" />
            <p class="pop-text">You collected more allies!</p>
            <button
              className="circle--typo btn btn-link"
              onClick={this.props.handlerQUnmount}
            >
              Next challenge
            </button>
          </div>
        ) : (
          <div>
            <div class="pop--bg">
              <img class="pop--win" src={tryAgain} alt="tryAgain" />
            </div>
            <button
              className="circle--typo btn btn-link"
              onClick={this.props.handlerQUnmount}
            >
              Next challenge
            </button>
          </div>
        )}
      </div>
=======
       <div>
      {this.props.answered === 0 ? 
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
        </div>:
        this.props.answered === 1 ? (
        <div class="pop--bg">
          <img class="pop--win" src={winPopUp} alt="Winning" />
          <p class="pop-text">You collected more allies!</p>
          <button onClick={this.props.handlerQUnmount}>Next challenge</button>
        </div>
      ) : (
        <div><p>incorrect</p>
        <button onClick={this.props.handlerQUnmount}>Next challenge</button>
        </div>)
       }
      </div> 
>>>>>>> 151d2622639cf1ff3b64995855075aee49f6c0b7
    );
  }
}
export default Questions;
