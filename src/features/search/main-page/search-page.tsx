import React from "react";
import SearchInput from "../components/input-search";
import { Box } from "@chakra-ui/react";
import ListFriendCard from "../../friend-card/components/list-friend-common";
import useSearch from "../hooks/use-search";
import NoResultSearch from "../components/no-result-search";

export default function SearchPage() {
  const {handleSubmitChange,users,searchDebounce} = useSearch ()
  return (
    <Box>
      <SearchInput handleSubmitChange={handleSubmitChange}
      />
      {users?.length!=0? <ListFriendCard users={users}/>: <NoResultSearch name={searchDebounce}/>}
     

    </Box>
  );
}
