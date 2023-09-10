import React from 'react'

const SingleComment = ({comment}) => {
  return (
    <li>{comment.comment} - {comment.rate}</li>
  )
}

export default SingleComment