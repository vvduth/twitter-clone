import React from 'react'
import CommentItems from './CommentItems'
interface CommentFeedProps {
    comments?: Record<string , any>[],

}
const CommentFeed:React.FC<CommentFeedProps> = ({comments =[]}) => {
  return (
    <div>{comments?.map((comment) => (
        <CommentItems  key = {comment.id} data={comment}/>
    ))}</div>
  )
}

export default CommentFeed