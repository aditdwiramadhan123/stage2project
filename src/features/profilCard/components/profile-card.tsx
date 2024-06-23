import {
  AvatarBadge,
  Avatar,
  Box,
  Card,
  Text,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import EditProfil from "../../side-components/profile-side/component/edit-profil-modal";
import { UserType } from "../../type";
import useGetFollower from "../../follow/hooks/use-get-follower";
import useGetFollowing from "../../follow/hooks/use-get-following";

function ProfileCard({ user }: { user: UserType | undefined }) {
  const { follower } = useGetFollower();
  const { following } = useGetFollowing();
  if (!user) {
    return (
      <Box
        bg={"brand.primary"}
        paddingX={"5%"}
        py={2}
        width={"100%"}
        height={305}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        ></Spinner>
      </Box>
    );
  }
  return (
    <Card
      bg={"brand.primary"}
      paddingX={"5%"}
      py={2}
      borderRadius="md"
      margin={0}
      width={"100%"}
      height={305}
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
    >
      <Text color="white" fontSize={15} fontWeight={500} mb={2}>
        My profile
      </Text>
      <Box
        width="100%"
        bg="green"
        backgroundImage={
          "https://th.bing.com/th/id/OIP.gzFEpj8g-fgD0CE73VG9lQHaEo?rs=1&pid=ImgDetMain"
        }
        height={65}
        borderRadius={10}
      />

      <Box
        position={"absolute"}
        top={77}
        width={"90%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        bg={"none"}
        marginX={"auto"}
      >
        <Avatar
          size="lg"
          border="solid #2C3A47 3px"
          name={user.name}
          src={user.profilePictureUrl || "default.jpg"}
          position={"relative"}
          left={3}
          p={0}
          m={0}
        >
          <AvatarBadge boxSize="0.75em" bg="green.500" borderWidth={3} />
        </Avatar>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"end"}
          marginBottom={2}
        >
          <EditProfil />
        </Box>
        <Text color="white" fontSize={20} fontWeight={500}>
          {user.name}
        </Text>
        <Text color="gray.400" fontSize={12} my={1} fontStyle="italic">
          @{user.username}
        </Text>
        <Text color="gray.100" fontSize={12} mb={2}>
          {user.quote}
        </Text>
        <Flex>
          <Text color="gray.200" fontSize={12} fontWeight={500} mr={1}>
            {following?.length}
          </Text>
          <Text color="gray.400" fontSize={12} mr={3}>
            Following
          </Text>
          <Text color="gray.200" fontSize={12} fontWeight={500} mr={1}>
            {follower?.length}
          </Text>
          <Text color="gray.400" fontSize={12}>
            Followers
          </Text>
        </Flex>
      </Box>
    </Card>
  );
}

export default ProfileCard;
