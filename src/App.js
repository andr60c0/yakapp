import React, {useState, useEffect} from 'react'

import 'react-netlify-identity-widget/styles.css'
import "@reach/tabs/styles.css"

import Nav from "./components/Nav";
import Main from "./components/Main";

import {get, post} from "./modules/rest";

import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  function cardAdded(task){
  
    const payload = {
      task,
      highlight:false,
      list:"todo"
    }
    post(payload, cards, setCards);
  }
  useEffect(()=>{
    get(setCards)
  }, []);
  
  return (
    <div className="App">
      
  
  <Nav />
      <Main cardAdded={cardAdded} cards={cards}/>

  

      
    </div>
  );
}




export default App;
// // code split the modal til you need it!
// const IdentityModal = React.lazy(() => import('react-netlify-identity-widget'))
