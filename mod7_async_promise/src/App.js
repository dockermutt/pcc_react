import logo from './logo.svg';
import './App.css';
import React from 'react'

//import {useEffect, useState} from 'react'

const ar = [
    {
      title: "sctennis",
      url: "http://sctennisclub.org"
    },
    {
      title: "sctennis",
      url: "http://sctennisclub.org"
    }




]
const bookmarks = [

  {
    title: 'React',
    url: "https://reactjs.org"
 },
 {
    title: 'Getting started',
    url: "https://reactjs.org"

 },
 {
  title: 'React',
  url: "https://reactjs.org"
 },
 {
  title: 'Getting started',
  url: "https://reactjs.org"
}
 ]


const initialBookmarks = [
  {  
    title: "Initial Bookmarks",
    url: "http://localhost:3000"

  },
  
  {
    title: 'React',
    url: "https://reactjs.org"
 },
 {
    title: 'Getting started',
    url: "https://reactjs.org"

 }

]

const delayBookmarks =[

  {
    title: "DELAY",
    url: "www.pasadena.edu"

  }

]
/*
const getAsyncBookmarks = () => 
   Promise.resolve(
    {data: { x : ar}}
   )
*/

   const getAsyncBookmarks = () => 
   new Promise( resolve =>
           setTimeout(
           () => resolve({data: {x: initialBookmarks} }  ),
             3000

           )
    )



//  this also works
let getAsyncBookmarks20 = () => new Promise(

      async function( resolve,reject){
          // this is just returned
          resolve({ data: {x: delayBookmarks}  })

      }

   )

   // Put in a time out delay (need to have arrow function)
   let getAsyncBookmarks30 = () => new Promise(

    async function( resolve,reject){
        // timeout takes arrow function
        setTimeout(
        ()=>resolve({ data: {x: delayBookmarks}  })
        , 3000
       )
    }

 )

function App() {

  const[ bookmarks, setBookmarks] = React.useState([ ])

  React.useEffect(
      () => {
              getAsyncBookmarks20().then( result => {
                   setBookmarks( result.data.x )
              })
      },
      []
  )// useEffect
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <List links={ar}/>
        <p/>LIST2 
        <List2 links = {bookmarks} />
      </header>
    </div>
  );
}

function List({links}){

 return links.map( item => 
           <div><a href={item.url}>{item.title}  </a>  </div>
        )
}

function List2(props){

  return props.links.map( item => 
            <div><a href={item.url}>{item.title}  </a>  </div>
         )
 }
 
export default App;
