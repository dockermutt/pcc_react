import React from 'react';

import {useState, useEffect} from 'react'
const App = () => {

  // ------------------   DO NOT MODIFY!!! ------------------------
  // This is your array/list of table of content
  // ---------------------------------------------------------
  const toc = [
    {
      title: 'React Homepage',
      url: 'https://reactjs.org/',
    },
    {
      title: 'Getting Started',
      url: 'https://reactjs.org/docs/getting-started.html',
    },
    {
      title: 'Hello World',
      url: 'https://reactjs.org/docs/hello-world.html',
    },
    {
      title: 'Introducing JSX',
      url: 'https://reactjs.org/docs/introducing-jsx.html',
    },
    {
      title: 'Rendering Elements',
      url: 'https://reactjs.org/docs/rendering-elements.html',
    }
  ];

  function Counter(){


    const alphabet =  ["a","b","c" ,
     "d","e","f", "g", "h","i",
     'j',"k", "l","o","p","q",
     'r',"s","t","u","v","z"]
    

     const a = ["a","b","c" ]
     const b = [ ...a , "d","e","f", "g", "h","i"]
     const c = [...b, 'j',"k", "l","o","p","q"]
     const alpha = [...c , 'r',"s","t","u","v","z"]
     
     const [count, setCount] = useState(0)
     const [react, setReact] = useState('Redux')
     const [ array ,setArray] = useState(alpha)
     const [ random , setRandom] = useState( () => Math.floor(Math.random() * 100) )
     const [dict, setDict] = useState( [ ] )
     
     useEffect(

          () => {
             console.log("Count: " , count)
             localStorage.setItem("localCount" , count)
             localStorage.setItem("react" ,react )
             localStorage.setItem("random", random )
             setDict([ ...dict, alpha[count % alpha.length] ])
             localStorage.setItem("dict", dict)

             console.log("Dict: " + dict )
          },
            [count, react ]
      
           )
      return(
       <div>
       
          the count is: {count}  <br/>
          the text is : {react} <br/>
          the random : {random} <br/>
          the dict : {dict}
          <p/>
          <button onClick = { () => setCount( count +1)}> Increment </button>
          <p/>
          <button onClick = { () => setReact( react + alpha[count% alpha.length])}> Append React </button>
       
       </div>


      )


  }
  

  const [searchToC, setToC] = React.useState('--');
  
 
  const handleSearch =  function( evt ){
        // ... YOUR CODE HERE
        // Set searchToC to text box value
        setToC( evt.target.value)
        console.log( evt.target.value)

        
      }
  

  const searchResults = function() {
       
    return  toc.filter(
                         item => item.title.includes( searchToC)
         )

  }

  return (
    <div>
      <h1>React: Module 6: Hw4 Custom Hook</h1>

      <Counter />
      <Search onSearch={handleSearch} />

      <hr />
      Looking for {searchToC}
      <br/>Results

      <List results={searchResults()} />
       
      
    </div>
  );
};

// ------------------   DO NOT MODIFY!!! ------------------------
// COMPONENT: SEARCH
// This component detects the user input and forwards the event 
// back to the App component to handle.
// ---------------------------------------------------------
const Search = props => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch} />

    
  </div>
);

// ---------------------------------------------------------
// TODO (C)
// COMPONENT: LIST
// This component renders the filtered search results based 
// on the user input.
// ---------------------------------------------------------

const List = props =>{


//      if( props.results.length == 0 ) return (<div>.</div>)
///   USE optional for empty array instead of checking array length
      return props.results?.map(item => (
          <div>                                                                                                                                                          
             <b>{item.title} </b> &nbsp; <a href={item.url}> {item.url}</a>                                                                                              
                                                                                                                                                                         
          </div>
     ));



}







export default App;