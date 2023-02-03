import React from 'react'
import { Button } from 'react-bootstrap'
import Base from '../base/base'

const DashBoard = () => {
    return (
        
        <Base 
        title = "Welcome to Students App"
        description="click me"
        size="large"
      >
      

        <Button varient="outlined"
        color="primary"
        size="" >
          Home
        </Button>

        </Base>
    
    )
}

export default DashBoard