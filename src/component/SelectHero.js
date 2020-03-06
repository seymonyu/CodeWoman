import React from "react";
import HeroList from "./HeroList";
import Game from "./Game"


function SelectHero({ superHero,mountGame,selectHeroOnClick,id_list,selectedHero,ourHeroUrl }) {


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

export default SelectHero