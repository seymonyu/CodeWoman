import React, { Component } from "react";
import "./scss/GameOver.scss";

function ChooseMale({ handlerOnClickMale }) {
  return (
    <div>
      <h1 className="game_over">Game Over!</h1>
      <button className="btn_close" onClick={handlerOnClickMale}>
        {" "}
        Close
      </button>
    </div>
  );
}

export default ChooseMale;
