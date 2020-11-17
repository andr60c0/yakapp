import React from "react";

import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';

export default function Card(props){
    return (
        <Panel>
             <div  className={props.highlight ? "highlight flip-card":"flip-card"}>
  <div class="flip-card-inner">
    <div class="flip-card-front">
        <article>
            <h2>{props.task}</h2>
        </article>
    </div>
    <div class="flip-card-back">
        <Button variant="raised" color="accent">Save</Button>
        <Button variant="raised" color="accent">Save</Button>
        <Button variant="raised" color="accent">Save</Button>
    </div>
  </div>
</div> 
            
        </Panel>
    )
}
