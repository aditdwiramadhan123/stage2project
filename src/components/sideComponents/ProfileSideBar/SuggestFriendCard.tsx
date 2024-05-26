import React, { useState, useCallback } from "react";
import { Card, Avatar, Box, Text, Button, Flex } from "@chakra-ui/react";
import { ButtonEffect1 } from "../../../assets/HoverEffect";


function FriendCard() {
  let [isFollow, setIsFollow] = useState<boolean>(false);
  const changeStatus = () => {
    setIsFollow(!isFollow);
  };

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
          <Text fontWeight="bold" fontSize={12}>
            Via Fitriani
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
          {isFollow? 'following' : "follow"}
        </Button>
      </Flex>
    </Card>
  );
}

export default FriendCard;
