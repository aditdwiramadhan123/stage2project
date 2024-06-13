import { Card, Avatar, Box, Text, Button, Flex, Link } from "@chakra-ui/react";
import { ButtonEffect1 } from "../../../assets/hover-effets";
import { LinkEffect } from "../../../assets/hover-effets";
import useFollow from "../hook/use-post-follow";
import useFollowFriend from "../../../hook/use-folllow-friend";

interface FriendCard {
  id:number,
  name: string;
  profilePictureUrl: null | string;
  username: string;
  isFollow: boolean;
}
function FriendCard({friend}:{friend:FriendCard}) {
    const {handleClick} = useFollow({followingId:friend.id})
    const {isFollow,changeStatus} = useFollowFriend(friend.isFollow)

    const buttonHandleClick = ()=>{
      handleClick();
      changeStatus()
    }

    return (
      <Card p={2} color="white" borderRadius={0} bg={"none"}>
        <Flex alignItems="center" justify="space-between">
          <Avatar
            name= {friend.name}
            src={friend?.profilePictureUrl || 'defaultImage.jpg'}
            size="sm"
            mr={2}
          />
          <Box flex="1">
            <Text fontWeight="bold" fontSize={12} sx={LinkEffect}>
              <Link href="profilePage">{friend.name}</Link>
            </Text>
            <Text fontSize={11} color="gray.300">
              @{friend.username}
            </Text>
          </Box>
          <Button
            colorScheme="gray"
            variant="outline"
            borderRadius="10px"
            fontSize="xs"
            height="24px"
            color={"white"}
            onClick={buttonHandleClick}
            sx={ButtonEffect1}
          >
            {isFollow?"following":"follow"}
          </Button>
        </Flex>
      </Card>
    );
  }
  export default FriendCard;
