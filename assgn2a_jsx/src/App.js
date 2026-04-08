
import './App.css';
import React,{Component} from 'react'
import * as ReactDOM from 'react-dom'

/*
    CS194 Sp2023 Assignment #2  Roger Okamoto
    MAP array using root

*/

function App() {
  const react = [ 
    "NPM", "Node.js", "JXS", "Babel","Transpiler","Props", 
    "Single Page Application"
  ]

  const r2 = react.map(
    function(element,index,array){
     // extra values in case needed
     // v[index] = element
     // array is the original react array
     return <li>{element}</li>

    })

    const root = ReactDOM.createRoot(
          document.getElementById('root')
    )

    const element = (
        <div>
        <h1>PCC {new Date().toLocaleDateString() }</h1>
        <b> React Full Stack Components </b>
        <ol>
        {r2}
        </ol>
        </div>
    )

    root.render( element  )

  return (
    <div className="App">
        <root></root>
    </div>
  );
}

export default App;
