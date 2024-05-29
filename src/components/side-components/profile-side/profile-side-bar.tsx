import React from "react";
import ListFriendCard from "./list-suggestion-friends";
import MyProfileCard from "./my-profile-card";
import { Grid, GridItem, Text, Card, Box } from "@chakra-ui/react";

export default function ProfileCard() {
  return (
    <Grid
      width="100%"
      height="100vh"
      templateRows="1fr 1fr"
      placeItems="center"
    >
      <GridItem
        width="95%"
        height={"100%"}
        placeContent={"center"}
        overflow={"hidden"}
      >
        <MyProfileCard bgColor="brand.tertiary" />
      </GridItem>
      <GridItem
        borderRadius="lg"
        width="95%"
        height="100%"
        placeContent={"start"}
        placeItems={"center"}
      >
        <Card bg="brand.tertiary" padding={2}>
          <Text
            color="white"
            fontSize={14}
            fontWeight={500}
            marginY={2}
            paddingX={"5%"}
          >
            Suggest for you
          </Text>
          <Box
            height={260}
            overflowY="auto"
            css={{
              "&::-webkit-scrollbar": {
                width: "0px",
                backgroundColor: "#4a6272",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#718096",
                borderRadius: "4px",
              },
            }}
          >
            <ListFriendCard />
          </Box>
        </Card>
      </GridItem>
    </Grid>
  );
}
