import React from "react";
import EvilRobot from "./component/EvilRobot";
import SelectHero from "./component/SelectHero";
import "bootstrap/dist/css/bootstrap.min.css";
import Start from "./component/Start";
import StyleQuestions from "./component/StyleQuestions";
import WinPopUp from "./component/WinPopUp";
import Dance from "./component/Dance";
import ChooseHeroine from "./component/ChooseHeroine";

function App() {
  return (
    <div className="App">
      <ChooseHeroine />
    </div>
  );
}
export default App;
