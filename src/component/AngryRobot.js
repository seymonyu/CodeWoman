import React from "react";
import DisplayAngryRobot from "./DisplayAngryRobot"

const AngryRobot = ({forward_flag,handlerGameFlow,ourHeroUrl}) => {
    return (
      <div>
      <DisplayAngryRobot ourHeroUrl={ourHeroUrl} forward_flag={forward_flag} handlerGameFlow={handlerGameFlow}/>
      </div>
    
  );
};
export default AngryRobot;
