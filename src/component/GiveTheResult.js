import React from 'react'
import Story from "./Story"


function GiveTheResult({flag,handlerunmount,handlerunmountStory,handlerunmountQuestion,mount}){
      return(
           <div>
{flag===1?<Story handlerunmountQuestion={handlerunmountQuestion}  mount={mount}/>:
<div>
<h1> You Lost</h1>
<button onClick={handlerunmount}>close</button>
</div>
   }
   </div>)}

export default GiveTheResult