import React, { Component } from "react";
import RandomQuestion from "./RandomQuestion";
import Result from "./Result";

const questionsList = [
  {
    Q:
      "Is it true that in the past 50 years, 85 states have had no female head of state.",
    A: true
  },

  {
    Q:
      "Is it true that in the past 50 years, 45 states have had no female head of state.",
    A: false
  },

  {
    Q:
      "Do you think that globally, only 55% of women (aged 15-64) are engaged in the labour market as opposed to 78% of men.",
    A: true
  },

  {
    Q:
      "Do you think that globally, only 40% of women (aged 15-64) are engaged in the labour market as opposed to 72% of men.",
    A: false
  },

  {
    Q:
      "In 72 countries women are banned from opening bank accounts or obtaining credit",
    A: true
  },

  {
    Q:
      "In 96 countries women are banned from opening bank accounts or obtaining credit",
    A: false
  },

  {
    Q:
      "Is there a country where men spend the same amount of time on unpaid work as women?",
    A: false
  },

  {
    Q: "Are there more women than men in Europe?",
    A: true
  },

  {
<<<<<<< HEAD:src/components/Questions.js
    Q: "question3",
    A: true
=======
    Q: "Do women live longer than men?",
    A: true
  },

  {
    Q: "In 6 countries worldwide women have equal legal working rights as men",
    A: true
  },

  {
    Q: "In 15 countries worldwide women have equal legal working rights as men",
    A: false
  },

  {
    Q: "33,000 girls become child brides every day",
    A: true
  },

  {
    Q: "40% of the world millionaires are women",
    A: false
  },

  {
    Q: "Women have equal pay in IT",
    A: false
  },

  {
    Q: "Women have equal pay across industries",
    A: false
>>>>>>> Developer:src/Questions.js
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
