import React from "react";
import { Box } from "@chakra-ui/react";
import CommentItem from "../basic-components/comment-items";
import commentList from "../../data/comment";

function ListComment() {
  return (
    <Box>
    {commentList.map((comment) => (
      <CommentItem comment={comment} />
    ))}
  </Box>
  );
}

export default ListComment;
