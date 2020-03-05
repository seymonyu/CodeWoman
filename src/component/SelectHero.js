import React, { Component } from "react";
import axios from "axios";
import HeroList from "./HeroList";
import Compare from "./Compare";
import ChooseMale from "./ChooseMale";
class SelectHero extends Component {
  constructor(props){
    super(props)
    this.state = {
      id_list: [589, 720, 165, 638, 309, 356, 107, 238, 643],
      superHero: [],
      selectHeroMount: false,
      selectedHero: "",
      unmount:true,
      mountMaleComp:false
    }; 
    this.selectHeroOnClick = this.selectHeroOnClick.bind(this);
    this.handlerOnClickMale = this.handlerOnClickMale.bind(this);
    this.handlermountComp = this.handlermountComp.bind(this);
    this.handlerOnClickMale = this.handlerOnClickMale.bind(this);
  }
  

  componentDidMount() {
    this.state.id_list.map(element => {
      return axios
        .get(`http://superheroapi.com/api.php/10158157868173814/${element}`)
        .then(response => {
          let temp = response.data;
          this.setState({
            superHero: [...this.state.superHero, temp],
            selectedHero: temp.id
          });
        })
        .catch(error => console.error(`something went wrong: ${error}`));
    });
  }

  selectHeroOnClick = chosenHero => {
    this.setState({ selectedHero: chosenHero.id, selectHeroMount: true });
     this.handlermountComp()
  };
  
  handlermountComp(){
  this.setState({unmount:false})
  }

  handlerOnClickMale () {
    this.setState({mountMaleComp:!this.state.mountMaleComp})
    
  }

  render() {
    return (
      <div>
        {this.state.mountMaleComp === true? <ChooseMale handlerOnClickMale={this.handlerOnClickMale} /> : null}
        <img src= "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png" alt="place holder" onClick={this.handlerOnClickMale}/>
        {this.state.superHero.map((item, index) => (
          <HeroList key={index} obj={item} onClick={this.selectHeroOnClick} />
        ))}
       
        
   {this.state.unmount===false? <Compare selectedHero={this.state.selectedHero}/>: null}
     </div>

    );
  }
}
export default SelectHero;
