import React, { Component } from "react";
import RandomQuestion from "./RandomQuestion";
import Result from "./Result";

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
          {this.props.answered === 1 || this.props.answered === 2 ? (
            <Result result={this.props.answered} />
          ) : null}
        </div>
        <button className="buttong" onClick={this.props.handlerQUnmount}>
          close
        </button>
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
