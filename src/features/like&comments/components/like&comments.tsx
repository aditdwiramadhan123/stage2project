import { BiLike, BiChat, BiSolidLike } from "react-icons/bi";
import { Box, Text, Button, Link } from "@chakra-ui/react";
import { NoneEffect, LinkEffect } from "../../../assets/hover-effets";
import likeAnimation from "../../../assets/animation";
import PostLike from "../hooks/use-post-like-hook";

// import { useForm } from "react-hook-form";

export default function LikeAndComment({
  itemId,
  isLikeParams,
  countLikes,
  countComments,
  cardFor,
}: {
  isLikeParams: boolean;
  countLikes: number;
  countComments?: number;
  itemId: number;
  cardFor:"comment"|"thread"
}) {
  const{isLike,handleClick,viewCountLike} = PostLike({countLikes,itemId,isLikeParams,cardFor})
  
  let commentLinkDir:string =""
  if (cardFor=="comment") {
    commentLinkDir = ""
  }

  else if (cardFor=="thread") {
    commentLinkDir = `/status/${itemId}`
  }


  return (
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
            type="submit"
            padding={0}
            m={0}
            bg={"none"}
            sx={NoneEffect}
            onClick={handleClick}
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
          {viewCountLike}
        </Text>
      </Button>

      <Link href={commentLinkDir}>
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
            {countComments}
          </Text>
        </Button>
      </Link>
    </Box>
  );
}
