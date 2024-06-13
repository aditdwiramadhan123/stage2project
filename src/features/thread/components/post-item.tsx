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
  Link,
} from "@chakra-ui/react";
import { LinkEffect } from "../../../assets/hover-effets";
import { ThreadType } from "../types/get-thread-types";
import LikeAndComment from "../../like&comments/components/like&comments";

function PostItem({ post }: { post: ThreadType }) {
  const route = `http://localhost:3000/api/v1/like/${post.id}`;
  return (
    <Card bg="#293238" borderRadius={10} marginY={1.5} paddingY={3}>
      <CardHeader paddingY={1}>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name={post.name} size={"sm"} />
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
              @{post.username} • {post.duration}
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody paddingX={68} paddingY={0}>
        <Text color="white" fontSize={12}>
          {post.caption}
        </Text>
        {post.imageUrl && (
          <Image
            objectFit="cover"
            src={post.imageUrl}
            alt="Chakra UI"
            width={200}
            height={200}
            borderRadius={10}
            marginTop={3}
          />
        )}
      </CardBody>
      <CardFooter paddingX={45} paddingY={1}>
        <LikeAndComment
          route={route}
          countComments={post.comments}
          countLikes={post.likes}
          isLikeParams={post.isLike}
          threadId={post.id}
        />
      </CardFooter>
    </Card>
  );
}

export default PostItem;
