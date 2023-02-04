import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

function Base({title, description, children}) {
    const history = useHistory()
    return (
        <div className="main-component">
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <Button color="inherit" onClick={()=>history.push("/dashboard")}>DashBoard</Button>
          <Button color="inherit" onClick={()=>history.push("/details")}>Student list </Button>
          <Button color="inherit" onClick={()=>history.push("/register")}>Login</Button>
        </Toolbar>
      </AppBar>
    
            <header><h1 className="heading">{title}</h1></header>
            <main className="main-segment">
                <h2>{description}</h2>
        




                <div className="children-segment">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Base ;

