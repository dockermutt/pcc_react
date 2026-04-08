import React from 'react';

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

  let toc2 = [ ]
  

  // ------------------   DO NOT MODIFY!!! ------------------------
  // React's useState hook containing the user's current input state
  // and a state setter when the user's input changes. This assignment
  // makes use of the classic destructuring mechanism in JavaScript
  // ---------------------------------------------------------
  const [searchToC, setToC] = React.useState('--');
  const [filteredToC, setFilteredToC] = React.useState( [] )

  // ---------------------------------------------------------
  // TODO (A)
  // Your ToC is being filtered here based on the user input. 
  // React's asynchronous event callback that copies the user's input 
  // into the aforementioned state variable in the app.
  // ---------------------------------------------------------
  const handleSearch =  function( evt ){
        // ... YOUR CODE HERE
        // Set searchToC to text box value
        setToC( evt.target.value)
   //   console.log( searchToC)

        let bfilter = toc.filter(
          item => item.title.includes( searchToC)
        )
  
        toc2 = toc.filter(
          item => item.title.includes( searchToC)
        )     

        setFilteredToC( toc2)

      }
  
  // ---------------------------------------------------------
  // TODO (B)
  // Your ToC is being filtered based on the user input. HINT: 
  // You may use the JavaScript's filter() method on array.
  // ---------------------------------------------------------
  const searchResults = function() {

      console.log("search for {searchToC}")
    return (
          console.log( handleSearch()  )
          

    )
  }// ... YOUR CODE HERE

  return (
    <div>
      <h1>React: A JavaScript library</h1>

      <Search onSearch={handleSearch} />

      <hr />
      Looking for {searchToC}
      <br/>Results

       <List results={filteredToC} />
      
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

const List = props =>
  props.results.map(item => (
    <div>                                                                                                                                                          
       <b>{item.title} </b> &nbsp; <a href={item.url}> {item.url}</a>                                                                                              
                                                                                                                                                                   
    </div>
  ));





export default App;