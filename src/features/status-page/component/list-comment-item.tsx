import React from "react";
import { Box } from "@chakra-ui/react";
import CommentItem from "./comment-items";
import { CommentType,CommentTypeFromDB } from "../../thread/types/get-comment-types";


function ListComment({commentsDB}:{commentsDB:CommentTypeFromDB[]|undefined}) {
  const comments = commentsDB?.map((comment)=>{
    return comment.commentData
  })
  return (
    <Box>
    {comments?.map((comment:CommentType) => (
      <CommentItem key={comment.id} comment={comment} />
    ))}
  </Box>
  );
}

export default ListComment;
