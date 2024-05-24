import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Avatar,
  Heading,
  Text,
  Image,
  Button,
} from '@chakra-ui/react';
import { BiLike, BiChat } from 'react-icons/bi';

function PostItem() {
  return (
    <Card bg="none" borderRadius={0}  borderBottom={"solid 1px white"} margin={0}>
      <CardHeader paddingBottom={0}>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" color="white" size={"sm"}/>
          <Box>
            <Heading fontSize={14} color="white">Segun Adebayo</Heading>
            <Text fontSize={12} color="gray.400">@username • 4 hour</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody paddingX={68} paddingBottom={2}>
        <Text color="white" marginBottom={4} fontSize={14}>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </Text>
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
          width={300}
          height={300}
          borderRadius={10}
        />
      </CardBody>
      <CardFooter paddingTop={0} paddingX={68}>
        <Flex justifyContent="space-between" alignItems="center" width={300}>
          <Button
            variant="ghost"
            leftIcon={<BiLike color='white' size={20} />}
            color="white"
            padding={0}
            fontSize="sm"
            _hover={{ color: 'teal.400' }}
          >
            3000 Likes
          </Button>
          <Button
            variant="ghost"
            leftIcon={<BiChat color='white' size={20} />}
            color="white"
            fontSize="sm"
            _hover={{ color: 'teal.400' }}
          >
            5000 Comments
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default PostItem;
