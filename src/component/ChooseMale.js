import React, { Component } from "react";
import "./scss/GameOver.scss";

function ChooseMale({ handlerOnClickMale }) {
  return (
    <div className="gameOver_container">
      <h1 className="game_over_text">Game Over!</h1>
      <button className="btn_close" onClick={handlerOnClickMale}>
        {" "}
        Close
      </button>
    </div>
  );
}

export default ChooseMale;
