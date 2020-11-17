import React from "react";

import Panel from 'muicss/lib/react/panel';

import Card from "./Card";
import AddCardForm from "./AddCardForm";
export default function ListContainer(props){
  const form = props.showForm ? <AddCardForm cardAdded={props.cardAdded} />:null
    return (
      <Panel>
        <section>
          <h1>{props.name}</h1>
          
          {props.cards.map(card=>{
            return <Card deleteCard={props.deleteCard} moveCard={props.moveCard} key={card._id} {...card} />
          })}
          {form}
          

        </section>
      </Panel>
    )
  }