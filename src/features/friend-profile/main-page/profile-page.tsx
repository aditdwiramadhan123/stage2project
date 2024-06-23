import { Box, Card } from "@chakra-ui/react";
import TabItemProfil from "../../../components/tab-item-profil";
import ListPostItem from "../../thread/components/list-post-item";
import ListMedia from "../list-media/list-media";
import { useTabItemContext } from "../../../hook/use-context-tab-item";
import useGetProfile from "../../profilCard/hook/use-get-profil";
import ProfileCard from "../../profilCard/components/profile-card";
import useGetThreadsByName from "../../thread/hooks/use-get-thread-by-name";
import useGetMediaByName from "../hook/use-get-media-by-name";
import { useParams } from "react-router-dom";



export default function UserProfilePage() {
  const {usernameParams} = useParams()
  const username = String(usernameParams)
  const {UserProfile} = useGetProfile(username)
  const {threadsByName} = useGetThreadsByName(username)
  const {media} = useGetMediaByName(username)
  console.log (`ini media by name '${username}'`, media)
  console.log (`ini thread by name '${username}'`, threadsByName)
  const { isMediaClick} =
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
        <ProfileCard user={UserProfile}/>
        <Box position="relative" bottom={2}>
          <TabItemProfil />
        </Box>
      </Box>

      <Card borderRadius={0} bg="none">
       {isMediaClick ? <ListMedia mediaDB={media}/> : <ListPostItem threadsDB={threadsByName}/>}
        
      </Card>
    </Box>
  );
}
