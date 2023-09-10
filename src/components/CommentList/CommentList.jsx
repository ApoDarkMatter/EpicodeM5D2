import React from 'react'
import SingleComment from '../SingleCommnent/SingleComment'

const CommentList = ({comments}) => {
    console.log(comments);
  return (
        <SingleComment comment={comments}/>
  )
}

export default CommentList