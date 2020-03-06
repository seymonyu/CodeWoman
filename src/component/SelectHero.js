import React from "react";

import HeroList from "./HeroList";

function SelectHero({ superHero, selectHero, selectHeroUnmount }) {
  return (
    <div>
      {superHero.map((item, index) => (
        <HeroList key={index} obj={item} onClick={selectHero} />
      ))}

      <button onClick={selectHeroUnmount}>close</button>
    </div>
  );
}
export default SelectHero;
