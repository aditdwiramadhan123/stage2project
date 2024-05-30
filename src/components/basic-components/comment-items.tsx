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
  Button,
  Image,
} from "@chakra-ui/react";
import { BiLike, BiChat, BiSolidLike } from "react-icons/bi";
import { NoneEffect, LinkEffect } from "../../assets/hover-effets";
import likeAnimation from "../../assets/animation";
import { commentType } from "../../data/comment";
import UseLikePost from "../../hook/use-like";

function CommentItem({comment}: {comment:commentType}) {
  let {isLike, changeStatus} = UseLikePost(comment.isLike);
  return (
    <Card
      bg="none"
      borderRadius={0}
      marginY={0}
      paddingY={1}
      borderBottom={"solid 2px  rgba(0, 0, 0, 0.1)"}
    >
      <CardHeader paddingY={1}>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
            color="white"
            size={"sm"}
          />
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Heading
              fontSize={12}
              color="white"
              sx={LinkEffect}
              cursor={"pointer"}
            >
              {comment.name}
            </Heading>
            <Text
              fontSize={11}
              color="gray.400"
              position={"relative"}
              top={0.999}
              marginLeft={1}
            >
              | @{comment.username} • 4 {comment.time}
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody paddingX={68} paddingY={0}>
        <Text color="white" fontSize={12}>
          {comment.caption}
        </Text>
        <Image
          objectFit="cover"
          src={comment.linkImage}
          alt="Chakra UI"
          width={100}
          height={100}
          borderRadius={10}
          marginTop={3}
          display={comment.image ? "blok" : "none"}
        />
      </CardBody>
      <CardFooter paddingX={45} paddingY={1}>
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
              {comment.likesCount}
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
              {comment.commentCount}
            </Text>
          </Button>
        </Box>
      </CardFooter>
    </Card>
  );
}

export default CommentItem;
