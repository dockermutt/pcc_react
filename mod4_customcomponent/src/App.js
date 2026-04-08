import logo from './logo.svg';
import './App.css';

import Oregon from './Oregon.js'

import React, {Component} from 'react'

class California extends Component{
    render(){
       return (
           <div>
            Caifornia
           </div>

       )
    }

}

function Washington(props){
         return(
                <div>
                {props.fname} Washington
                </div>

         )


}

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
         <California/>
         <Washington fname="George" />
         <Oregon fname= "Ducks"  />

      </header>
    </div>
  );
}

export default App;
