import {Button, Card } from 'react-bootstrap';
import {data} from "../data";
import { useState } from 'react';
import "./productComponent.css"


export function ProductComponent (){
    const [card, setCard] = useState(data)
    console.log(card)
    return(
        <div className="product-data">
     
        { data.map((values,id) => (
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <p className='price-cart'>Price</p>
        <p className='rating-data'>ratings</p>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
      <div className='btn-area'>
        <Button variant="primary">Go somewhere</Button> {" "}
        <Button variant="secondary">Go somewhere</Button>
        </div>
    </Card>
        
        ) )}
            
            </div>
    )
}