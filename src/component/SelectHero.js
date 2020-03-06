import React from "react";
import HeroList from "./HeroList";
import Game from "./Game"


function SelectHero({ superHero,mountGame,selectHeroOnClick,id_list,selectedHero,ourHero }) {


    return (
 <div>
 {mountGame===true?<Game id_list={id_list} selectedHero={selectedHero} ourHeroUrl={ourHeroUrl}/>:
 <div>
        {superHero.map((item, index) => (
          <HeroList key={index} obj={item} onClick={selectHeroOnClick} />
          
        ))}
         </div>}
</div>
);}

