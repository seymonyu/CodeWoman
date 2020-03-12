import React, { Component } from "react";
import axios from "axios";
import "./scss/Compare.scss";
import DisplayResult from "./DisplayResult";
import winPopUp from "./images/winPopUp.svg";

const access_token = "2560077217542151";
class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myChar: {
        powerstats: {
          inteligence: " ",
          strength: "",
          speed: ""
        },
        image: {
          url: ""
        },
        name: ""
      },
      enemy: {
        powerstats: {
          inteligence: "",
          strength: "",
          speed: ""
        },
        image: { url: "" },
        name: ""
      },
      flag: 0,
      mount: false
    };
    this.result = this.result.bind(this);
    this.getIntelligence = this.getIntelligence.bind(this);
    this.getSpeed = this.getSpeed.bind(this);
    this.getStrength = this.getStrength.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handlerunmount = this.handlerunmount.bind(this);
  }
  componentDidMount() {
    const selectedHero = this.props.selectedHero;
    const enemyChar = this.props.enemyId[
      Math.floor(Math.random() * this.props.enemyId.length)
    ];
    this.props.spliceEnemyId(enemyChar);
    axios.get(`/${access_token}/${selectedHero}`).then(res => {
      this.setState({ myChar: res.data });
    });
    axios
      .get(`/${access_token}/${enemyChar}`)
      .then(res => {
        this.setState({ enemy: res.data });
      })
      .then(console.log(this.state.enemy));
  }
  result(myStats, enemyStats) {
    if (myStats >= enemyStats) {
      this.setState({ flag: 1 });
      this.props.addMyAlly();
    } else {
      this.setState({ flag: 2 });
    }
  }



  handlerunmount() {
    this.setState({ mount: false });
  }
  getIntelligence() {
    this.result(
      this.state.myChar.powerstats.intelligence,
      this.state.enemy.powerstats.intelligence
    );
    this.setState({ mount: true });
  }
  getStrength() {
    this.result(
      this.state.myChar.powerstats.strength,
      this.state.enemy.powerstats.strength
    );
    this.setState({ mount: true });
  }
  getSpeed() {
    this.result(
      this.state.myChar.powerstats.speed,
      this.state.enemy.powerstats.speed
    );
    this.setState({ mount: true });
  }

  render() {
    return (
      <div className="displayBlock">
        {this.state.flag===1||this.state.flag===2?
        this.state.flag === 1 ? (
            <div class="pop--bg">
            <img class="pop--win" src={winPopUp} alt="Winning" />
            <p class="pop-text">You collected more allies!</p>
            <button onClick={this.props.handlerCUnmount}>Next challenge</button>
          </div>
        ) : (
          <div><p>You lost</p>
          <button onClick={this.props.handlerCUnmount}>Next challenge</button>
          </div>):
          <div>
        <div className="Avatars">
          <h1>{this.state.myChar.name} </h1>
          <img src={this.state.myChar.image.url} alt="myChar" />
          <ul>
            <li> {this.state.myChar.powerstats.intelligence}</li>
            <li> {this.state.myChar.powerstats.strength}</li>
            <li> {this.state.myChar.powerstats.speed}</li>
          </ul>
          <h1>{this.state.enemy.name} </h1>
          <img src={this.state.enemy.image.url} alt="myChar" />
          <ul>
            <li> {this.state.enemy.powerstats.intelligence}</li>
            <li> {this.state.enemy.powerstats.strength}</li>
            <li> {this.state.enemy.powerstats.speed}</li>
          </ul>
        </div>
       
        <div className="Buttons">
          <button onClick={this.getIntelligence}>Intelligence</button>
          <button onClick={this.getStrength}>Strength</button>
          <button onClick={this.getSpeed}>Speed</button>
        </div>
        </div>}
        
        <div className="allies-list">
          {this.props.myAlliesUrl
            ? this.props.myAlliesUrl.map((item, index) => (
              <div>
                <img key={index} src={item} alt="my allies" />
                </div>
              ))
            : null}
        </div>
      
      </div>
    );
  }
}
export default Compare;
