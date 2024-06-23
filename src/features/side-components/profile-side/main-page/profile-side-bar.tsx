import ListFriendCard from "../../../friend-card/components/list-friend-common";
import SideProfilCard from "../../../profilCard/components/side-profile-card";
import { Grid, GridItem, Text, Card, Box } from "@chakra-ui/react";
import useGetSuggestFriends from "../hooks/use-get-suggestFriend";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";

export default function ProfileCard() {
  const MyProfile = useSelector((state: RootState) => state.auth.user);

  const { SuggestFriends } = useGetSuggestFriends();

  console.log("ini suggestionFriend dari profile side", SuggestFriends);

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
        <SideProfilCard profile={MyProfile} />
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
            <ListFriendCard users={SuggestFriends} />
          </Box>
        </Card>
      </GridItem>
    </Grid>
  );
}
