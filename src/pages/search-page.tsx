import React from "react";
import SearchInput from "../components/search-input";
import { Box } from "@chakra-ui/react";
import ListFriendCard from "../components/list-components/list-friend";
import NoResultSearch from "../components/no-result-search";

export default function SearchPage() {
  return (
    <Box>
      <SearchInput
      />
      {/* <ListFriendCard/> */}
      <NoResultSearch/>

    </Box>
  );
}
