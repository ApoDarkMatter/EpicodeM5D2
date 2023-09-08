import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap'

export class MyBookCard extends Component {
  render() {
    const genre = this.props.genre
    return (
        <Card style={{ width: '18rem' }}>
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
}

export default MyBookCard