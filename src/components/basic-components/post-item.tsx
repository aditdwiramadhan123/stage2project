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
  Link,
} from "@chakra-ui/react";
import { BiLike, BiChat, BiSolidLike } from "react-icons/bi";
import { NoneEffect, LinkEffect } from "../../assets/hover-effets";
import UseLikePost from "../../hook/use-like";
import likeAnimation from "../../assets/animation";
import { postItemType } from "../../data/post";

function PostItem({post}:{post:postItemType}) {
  const { isLike, changeStatus } = UseLikePost(post.isLike);
  return (
    <Card bg="#293238" borderRadius={10} marginY={1.5} paddingY={1}>
      <CardHeader paddingY={1}>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar
            name={post.name}
            src={post.linkImageAva}
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
              <Link href="/profilePage">{post.name}</Link>
            </Heading>
            <Text fontSize={10} color="gray.400">
              @{post.username} • {post.time}
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody paddingX={68} paddingY={0}>
        <Text color="white" fontSize={12}>
          {post.caption}
        </Text>
        <Image
          objectFit="cover"
          display={post.image ? "blok" : "none"}
          src= {post.linkImage}
          alt="Chakra UI"
          width={200}
          height={200}
          borderRadius={10}
          marginTop={3}
        />
      </CardBody>
      <CardFooter paddingX={45} paddingY={2}>
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
              {post.likesCount}
            </Text>
          </Button>

          <Link href="status">
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
                {post.commentCount}
              </Text>
            </Button>
          </Link>
        </Box>
      </CardFooter>
    </Card>
  );
}

export default PostItem;
