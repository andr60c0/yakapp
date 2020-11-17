import React,{useState} from "react";

import {useIdentityContext} from "react-netlify-identity-widget";
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';

export default function Card(props){
    const identity = useIdentityContext()
    const [flipped, setFlipped] = useState(false)
    const classNames = [];
    props.highlight && classNames.push("highlight");
    identity.isLoggedIn && classNames.push("flip-card");
    flipped && classNames.push("flipped")

    function moveCard(newList){
        props.moveCard(newList, props._id)
    }
    return (
        <Panel className={classNames.join(" ")} onClick={()=>setFlipped(!flipped)}>
            <div class="flip-card-inner">
                <article class="flip-card-front">
                    <h2>{props.task}</h2>
                </article>
                {identity && identity.isLoggedIn && (
                    <section class="flip-card-back">
                        {props.list==="todo" && (
                            <Button onClick={()=>moveCard("doing")}size="small" variant="raised" color="primary">Doing</Button>
                        )}
                        {props.list==="doing" && (
                            <>
                                <Button onClick={()=>moveCard("todo")}size="small" variant="raised" color="primary">Todo</Button>
                                <Button onClick={()=>moveCard("done")}size="small" variant="raised" color="primary">Done</Button>
                            </>
                        )}
                        {props.list==="done" && (
                            <Button onClick={()=>moveCard("doing")}size="small" variant="raised" color="primary">Doing</Button>
                        )}
                        <Button onClick={()=>props.deleteCard(props._id)} size="small" variant="raised" color="danger">Delete</Button>
                    </section>
                )}
            </div>
        </Panel>
    )
}
