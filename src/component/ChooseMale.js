import React, { Component } from "react";
import "./scss/GameOver.scss";
import giphy from "./giphy.gif";

function ChooseMale({ handlerOnClickMale }) {
  return (
    <div className="gameOver_parent">      
    
    
      <h1 className="game_over_text">Game Over!</h1>
      <div className="btn_parent_gameover">
        <button className="btn_close_gameover" onClick={handlerOnClickMale}>
          {" "}
          Close
        </button>
      </div>
    </div>
  );
}

export default ChooseMale;
