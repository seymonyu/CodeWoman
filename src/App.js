import React from "react";
import EvilRobot from "./component/EvilRobot";
import SelectHero from "./component/SelectHero";
import "bootstrap/dist/css/bootstrap.min.css";
import Start from "./component/Start";
import Story from "./component/Start";

function App() {
  return (
    <div className="App">
      {/* <Start />
      <EvilRobot />
      <SelectHero /> */}
      <Story />
    </div>
  );
}
export default App;
