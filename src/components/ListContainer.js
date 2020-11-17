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
            return <Card key={card._id} task={card.task} highlight={card.highlight} list={card.list} />
          })}
          {form}
          

        </section>
      </Panel>
    )
  }