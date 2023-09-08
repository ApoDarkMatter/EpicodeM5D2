import React, { Component, useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import './MyBookCard.css'


const MyBookCard = ({genre}) => {
  const [border,setBorder] = useState(false)

  const addBorder = () => {
    setBorder(!border);
  }

  return (
    <Card onClick={addBorder} className={border ? 'addBorder' : ''} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={genre.img} />
      <Card.Body>
          <Card.Title>{genre.title}</Card.Title>
          <Card.Text>
              {genre.category}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default MyBookCard