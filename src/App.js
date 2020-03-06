import React from "react";
import EvilRobot from "./component/EvilRobot";
import SelectHero from "./component/SelectHero";
import "bootstrap/dist/css/bootstrap.min.css";
import Start from "./component/Start";
import StyleQuestions from "./component/StyleQuestions";
import WinPopUp from "./component/WinPopUp";
import TryAgainPopUp from "./component/TryAgainPopUp";
import Dance from "./component/Dance"

function App() {
  return (
    <div className="App">
      <Dance />
    </div>
  );
}
export default App;
