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
    A: true
  }
];

function getQuestion(questionsList) {
  return questionsList[Math.floor(Math.random() * questionsList.length)];
}

class Questions extends Component {
  state = {
    id_list: [589, 720, 165, 638, 309, 356, 107, 238, 643],
    answered: 0, // 0 - unanswered, 1 - correct, 2 - incorrect
    myAllies: [],
    noOfAllies: 0
  };

  componentDidMount() {
    this.setState({ answered: 0 });
  }

  addMyAlly() {
    this.setState({
      myAllies: [...this.state.myAllies, this.state.id_list[0]],
      noOfAllies: this.state.noOfAllies + 1,
      id_list: this.state.id_list.splice(1, this.state.id_list.length)
    });
  }

  handleYes = question => {
    if (question.A) {
      this.setState({ answered: 1 });
      this.addMyAlly();
    } else this.setState({ answered: 2 });
    console.log(this.state.answered);
  };

  handleNo = question => {
    if (!question.A) {
      this.setState({ answered: 1 });
      this.addMyAlly();
    } else {
      this.setState({ answered: 2 });
    }
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
