import React from 'react';

const App = () => {


  // ------------------   STATE VARIABLES ------------------------
  // phoneNumber:  the phone # as it's typed in
  // valid:  Keeps track if the current phone# is valid
  // result: Text to output from button click
  // use state variables, to render on change
  // ---------------------------------------------------------
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [valid, setValid] = React.useState(false)
  const [result, setResult] = React.useState("")


  // React's asynchronous event callback 
  // this is called for every phone digit typed 
  // ---------------------------------------------------------
  const handleValidation =  function( evt ){
        
        // Set phoneNumber  text box value
        // Maybe could avoid local phone 
        // and just use setPhoneNumber
        // but need to move on
        let phone = evt.target.value     
        let phoneValid1 = false
        let phoneValid2 = false

        setPhoneNumber( evt.target.value)
        console.log( evt.target.value)

//      Manipulate the phone (internally) to
//      remove leading and trailing spaces
        phone = phone.trim()

//      Two regular expression to handle the 6 cases
// matches  5551232312 555-212-3223 (any number of dashes)
//  [\-]* means any number of dashes(escaping the dash)
//  \d{4} exactly 4 digits 
//  $  Need the $ sign to terminate string after the 4 digits
     const regexp1 = /^\d{3}[\-]*\d{3}[\-]*\d{4}$/

// matches pair of parenthesis () and optional space(s) after closing )
// perhaps can use one regex 
// but this is easier to have 2 regexp expressions
// [\(]  one parenthesis (\ escapes the parenthesis)
// [\ ]*  multiple spaces (\ escapes the space)
// $ Need the dollar sign at the end to terminate after last 4 digits
        const regexp2 = /[\(][\d]{3}[\)][\ ]*[-]*[\d]{3}[-]*[\d]{4}$/
      
        const re1 = new RegExp( regexp1)
        const re2 = new RegExp( regexp2)

        phoneValid1 = re1.test(phone) 
        phoneValid2 = re2.test(phone) 

        // KEEP debugging info
        console.log("regexp1: " + phoneValid1)
        console.log("regexp2: " + phoneValid2)

        // OR the two regular expressions results .. just need one to be true
        setValid( phoneValid1 | phoneValid2)
        console.log(phone )
       
        // the result lingers after Validate button clicked
        // so set to empty string to re-render
        setResult("")
        
      }
  
  // ---------------------------------------------------------
  // called from button 
  // ---------------------------------------------------------
  // Visual confirmaton on phone validation
  const buttonClick = function() {

      setResult( valid ? "Valid Phone # " :  "Invalid phone #")
  }
  
  return (
    <div>
      

      <hr />
      <h1>Phone # {phoneNumber} 
      {/*  up or down as we type  */}
      <span style={{fontSize:20}}> {valid ? "👍" : "👎" }</span>
      </h1>
      <PhoneCheck onPhone={handleValidation} />

      <b>{result}  </b>
      <p/>
       <button
        onClick={buttonClick}
        >
         Validate
       </button>
      
    </div>
  );
};


const PhoneCheck = props => (
  <div>
    <label htmlFor="search">Phone #: </label>
    <input id="search" type="text" onChange={props.onPhone} />

    
  </div>
);









export default App;