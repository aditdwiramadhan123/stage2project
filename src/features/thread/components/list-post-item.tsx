import React from "react";
import { Box } from "@chakra-ui/react";
import PostItem from "./post-item";
import { ThreadType } from "../types/get-thread-types";
import { ThreadTypeFromDB } from "../types/get-thread-types";


function ListPostItem({threadsDB}:{threadsDB:ThreadTypeFromDB[]|undefined}) {
  const threads = threadsDB?.map((thread)=>{
    return thread.threadData
  })
  return (
    <Box>
      {threads?.map((thread: ThreadType) => (
        <PostItem key={thread.id} post={thread} />
      ))}
    </Box>
  );
}

export default ListPostItem;