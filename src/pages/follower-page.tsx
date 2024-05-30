import React from "react";
import MyProfileCard from "../components/basic-components/profile-card";
import { Box, Card } from "@chakra-ui/react";
import TabItemFollow from "../components/tab-item-follow";
import { useTabItemContext } from "../hook/use-context-followers";
import ListFollower from "../components/list-components/list-follower";
import ListFollowing from "../components/list-components/list-following";
import listProfile from "../data/profile";

export default function ProfilePage() {
  const { isFollowerClick } = useTabItemContext();

  return (
    <Box width={"100%"} p={0} bg={"none"} height={"100vh"}>
      <Box bg={"brand.primary"}>
        <MyProfileCard profile={listProfile[0]} bgColor="brand.primary" />
        <Box position="relative" bottom={2}>
          <TabItemFollow />
        </Box>
      </Box>

      <Card
        borderRadius={0}
        bg="none"
        height={260}
        overflowY="auto"
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
        <Box as={isFollowerClick ? ListFollower : ListFollowing} />

        {/* Tambahkan PostItem lagi sesuai kebutuhan */}
      </Card>
    </Box>
  );
}
