import React, {useState} from "react";
import { useIdentityContext } from 'react-netlify-identity-widget'

import Button from 'muicss/lib/react/button';
import Input from 'muicss/lib/react/input';

export default function AddCardForm(props){
    const identity = useIdentityContext()
    const [task, setTask] = useState("");

    function clicked(e){
        e.preventDefault();
        props.cardAdded(task)
    }
    if(!identity || !identity.isLoggedIn){
        return null;
    }
    return (
        <form onSubmit={clicked}>
          
            
            <Input name="task" type="text" value={task} onChange={e=>setTask(e.target.value)} label="Input 1" floatingLabel={true} />
            <Button variant="raised" color="accent">Save</Button>
          
        </form>
    )
}
