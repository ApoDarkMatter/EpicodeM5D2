import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import './MyBookCard.css'
import CommentArea from '../CommentArea/CommentArea'


const MyBookCard = ({genre}) => {
 
  const [selected,setSelected] = useState(false)
  
  const selFunction = () => {
    setSelected(!selected)
  }

  if(selected) {
    return (     
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={genre.img} onClick={selFunction} className={selected ? 'addBorder' : ''}/>
        <Card.Body>
            <Card.Title>{genre.title}</Card.Title>
            <Card.Text>
                {genre.category}
            </Card.Text>
        </Card.Body>
        <CommentArea asin={genre.asin}/>
      </Card>
    )
  } else {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={genre.img} onClick={selFunction} className={selected ? 'addBorder' : ''}/>
        <Card.Body>
            <Card.Title>{genre.title}</Card.Title>
            <Card.Text>
                {genre.category}
            </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default MyBookCard