import React from 'react';
import { Card, Avatar, Box, Text, Button, Flex } from '@chakra-ui/react';

function FriendCard() {
  return (
    <Card p={2} color="white" borderRadius={0} bg={"none"}>
      <Flex alignItems="center" justify="space-between">
        <Avatar name="Via Fitriani" src="https://bit.ly/broken-link" size="sm" mr={2} />
        <Box flex="1">
          <Text fontWeight="bold" fontSize={12}>Via Fitriani</Text>
          <Text fontSize={10} color="gray.300">@ViaFitriani</Text>
        </Box>
        <Button
          colorScheme="gray"
          variant="outline"
          borderRadius="10px"
          fontSize="xs"
          height="24px"
          color={"white"}
        >
          Follow
        </Button>
      </Flex>
    </Card>
  );
}

export default FriendCard;
