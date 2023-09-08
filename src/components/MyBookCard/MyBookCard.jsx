import React, { useState, useEffect } from 'react'
import { Card,Button } from 'react-bootstrap'
import './MyBookCard.css'
import CommentArea from '../CommentArea/CommentArea'
import axios from 'axios'


const MyBookCard = ({genre}) => {
  const url = "https://striveschool-api.herokuapp.com/api/comments/"
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVhNGJlMTUxNWY0MTAwMTQ2OTdhMmYiLCJpYXQiOjE2OTQxOTgzMjYsImV4cCI6MTY5NTQwNzkyNn0.1iZJTfNwWY-3XTgNKSc4CJr-k_Z6m-g_8efsrv0kOAA"
  
  const [selected,setSelected] = useState(false)
  const [comment,setComment] = useState([])

  const getComments = async () => {
    try {
      const response = await axios.get(url,{
        headers: {
            'Authorization': token
        }})
      setComment(response.data)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getComments()
  },[])

/*   const postComments = async () => {
    try {
      const response = await axios.post(url,token)
      getComments()
    } catch (error) {
      console.log(error);
    }
  }
 */
  const selFunction = () => {
    setSelected(!selected)
  }

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
        <CommentArea comments={"diesci"}/>
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