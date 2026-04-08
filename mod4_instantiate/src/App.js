import logo from './logo.svg';
import './App.css';

import ReactDOM from 'react-dom'

class Messenger {
    constructor(word1, word2){
      this.word1 = word1
      this.word2 = word2
    }

    sentence(){

      return this.word1 + ' ' + this.word2
    }

}

function myTestComponent(){

  return 
    <div>Hello</div>
  
}
const list = [
  {
    title: "React Homepage",
    url: "http://reactjs.org"

  },
  {
     title: 'Getting Started',
     url: 'https://reactjs.org/docs/getting-started.html',

  },


]

function App0() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <List />
        <List2 />        
        <List2 />
        </p>
      </header>
    </div>
  );
}

// Another way with Arrow Function
// NOTE:  don't use {  }
const App = () => 

        <div className="App">
          
            <header className="App-header">
              <p>

              <Arrow0 />              
              <Arrow1 />              
              <List />
              <List2 />        
              </p>

            </header>
        </div>


const Arrow0  = () => {
   
  return <div>Arrow Function</div>

}

const Arrow1 = () =>
       <div> Arrow Function</div>


function List(){
    return list.map ( item => <div><a href={item.url}>{item.title}</a></div>)

}

function List2(){
  const message = new Messenger("Alice " , "Miyamoto")
  const message2 = new Messenger("I Love " , "Jazz")
    return (
      <div>
      {message.sentence()}
      <hr/>
      {message2.sentence()}

      </div>

    )
}

function tick(){
     const element = (
            <h1> It is { new Date().toLocaleDateString() }</h1>
     )

     ReactDOM.render( element , document.getElementById('root'))


}
function List3(){

     setInterval(tick,1000)

  }
export default App;
