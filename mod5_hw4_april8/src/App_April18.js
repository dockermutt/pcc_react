import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from 'react'

function App() {

  const [ value, setValue] = useState( 'React')
   
  const useCustomHook = (_key , _initial) => {
    
    // if _key doesn't exist, set to _initial
    const [ value , setValue] = useState(
        localStorage.getItem( _key )  || _initial

    )

    const rFunction = () =>  {

         console.log("rFunction")
    }    
    
    console.log( value)


    return [ value, rFunction]  
  }

  function TestCustomHook(){
       
       const [ college, setCollege] = useCustomHook('jrcolle', '_PCC2')
       return (
          <div>
          {college}
          </div>

       )
  }

  const handleInput = evt => {
    
    console.log(evt.target.value);
  };

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
          Learn React Hook
        </a>
        <TestCustomHook/>

           Check: 
           <Input onInput = {handleInput}  />

      </header>
    </div>
  );
}


const Input = props => {  
  return (
    <div>
      <label htmlFor="Check">Check: </label>
      <input id="check" type="text" value={props.userInput} onChange={props.onInput} />
      <p>Checking for <b>{props.userInput}</b></p>
    </div>
  );
}
export default App;
