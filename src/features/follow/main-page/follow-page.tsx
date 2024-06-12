import { Box, Card } from "@chakra-ui/react";
import TabItemFollow from "../../../components/tab-item-follow";
import { useTabItemContext } from "../../../hook/use-context-followers";
import useGetProfile from "../hooks/use-get-profil";
import ProfileCard from "../components/profile-card2";
import ListFriendCard from "../../friend-card/components/list-friend-common";
import useGetFollower from "../hooks/use-get-follower";
import useGetFollowing from "../hooks/use-get-following";


export default function ProfilePage() {
  const { UserProfile } = useGetProfile();
  const { isFollowerClick } = useTabItemContext();
  const {follower} = useGetFollower()
  const {following} = useGetFollowing()


  return (
    <Box width={"100%"} p={0} bg={"none"} height={"100vh"}>
      <Box bg={"brand.primary"}>
     <ProfileCard user={UserProfile}/>
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
        {isFollowerClick ? <ListFriendCard users={follower}/> : <ListFriendCard users={following}/>}

        {/* Tambahkan PostItem lagi sesuai kebutuhan */}
      </Card>
    </Box>
  );
}
