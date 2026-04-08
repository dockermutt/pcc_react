import logo from './logo.svg';
import './App.css';

import BusinessCard from './BusinessCard.js';
import {useState} from "react"



function ToggleSelector( props ){
   return(

     <nav className = {props.darkMode ? "dark": "light"}>
      <div className="toggler">
        <p className = "toggler--light" > Light</p>
          <div className="toggler--slider" onClick={props.toggleDarkMode}>
             <div className="toggler--slider--circle">
             
             </div>
          </div>
             <p className="toggler--dark"> Dark</p>
          
          </div>

     </nav>


   )


  
}


function App() {

  const[ darkMode , setDarkMode] = useState(false)
  function toggleDarkMode(){
      setDarkMode(mode=>!mode)

  }

  return (
    <>

       <ToggleSelector 
           darkMode={darkMode}
           toggleDarkMode = {toggleDarkMode}
       
       />
       
       <BusinessCard 
           darkMode={darkMode}
           toggleDarkMode = {toggleDarkMode}
       />


    
      </>
       
   );
}

export default App;
