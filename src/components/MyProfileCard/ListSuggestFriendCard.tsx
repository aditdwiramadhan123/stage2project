import React from "react";
import { Card, Text, Box } from "@chakra-ui/react";
import FriendCard from "./SuggestFriendCard";

function ListFriendCard() {
  return (
    <Card
      bg={"#3a4b5c"}
      padding={3}
      paddingBottom={0}
      height={"95%"}
      width={"95%"}
    >
      <Text color="white" fontSize={15} fontWeight={500} marginY={2}>
        Suggest for you
      </Text>
      <Box
        maxHeight={"70%"}
        overflowY={"scroll"}
        css={{
          "&::-webkit-scrollbar": {
            width: "0px", // Lebar scrollbar
          }
        }}
      >
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </Box>
    </Card>
  );
}

export default ListFriendCard;
