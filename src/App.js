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
  function moveCard(newList, _id){
    const nextCards = cards.map(c=>{
      if(c._id===_id){
        c.list=newList;
      }
      return c;
    })
    setCards(nextCards);
  }
  function deleteCard(_id){
    const nextCards = cards.filter(c=>c._id!==_id);
    setCards(nextCards);
  }
  useEffect(()=>{
    get(setCards)
  }, []);
  
  return (
    <div className="App">
      
  
  <Nav />
      <Main deleteCard={deleteCard} cardAdded={cardAdded} moveCard={moveCard} cards={cards}/>

  

      
    </div>
  );
}




export default App;
// // code split the modal til you need it!
// const IdentityModal = React.lazy(() => import('react-netlify-identity-widget'))
