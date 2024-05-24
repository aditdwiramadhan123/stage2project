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

function MyProfileCard() {
  return (
    <Card
      bg="#3a4b5c"
      padding={4}
      borderRadius="md"
      marginY={3}
      height={"95%"}
      width={"95%"}
      position={"relative"}
    >
      <Text color="white" fontSize={15} fontWeight={500} mb={4}>
        My profile
      </Text>
      <Box width="100%" bg="pink" height={65} borderRadius={10} />
      <Flex alignItems="center" position="relative" mt={-8} mb={4} px={4}>
        <Avatar size="lg" border="solid #2C3A47 3px" mr={4}>
          <AvatarBadge boxSize="0.75em" bg="green.500" borderWidth={3}/>
        </Avatar>
        {/* Tombol "Edit Profile" dengan event handler onClick */}
        <Button
          colorScheme="gray"
          variant="outline"
          color="white"
          borderRadius={20}
          fontSize={10}
          height={6}
          position="absolute"
          top={"60%"}
          left={"70%"}
        >
          Edit Profile
        </Button>
      </Flex>
      <Box px={1}>
        <Text color="white" fontSize={21} fontWeight={500}>
          Adit Dwi Ramadhan 33
        </Text>
        <Text color="gray.400" fontSize={13} my={1} fontStyle="italic">
          @aditdwi_r
        </Text>
        <Text color="gray.200" fontSize={13} mb={2}>
          hidup cuman sekali brooo!!
        </Text>
        <Flex>
          <Text color="gray.200" fontSize={13} fontWeight={500} mr={1}>
            291
          </Text>
          <Text color="gray.500" fontSize={12} mr={3}>
            Following
          </Text>
          <Text color="gray.200" fontSize={12} fontWeight={500} mr={1}>
            291
          </Text>
          <Text color="gray.500" fontSize={12}>
            Followers
          </Text>
        </Flex>
      </Box>
    </Card>
  );
}

export default MyProfileCard;
