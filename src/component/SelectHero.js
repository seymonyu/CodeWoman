import React from "react";

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
        <div>
          {superHero.map((item, index) => (
            <HeroList key={index} obj={item} onClick={selectHero} />
          ))}
        </div>
      )}
    </div>
  );
}
export default SelectHero;
