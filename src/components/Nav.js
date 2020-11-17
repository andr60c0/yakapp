import React from "react";
import { IdentityModal, useIdentityContext } from 'react-netlify-identity-widget'
import Button from 'muicss/lib/react/button';
export default function Nav(){
    const identity = useIdentityContext()
    console.log(identity)
    const [dialog, setDialog] = React.useState(false)
    return (
      <nav className="Nav">
        
    <Button variant="raised" color="accent" onClick={() => setDialog(true)}>{identity && identity.isLoggedIn ? "Log Out":"Log In"}</Button>
        
        <IdentityModal
          showDialog={dialog}
          onCloseDialog={() => setDialog(false)}
          onLogin={(user) => setDialog(false)}
          //onSignup={(user) => console.log('welcome ', user?.user_metadata)}
          //onLogout={() => console.log('bye ', name)}
        />
      </nav>
    )
  }