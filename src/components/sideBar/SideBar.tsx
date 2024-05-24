import { FaHome } from "react-icons/fa";
import { Box, Card } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import BarMenu from "./MenuBar";

function SideBar() {
  return (
    <Card
      height="100vh"
      bg={"none"}
      padding={5}
      position={"relative"}
      borderRadius={0}
      maxWidth={"100%"}
    >
      <Text fontSize={50} color={"#009432"} fontWeight={500} marginBottom={5}>
        circle
      </Text>
      <BarMenu menu="Home" icon={FaHome} />
      <BarMenu menu="Search" icon={FaSearch} />
      <BarMenu menu="Follow" icon={FaHeart} />
      <BarMenu menu="Profile" icon={CgProfile} />
      <Button
        backgroundColor="#009432"
        width={"90%"}
        borderRadius={20}
        marginY={10}
      >
        Create post
      </Button>
      <Box position={"absolute"} bottom={0}>
        <BarMenu menu="Logout" icon={FaDoorOpen} />
      </Box>
    </Card>
  );
}

export default SideBar;
