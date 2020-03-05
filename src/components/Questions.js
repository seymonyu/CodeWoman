import React, { Component } from "react";
import RandomQuestion from "./RandomQuestion";
import Result from "./Result";

const questionsList = [
  {
    Q: "question1",
    A: true
  },

  {
    Q: "question2",
    A: true
  },

  {
    Q: "question3",
    A: false
  }
];

function getQuestion(questionsList) {
  return questionsList[Math.floor(Math.random() * questionsList.length)];
}

class Questions extends Component {
  state = {
    questions: [],
    answered: 0 // 0 - unanswered, 1 - correct, 2 - incorrect
  };

  componentDidMount() {
    this.setState({ answered: 0 });
  }

  handleYes = question => {
    question.A
      ? this.setState({ answered: 1 })
      : this.setState({ answered: 2 });
    console.log(this.state.answered);
  };

  handleNo = question => {
    !question.A
      ? this.setState({ answered: 1 })
      : this.setState({ answered: 2 });
    console.log(this.state.answered);
  };

  render() {
    return (
      <div className="Questions">
        <h1>hello</h1>

        <RandomQuestion
          question={getQuestion(questionsList)}
          handleYes={this.handleYes}
          handleNo={this.handleNo}
        />

        <div>
          {this.state.answered === 1 || this.state.answered === 2 ? (
            <Result result={this.state.answered} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Questions;
