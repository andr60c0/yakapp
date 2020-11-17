import React from "react";
import Panel from 'muicss/lib/react/panel';
import ListContainer from "./ListContainer";


export default function Main(props){
  const todoList = props.cards.filter(c=>c.list==="todo");
  const doingList = props.cards.filter(c=>c.list==="doing");
  const doneList = props.cards.filter(c=>c.list==="done")
    return (
      <main>
        <Panel><ListContainer cardAdded={props.cardAdded} cards={todoList} showForm={true} name="Todo" /></Panel>
        <Panel><ListContainer cardAdded={props.cardAdded} cards={doingList} name="Doing" /></Panel>
        <Panel><ListContainer cardAdded={props.cardAdded} cards={doneList} name="Done" /></Panel>
        
      </main>
    )
  }