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

  const handleInput2 = evt => {
    setCheckTerm2( evt.target.value)
    console.log( evt.target.value)

}

// Reusable component
  const handleInput3 = evt => {
    setCheckTerm3( evt.target.value)
    console.log( evt.target.value)

}

const [ checkTerm , setCheckTerm] = React.useState("nothing( App)")
  const [ checkTerm2 , setCheckTerm2] = React.useState("empty (2) ")
  const [ checkTerm3 , setCheckTerm3] = React.useState("re-usable component")


  // RWO: when type into text box, this gets executed 
  React.useEffect(
    () => {
        console.log('useEffect')
        setCheckTerm(checkTerm)
        setCheckTerm2(checkTerm2)
        setCheckTerm3(checkTerm3)

        localStorage.setItem('checkTerm',checkTerm)
        localStorage.setItem('checkTerm2', checkTerm2)
        localStorage.setItem('checkTerm3',checkTerm3)

    },
    [checkTerm, checkTerm2 , checkTerm3]
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
         convert into own re-usable Component <br/>
         that takes parameters
        
        <List/>
        <Input onInput={handleInput} userInput={checkTerm}/>
        <br/>
        <h3>Copy of above</h3>
        <Input2 onInput={handleInput2} userInput={checkTerm2} />

        <b>Re-usable Component</b>
        <Input3 
         id="Check3"
         value = "Checking:"
         onInput = {handleInput3} 
         userInput={checkTerm3} 
         />

      </header>
    </div>
  );
}

const Input3 = ({id , value, type="text" , onInput, userInput}) => {
// Interal event handler
  const handleEvent = evt => {
    setCheckTerm3( evt.target.value)
    onInput( evt )  // was props.onInput

  } 

  const [ checkTerm3 , setCheckTerm3] = React.useState('checkterm3')

 return (
     <div>
      <label htmlFor = {id}> {value} </label>
      <input id ="check3" type={type} onChange={handleEvent} />
      <p>Checking3 for <b>{userInput}</b></p>
     
     </div>


 )

}

const Input2 = props => {
  const handleEvent = evt => {
    setCheckTerm2( evt.target.value)
    props.onInput( evt )

  }     

  const [ checkTerm2 , setCheckTerm2] = React.useState('checkterm2')

  return (
     <div>
      <label htmlFor = "Check2"> </label>
      <input id="check2" type="text" onChange={handleEvent} />
      <p>Checking2 for <b>{props.userInput}</b></p>

     </div>


  )

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
