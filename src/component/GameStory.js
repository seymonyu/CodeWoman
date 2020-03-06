import React from 'react'

<<<<<<< HEAD
function GameStory({forward_flag,ourHero,handlerGameFlow}){
=======
function GameStory({forward_flag,ourHeroUrl,handlerGameFlow}){
>>>>>>> maching_the_comp
  {  
    if(forward_flag===0){return(  
    <div>
       <p>Lets start the game</p>
<<<<<<< HEAD
        <img src={ourHero} alt="super hero" />
=======
        <img src={ourHeroUrl} alt="super hero" />
>>>>>>> maching_the_comp
        <button onClick={handlerGameFlow}>Next</button>
        </div>)}
    if(forward_flag===2){return( <div>
       <p>Fase 2</p>
<<<<<<< HEAD
        <img src={ourHero} alt="super hero" />
=======
        <img src={ourHeroUrl} alt="super hero" />
>>>>>>> maching_the_comp
        <button onClick={handlerGameFlow}>Next</button>
        </div>)}
    if(forward_flag===4){return(
         <div>
       <p>Fase 3</p>
<<<<<<< HEAD
        <img src={ourHero} alt="super hero" />
=======
        <img src={ourHeroUrl} alt="super hero" />
>>>>>>> maching_the_comp
        <button onClick={handlerGameFlow}>Next</button>
        </div>
    )}
    if(forward_flag===6){return( <div>
       <p>Fase 4</p>
<<<<<<< HEAD
        <img src={ourHero} alt="super hero" />
=======
        <img src={ourHeroUrl} alt="super hero" />
>>>>>>> maching_the_comp
        <button onClick={handlerGameFlow}>Next</button>
        </div>)}
    if(forward_flag===8){return(
         <div>
       <p>Fase 4</p>
<<<<<<< HEAD
        <img src={ourHero} alt="super hero" />
=======
        <img src={ourHeroUrl} alt="super hero" />
>>>>>>> maching_the_comp
        <button onClick={handlerGameFlow}>Next</button>
        </div>
    )}
}}

export default GameStory 