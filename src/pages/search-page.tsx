import React from "react";
import SearchInput from "../components/search-input";
import { Box } from "@chakra-ui/react";
import ListFriendCard from "../components/side-components/profile-side/list-suggestion-friends";
import ResultSearch from "../components/result-search";

export default function SearchPage() {
  return (
    <Box>
      <SearchInput
      />
      {/* <ListFriendCard/> */}
      <ResultSearch/>

    </Box>
  );
}
