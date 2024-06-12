import React from "react";
import MyProfileCard from "../features/follow/components/profile-card";
import { Box, Card } from "@chakra-ui/react";
import TabItemProfil from "../components/tab-item-profil";
import ListPostItem from "../features/home/components/list-post-item";
import ListMedia from "../components/list-components/list-media";
import { useTabItemContext } from "../hook/use-context-tab-item";
import listProfile from "../data/profile";

export default function ProfilePage() {
  const { isMediaClick, isPostClick, clickMedia, clickPost } =
    useTabItemContext();
  return (
    <Box
      width={"100%"}
      p={0}
      bg={"none"}
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
      height={"100vh"}
    >
      <Box bg={"brand.primary"}>
        <MyProfileCard profile={listProfile[2]} bgColor="brand.primary" />
        <Box position="relative" bottom={2}>
          <TabItemProfil />
        </Box>
      </Box>

      <Card borderRadius={0} bg="none">
        <Box as={isMediaClick ? ListMedia : ListPostItem} /> 
        
        {/* Tambahkan PostItem lagi sesuai kebutuhan */}
      </Card>
    </Box>
  );
}
