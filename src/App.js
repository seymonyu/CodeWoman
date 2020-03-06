import React from "react";
import EvilRobot from "./component/EvilRobot";
import SelectHero from "./component/SelectHero";
import "bootstrap/dist/css/bootstrap.min.css";
import Start from "./component/Start";
import Compare from "./component/Compare"

function App() {
  return (
    <div className="App">
      <Start />
      <Compare/>
      <EvilRobot />
      <SelectHero />
    </div>
  );
}
export default App;
