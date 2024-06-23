import { Box } from "@chakra-ui/react";
import ListFriendCard from "../../features/friend-card/components/list-friend";

function ListFollower() {
  return (
    <Box
      width={"100%"} height={"100%"}
    >
      <ListFriendCard/>
      {/* Menambahkan FriendCard sebanyak yang dibutuhkan */}
      
    </Box>
  );
}

export default ListFollower;
