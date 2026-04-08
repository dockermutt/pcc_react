import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'

const Child = (props) => {
       return (
          <div>
          <h1> Hello {props.fname} </h1>
          </div>
       )
 }

const  Parent = (props)  => {
     return (
        <Child fname={ props.fname } />

     )

}

const MyEvent = (props)  => {

     const handleClick = (event) => {
      console.log("Button clicked")
    }

    return (
        <button onClick={handleClick}>
           Click M
        </button>

    )
}

const MyCheckBox = (props) => {
   const handleEvent = (event) => {
          console.log( event )

   }

   return(
     <input id ="check" type="text" onChange={handleEvent}/>

   )

}
function App() {
  return (
    <div>
    <Parent fname="Melania" />
     <MyEvent/>
      <p/>
     <MyCheckBox/>
    </div>
  );

}

export default App;
