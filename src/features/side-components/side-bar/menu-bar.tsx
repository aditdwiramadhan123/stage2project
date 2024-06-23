import React from "react";
import { Box } from "@chakra-ui/react";
import {Text,Link} from "@chakra-ui/react";



const BarMenu = ({ menu, icon,link } : {menu:string, icon: React.ElementType, link:string}) => {
  return (
    <Link  marginY={1} href={link}>
      <Box
        display={"flex"}
        height={31}
        padding={5}
        justifyContent={"flex-start"}
        alignItems={"center"}
       
        borderBottom={"solid 2px  rgba(0, 0, 0, 0.1)"}
        bg={"none"}
        marginY={0}
        sx={{
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Adjust the value to get the desired lightness
            transition: "background-color 0.3s ease", // Smooth transition effect
          },
        }}
      >
        <Box as={icon} size={14} style={{ marginRight: "10px", color: "white" }} />
        {/* Me-render komponen 'icon' sebagai sebuah elemen JSX */}
        <Text fontSize={14} style={{ color: "white" }}>{menu}</Text>
      </Box>
    </Link>
  );
};

export default BarMenu
