import { Box } from "@chakra-ui/react";
import FriendCard from "./friend-card";
import { FriendCardType } from "../types";

function ListFriendCard({users}:{users:FriendCardType[]|undefined}) {
  if (!users) {
    return <div></div>;
  }
  return (
    <Box
      width={"100%"} height={"100%"}
    >
      {users?.map((user)=>(<FriendCard friend={user}/>))}
    </Box>
  );
}

export default ListFriendCard;
