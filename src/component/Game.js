import React, { Component } from "react";
import Compare from "./Compare";
import Questions from "./Questions";
import axios from "axios";
import GameStory from "./GameStory";
import "./scss/Game.scss";

const questionsList = [
  {
    Q:
      "Is it true that in the past 50 years, 85 states in the United States have had no female head of state.",
    A: true
  },

  {
    Q:
      "Is it true that in the past 50 years, 45 states in the United States have had no female head of state.",
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
    id_list: [],
    answered: 0, // 0 - unanswered, 1 - correct, 2 - incorrect
    myAllies: [],
    myAlliesUrl: [],

    enemyId: [423, 119, 598, 251, 346, 222, 149, 180],
    myAlliesdata: [],
    questionsMount: false,
    compareMount: false,
    counter: 1,
    end: false
  };
  componentDidMount() {
    this.setState({
      answered: 0,
      id_list: this.props.id_list
    });
  }

  spliceEnemyId = enemyChar => {
    this.setState({
      enemyId: this.state.enemyId.filter(item => item !== parseInt(enemyChar))
    });
  };

  togglescreenMount = () => {
    if (this.state.counter === 4) {
      this.setState({
        questionsMount: false,
        compareMount: false,
        end: true
      });
    } else {
      this.setState({
        questionsMount: !this.state.questionsMount,
        compareMount: !this.state.compareMount,
        answered: 0,
        counter: this.state.counter + 1
      });
    }
  };
  spliceEnemyId = enemyChar => {
    this.setState({
      enemyId: this.state.enemyId.filter(item => item !== parseInt(enemyChar))
    });
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
  handleStartGame = () => {
    this.setState({
      questionsMount: true
    });
  };

  handleYes = question => {
    if (question.A) {
      this.setState({ answered: 1 });
      this.addMyAlly();
    } else {
      this.setState({ answered: 2 });
    }
  };

  handleNo = question => {
    if (!question.A) {
      this.setState({ answered: 1 });
      this.addMyAlly();
    } else {
      this.setState({ answered: 2 });
    }
  };

  render() {
    return (
      <div className="game_container">
        <h2 className="start--title">Artechmis</h2>
        {!this.state.questionsMount &&
        !this.state.compareMount &&
        !this.state.end ? (
          <div>
            {" "}
            <div className="choosen_p_img_container">
              <div className="choosen_img_wrap ">
                <img
                  className="choosen_img_game img--bigger"
                  src={this.props.ourHeroUrl}
                  alt="super hero"
                />
              </div>
            </div>
            <div className="wrapper">
              <p className="start--typo slide_story">
                You have chosen! <br></br>Let's begin the game
              </p>
            </div>
            <div className="circle--wrap">
              <button
                onClick={this.handleStartGame}
                className="question--btn btn btn-link"
              >
                Start the game
              </button>
            </div>
          </div>
        ) : null}

        {this.state.questionsMount ? (
          <Questions
            question={getQuestion(questionsList)}
            handleYes={this.handleYes}
            handleNo={this.handleNo}
            answered={this.state.answered}
            handlerQUnmount={this.togglescreenMount}
            addMyAlly={this.addMyAlly}
            myAlliesUrl={this.state.myAlliesUrl}
            myAlliesdata={this.state.myAlliesdata}
            ourHeroUrl={this.props.ourHeroUrl}
          />
        ) : null}
        {this.state.compareMount ? (
          <Compare
            selectedHero={this.props.selectedHero}
            handlerCUnmount={this.togglescreenMount}
            spliceEnemyId={this.spliceEnemyId}
            enemyId={this.state.enemyId}
            addMyAlly={this.addMyAlly}
            myAlliesUrl={this.state.myAlliesUrl}
            myAlliesdata={this.state.myAlliesdata}
          />
        ) : null}
        {this.state.end ? <p>The End</p> : null}
      </div>
    );
  }
}

export default Game;
