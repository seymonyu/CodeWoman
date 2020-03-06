import React from 'react'
import Question from './Question'

function Story({handlerunmountQuestion,mount}) {
    return(
        <div>
   {mount===3? <Question handlerunmountQuestion={handlerunmountQuestion}/> :
        
        <div>
        <h1>YOU WON 
        ....I AM STORY.JS</h1>
        <button onClick={handlerunmountQuestion}>Next</button>
        </div>}
        </div>
    )
}

export default Story