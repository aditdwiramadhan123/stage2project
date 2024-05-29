import React, { useState, useCallback } from "react";
import { Card, Avatar, Box, Text, Button, Flex, Link } from "@chakra-ui/react";
import { ButtonEffect1 } from "../../../assets/hover-effets";
import useFollowFriend from "../../../hook/use-folllow-friend";
import { LinkEffect } from "../../../assets/hover-effets";

function FriendCard() {
  const { isFollow, changeStatus } = useFollowFriend();
  return (
    <Card p={2} color="white" borderRadius={0} bg={"none"}>
      <Flex alignItems="center" justify="space-between">
        <Avatar
          name="Via Fitriani"
          src="https://bit.ly/broken-link"
          size="sm"
          mr={2}
        />
        <Box flex="1">
          <Text fontWeight="bold" fontSize={12} sx={LinkEffect}>
            <Link href="profilePage">Via Fitriani</Link>
          </Text>
          <Text fontSize={11} color="gray.300">
            @ViaFitriani
          </Text>
        </Box>
        <Button
          colorScheme="gray"
          variant="outline"
          borderRadius="10px"
          fontSize="xs"
          height="24px"
          color={"white"}
          onClick={changeStatus}
          sx={ButtonEffect1}
        >
          {isFollow ? "following" : "follow"}
        </Button>
      </Flex>
    </Card>
  );
}

export default FriendCard;
