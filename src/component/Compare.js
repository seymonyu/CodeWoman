
import React, { Component } from "react";
import axios from "axios";
import "./scss/Compare.scss";
const access_token = "2560077217542151";
const avatarId = "53";
const enemyId = "69";

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myChar: {
        powerstats: {
          intelligence: "",
          strength: "",
          speed: ""
        },
        name: "",
        image: {
          url: ""
        }
      },
      enemy: {
        powerstats: { intelligence: "", strength: "", speed: "" },
        name: "",
        image: {
          url: ""
        }
      }
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.result = this.result.bind(this);
    this.getIntelligence = this.getIntelligence.bind(this);
    this.getStrength = this.getStrength.bind(this);
    this.getSpeed = this.getSpeed.bind(this);
  }

  componentDidMount() {
    axios.get(`/${access_token}/${avatarId}`).then(res => {
      this.setState({ myChar: res.data });
    });
    axios.get(`/${access_token}/${enemyId}`).then(res => {
      this.setState({ enemy: res.data });
    });
  }

  result(myStats, enemyStats) {
    if (myStats > enemyStats) {
      console.log("You win!");
    } else {
      console.log("You lost!");
    }
  }
  getIntelligence() {
    this.result(
      this.state.myChar.powerstats.intelligence,
      this.state.enemy.powerstats.intelligence
    );
  }
  getSpeed() {
    this.result(
      this.state.myChar.powerstats.speed,
      this.state.enemy.powerstats.speed
    );
  }
  getStrength() {
    this.result(
      this.state.myChar.powerstats.strength,
      this.state.enemy.powerstats.strength
    );
  }
  render() {
    return (
      <div className="compare-div">
        <div className="chars">
          <div>
            <img src={this.state.myChar.image.url} alt="char" />
            <ul>
              <li> {this.state.myChar.name} </li>
              <li> {this.state.myChar.powerstats.intelligence}</li>
              <li> {this.state.myChar.powerstats.strength}</li>
              <li> {this.state.myChar.powerstats.speed}</li>
            </ul>
          </div>
          <div>
            <img src={this.state.enemy.image.url} alt="char" />
            <ul>
              <li> {this.state.enemy.name} </li>
              <li> {this.state.enemy.powerstats.intelligence}</li>
              <li> {this.state.enemy.powerstats.strength}</li>
              <li> {this.state.enemy.powerstats.speed}</li>
            </ul>
          </div>
        </div>
        <div className="buttons">
          <button onClick={this.getIntelligence}>Intelligence</button>

          <button onClick={this.getStrength}>Strength</button>
          <button onClick={this.getSpeed}>Speed</button>
        </div>
      </div>
    );
  }
}

export default Compare;

/*{" "}
       


         <div>{this.result()}</div>


  result() {
    if (this.state.char.powerstats.power > enemy.powerstats.power) {
      return <div>You win!</div>;
    } else {
      return <div>Loser!</div>;
    }
  }

  this.result = this.result.bind(this);
        */

