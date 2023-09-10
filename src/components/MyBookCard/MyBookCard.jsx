import React, { useState } from 'react'
import { Card,Button } from 'react-bootstrap'
import './MyBookCard.css'
import CommentArea from '../CommentArea/CommentArea'


const MyBookCard = ({genre}) => {
 
  const [selected,setSelected] = useState(false)
  
  const selFunction = () => {
    setSelected(!selected)
  }


/*   const postComments = async () => {
    try {
      const response = await axios.post(url,token)
      getComments()
    } catch (error) {
      console.log(error);
    }
  }
 */


  if(selected) {
    return (     
      <Card onClick={selFunction} className={selected ? 'addBorder' : ''} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={genre.img} />
        <Card.Body>
            <Card.Title>{genre.title}</Card.Title>
            <Card.Text>
                {genre.category}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
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
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default MyBookCard