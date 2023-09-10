import React from 'react'
import SingleComment from '../SingleCommnent/SingleComment'

const CommentList = ({comments,asin,func}) => {
    console.log(comments);
  return (
        <SingleComment comment={comments} asin={asin} func={func}/>
  )
}

export default CommentList