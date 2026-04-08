import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [contacts, updateContacts] = useState([])

  const addContact = (contactInfo) => {
    updateContacts([ ...contacts , contactInfo])

  }
  console.log( contacts )


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
        <a 
          className="App-link"
          href="https://www.agirl.codes/complete-guide-build-react-forms-with-usestate-hook">
          Custom Hook (agirlcodes.com)
        </a>
           ***
           <ContactForm
           name= "*"
           email = "roger@pasadena.edu"
           phonenumber="5551212"
           addContact={addContact}
        />
           

        </header>
    
      </div>
  );
}

const ContactForm = props => {
 //const {placeholder, email} = props
/*
 const [contacts, updateContacts] = useState([])

 const addContact = (contactInfo) => {
    updateContacts([ ...contacts , contactInfo])

  }
  console.log( contacts )
*/
       const [contactInfo,setContactInfo] = useState(
//         {name:"Roger Okamoto" , email: "roger@pcc.edu", phonenumber: "4088007646" }
         {name: props.name , email: props.email , phonenumber: props.phonenumber}
       )

        const handleChange = (event =>{
          setContactInfo({...contactInfo , [event.target.name]: event.target.value})

        })

        const handleSubmit = (event ) =>{
          event.preventDefault()
          console.log("submit")

 //        addContact( contactInfo)
          setContactInfo({name:"-" , email:"-" , phonenumber: "2" })
          console.log(contactInfo)

        }
       
        return(
        
        <form   onSubmit={handleSubmit} >
          <div>
          <input
          type="text"
          name="name"
          value = {contactInfo.name}
          />
          </div>
          <div>
          <input
          type="email"
          name="email"
          value={contactInfo.email}
          />
          </div>

          <div>
          <input
          type="number"
          name="phonenumber"
          value = {contactInfo.phonenumber}
          />
          </div>          

          <div>
          <button>Click to Submit Contact</button>
          </div>

        </form >
       )

      }

export default App;
