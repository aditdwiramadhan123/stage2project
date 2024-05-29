import React from 'react'
import {Box}  from '@chakra-ui/react'
import PostItem from './post-item'

function ListPostItem() {
  return (
    <Box>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
    </Box>
  )
}

export default ListPostItem