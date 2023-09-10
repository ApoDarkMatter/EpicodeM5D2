import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import CommentList from '../CommentList/CommentList'
import AddComment from '../AddComment/AddComment'

const CommentArea = ({asin}) => {
  const url = "https://striveschool-api.herokuapp.com/api/comments/"
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVhNGJlMTUxNWY0MTAwMTQ2OTdhMmYiLCJpYXQiOjE2OTQxOTgzMjYsImV4cCI6MTY5NTQwNzkyNn0.1iZJTfNwWY-3XTgNKSc4CJr-k_Z6m-g_8efsrv0kOAA"
  
  const [comment,setComment] = useState([])
  const [availableComment,setAvailableComment] = useState(false)

  const getComments = async () => {
    try {
      const response = await axios.get(url+asin,{
        headers: {
            'Authorization': token
        }})
        
        if(response.data === null) {
          setAvailableComment(false)
        } else {
          setComment(response.data)
          setAvailableComment(true)
        }
          
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getComments()
  },[])

    if(availableComment) {
      return (
        <>
          <CommentList comments={comment}/>
          <AddComment asin={asin}/>
        </>
      )
    } else {
      return (
        <>
          <p>Nessun Commnento</p>
          <AddComment asin={asin} getFunc={getComments}/>
        </>
      )
    }
  }

export default CommentArea