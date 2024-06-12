import React from "react";
import { Box } from "@chakra-ui/react";
import PostItem from "./post-item";
import useGetThreads from "../hook/use-get-thread";
import { ThreadType } from "../types/get-thread-types";


function ListPostItem() {
  const {threads:threadsDB} = useGetThreads()
  const threads = threadsDB?.map((thread)=>{
    return thread.threadData
  })

  // const comments = threadsDB?.map((thread)=>{
  //   return thread.commentsData
  // })


  console.log("ini data thread",threads)
  return (
    <Box>
      {threads?.map((thread: ThreadType) => (
        <PostItem key={thread.id} post={thread} />
      ))}
    </Box>
  );
}

export default ListPostItem;
