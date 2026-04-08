import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class Columns extends React.Component{

     render(){
       return (
       <React.Fragment>
       
       <td> Hello</td>
       <td> World</td>
       
       </React.Fragment>
       )


     }


}


class Table extends React.Component{

     render() {
        return(

            <table>
              <th> <td>Title</td><td>Name</td>  </th>
              <tr>
                <Columns />
              </tr>
            </table>
        )

     }

  
}


  function App() {
  return (
    <div >
      <Table />
    </div>
  );
}

export default App;
