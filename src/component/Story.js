import React, { Component } from "react";
<<<<<<< HEAD
import SelectHero from "./SelectHero";
import axios from "axios";
<<<<<<< HEAD
import "./scss/evilRobot.scss";
=======

// import "./scss/evilRobot.scss";
>>>>>>> 420fad63e7c7fbedbbf38a138a55fd472ce33b4c
import evilRobot from "./images/evilRobot.svg";
import Game from "./Game";
=======
import axios from "axios";
import "./scss/evilRobot.scss";
import SelectHero from "./SelectHero"
import evilRobot from "./images/evilRobot.svg"
>>>>>>> maching_the_comp

class Story extends Component {
  state = {
    id_list: [589, 720, 165, 638, 309, 356, 107, 238, 643],
    superHero: [],
    selectedHero: "",
<<<<<<< HEAD
    ourHero: "",


    //mount toggle
    mountHero: false,
    mountGame:false

=======
    mountHero: false,
    mountGame: false,
    ourHeroUrl: ""
<<<<<<< HEAD
>>>>>>> 420fad63e7c7fbedbbf38a138a55fd472ce33b4c
=======

>>>>>>> maching_the_comp
  };

  componentDidMount=()=> {
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
  }

  selectHeroOnClick = chosenHero => {
    this.setState({ selectedHero: chosenHero.id });
    this.setState({
      id_list: this.state.id_list.filter(
        item => item !== parseInt(chosenHero.id)
      ),
      ourHero: chosenHero.image.url
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> maching_the_comp
    this.toggleMountGameMount()
  };



  toggleMountSelectHero = () => {
    this.setState({ mountHero: !this.state.mountHero });
  };
  
toggleMountGameMount=()=>{
      this.setState({ mountGame: !this.state.mountGame});

}

  render() {
    return (
      <div>

      {this.state.mountHero ===true?
                  <SelectHero
                    superHero={this.state.superHero}
                    selectHeroOnClick={this.selectHeroOnClick}
                    mountGame={this.state.mountGame}
                    id_list={this.state.id_list}
                    selectedHero={this.state.selectedHero}
                    ourHeroUrl={this.state.ourHeroUrl}
                    
                  />:
               
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
                    <div className="blob"></div>
                    <button
                      type="button"
                      className="circle--typo btn btn-link"
                      onClick={this.toggleMountSelectHero}
                    >
                      Choose a heroine
                    </button>
                  </div>
                </div>

              </div>
            </div>
<<<<<<< HEAD
          </section>
        )}
</div>
    );
  }
}
=======
          </section> }
</div>
  
  )}}
>>>>>>> maching_the_comp
export default Story;

