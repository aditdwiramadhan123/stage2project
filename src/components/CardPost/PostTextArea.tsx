import React from 'react';
import { 
  Avatar,
  Textarea,
  Button,
  Flex,
  Card,
  CardHeader,
} from "@chakra-ui/react";
import { FaImage } from "react-icons/fa";

function PostTextArea() {
  return (
    <Card bg="none" borderRadius={0}  borderBottom={"solid 1px white"}>
      <CardHeader py={4}>
        <Flex alignItems="center">
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" size={"sm"} />
          <Textarea
          fontSize={15}
            placeholder="What's happening?"
            rows={2}
            resize="none"
            ml={3}
            color="white"
            bg="#374151"
            borderRadius="md"
            _placeholder={{ color: 'gray.400' }}
            _focus={{ borderColor: 'teal.400' }}
          />
          <Button
            leftIcon={<FaImage />}
            bg="#009432"
            color="white"
            height="auto"
            px={4}
            ml={3}
            borderRadius="md"
            _hover={{ bg: 'teal.500' }}
          >
            Post
          </Button>
        </Flex>
      </CardHeader>
    </Card>
  );
}

export default PostTextArea;
