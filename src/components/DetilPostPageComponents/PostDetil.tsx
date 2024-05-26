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
import { NoneEffect, LinkEffect } from "../../assets/HoverEffect";

const likeAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

function PostDetil() {
  let [isLike, setIsLike] = useState<boolean>(false);
  const changeStatus = () => {
    setIsLike(!isLike);
  };
  return (
    <Card bg="#293238" borderRadius={5} marginY={0.5} paddingTop={1}>
      <CardHeader paddingBottom={0}>
        <Flex flex="1" gap="2" alignItems="center" flexWrap="wrap">
          <Avatar
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            color="white"
            size={"xs"}
          />
          <Box>
            <Heading
              fontSize={7}
              color="white"
              sx={LinkEffect}
              cursor={"pointer"}
            >
              Segun Adebayo
            </Heading>
            <Text fontSize={6} color="gray.400">
              @username • 4 hour
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody paddingX={34} paddingY={1.5}>
        <Text color="white" fontSize={7}>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </Text>
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
          width={100}
          height={100}
          borderRadius={5}
          marginTop={1.5}
        />
      </CardBody>
      <CardFooter paddingX={24.5} paddingTop={0}>
        <Box
          display={"flex"}
          width={100}
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            colorScheme="gray"
            variant="outline"
            borderRadius="5px"
            fontSize="xx-small"
            height="12px"
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
                  size={10}
                  sx={LinkEffect}
                  color={"white"}
                />
              </Button>
            }
            padding={2}
            maxWidth={"24%"}
            border={"none"}
            sx={NoneEffect}
          >
            <Text
              color="gray.400"
              fontSize={6.5}
              my={0.5}
              fontStyle="italic"
              sx={LinkEffect}
              position={"relative"}
              top={0.5}
              right={1}
            >
              3000
            </Text>
          </Button>

          <Button
            colorScheme="gray"
            variant="outline"
            borderRadius="5px"
            fontSize="xx-small"
            height="12px"
            color={"white"}
            width={"100%"}
            leftIcon={
              <Button padding={0} m={0} bg={"none"} sx={NoneEffect}>
                <Box as={BiChat} size={10} sx={LinkEffect} color={"white"} />
              </Button>
            }
            padding={2}
            maxWidth={"24%"}
            border={"none"}
            sx={NoneEffect}
          >
            <Text
              color="gray.400"
              fontSize={6.5}
              my={0.5}
              fontStyle="italic"
              sx={LinkEffect}
              position={"relative"}
              top={0.5}
              right={1}
            >
              3000
            </Text>
          </Button>
        </Box>
      </CardFooter>
    </Card>
  );
}

export default PostDetil;
