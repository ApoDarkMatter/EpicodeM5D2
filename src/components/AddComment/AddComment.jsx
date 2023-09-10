import axios from 'axios'
import React, {useState} from 'react'
import { Container, Button } from 'react-bootstrap'


const AddComment = ({asin,getFunc}) => {
    const url = "https://striveschool-api.herokuapp.com/api/comments"
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVhNGJlMTUxNWY0MTAwMTQ2OTdhMmYiLCJpYXQiOjE2OTQxOTgzMjYsImV4cCI6MTY5NTQwNzkyNn0.1iZJTfNwWY-3XTgNKSc4CJr-k_Z6m-g_8efsrv0kOAA"

    const [newComment,setNewComment] = useState("")
    const [newRate,setNewRate] = useState("")

    const addComment = async () => {
        if(newComment === "" || newRate === "") {
            alert('You must enter a comment')
        } else {
            try {
                const response = await axios.post(url,
                    {
                        comment: newComment,
                        rate: newRate,
                        elementId: asin
                    },
                    {
                        headers: {
                            'Content-type': 'application/json',
                            Authorization: token
                        }
                    })
                    if (response.status === 200) {
                        getFunc();
                        setNewComment("");
                        setNewRate("");
                        alert("Commento inviato con successo!");
                      } else {
                        alert("Errore nel recupero dei commenti");
                      }
              } catch (error) {
                  console.log(error);
              }
        }
    }

    return (
        <Container>
            <input type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add Comment"
            ></input>
            <input type="number"
                value={newRate}
                onChange={(rate) => setNewRate(rate.target.value)}
                placeholder="Add Rate"
            ></input>
            <Button type="button" onClick={addComment}>Add Comment</Button>
        </Container>
    )
}

export default AddComment