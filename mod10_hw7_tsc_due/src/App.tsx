import React from 'react';
import logo from './logo.svg';
import './App.css';

import {ListItem} from './ListItem'
import AddToDoForm from './AddToDoForm';



const todos: Todo[] = [
  {
       text: "Start React",
       complete: true

  },
  {
        text: "Hand in Module5 HW4 : Search",
        complete: true
   },
  {
       text: "Finish Assignment: Typescript",
       complete: false
  }

]

 const Lister = function( node: Todo[]) {

          const e = node.map(
               (t) => {
                    <ListItem todo={t} />
                }
          )

          return <div>e</div>
  
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h3>TYPESCRIPT HW #7</h3>
        
        <ListItem todo = {todos[0]} />
        <ListItem todo = {todos[1]} />
        
         <hr/>       
         <AddToDoForm/>
         
      </header>
    </div>
  );
}

export default App;
