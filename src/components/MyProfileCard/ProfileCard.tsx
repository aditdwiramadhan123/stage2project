import React from "react";
import ListFriendCard from "./ListSuggestFriendCard";
import MyProfileCard from "./MyProfileCard";
import { Grid } from "@chakra-ui/react";

export default function ProfileCard() {
  return (
    <Grid
      h="100vh"
      width="100%"
      templateRows="repeat(2, 1fr)"
      placeItems="center"
    >
      <MyProfileCard />
      <ListFriendCard />
    </Grid>
  );
}
