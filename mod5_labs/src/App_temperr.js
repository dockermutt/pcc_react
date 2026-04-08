import React from 'react';


// This is your callback from Search input. You will
// take the event and print its value to the console 
// log
/*
   use either handleEvent to print to console
   OR
   handleSearch to print to browse
   NOTE: that only one can be active 

*/
const handleEvent = (evt) => {
//  YOUR_CODE_HERE  
   console.log( evt.target.value)
 
}

const App = () => {

  const handleEvent = (props) => {
    //  YOUR_CODE_HERE  
       
       setSearchValue( props.target.value)

      }
  
  const [ searchValue , setSearchValue] = React.useState("google")


  return (
    <div>
      <h1>React: A JavaScript library</h1>

      {/* Creating a search component with a props */}
      <Search onSearch={handleEvent} />
      <p> Checking for <b>{searchValue}</b></p>
    </div>
  );
};

const Search = props => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.handleEvent}/>
  </div>
);

export default App;