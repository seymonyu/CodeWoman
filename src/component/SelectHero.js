import React from "react";
import "./scss/Compare.scss";
import HeroList from "./HeroList";
import Game from "./Game";

function SelectHero({
  superHero,
  selectHero,

  id_list,
  selectedHero,
  mountGame,
  ourHeroUrl
}) {
  return (
    <div>
      {mountGame ? (
        <Game
          id_list={id_list}
          selectedHero={selectedHero}
          ourHeroUrl={ourHeroUrl}
        />
      ) : (
        <div className="select_hero_body">
          <h1>Please choose our Hero!</h1>
          <div className="hero_container">
            {superHero.map((item, index) => (
              <HeroList key={index} obj={item} onClick={selectHero} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default SelectHero;
