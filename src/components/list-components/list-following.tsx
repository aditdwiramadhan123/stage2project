import React from "react";
import { Box, Text } from "@chakra-ui/react";
import FriendCard from "../basic-components/friend-card";
import ListFriendCard from "./list-friend";

function ListFollowing() {
  return (
    <Box width={"100%"} height={"100%"}>
      {/* Menambahkan FriendCard sebanyak yang dibutuhkan */}
      <ListFriendCard />
    </Box>
  );
}

export default ListFollowing;
