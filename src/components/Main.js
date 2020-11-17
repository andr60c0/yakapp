import React from "react";
import ListContainer from "./ListContainer";


export default function Main(props){
  const todoList = props.cards.filter(c=>c.list==="todo");
  const doingList = props.cards.filter(c=>c.list==="doing");
  const doneList = props.cards.filter(c=>c.list==="done")
    return (
      <main>
        <ListContainer deleteCard={props.deleteCard} moveCard={props.moveCard} cardAdded={props.cardAdded} cards={todoList} showForm={true} name="Todo" />
        <ListContainer deleteCard={props.deleteCard} moveCard={props.moveCard} cardAdded={props.cardAdded} cards={doingList} name="Doing" />
        <ListContainer deleteCard={props.deleteCard} moveCard={props.moveCard} cardAdded={props.cardAdded} cards={doneList} name="Done" />
        
      </main>
    )
  }