import React, {useState} from 'react';


// This is your callback from Search input. You will
// take the event and print its value to the console 
// log

          


const App = () => {
  const [searchTerm, setSearchTerm] = useState('*')
  const [name , setName] = useState("PCC")
  
  const handleSearch = (evt) =>{
    evt.preventDefault()
    console.log("-searching for  " + evt.target.value)
    setSearchTerm( evt.target.value)
  
  }

  const handleInput = (evt) => {


  }

  return (
    <div>
      <h1>React: A JavaScript library( Completed)</h1>
      <p/>
        Type into box and a eventhandler ( handleSearch)
        prints the textbox contents to the console
      <p/>
       Added code: useState and List box  show search value
       <br/>evt.preventDefault()
      <p/> 

      

      // Creating a search component with a props
      <Search onSearch={handleSearch} />
      <p/>
      <List  search={searchTerm}/>
      <p/>
      <Save />


      <form className = "form">
      <div class="field">
         <label for="name-1"> Update Name </label>
           <div class="control">
           <input type="text" value={name} name="name1" onChange={handleInput} class="input" />
           </div>
            
     

       </div>
 
 
 </form>
    </div>
  );
};

const Search = props => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch}/>
  </div>
);

const List = props => (
      <div>
       <b>{props.search} </b> 
      </div>
)  

const Save = props => (
    <React.Fragment>
      <button>Save</button>
    
    </React.Fragment>


 )

 const NameBox = props => (

        <div className = "box">
         <h3>
            Hello, <span>{props.name} </span>
         </h3>
        </div>


 )

export default App;