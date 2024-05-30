import React from "react";
import { Box } from "@chakra-ui/react";
import FriendCard from "../basic-components/friend-card";
import listFriend from "../../data/friend";

function ListFriendCard() {
  return (
    <Box
      width={"100%"} height={"100%"}
    >
      {/* Menambahkan FriendCard sebanyak yang dibutuhkan */}
      {listFriend.map((friend)=>(<FriendCard friend={friend}/>))}
    </Box>
  );
}

export default ListFriendCard;
