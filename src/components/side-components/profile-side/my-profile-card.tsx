import React from "react";
import {
  AvatarBadge,
  Avatar,
  Box,
  Button,
  Card,
  Text,
  Flex,
} from "@chakra-ui/react";
import { ButtonEffect1 } from "../../../assets/hover-effets";
import EditProfil from "../../edit-profil-modal";

function MyProfileCard({bgColor}:{bgColor?:string}) {
  return (
    <Card
      bg={bgColor}
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
      <Box width="100%" bg="pink" height={65} borderRadius={10} />

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
          name="Segun Adebayo"
          src="https://bit.ly/sage-adebayo"
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
          <EditProfil/>
        </Box>
        <Text color="white" fontSize={20} fontWeight={500}>
          Adit Dwi Ramadhan 33
        </Text>
        <Text color="gray.400" fontSize={12} my={1} fontStyle="italic">
          @aditdwi_r
        </Text>
        <Text color="gray.100" fontSize={12} mb={2}>
          hidup cuman sekali brooo!!
        </Text>
        <Flex>
          <Text color="gray.200" fontSize={12} fontWeight={500} mr={1}>
            291
          </Text>
          <Text color="gray.400" fontSize={12} mr={3}>
            Following
          </Text>
          <Text color="gray.200" fontSize={12} fontWeight={500} mr={1}>
            291
          </Text>
          <Text color="gray.400" fontSize={12}>
            Followers
          </Text>
        </Flex>
      </Box>
    </Card>
  );
}

export default MyProfileCard;
