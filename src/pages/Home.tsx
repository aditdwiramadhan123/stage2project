import { Grid, GridItem, Box } from "@chakra-ui/react";
import SideBar from "../components/sideBar/SideBar";
import ProfileCard from "../components/MyProfileCard/ProfileCard";
import CardPost from "../components/CardPost/CardPost";

function Home() {
  return (
    <Grid
      h="100vh"
      templateColumns="25vw 50vw 25vw"
      gap={0}
      bg="#2C3A47"
      maxWidth={"100vw"}
    >
      <GridItem borderRight={"solid 1px white"} bg={"none"}
      >
        <SideBar></SideBar>
      </GridItem>
      <GridItem
        maxWidth={"100vw"}
        overflowY={"scroll"}
        css={{
          "&::-webkit-scrollbar": {
            width: "2px", // Lebar scrollbar
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "gray", // Warna thumb scrollbar
            borderRadius: "4px", // Sudut thumb scrollbar
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent", // Warna track scrollbar
          },
        }}
      >
        <CardPost></CardPost>
      </GridItem>

      <GridItem>
        <ProfileCard />
      </GridItem>
    </Grid>
  );
}

export default Home;
