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

  
  

  // Valid phones -------------------------------------
  // (650)513-0514  // no space between area code and #
  // (650) 513-0514  // one space between area code and #
  // 650-513-0514  // dashes
  // 6505130514    // no dashes
  // 650513-0514   // one dash
  // 650-5130514   // one dash

  // and a state setter when the user's input changes. This assignment
  // makes use of the classic destructuring mechanism in JavaScript
  // ---------------------------------------------------------
  const [phoneValid, setPhoneValid] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState('')
  
  
  // ---------------------------------------------------------
  // TODO (A)
  // Your ToC is being filtered here based on the user input. 
  // React's asynchronous event callback that copies the user's input 
  // into the aforementioned state variable in the app.
  // ---------------------------------------------------------
  const handleNumber =  function( evt ){

        let phone=""
        phone= evt.target.value 
        phone = phoneNumber.trim()

        let phoneValid1 = false
        let phoneValid2 = false



        phone = phone.trim()    // remove spaces from start,end

        console.log( phone)
 
// matches  5551232312 555-212-3223 (optional -)
         const regexp1 = /^\d{3}[\-]?\d{3}[\-]?\d{4}$/

// matches mandatory parenthesis () and optional space after closing )
// im sure there's a way in one regex to match double parenthesis 
// but this is easier to have 2 regexp expression
        const regexp2 = /[\(][\d]{3}[\)][\ ]?[-]*[\d]{3}[-]*[\d]{4}/

 
        
        const re1 = new RegExp( regexp1)
        const re2 = new RegExp( regexp2)

        phoneValid1 = re1.test(phoneNumber) 
        phoneValid2 = re2.test(phoneNumber) 


        console.log("phoneValid1: " + phoneValid1)
        console.log("phoneValid2: " + phoneValid2)

        // 7 digits
        const reTest = new RegExp(/[\d]{7}/)
        console.log("phoneTest: " + reTest.test(phone) )

        setPhoneNumber( phone )
  }

  return (
    <div>
      
      <hr />
      <h1>  Phone Number Entered {phoneNumber}  </h1>
      <p/>
      <b>Phone Number</b>

      <Phone onNumberEntered={handleNumber} />

      <br/>Results


       
      
    </div>
  );
};

const Validate = props => {

 


}

function validatePhone(evt){
       console.log("phone:" + evt.target.value)



}
const Phone = props => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onNumberEntered} />
    <p/>
    <button
      onClick = {validatePhone}
      >
      Validate Phone
      </button>
    <Validate/>
  </div>
);

// ---------------------------------------------------------
// TODO (C)
// COMPONENT: LIST
// This component renders the filtered search results based 
// on the user input.
// ---------------------------------------------------------

const List = props =>{
         
      console.log("List")
      console.log( props.results)

      if( props.results.length == 0 ) return (<div>.</div>)

      return props.results.map(item => (
          <div>                                                                                                                                                          
             <b>{item.title} </b> &nbsp; <a href={item.url}> {item.url}</a>                                                                                              
                                                                                                                                                                         
          </div>
     ));



}







export default App;