import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';



class Sentence{

      constructor( word1, word2){
        this.word1 = word1
        this.word2 = word2
      }

      getSentence(){
        return this.word1 + ' ' + this.word2
      }

}


function App() {

  const handleInput = evt => {
      setCheckTerm( evt.target.value+"b")
      console.log( evt.target.value)

  }

  const [ checkTerm , setCheckTerm] = React.useState("nothing( App)")
  const [checkTerm2 , setCheckTerm2] = React.useState("empty")

  // RWO: when type into text box, this gets executed 
  React.useEffect(
    () => {
        console.log('useEffect')
        setCheckTerm2(checkTerm)
        localStorage.setItem('checkTerm2', checkTerm)

    },
    [checkTerm]
  )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Learn React
      <p/>
        </a>
        This wasn't taken from re-factored version <br/>
         useEffect invoked whenever type into checkbox <br/>
        printed to console.log and local storage ( localStorage.setItem)
        
        <List/>
        <Input onInput={handleInput} userInput={checkTerm}/>

      </header>
    </div>
  );
}

const Input = props => {
    const handleEvent = evt => {
      setCheckTerm( evt.target.value)
      props.onInput( evt )

    } 
     const [ checkTerm , setCheckTerm] = React.useState('but nothing')

     return (
        <div>
         <label htmlFor = "Check"> </label>
         <input id="check" type="text" onChange={handleEvent} />
         <p>Checking for <b>{props.userInput}</b></p>

        </div>


     )

  }

 function List(){
  const hello_world = new Sentence('Hello', 'World'  )
  const react_rocks = new Sentence('React', 'Rocks'  )

  return(
        <div>
          {hello_world.getSentence()}
          <hr/>
          {react_rocks.getSentence() }
        </div>


  )


 }

export default App;
