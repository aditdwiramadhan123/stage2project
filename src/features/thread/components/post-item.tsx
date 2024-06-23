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
import { RootState } from "../../../redux/store/store";
import { useSelector } from "react-redux";
import HamburgerMenu from "./humberger-menu-thread.ts";

function PostItem({ post }: { post: ThreadType }) {
  const username = useSelector((state: RootState) => state.auth.user.username);

  return (
    <Card bg="#293238" borderRadius={10} marginY={1.5} paddingY={3}>
      <CardHeader paddingY={1}>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Box
            display={username == post.username ? "block" : "none"}
            position={"absolute"}
            top={0}
            right={3}
          >
            <HamburgerMenu threadId={post.id} />
          </Box>
          <Avatar name={post.name} size={"sm"} />
          <Box>
            <Heading
              fontSize={12}
              color="white"
              sx={LinkEffect}
              cursor={"pointer"}
              marginBottom={0.7}
            >
              <Link href={`/profile/${post.username}`}>{post.name}</Link>
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
          cardFor="thread"
          countComments={post.comments}
          countLikes={post.likes}
          isLikeParams={post.isLike}
          itemId={post.id}
        />
      </CardFooter>
    </Card>
  );
}

export default PostItem;
