import React from "react";
import EvilRobot from "./component/EvilRobot";
import SelectHero from "./component/SelectHero";
import "bootstrap/dist/css/bootstrap.min.css";
import Start from "./component/Start";
import StyleQuestions from "./component/StyleQuestions";
import WinPopUp from "./component/WinPopUp";

function App() {
  return (
    <div className="App">
      <WinPopUp />
    </div>
  );
}
export default App;
