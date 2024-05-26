// src/App.js atau src/App.tsx
import React from "react";
import { Grid } from "@chakra-ui/react";
import SideBar from "./components/sideComponents/sideBar/SideBar";
import ProfileCard from "./components/sideComponents/ProfileSideBar/ProfileCard";
import Home from "./pages/HomePage";
import CommentItems from "./components/DetilPostPageComponents/CommentItems"
import DetilStatusPage from "./pages/DetilStatusPage";
function App() {
  return (
    <Grid
      h="100vh"
      templateColumns="17vw 58vw 25vw"
      gap={0}
      bg={"#1e272e"}
      maxWidth={"100vw"}
    >
      {/* sidebar */}
      <SideBar></SideBar>

      {/* content */}
      <Home></Home>
      {/* <DetilStatusPage/> */}

      {/*Profile Sidebar*/}
      <ProfileCard />
    </Grid>
  
  );
}

export default App;
