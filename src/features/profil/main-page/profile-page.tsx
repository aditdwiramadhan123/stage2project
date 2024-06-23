import React from "react";
import { Box, Card } from "@chakra-ui/react";
import TabItemProfil from "../../../components/tab-item-profil";
import ListPostItem from "../../thread/components/list-post-item";
import ListMedia from "../list-media/list-media";
import { useTabItemContext } from "../../../hook/use-context-tab-item";
import ProfileCard from "../../profilCard/components/profile-card";
import useGetThreadsByName from "../../thread/hooks/use-get-thread-by-name";
import useGetMediaByName from "../hook/use-get-media-by-name";
import { RootState } from "../../../redux/store/store";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const MyProfile = useSelector((state: RootState) => state.auth.user);

  let username: string = "";
  if (MyProfile) {
    username = MyProfile.username;
  }
  const { threadsByName } = useGetThreadsByName(username);
  const { media } = useGetMediaByName(username);
  const { isMediaClick } = useTabItemContext();
  return (
    <Box
      width={"100%"}
      p={0}
      bg={"none"}
      overflowX={"hidden"}
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
        <ProfileCard user={MyProfile} />
        <Box position="relative" bottom={2}>
          <TabItemProfil />
        </Box>
      </Box>

      <Card borderRadius={0} bg="none">
        {isMediaClick ? (
          <ListMedia mediaDB={media} />
        ) : (
          <ListPostItem threadsDB={threadsByName} />
        )}
      </Card>
    </Box>
  );
}
