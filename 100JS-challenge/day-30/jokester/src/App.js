import React from 'react';
import './App.css';
import Jokes from './components/Jokes'
import jokesData from './jokesData'


function App() {
  let jokesComponents = jokesData.map(el=> <Jokes key={el.id} question={el.question} answer={el.answer} />)
    
  return (
    <div className='jokes'>
        {jokesComponents}
    </div>
   
    // <div>
    //   <Jokes 
    //   joke={{
    //     answer:`I'm not funny`
    //   }}/>
    //   <Jokes 
    //   joke={{
    //     question:'What happened to the poll',
    //     answer:`I'm not funny`
    //   }}/>
    // <Jokes 
    // joke={{
    //   question:'What happened to the poll',
    //   answer:`I'm not funny`
    // }}/>
    // <Jokes 
    // joke={{
    //   question:'What happened to the poll',
    //   answer:`I'm not funny`
    // }}/>
    // <Jokes 
    // joke={{
    //   question:'What happened to the poll',
    //   answer:`I'm not funny`
    // }}/>

    // </div>
    
    
  );
}

export default App;
