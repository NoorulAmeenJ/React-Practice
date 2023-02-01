import {Button, Card } from 'react-bootstrap';
import {data} from "../data/data";
import { useState } from 'react';
import "./productComponent.css"


export function ProductComponent (){
    const [card, setCard] = useState(data)
    const [item, setItem] = useState(0)
    
    return(
        <div>
             <div>Cart {item}</div>
      
        <div className="product-data">
          
        { data.map((prod,idx) => ( 
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.prodImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <p className='price-cart'>{prod.prodPrice}</p>
        <p className='rating-data'>{prod.prodRating}</p>
        <Card.Text>{prod.prodDescription}</Card.Text>
      
      </Card.Body>
      <div className='btn-area'>
        <Button variant="primary">Add</Button> {" "}
        <Button variant="secondary">Remove</Button>
        </div>
    </Card>
        
        ) )}
            
            </div>
            </div>
    )
}