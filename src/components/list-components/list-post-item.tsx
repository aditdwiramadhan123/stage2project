import React from "react";
import { Box } from "@chakra-ui/react";
import PostItem from "../basic-components/post-item";
import postList from "../../data/post";

function ListPostItem() {
  return (
    <Box>
      {postList.map((post) => (
        <PostItem post={post} />
      ))}
    </Box>
  );
}

export default ListPostItem;
