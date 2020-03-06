import React, { Component } from "react";
import "./scss/GameOver.scss";

function ChooseMale({ handlerOnClickMale }) {
  return (
    <div className="gameOver_parent">
      <h1 className="game_over_text">Game Over!</h1>
      <div className="btn_parent">
      <button className="btn_close" onClick={handlerOnClickMale}>
        {" "}
        Close
      </button>
      </div>
    </div>
  );
}

export default ChooseMale;
