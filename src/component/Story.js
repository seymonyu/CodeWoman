import React, { Component } from "react";
import axios from "axios";
import "./scss/evilRobot.scss";
import SelectHero from "./SelectHero";
import evilRobot from "./images/evilRobot.svg";
class Story extends Component {
  state = {
    id_list: [589, 720, 165, 638, 309, 356, 107, 238, 643],
    superHero: [],
    selectedHero: "",
    mountHero: false,
    mountGame: false,
    ourHeroUrl: "",
    id_male: ""
  };
  componentDidMount = () => {
    this.state.id_list.map(element => {
      return axios
        .get(`http://superheroapi.com/api.php/10158157868173814/${element}`)
        .then(response => {
          let temp = response.data;
          this.setState({
            superHero: [...this.state.superHero, temp],
            selectedHero: temp.id,
            ourHeroUrl: temp.image.url
          });
        })
        .catch(error => console.error(`something went wrong: ${error}`));
    });
    return axios
      .get(`http://superheroapi.com/api.php/10158157868173814/498`)
      .then(response => {
        let temp = response.data;
        this.setState({
          id_male: temp.image.url
        });
      })
      .catch(error => console.error(`something went wrong: ${error}`));
  };
  selectHeroOnClick = chosenHero => {
    this.setState({ selectedHero: chosenHero.id });
    this.setState({
      id_list: this.state.id_list.filter(
        item => item !== parseInt(chosenHero.id)
      ),
      ourHeroUrl: chosenHero.image.url
    });
    this.toggleMountGameMount();
  };
  toggleMountSelectHero = () => {
    this.setState({ mountHero: !this.state.mountHero });
  };

  toggleMountGameMount = () => {
    this.setState({ mountGame: !this.state.mountGame });
  };
  render() {
    return (
      <div>
        {this.state.mountHero === true ? (
          <SelectHero
            superHero={this.state.superHero}
            selectHeroOnClick={this.selectHeroOnClick}
            mountGame={this.state.mountGame}
            id_list={this.state.id_list}
            selectedHero={this.state.selectedHero}
            ourHeroUrl={this.state.ourHeroUrl}
            maleUrl={this.state.id_male}
          />
        ) : (
          <section className="robot">
            <div className="robot--wrap container-fluid">
              <div className="robot--row row">
                <div className="robot--col_left col">
                  <div className="robot--wrapper">
                    <img className="robot--eye" src={evilRobot} alt="Eye" />
                  </div>
                </div>
                <div className="robot--col_right col">
                  <div className="speech-bubble">
                    <div className="typewriter-first">
                      <h1>I have all my heroes fighting for me.</h1>
                    </div>
                    <div className="typewriter-second">
                      <h1>You have no chance.</h1>
                    </div>
                    <div className="typewriter-third">
                      <h1>You will never have a job in tech!</h1>
                    </div>
                    <div className="typewriter-fourth">
                      <h1>Hahahahahahahahahahahahaha.</h1>
                    </div>
                    <div className="typewriter-fifth">
                      <h1>What?? You wanna fight me??</h1>
                    </div>
                  </div>
                  <div className="circle--wrap">
                    <div className=""></div>
                    <button
                      type="button"
                      onClick={this.toggleMountSelectHero}
                      className="circle--typo btn btn-link"
                    >
                      Choose a heroine
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}
export default Story;
