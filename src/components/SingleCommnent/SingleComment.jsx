import axios from 'axios'
import React from 'react'
import { Button } from 'react-bootstrap'
import {AiFillDelete} from 'react-icons/ai'

const SingleComment = ({comment,func}) => {
    const url = "https://striveschool-api.herokuapp.com/api/comments/"
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVhNGJlMTUxNWY0MTAwMTQ2OTdhMmYiLCJpYXQiOjE2OTQxOTgzMjYsImV4cCI6MTY5NTQwNzkyNn0.1iZJTfNwWY-3XTgNKSc4CJr-k_Z6m-g_8efsrv0kOAA"
   
    const deleteComment = async () => {
        const elementId = comment._id
        console.log(elementId);
        try {
            const response = await axios.delete(url+elementId,{
                headers: {
                    'Authorization': token
                }})
                
                if (response.status === 200) {
                    func();
                }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <p>{comment.comment} - {comment.rate} - <Button variant="danger" type="button" onClick={deleteComment}><AiFillDelete/></Button></p>
  )
}

export default SingleComment