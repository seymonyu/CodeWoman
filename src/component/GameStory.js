import React from 'react'

function GameStory({forward_flag,ourHero,handlerGameFlow}){
  {  
    if(forward_flag===0){return(  
    <div>
       <p>Lets start the game</p>
        <img src={ourHero} alt="super hero" />
        <button onClick={handlerGameFlow}>Next</button>
        </div>)}
    if(forward_flag===2){return( <div>
       <p>Fase 2</p>
        <img src={ourHero} alt="super hero" />
        <button onClick={handlerGameFlow}>Next</button>
        </div>)}
    if(forward_flag===4){return(
         <div>
       <p>Fase 3</p>
        <img src={ourHero} alt="super hero" />
        <button onClick={handlerGameFlow}>Next</button>
        </div>
    )}
    if(forward_flag===6){return( <div>
       <p>Fase 4</p>
        <img src={ourHero} alt="super hero" />
        <button onClick={handlerGameFlow}>Next</button>
        </div>)}
    if(forward_flag===8){return(
         <div>
       <p>Fase 4</p>
        <img src={ourHero} alt="super hero" />
        <button onClick={handlerGameFlow}>Next</button>
        </div>
    )}
}}

export default GameStory 