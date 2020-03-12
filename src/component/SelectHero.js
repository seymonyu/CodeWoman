import React from "react";
import HeroList from "./HeroList";
import Game from "./Game";
import "./scss/SelectHero.scss";
import "./SelectHero.css";
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
        <section className="question ">
          <div className="question--wrap container-fluid">
            <div className="question--row row">
              <div className="question--col_left col">
                <div className="question--wrapper">
                  <img className="choose--eye" src={Heroine} alt="Heroine" />
                </div>
              </div>
              <div className="question--col_right col">
                <div className="question--title">
                  <h1>Choose your Heroine!</h1>
                </div>
                <div className="allies-all row">
                  <div className="allies--wrapper col-3">
                    {superHero.map((item, index) => (
                      <HeroList
                        key={index}
                        obj={item}
                        onClick={selectHeroOnClick}
                      />
                    ))}
                    {/* <img className="male_pic" src={maleUrl} alt="male" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default SelectHero;
