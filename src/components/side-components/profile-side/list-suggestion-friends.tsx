import React from "react";
import { Box } from "@chakra-ui/react";
import FriendCard from "./suggestion-friend";

function ListFriendCard() {
  return (
    <Box
      width={"100%"} height={"100%"}
    >
      {/* Menambahkan FriendCard sebanyak yang dibutuhkan */}
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
      <FriendCard />
    </Box>
  );
}

export default ListFriendCard;
