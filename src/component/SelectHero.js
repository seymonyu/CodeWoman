import React from "react";
import HeroList from "./HeroList";
import Game from "./Game";
import "./scss/SelectHero.scss";

import Heroine from "./images/Heroine.svg";

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
        <section className="start ">
          <h2 className="start--title">Artechmis</h2>
          <div className="start--wrap container-fluid">
            <div className="eye--wrapper">
              <div className="choose--img" />
            </div>
          </div>
          <div className="start--typo">
            <p>Choose your Heroine!</p>
          </div>
          <div className="allies-all ">
            <div className="allies--wrapper slidehero ">
              {superHero.map((item, index) => (
                <HeroList key={index} obj={item} onClick={selectHeroOnClick} />
              ))}
              {/* <img className="male_pic" src={maleUrl} alt="male" /> */}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default SelectHero;
