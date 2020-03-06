import React from "react";
import HeroList from "./HeroList";
import Game from "./Game";
import "./SelectHero.css";

function SelectHero({
  superHero,
  mountGame,
  selectHeroOnClick,
  id_list,
  selectedHero,
  ourHeroUrl,
  maleUrl
}) {
  return (
    <div>
      {mountGame === true ? (
        <Game
          id_list={id_list}
          selectedHero={selectedHero}
          ourHeroUrl={ourHeroUrl}
        />
      ) : (
        <div className="select_hero_body">
          <h1>Please Choose Our Hero</h1>
          <div className="hero_container">
            {superHero.map((item, index) => (
              <HeroList key={index} obj={item} onClick={selectHeroOnClick} />
            ))}
            {/* <img className="male_pic" src={maleUrl} alt="male" /> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectHero;
