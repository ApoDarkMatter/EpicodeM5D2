import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'

const CommentArea = ({asin}) => {
  const url = "https://striveschool-api.herokuapp.com/api/comments/"
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVhNGJlMTUxNWY0MTAwMTQ2OTdhMmYiLCJpYXQiOjE2OTQxOTgzMjYsImV4cCI6MTY5NTQwNzkyNn0.1iZJTfNwWY-3XTgNKSc4CJr-k_Z6m-g_8efsrv0kOAA"
  
  const [comment,setComment] = useState([])

  const getComments = async () => {
    try {
      const response = await axios.get(url+asin,{
        headers: {
            'Authorization': token
        }})
        if(response.data.comment!=null) {
          setComment(response.data)
        } else {
          setComment("No Comments Here")
        }
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getComments()
  },[])

    return (
      <>
        <li>{comment.comment} - {comment.rate}</li>
      </>
    )
  }

export default CommentArea