import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom"


function Header(){

  return(

    <h1>Header</h1>
  )

}


function NotesListPage (){

  return(

    <h1>NotesListPage</h1>
  )

}

function NotePage (props){
  console.log("PROPS: ", props)
  return(
   <>
    <h1>NotePage --- {props.match.params.id} </h1>
    <br/>this <b>#{props.match.params.id}</b> indicates different informaton
    <br/>can be returned, such as information for student  #{props.match.params.id} 
    <br/> name,address,classes,etc.
    </>
    )

}
function App() {
  return (
    <div className="App">
     <h1>Home</h1>
    </div>
  );
}

export default App;
