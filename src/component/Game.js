import React, { Component } from "react";
import Compare from "./Compare";
import Questions from "./Questions";
import axios from "axios";

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
  }
];

function getQuestion(questionsList) {
  return questionsList[Math.floor(Math.random() * questionsList.length)];
}

class Game extends Component {
  state = {
    game_flow_array: [1, 2, 3, 4, 5, 6],
    id_list: [],
    answered: 0, // 0 - unanswered, 1 - correct, 2 - incorrect
    myAllies: [],
    myAlliesUrl: [],
    questionsMount: false,
    compareMount: false,
    forward_flag: 0,
    enemyId: [423, 119, 598, 251, 346, 222, 149, 180],
    myAlliesdata: []
  };

  componentDidMount() {
    this.setState({
      answered: 0,
      id_list: this.props.id_list,
      forward_flag: 0
    });
  }
  handleStartGame = () => {
    this.setState({
      forward_flag: 1
    });
  };
  spliceEnemyId = enemyChar => {
    this.setState({
      enemyId: this.state.enemyId.filter(item => item !== parseInt(enemyChar))
    });
  };
  toggleQuestionsMount = () => {
    this.setState({
      questionsMount: !this.state.questionsMount,
      forward_flag: this.state.forward_flag + 1,
      answered: 0
    });
  };
  toggleCompareMount = () => {
    this.setState({
      compareMount: !this.state.compareMount
    });
    this.state.forward_flag === 6
      ? this.setState({ forward_flag: 0 })
      : this.setState({ forward_flag: this.state.forward_flag + 1 });
  };

  addMyAlly = () => {
    let ally = this.state.id_list[0];
    this.setState({
      myAllies: [...this.state.myAllies, this.state.id_list[0]],

      id_list: this.state.id_list.splice(1, this.state.id_list.length)
    });

    console.log("i am here");
    return axios
      .get(`http://superheroapi.com/api.php/10158157868173814/${ally}`)
      .then(response => {
        let temp = response.data.image.url;
        let temp2 = response.data.powerstats;
        console.log(temp);
        this.setState({
          myAlliesUrl: [...this.state.myAlliesUrl, temp],
          myAlliesdata: [...this.state.myAlliesdata, temp2]
        });
      })
      .catch(error => console.error(`something went wrong: ${error}`));
  };

  handleYes = question => {
    if (question.A) {
      this.setState({ answered: 1 });
      this.addMyAlly();
    } else this.setState({ answered: 2 });
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
      <div>
        <p>Lets start the game</p>
        <img src={this.props.ourHeroUrl} alt="super hero" />
        <button onClick={this.handleStartGame}>Start</button>
        {this.state.forward_flag === 1 ? (
          <Questions
            question={getQuestion(questionsList)}
            handleYes={this.handleYes}
            handleNo={this.handleNo}
            answered={this.state.answered}
            handlerQUnmount={this.toggleQuestionsMount}
          />
        ) : null}
        {this.state.forward_flag === 2 ? (
          <Compare
            selectedHero={this.props.selectedHero}
            handlerCUnmount={this.toggleCompareMount}
            enemyId={this.state.enemyId}
            spliceEnemyId={this.spliceEnemyId}
            addMyAlly={this.addMyAlly}
            myAlliesUrl={this.myAlliesUrl}
            myAlliesdata={this.myAlliesdata}
          />
        ) : null}
        {this.state.forward_flag === 3 ? (
          <Questions
            question={getQuestion(questionsList)}
            handleYes={this.handleYes}
            handleNo={this.handleNo}
            answered={this.state.answered}
            handlerQUnmount={this.toggleQuestionsMount}
          />
        ) : null}
        {this.state.forward_flag === 4 ? (
          <Compare
            selectedHero={this.props.selectedHero}
            handlerCUnmount={this.toggleCompareMount}
            enemyId={this.state.enemyId}
            spliceEnemyId={this.spliceEnemyId}
            addMyAlly={this.addMyAlly}
            myAlliesUrl={this.myAlliesUrl}
            myAlliesdata={this.myAlliesdata}
          />
        ) : null}
        {this.state.forward_flag === 5 ? (
          <Questions
            question={getQuestion(questionsList)}
            handleYes={this.handleYes}
            handleNo={this.handleNo}
            answered={this.state.answered}
            handlerQUnmount={this.toggleQuestionsMount}
          />
        ) : null}
        {this.state.forward_flag === 6 ? (
          <Compare
            selectedHero={this.props.selectedHero}
            handlerCUnmount={this.toggleCompareMount}
            enemyId={this.state.enemyId}
            spliceEnemyId={this.spliceEnemyId}
            addMyAlly={this.addMyAlly}
            myAlliesUrl={this.myAlliesUrl}
            myAlliesdata={this.myAlliesdata}
          />
        ) : null}

        <div>
          {this.state.myAlliesUrl
            ? this.state.myAlliesUrl.map((item, index) => (
                <img key={index} src={item} alt="my allies" />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default Game;
