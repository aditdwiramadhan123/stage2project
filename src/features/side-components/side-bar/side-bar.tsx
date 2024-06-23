import { FaHome } from "react-icons/fa";
import { Box, Card, useToast } from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import BarMenu from "./menu-bar";

function SideBar() {
  const toast = useToast()
  const logout = () =>{
    localStorage.removeItem("token");
    toast({
      title: "Logout successfully",
      description:
        "Enjoy exploring and contributing to the community nextime!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  } 
  return (
    <Card
      height="100vh"
      bg={"none"}
      padding={5}
      paddingLeft={3}
      position={"relative"}
      borderRadius={0}
      maxWidth={"100%"}
    >
      <Text fontSize={50} color={"#009432"} fontWeight={500} marginBottom={5}>
        circle
      </Text>
      <BarMenu menu="Home" icon={FaHome} link="/" />
      <BarMenu menu="Search" icon={FaSearch} link="/search" />
      <BarMenu menu="Follow" icon={FaHeart} link="/listFollow" />
      <BarMenu menu="Profile" icon={CgProfile} link="/profilePage" />
      <Button
        backgroundColor="#009432"
        width={"90%"}
        borderRadius={20}
        marginY={10}
        color={"white"}
      >
        Create post
      </Button>
      <Box position={"absolute"} bottom={10}>
        <Button onClick={logout} p={0} m={0} bg={"none"}>
          <BarMenu menu="Logout" icon={FaDoorOpen} link="/login" />
        </Button>
      </Box>
    </Card>
  );
}

export default SideBar;
