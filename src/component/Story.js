import React, { Component } from "react";
import SelectHero from "./SelectHero";
import Compare from "./Compare";
import axios from "axios";
import Game from "./Game";

class Story extends Component {
  state = {
    id_list: [589, 720, 165, 638, 309, 356, 107, 238, 643],
    superHero: [],
    selectedHero: "",
    selectHeroMount: false,
    gameUnmount: false,
    ourHero: ""
  };

  componentDidMount() {
    this.state.id_list.map(element => {
      return axios
        .get(`http://superheroapi.com/api.php/10158157868173814/${element}`)
        .then(response => {
          let temp = response.data;
          this.setState({
            superHero: [...this.state.superHero, temp],
            selectedHero: temp.id,
            ourHero: temp.image.url
          });
        })
        .catch(error => console.error(`something went wrong: ${error}`));
    });
  }

  selectHeroOnClick = chosenHero => {
    this.setState({ selectedHero: chosenHero.id });
    this.setState({
      id_list: this.state.id_list.filter(
        item => item !== parseInt(chosenHero.id)
      ),
      ourHero: chosenHero.image.url
    });
  };
  handlerUnmountSelectHero = () => {
    let flag = !this.state.selectHeroMount;

    this.setState({ selectHeroMount: flag });
  };
  handlerUnmountGame = () => {
    this.setState({ gameUnmount: !this.state.gameUnmount });
  };

  render() {
    return (
      <div>
        <p>Choose your avatar</p>

        {!this.state.selectHeroMount ? null : (
          <SelectHero
            superHero={this.state.superHero}
            selectHeroUnmount={this.handlerUnmountSelectHero}
            selectHero={this.selectHeroOnClick}
          />
        )}
        <button onClick={this.handlerUnmountSelectHero}>Hero Select</button>
        {!this.state.gameUnmount ? null : (
          <Game
            id_list={this.state.id_list}
            selectedHero={this.state.selectedHero}
            gameUnmount={this.handlerUnmountGame}
            ourHeroUrl={this.state.ourHero}
          />
        )}
        <button onClick={this.handlerUnmountGame}>Enter Game</button>
      </div>
    );
  }
}
export default Story;
