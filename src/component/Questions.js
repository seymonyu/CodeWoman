import React, { Component } from "react";
import RandomQuestion from "./RandomQuestion";
import TryAgainPopUp from "./TryAgainPopUp";
import WinPopUp from "./WinPopUp";
class Questions extends Component {
  render() {
    return (
      <div className="Questions">
        <h1>hello</h1>
        <RandomQuestion
          question={this.props.question}
          handleYes={this.props.handleYes}
          handleNo={this.props.handleNo}
        />
        <div>
          {this.props.answered === 1 ? (
            <WinPopUp
              answered={this.props.answered}
              handlerGameFlow={this.props.handlerGameFlow}
              handlerQUnmount={this.props.handlerQUnmount}
            />
          ) : null}

          {this.props.answered === 2 ? (
            <TryAgainPopUp
              answered={this.props.answered}
              handlerGameFlow={this.props.handlerGameFlow}
              handlerQUnmount={this.props.handlerQUnmount}
            />
          ) : null}
        </div>
        <div>
          {this.props.myAlliesUrl
            ? this.props.myAlliesUrl.map((item, index) => (
                <img key={index} src={item} alt="my allies" />
              ))
            : null}
        </div>
      </div>
    );
  }
}
export default Questions;
