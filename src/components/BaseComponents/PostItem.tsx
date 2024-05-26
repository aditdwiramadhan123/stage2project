import React, { useState } from "react";
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
  keyframes,
} from "@chakra-ui/react";
import { BiLike, BiChat, BiSolidLike } from "react-icons/bi";
import { transform } from "framer-motion";
import { NoneEffect, LinkEffect } from "../../assets/HoverEffect";
const likeAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

function PostItem() {
  let [isLike, setIsLike] = useState<boolean>(false);
  const changeStatus = () => {
    setIsLike(!isLike);
  };
  return (
    <Card bg="#293238" borderRadius={10} marginY={1.5} paddingY={1}>
      <CardHeader paddingY={1}>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            color="white"
            size={"sm"}
          />
          <Box>
            <Heading
              fontSize={12}
              color="white"
              sx={LinkEffect}
              cursor={"pointer"}
              marginBottom={0.7}
            >
              Segun Adebayo
            </Heading>
            <Text fontSize={10} color="gray.400">
              @username • 4 hour
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody paddingX={68} paddingY={0}>
        <Text color="white" fontSize={12}>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </Text>
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
          width={200}
          height={200}
          borderRadius={10}
          marginTop={3}
        />
      </CardBody>
      <CardFooter paddingX={49} paddingY={1}>
        <Box
          display={"flex"}
          width={200}
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            colorScheme="gray"
            variant="outline"
            borderRadius="10px"
            fontSize="xs"
            height="24px"
            color={"white"}
            width={"100%"}
            leftIcon={
              <Button
                padding={0}
                m={0}
                bg={"none"}
                sx={NoneEffect}
                onClick={changeStatus}
              >
                <Box
                  as={isLike ? BiSolidLike : BiLike}
                  animation={isLike ? `${likeAnimation} 0.3s ease` : "none"}
                  size={17}
                  sx={LinkEffect}
                  color={"white"}
                />
              </Button>
            }
            padding={4}
            maxWidth={"48%"}
            border={"none"}
            sx={NoneEffect}
          >
            <Text
              color="gray.400"
              fontSize={11}
              my={1}
              fontStyle="italic"
              sx={LinkEffect}
              position={"relative"}
              top={0.5}
              right={2}
            >
              3000
            </Text>
          </Button>

          <Button
            colorScheme="gray"
            variant="outline"
            borderRadius="10px"
            fontSize="xs"
            height="24px"
            color={"white"}
            width={"100%"}
            leftIcon={
              <Button padding={0} m={0} bg={"none"} sx={NoneEffect}>
                <Box as={BiChat} size={17} sx={LinkEffect} color={"white"} />
              </Button>
            }
            padding={4}
            maxWidth={"48%"}
            border={"none"}
            sx={NoneEffect}
          >
            <Text
              color="gray.400"
              fontSize={11}
              my={1}
              fontStyle="italic"
              sx={LinkEffect}
              position={"relative"}
              top={0.5}
              right={2}
            >
              3000
            </Text>
          </Button>
        </Box>
      </CardFooter>
    </Card>
  );
}

export default PostItem;
