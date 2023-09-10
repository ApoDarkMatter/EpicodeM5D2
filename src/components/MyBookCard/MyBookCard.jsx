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
      <Card className={selected ? 'addBorder' : ''} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={genre.img} />
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
      <Card onClick={selFunction} className={selected ? 'addBorder' : ''} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={genre.img} />
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