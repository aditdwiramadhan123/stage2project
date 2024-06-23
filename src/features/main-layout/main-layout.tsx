// src/App.js atau src/App.tsx
import { Grid } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import SideBar from "../side-components/side-bar/side-bar";
import ProfileCard from "../side-components/profile-side/main-page/profile-side-bar";

const MainLayout = () => {
  return (
    <Grid
      h="100vh"
      templateColumns="17vw 58vw 25vw"
      gap={0}
      bg={"#1e272e"}
      maxWidth={"100vw"}
    >
      {/* sidebar */}
      <SideBar />

      {/* content */}
      <Outlet />

      {/* Profile Sidebar */}
      <ProfileCard />
    </Grid>
  );
};

export default MainLayout
