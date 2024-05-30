import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { NoneEffect } from "../assets/hover-effets";
import { useTabItemContext } from "../hook/use-context-followers";

export function TabItem({
  children,
  f_use,
  isClick,
}: {
  children: string;
  f_use: React.MouseEventHandler<HTMLButtonElement>;
  isClick: boolean;
}) {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"100%"}>
      <Button
        bg={"brand.primary"}
        color={"white"}
        borderRadius={0}
        onClick={f_use}
        fontSize={12}
        width={"100%"}
        sx={NoneEffect}
        display={"block"}
      >
        {children}
      </Button>
      <Box
        width={"100%"}
        height={1}
        margin={0}
        p={0}
        bg={isClick ? "green" : "none"}
        borderRadius={20}
      ></Box>
    </Box>
  );
}

function TabItemFollow() {
  const { isFollowerClick, isFollowingClick, clickFollower, clickFollowing } =
    useTabItemContext();
  return (
    <Box width={"100%"} display={"flex"}>
      <TabItem isClick={isFollowerClick} children="follower" f_use={clickFollower} />
      <TabItem isClick={isFollowingClick} children="following" f_use={clickFollowing} />
    </Box>
  );
}

export default TabItemFollow;
