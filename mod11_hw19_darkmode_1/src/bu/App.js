import logo from './logo.svg';
import './App.css';

import {useState} from "react"


function Info (props) {

  return (
     <div>
       <img src ={"/images/"+props.image} />
       <h3>{props.name} <br/>
          {props.profession}
        </h3>
     </div>

  )

}

function About (props) {
  return (
    <div>
       <b>{props.text}</b>
    </div>

 )

  
}

function Funfacts (props) {

  return (
    <div>
      <h3> Funfacts</h3>
      <b>{props.text}</b>
    </div>

 )

  
}

function Contact (props) {

  return (
    <div>
      <h3> Contact me:</h3>
      <button>
      <a href= {"mailto:"+props.contact}>
      <img src ={"/images/"+props.email} />
      </a>
      </button>

      <button>

      <a href={props.url}>
      <img src ={"/images/"+props.imdb} />
      </a>
      </button>

      </div>

 )

  
}

function ToggleSelector(){
   return(

     <nav>
      <div className="toggler">
        <p className = "toggler--light" > Light</p>
          <div className="toggler--slider">
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
    <div className="dark">

       <ToggleSelector 
           darkMode={darkMode}
           toggleDarkMode = {toggleDarkMode}
       
       />
       <Info
         image = "./johnchu.png"
         name = "John M Chu"
         profession = "Movie Director"
       />
       
       <About
         text = "John Chu directed Crazy Rich Asians, the first film by a
         major Hollywood studio to feature a majority cast of Asian descent in a modern
         setting since the Joy Luck Club in 1993. Other films he directed include 
         Step Up 2: The Streets, Step UP 3D, Jem and the Holograms and the Heights(2021)
         "
       />
       <Funfacts
         text = "
         Chu was born in Palo Alto, California and grew up in nearby Los Altos. He attended Pinewood School 
         from kindergarten through 12th grade.Chu is the youngest of five children.
         He began making movies in fifth grade, when his mother gifted him a video camera to document their 
         family vacations. Chu instead began making home movies starring his siblings.

His mother, Ruth Chu, was born in Taiwan; his father, Lawrence Chu, was born in Sichuan.
His family owns the restaurant called Chef Chu's.

Chu obtained a BFA in Film & Television Production from University of Southern California in 2003.
 He won the Princess Grace Award, the Kodak Student Filmmaker Award,[10] the Dore Schary Award presented by the Anti-Defamation League, the Jack Nicholson directing award, and was recognized as an honoree for the IFP/West program Project: Involve.[citation needed]
         
         
         "
       />
       <Contact
        email = "./email_button.png"
        contact="chu.jonm@pasadena.edu"
        imdb = "./imdb.png"
        contact = "johnchu@pasadena.edu"
        url = "https://www.imdb.com/name/nm0160840/"
       />
    
       </div>
       
   );
}

export default App;
