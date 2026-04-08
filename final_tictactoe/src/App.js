import logo from './logo.svg';
import './App.css';

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client'

import {useState} from 'react'


function App() {
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
        </a>
      </header>
    </div>
  );
}
function Game(){

   return(
     <div>
        <div className="game">
        
            <div className="game-board">
             </div>            
        
        </div>
     
     </div>

   )



}
function Board(){
 const [ squares , setSquares] = useState(Array(9).fill("😻"))
//const [ squares , setSquares] = useState(Array(9).fill(null))

const [XFactor, setXFactor]  = useState(true)
//const [winner, setWinner]    = useState( false)

const winner = calculateWinner(squares)
 let status

 if(winner){
  status = "Winner:" + winner
 }else{
  status = "Next player: "  + (XFactor ? "X" : "O")

 }


function occupied(i){

  if(squares[i] == "X" | squares[i] == "O") return true
  return false
}
function handleClick(i){

    console.log('onSquareClick')
    const nextSquares = squares.slice()
    
    if( occupied(i) || calculateWinner( squares) )   return
//    if( occupied(i)) return

    if(XFactor) nextSquares[i] = "X"
    else
     nextSquares[i]="O"
     console.log( nextSquares)    
    
    setXFactor(!XFactor)
    setSquares( nextSquares)

  }

function Square({ value, onSquareClick} ){

  return( <button className="square"
     onClick={onSquareClick}>

     {value}</button>

  )
}


  function Winner(){
     return (
        
        <div><p/>Winner </div>
     )

  }
  
 function handleButton(){
     console.log("Button Clicke")

 }
 const Button1 = (props) => (
    <div>
    
    <input id="search" type="text" onChange={props.onSearch} />
    <p/>
    <button
      onClick = {props.onClick}
    
    >Button1</button>
    </div>


 )

 function Button2({value1, value2, value3 , func}){
 //function Button2( {...props} ){
  function handleButton(){
        console.log("inside Button2")
     }
 //    let [value1, value2, value3, func] = [...props] 


     return (

      <button 
         className="square"
         onClick = {handleButton}
         >
         Button2 + {value1} + {value2} + {value3} + {func(13)}
      </button>

     )


 }
  return(
    <>
    <div className = "board-row">
     <Square value={squares[0]}  onSquareClick= { () => handleClick(0) }/>
    <Square  value={squares[1]}   onSquareClick= { () => handleClick(1) }/>
    <Square  value={squares[2]}  onSquareClick=  { () => handleClick(2) }/>
    </div>

    <div className = "board-row">
    <Square  value={squares[3]} onSquareClick= { () => handleClick(3)}/>
    <Square  value={squares[4]}  onSquareClick={ () => handleClick(4)}/>
    <Square  value={squares[5]}  onSquareClick= { () => handleClick(5)}/>

    </div>

    <div className = "board-row">
    <Square  value={squares[6]}  onSquareClick= { () => handleClick(6)}/>
    <Square  value={squares[7]}  onSquareClick= { () => handleClick(7)}/>
    <Square  value={squares[8]}  onSquareClick= { () => handleClick(8)}/>
    </div>

    <div>
    
    <Button1 onClick={handleButton}/>
    <Button2 onClick={handleButton} value1="1" value2="2"  value3="13" func={(x)=>x*x} />

    <div className="status">{status}</div>
    </div>
    </>

    )

 }


 function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if( (squares[a]!="😻") && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default Board;
