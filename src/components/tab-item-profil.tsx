import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { NoneEffect } from "../assets/hover-effets";
import { useTabItemContext } from "../hook/use-context-tab-item";

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

function TabItemProfil() {
  const { isMediaClick, isPostClick, clickMedia, clickPost } =
    useTabItemContext();
  return (
    <Box width={"100%"} display={"flex"}>
      <TabItem isClick={isPostClick} children="All post" f_use={clickPost} />
      <TabItem isClick={isMediaClick} children="Media" f_use={clickMedia} />
    </Box>
  );
}

export default TabItemProfil;
