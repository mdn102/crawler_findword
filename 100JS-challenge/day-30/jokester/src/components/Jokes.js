import React from "react"

function Jokes(props){
    console.log(props)
   return(
       <div className='joke-cards'>
           <h1 style={{display: props.question? 'block' : 'none'}}>Question: {props.question}</h1>
           <h2>Answer:{props.answer}</h2>
       </div>
   )

}

export default Jokes