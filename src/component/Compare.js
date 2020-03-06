import React, { Component } from "react";
import axios from "axios";
import "./scss/Compare.scss";
import DisplayResult from "./DisplayResult";
const access_token = "2560077217542151";
const enemyId = ["423", "119", "598", "251", "346", "222", "149", "180"];
const enemyChar = enemyId[Math.floor(Math.random() * enemyId.length)];
class Compare extends React.Component {
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

<<<<<<< HEAD
               enemy: {
          powerstats:{
              inteligence: ' ',
              strength: '',
              speed :'',},
              image:{url:""},
              name: '',
              },
              flag:0,
              mount:1,
             
            
      } 
        this.result = this.result.bind(this);
        this.getInteligence = this.getInteligence.bind(this);
        this.getSpeed = this.getSpeed.bind(this);
        this.getStrength = this.getStrength.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handlerunmount = this.handlerunmount.bind(this);
         this.handlerunmountStory = this.handlerunmountStory.bind(this);
        this.handlerunmountQuestion = this.handlerunmountQuestion.bind(this);
                this.handlerunmountNewCombate = this.handlerunmountNewCombate.bind(this);



=======
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
>>>>>>> 17e55a2b4cfe7ccd484287a43ca52774106cc918
    };
    this.result = this.result.bind(this);
    this.getIntelligence = this.getIntelligence.bind(this);
    this.getSpeed = this.getSpeed.bind(this);
    this.getStrength = this.getStrength.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handlerunmount = this.handlerunmount.bind(this);
  }
<<<<<<< HEAD
} 

  getInteligence(){
      
this.result(this.state.myChar.powerstats.intelligence,this.state.enemy.powerstats.intelligence )
this.setState({mount:2})
=======
>>>>>>> 17e55a2b4cfe7ccd484287a43ca52774106cc918

  componentDidMount() {
    const avatarId = this.props.avatarId;
    axios.get(`/${access_token}/${avatarId}`).then(res => {
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
      console.log("You Win");
    } else {
      this.setState({ flag: 2 });
      console.log("You lost");
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
  getSpeed() {
    this.result(
      this.state.myChar.powerstats.speed,
      this.state.enemy.powerstats.speed
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
<<<<<<< HEAD
  getSpeed(){
this.result(this.state.myChar.powerstats.speed,this.state.enemy.powerstats.intelligence)
  this.setState({mount:2})
}
     getStrength(){
this.result(this.state.myChar.powerstats.strength,this.state.enemy.powerstats.intelligence)
 this.setState({mount:2})
 }

 //mounting functions
 handlerunmount(){
    this.setState({mount:2})

}
 handlerunmountStory(){
   this.setState({mount:3})
   
 }
 handlerunmountQuestion(){
   this.setState({mount:4})

 }
  handlerunmountNewCombate(){
   this.setState({mount:5})

 }
 
=======
>>>>>>> 17e55a2b4cfe7ccd484287a43ca52774106cc918
  render() {


    return (
<<<<<<< HEAD
      <div>
          {this.state.mount===2?<DisplayResult 
          flag={this.state.flag} 
          handlerunmount={this.handlerunmount} 
          mount={this.state.mount} 
          handlerunmountStory={this.handlerunmountStory} 
           handlerunmountQuestion={this.handlerunmountQuestion}
           />:

<div className="displayBlock">
    <div className="Avatars">

      <h1>{this.state.myChar.name} </h1>
       <img src={this.state.myChar.image.url} alt="myChar"/>
      <ul> 
      <li> {this.state.myChar.powerstats.intelligence}</li>
       <li> {this.state.myChar.powerstats.strength}</li>
       <li> {this.state.myChar.powerstats.speed}</li>
      </ul>
     <h1>{this.state.enemy.name} </h1>
      <img src={this.state.enemy.image.url} alt="myChar"/>
      <ul> 
      <li> {this.state.enemy.powerstats.intelligence}</li>
       <li> {this.state.enemy.powerstats.strength}</li>
       <li> {this.state.enemy.powerstats.speed}</li>
      </ul>
    </div>
     <div className="Buttons"> 
        <button onClick={this.getInteligence}>Intelligence</button>
        <button onClick={this.getSpeed}>Strength</button>
        <button onClick={this.getStrength}>Speed</button>
     </div>
     
</div>}
</div>
=======
      <div className="displayBlock">
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
        {this.state.mount === true ? (
          <DisplayResult
            flag={this.state.flag}
            handlerunmount={this.handlerunmount}
            mount={this.state.mount}
          />
        ) : null}
        <div className="Buttons">
          <button onClick={this.getIntelligence}>Intelligence</button>
          <button onClick={this.getStrength}>Strength</button>
          <button onClick={this.getSpeed}>Speed</button>
        </div>
      </div>
>>>>>>> 17e55a2b4cfe7ccd484287a43ca52774106cc918
    );
  }
}

export default Compare;
