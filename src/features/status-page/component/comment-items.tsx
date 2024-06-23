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
import { CommentType } from "../../thread/types/get-comment-types";
import LikeAndComment from "../../like&comments/components/like&comments";
import { LinkEffect } from "../../../assets/hover-effets";
import HamburgerMenu from "./humberger-menu-comment";
import { useParams } from "react-router-dom";
import { RootState } from "../../../redux/store/store";
import { useSelector } from "react-redux";

function CommentItem({ comment }: { comment: CommentType }) {
  const username = useSelector((state: RootState) => state.auth.user.username);

  const { threadId } = useParams();
  const threadIdNumber = Number(threadId);
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
          <Box
            display={username == comment.username ? "block" : "none"}
            position={"absolute"}
            top={0}
            right={0}
          >
            <HamburgerMenu commentId={comment.id} threadId={threadIdNumber} />
          </Box>

          <Avatar
            name={comment.name}
            src={comment.profilePictureUrl||""}
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
              <Link href={`/profile/${comment.username}`}>{comment.name}</Link>
            </Heading>
            <Text
              fontSize={11}
              color="gray.400"
              position={"relative"}
              top={0.999}
              marginLeft={1}
            >
              | @{comment.username} • {comment.duration}
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody paddingX={68} paddingY={0}>
        <Text color="white" fontSize={12}>
          {comment.caption}
        </Text>
        {comment.imageUrl && (
          <Image
            objectFit="cover"
            src={comment.imageUrl}
            alt="Chakra UI"
            width={100}
            height={100}
            borderRadius={10}
            marginTop={3}
          />
        )}
      </CardBody>
      <CardFooter paddingX={45} paddingY={1}>
        <LikeAndComment
          cardFor="comment"
          countLikes={comment.likes}
          isLikeParams={comment.isLike}
          itemId={comment.id}
        />
      </CardFooter>
    </Card>
  );
}

export default CommentItem;
